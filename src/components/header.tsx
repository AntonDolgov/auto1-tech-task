import { useCallback } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'
import { AppBar, Box, Button, Link, Toolbar } from '@mui/material'
import { styled } from '@mui/material/styles'
import { AppContainer } from '../lib'
import LogoImg from '../img/logo.png'

export const Header = () => {
  const navigate = useNavigate()
  const match = useMatch('/')

  const handleLogoClick = useCallback(() => {
    if (!match) {
      navigate('/')
    }
  }, [match, navigate])

  return (
    <HeaderAppBar position="sticky">
      <AppContainer>
        <HeaderToolbar>
          <Box display="flex" width={188}>
            {match ? (
              <Image src={LogoImg} alt="Logo" />
            ) : (
              <ImgLink
                component="button"
                onClick={handleLogoClick}
                title="Go to the main page"
              >
                <Image src={LogoImg} alt="Logo" />
              </ImgLink>
            )}
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
  alignItems: 'center',
  flexDirection: 'row',
  background: theme.palette.background.default,
  borderBottom: `1px solid ${theme.palette.divider}`,
  boxShadow: 'none',
  minHeight: theme.spacing(10),
}))

const HeaderToolbar = styled(Toolbar)({
  '@media all': {
    padding: 0,
    minHeight: 0,
  },
})

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

const Image = styled('img')({
  maxWidth: '100%',
})

const ImgLink = styled(Link)({
  display: 'inline-flex',
  textDecoration: 'none',
}) as typeof Link
