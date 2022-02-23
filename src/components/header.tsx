import { AppBar, Box, Button, Toolbar } from '@mui/material'
import { styled } from '@mui/material/styles'
import { AppContainer } from '../lib'
import LogoImg from '../img/logo.png'

export const Header = () => {
  return (
    <HeaderAppBar position="sticky">
      <AppContainer>
        <HeaderToolbar>
          <Box display="flex" width={200}>
            <Image src={LogoImg} />
          </Box>

          <HeaderNavBox as="nav">
            <HeaderButton>Purchase</HeaderButton>

            <HeaderButton>My order</HeaderButton>

            <HeaderButton>Sell</HeaderButton>
          </HeaderNavBox>
        </HeaderToolbar>
      </AppContainer>
    </HeaderAppBar>
  )
}

const HeaderAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.default,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: 'none',
  padding: `${theme.spacing(1.5)} 0`,
}))

const HeaderToolbar = styled(Toolbar)`
  @media all {
    padding: 0;
  }
`

const HeaderNavBox = styled(Box)(({ theme }) => ({
  marginLeft: 'auto',
  marginRight: theme.spacing(-1),
}))

const HeaderButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: 'none',
  fontSize: 16,
  fontWeight: 'normal',
  minWidth: 0,
  '& + &': {
    marginLeft: theme.spacing(1),
  },
}))

const Image = styled('img')`
  max-width: 100%;
`
