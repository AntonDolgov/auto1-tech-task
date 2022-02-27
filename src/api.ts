import type {
  CarInfoResponse,
  CarsResponse,
  ColorsResponse,
  ManufacturersResponse,
} from './types'

const HARDCODED_URL_BASE = 'https://auto1-mock-server.herokuapp.com'
const REG_EXP = /(?<=(:\/\/.*))\/\//g

const request = (enpoint: string) =>
  fetch(`${HARDCODED_URL_BASE}/${enpoint}`.replace(REG_EXP, '/'))
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(`${res.status} – ${res.statusText}`)
      }

      return res
    })
    .catch((error) => {
      console.error(error)
      throw new Error(error)
    })

const getRequestParams = (params: { [key: string]: unknown }) =>
  Object.entries(params)
    .filter(([_key, value]) => Boolean(value))
    .map(([key, value]) => `${key}=${value}`)
    .join('&')

export type GetCarsListParams = {
  color?: string
  manufacturer?: string
  page: number
}

export const getCarsList = async (params: GetCarsListParams) => {
  const res = await request(`/api/cars?sort=asc&${getRequestParams(params)}`)

  return (await res.json()) as CarsResponse
}

export const getCarInfo = async (stock: number) => {
  const res = await request(`/api/cars/${stock}`)

  return (await res.json()) as CarInfoResponse
}

export const getColors = async () => {
  const res = await request('/api/colors')

  return (await res.json()) as ColorsResponse
}

export const getManufacturers = async () => {
  const res = await request('/api/manufacturers')

  return (await res.json()) as ManufacturersResponse
}
