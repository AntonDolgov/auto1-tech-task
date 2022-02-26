import { styled, Box, Link } from '@mui/material'
import { ButtonLink } from './buttons'

export const Pagination = () => {
  return (
    <Box display="flex" justifyContent="center" py={3}>
      <PaginationLink component="button">First</PaginationLink>
      <PaginationLink component="button">Previous</PaginationLink>

      <Current>Page 2 of 10</Current>

      <PaginationLink component="button">Next</PaginationLink>
      <PaginationLink component="button">Last</PaginationLink>
    </Box>
  )
}

const Current = styled('span')(({ theme }) => ({
  margin: theme.spacing(0, 1.5),
  fontSize: 14,
}))

const PaginationLink = styled(ButtonLink)(({ theme }) => ({
  fontSize: 14,
  margin: theme.spacing(0, 1.5),
})) as typeof Link
