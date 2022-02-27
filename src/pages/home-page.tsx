import { useCallback, useEffect, useMemo, useState } from 'react'
import { styled, Box, Button, Typography } from '@mui/material'
import { Card, CardSkeleton, Pagination, Select } from '../components'
import { AppContainer } from '../lib'
import {
  getCarsList,
  getColors,
  getManufacturers,
  GetCarsListParams,
} from '../api'
import type {
  CarsResponse,
  ColorsResponse,
  ManufacturersResponse,
  RequestState,
} from '../types'

const DEFAULT_FETCH_STATE = {
  isLoading: true,
  data: null,
  error: null,
} as const
const DEFAULT_SELECT_VALUE = ''
const DEFAULT_PAGE = 1

export const HomePage = () => {
  const [colorsList, setColorsList] =
    useState<RequestState<ColorsResponse>>(DEFAULT_FETCH_STATE)
  const [manufacturersList, setManufacturersList] =
    useState<RequestState<ManufacturersResponse>>(DEFAULT_FETCH_STATE)
  const [cars, setCars] =
    useState<RequestState<CarsResponse>>(DEFAULT_FETCH_STATE)

  const [page, setPage] = useState(DEFAULT_PAGE)
  const [color, setColor] = useState(DEFAULT_SELECT_VALUE)
  const [manufacturer, setManufacturer] = useState(DEFAULT_SELECT_VALUE)

  const getColorLabel = useCallback(
    (name: string) =>
      name === DEFAULT_SELECT_VALUE
        ? 'All car colors'
        : name.replace(/^\w/, (match) => match.toUpperCase()),
    [],
  )

  const getManufacturerLabel = useCallback(
    (name: string) =>
      name === DEFAULT_SELECT_VALUE ? 'All manufacturers' : name,
    [],
  )

  const fetchData = useCallback((params: GetCarsListParams) => {
    getCarsList(params)
      .then((data) =>
        setCars({
          data,
          isLoading: false,
          error: null,
        }),
      )
      .catch((error) =>
        setCars({
          data: null,
          isLoading: false,
          error,
        }),
      )
  }, [])

  const handlePaginationChange = useCallback(
    (newPage: number) => {
      setPage(newPage)
      fetchData({
        color,
        manufacturer,
        page: newPage,
      })
    },
    [color, fetchData, manufacturer],
  )

  const colorsSelectList = useMemo(() => {
    if (!colorsList.data) return [DEFAULT_SELECT_VALUE]

    return [DEFAULT_SELECT_VALUE, ...colorsList.data.colors]
  }, [colorsList.data])

  const manufacturersSelectList = useMemo(() => {
    if (!manufacturersList.data) return [DEFAULT_SELECT_VALUE]

    return [DEFAULT_SELECT_VALUE].concat(
      manufacturersList.data.manufacturers.map(({ name }) => name),
    )
  }, [manufacturersList.data])

  useEffect(() => {
    getColors()
      .then((data) =>
        setColorsList({
          data,
          isLoading: false,
          error: null,
        }),
      )
      .catch((error) =>
        setColorsList({
          data: null,
          isLoading: false,
          error,
        }),
      )
  }, [])

  useEffect(() => {
    getManufacturers()
      .then((data) =>
        setManufacturersList({
          data,
          isLoading: false,
          error: null,
        }),
      )
      .catch((error) =>
        setManufacturersList({
          data: null,
          isLoading: false,
          error,
        }),
      )
  }, [])

  useEffect(() => fetchData({ page: DEFAULT_PAGE }), [fetchData])

  return (
    <AppContainer>
      <Box display="flex" paddingTop={3.5}>
        <Aside>
          <Select
            disabled={!colorsList.data}
            label="Color"
            onChange={(event) => setColor(event.target.value)}
            value={color}
          >
            {colorsSelectList.map((item) => (
              <option key={item} value={item}>
                {getColorLabel(item)}
              </option>
            ))}
          </Select>

          <Select
            disabled={!manufacturersList.data}
            label="Manufacturer"
            onChange={(event) => setManufacturer(event.target.value)}
            value={manufacturer}
          >
            {manufacturersSelectList.map((item) => (
              <option key={item} value={item}>
                {getManufacturerLabel(item)}
              </option>
            ))}
          </Select>

          <ButtonFilter
            variant="contained"
            title="Filter"
            onClick={() => fetchData({ color, manufacturer, page })}
          >
            Filter
          </ButtonFilter>
        </Aside>

        <Main>
          <Title variant="h1">Available cars</Title>

          {cars.isLoading && <CardSkeleton />}
          {cars.error && (
            <Typography color="error">{cars.error.message}</Typography>
          )}

          {cars.data && (
            <SubTitle variant="subtitle1">
              Showing {cars.data.cars.length} of {cars.data.totalCarsCount}{' '}
              results
            </SubTitle>
          )}

          {cars.data &&
            cars.data.cars.map((car) => (
              <Card
                key={car.stockNumber}
                manufacturerName={car.manufacturerName}
                modelName={car.modelName}
                stockNumber={car.stockNumber}
                color={car.color}
                mileage={car.mileage}
                fuelType={car.fuelType}
                pictureUrl={car.pictureUrl}
              />
            ))}

          {cars.data && (
            <Pagination
              page={page}
              onChange={handlePaginationChange}
              totalPageCount={cars.data.totalPageCount}
            />
          )}
        </Main>
      </Box>
    </AppContainer>
  )
}

const Aside = styled('aside')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexShring: 0,
  alignSelf: 'flex-start',
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
  width: '25%',
}))

const ButtonFilter = styled(Button)(({ theme }) => ({
  alignSelf: 'flex-end',
  marginTop: theme.spacing(3),
}))

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(0, 3),
}))

const Title = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  marginBottom: theme.spacing(0.5),
}))

const SubTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}))
