import { styled, Box, Link } from '@mui/material'
import { ButtonLink } from './buttons'

const MIN_PAGE = 1

interface PaginationProps {
  onChange: (page: number) => void
  page: number
  totalPageCount: number
}

export const Pagination = (props: PaginationProps) => {
  const { page, onChange, totalPageCount } = props

  return (
    <Box display="flex" justifyContent="center" py={3}>
      <PaginationLink
        component="button"
        disabled={page <= MIN_PAGE}
        onClick={() => onChange(MIN_PAGE)}
      >
        First
      </PaginationLink>
      <PaginationLink
        component="button"
        disabled={page <= MIN_PAGE}
        onClick={() => onChange(page - 1)}
      >
        Previous
      </PaginationLink>

      <Current>
        Page {page} of {totalPageCount}
      </Current>

      <PaginationLink
        component="button"
        disabled={page >= totalPageCount}
        onClick={() => onChange(page + 1)}
      >
        Next
      </PaginationLink>
      <PaginationLink
        component="button"
        disabled={page >= totalPageCount}
        onClick={() => onChange(totalPageCount)}
      >
        Last
      </PaginationLink>
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
