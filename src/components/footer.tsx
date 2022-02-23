import { Box, styled } from '@mui/material'

export const Footer = () => <FooterBox>&copy; AUTO1 Group 2022</FooterBox>

const FooterBox = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(4),
  textAlign: 'center',
}))
