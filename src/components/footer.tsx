import { Box, styled } from '@mui/material'

export const Footer = () => (
  <FooterBox as="footer">&copy; AUTO1 Group 2022</FooterBox>
)

const FooterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: `1px solid ${theme.palette.divider}`,
  minHeight: theme.spacing(10),
  textAlign: 'center',
}))
