import { styled, Link } from '@mui/material'

export const ButtonLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontSize: 14,
  borderBottom: '1px solid transparent',
  transition: 'all 200ms ease',
  '&:hover': {
    borderBottomColor: theme.palette.primary.main,
  },
})) as typeof Link
