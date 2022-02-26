import { useCallback, useMemo, useState } from 'react'
import { styled, Button, Typography } from '@mui/material'
import { Card, CardSkeleton, Select } from '../components'
import { Box } from '@mui/system'

const DEFAULT_VALUE = 'all'

const colors = ['red', 'blue']

const manufacturers = [
  {
    name: 'Audi',
  },
  {
    name: 'BMW',
  },
]

export const HomePage = () => {
  const [color, setColor] = useState(DEFAULT_VALUE)
  const [manufactorer, setManufactorer] = useState(DEFAULT_VALUE)
  const getColorLabel = useCallback(
    (name: string) =>
      name === DEFAULT_VALUE
        ? 'All car colors'
        : name.replace(/^\w/, (match) => match.toUpperCase()),
    [],
  )
  const getManufacturerLabel = useCallback(
    (name: string) => (name === DEFAULT_VALUE ? 'All manufacturers' : name),
    [],
  )

  const colorsSelectList = useMemo(() => [DEFAULT_VALUE, ...colors], [])
  const manufactorersSelectList = useMemo(
    () => [DEFAULT_VALUE].concat(manufacturers.map(({ name }) => name)),
    [],
  )

  return (
    <Box display="flex" paddingTop={3.5}>
      <Aside>
        <Select
          value={color}
          label="Color"
          onChange={(event) => setColor(event.target.value)}
        >
          {colorsSelectList.map((item) => (
            <option key={item} value={item}>
              {getColorLabel(item)}
            </option>
          ))}
        </Select>

        <Select
          value={manufactorer}
          label="Manufactorer"
          onChange={(event) => setManufactorer(event.target.value)}
        >
          {manufactorersSelectList.map((item) => (
            <option key={item} value={item}>
              {getManufacturerLabel(item)}
            </option>
          ))}
        </Select>

        <ButtonFilter variant="contained">Filter</ButtonFilter>
      </Aside>

      <Main>
        <Title variant="h1">Available cars</Title>

        <SubTitle variant="subtitle1">Showing 10 of 100 results</SubTitle>

        <Card
          manufacturerName="Chrysler"
          modelName="Viper"
          stockNumber={12345}
          color="red"
          mileage={{ number: 1232342, unit: 'km' }}
          fuelType="diesel"
          pictureUrl="1"
        />
        {/* <CardSkeleton /> */}
      </Main>
    </Box>
  )
}

const Aside = styled('aside')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexShring: 0,
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
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
  fontSize: theme.typography.pxToRem(18),
  marginBottom: theme.spacing(0.5),
}))

const SubTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}))
