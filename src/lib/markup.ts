import { styled, Container, Link } from '@mui/material'

export const AppContainer = styled(Container)`
  min-width: 1024px;
`

export const Main = styled('main')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const Uppercase = styled('span')(() => ({
  textTransform: 'uppercase',
}))

export const ImgLink = styled(Link)({
  display: 'inline-flex',
  textDecoration: 'none',
}) as typeof Link
