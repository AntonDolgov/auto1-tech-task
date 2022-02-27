import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, Typography, styled } from '@mui/material'
import { AppContainer, Uppercase } from '../lib'
import { getCarInfo } from '../api'
import type { CarInfo, CarInfoResponse, RequestState } from '../types'

const DEFAULT_FETCH_STATE = {
  isLoading: true,
  data: null,
  error: null,
} as const

const PRELOADER = 'Loading...'
const LS_FAVORITES_KEY = 'favorites'

export const Product = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [carInfo, setCarInfo] =
    useState<RequestState<CarInfoResponse>>(DEFAULT_FETCH_STATE)

  useEffect(() => {
    if (!id) return navigate('/404')

    getCarInfo(Number(id))
      .then((data) =>
        setCarInfo({
          data,
          isLoading: false,
          error: null,
        }),
      )
      .catch((error) => {
        if (/404/.test(error.message)) {
          return navigate('/404')
        }

        setCarInfo({
          data: null,
          isLoading: false,
          error,
        })
      })
  }, [id, navigate])

  return (
    <>
      <PictureBox>
        {carInfo.isLoading && PRELOADER}
        {carInfo.data && <Picture src={carInfo.data.car.pictureUrl} />}
      </PictureBox>

      <AppContainer>
        {carInfo.isLoading && <Box py={2}>{PRELOADER}</Box>}

        {carInfo.error && (
          <Box py={2}>
            {<Typography color="error">{carInfo.error.message}</Typography>}
          </Box>
        )}

        {carInfo.data && <ProductInfo carInfo={carInfo.data.car} />}
      </AppContainer>
    </>
  )
}

interface ProductInfoProps {
  carInfo: CarInfo
}

const ProductInfo = ({ carInfo }: ProductInfoProps) => {
  const { manufacturerName, modelName, stockNumber, mileage, fuelType, color } =
    carInfo
  const [isFavorite, setIsFavorite] = useFavorites(carInfo)

  return (
    <Box display="flex" py={3}>
      <Box>
        <Typography variant="h1" mb={2}>
          {manufacturerName} {modelName}
        </Typography>
        <Typography variant="subtitle1" mb={2}>
          Stock: # {stockNumber} - {mileage.number}{' '}
          <Uppercase>{mileage.unit}</Uppercase> - {fuelType} - {color}
        </Typography>

        <Typography>
          This car is currently available and can be delivered as soon as
          tomorrow morning. Please be aware that delivery times shown in this
          page are not definitive and may change due to bad weather conditions.
        </Typography>
      </Box>

      <Aside>
        <Typography mb={0.5}>
          {isFavorite
            ? 'The car is in your collection'
            : 'If you like this car, click the button and save it in your collection of favourite items'}
        </Typography>

        <ButtonSave variant="contained" title="Save" onClick={setIsFavorite}>
          {isFavorite ? 'Remove' : 'Save'}
        </ButtonSave>
      </Aside>
    </Box>
  )
}

const useFavorites = (carInfo: CarInfo) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const getFavoritesFromStorage = useCallback(() => {
    return JSON.parse(
      localStorage.getItem(LS_FAVORITES_KEY) ?? '[]',
    ) as CarInfo[]
  }, [])

  const checkIsFavorite = useCallback(() => {
    const favorites = getFavoritesFromStorage()

    return favorites.some(
      ({ stockNumber }) => stockNumber === carInfo.stockNumber,
    )
  }, [carInfo.stockNumber, getFavoritesFromStorage])

  const handleToggle = useCallback(() => {
    const favorites = getFavoritesFromStorage()

    const updatedFavoritesList = isFavorite
      ? favorites.filter(
          ({ stockNumber }) => stockNumber !== carInfo.stockNumber,
        )
      : [...favorites, carInfo]

    localStorage.setItem(LS_FAVORITES_KEY, JSON.stringify(updatedFavoritesList))
    setIsFavorite(!isFavorite)
  }, [carInfo, getFavoritesFromStorage, isFavorite])

  useEffect(() => {
    setIsFavorite(checkIsFavorite())
  }, [checkIsFavorite])

  return [isFavorite, handleToggle] as const
}

const PictureBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.secondary.main,
  height: 396,
}))

const Picture = styled('img')(({ theme }) => ({
  flexShring: 0,
  height: '100%',
}))

const Aside = styled('aside')(({ theme }) => ({
  alignSelf: 'flex-start',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  padding: theme.spacing(3, 3.5),
  width: 352,
}))

const ButtonSave = styled(Button)(() => ({
  marginLeft: 'auto',
}))
