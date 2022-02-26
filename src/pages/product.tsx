import { Box, Button, Typography, styled } from '@mui/material'
import { AppContainer, Uppercase } from '../lib'

const stockNumber = 12345
const mileage = {
  number: 123345345,
  unit: 'km',
}
const fuelType = 'diesel'
const color = 'red'

export const Product = () => {
  return (
    <>
      <Picture />
      <AppContainer>
        <Box display="flex" py={3}>
          <Box>
            <Typography variant="h1" mb={2}>
              Chrysler Viper
            </Typography>
            <Typography variant="subtitle1" mb={2}>
              Stock: # {stockNumber} - {mileage.number}{' '}
              <Uppercase>{mileage.unit}</Uppercase> - {fuelType} - {color}
            </Typography>

            <Typography>
              This car is currently available and can be delivered as soon as
              tomorrow morning. Please be aware that delivery times shown in
              this page are not definitive and may change due to bad weather
              conditions.
            </Typography>
          </Box>

          <Aside>
            <Typography>
              If you like this car, click the button and save it in your
              collection of favourite items
            </Typography>

            <ButtonSave variant="contained" title="Save">
              Save
            </ButtonSave>
          </Aside>
        </Box>
      </AppContainer>
    </>
  )
}

const Picture = styled(Box)(({ theme }) => ({
  background: theme.palette.secondary.main,
  height: 396,
}))

const Aside = styled('aside')(({ theme }) => ({
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
