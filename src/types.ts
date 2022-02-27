export type RequestState<T> =
  | {
      isLoading: true
      data: null
      error: null
    }
  | {
      isLoading: false
      data: T
      error: null
    }
  | {
      isLoading: false
      data: null
      error: Error
    }

export interface CarInfo {
  stockNumber: number
  manufacturerName: string
  modelName: string
  color: string
  mileage: {
    number: number
    unit: string
  }
  fuelType: string
  pictureUrl: string
}

export interface CarsResponse {
  cars: CarInfo[]
  totalCarsCount: number
  totalPageCount: number
}

export interface CarInfoResponse {
  car: CarInfo
}

export interface ColorsResponse {
  colors: string[]
}

export interface ManufacturersResponse {
  manufacturers: {
    name: string
    models: { name: string }[]
  }[]
}
