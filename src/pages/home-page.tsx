import { useCallback, useMemo, useState } from 'react'
import { styled, Box, Button } from '@mui/material'
import { Select } from '../components'

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
    <>
      <Aside display="flex" flexDirection="column">
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
    </>
  )
}

const Aside = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  marginTop: theme.spacing(3.5),
  padding: theme.spacing(3),
  width: '25%',
}))

const ButtonFilter = styled(Button)(({ theme }) => ({
  alignSelf: 'flex-end',
  marginTop: theme.spacing(3),
}))
