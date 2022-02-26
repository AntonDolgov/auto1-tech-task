import { styled, Link } from '@mui/material'

export const ButtonLink = styled(Link)(({ theme }) => ({
  borderBottom: '1px solid transparent',
  textDecoration: 'none',
  transition: 'all 200ms ease',
  '&:hover': {
    borderBottomColor: theme.palette.primary.main,
  },
})) as typeof Link
