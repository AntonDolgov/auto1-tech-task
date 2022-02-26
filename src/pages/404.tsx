import { styled, Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import LogoImg from '../img/logo.png'
import { ButtonLink } from '../components'

export const Page404 = () => {
  const navigate = useNavigate()

  return (
    <Box margin="auto" textAlign="center">
      <Image src={LogoImg} alt="Logo" />

      <Typography variant="h1" mb={1.5}>
        404 - Not Found
      </Typography>

      <Typography variant="subtitle1" mb={1}>
        Sorry, this page you are looking for does not exist.
      </Typography>

      <Typography variant="subtitle1">
        You can always go back to the{' '}
        <ButtonLink component="button" onClick={() => navigate('/')}>
          homepage
        </ButtonLink>
      </Typography>
    </Box>
  )
}

const Image = styled('img')(({ theme }) => ({
  width: 188,
  maxWidth: '100%',
  marginBottom: theme.spacing(2),
}))
