import { styled, Link, Box, Typography } from '@mui/material'
import { ButtonLink } from './buttons'

interface CardProps {
  stockNumber: number
  manufacturerName: string
  modelName: string
  color: string
  mileage: {
    number: number
    unit: string
  }
  fuelType: string
  pictureUrl: string
}

export const Card = ({
  stockNumber,
  manufacturerName,
  modelName,
  color,
  mileage,
  fuelType,
  pictureUrl,
}: CardProps) => {
  const title = `${manufacturerName} ${modelName}`

  return (
    <CardBox>
      <ImgLink component="button" title={title}>
        <CardPic />
      </ImgLink>

      <CardInfo>
        <Title variant="h3">{title}</Title>

        <Typography mb={0.5}>
          Stock: # {stockNumber} - {mileage.number}{' '}
          <Uppercase>{mileage.unit}</Uppercase> - {fuelType} - {color}
        </Typography>

        <ButtonLink component="button" title="View Details" fontSize={14}>
          View Details
        </ButtonLink>
      </CardInfo>
    </CardBox>
  )
}

export const CardSkeleton = () => (
  <CardBox>
    <CardPic />

    <CardInfo>
      <GrayBox width={264} height={28} mb={0.5} />
      <GrayBox width={264} height={16} mb={1} />
      <GrayBox width={76} height={16} />
    </CardInfo>
  </CardBox>
)

const CardBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  padding: theme.spacing(1.5),
  marginTop: theme.spacing(1.5),
}))

const GrayBox = styled(Box)(({ theme }) => ({
  background: theme.palette.divider,
}))

const CardPic = styled(GrayBox)(({ theme }) => ({
  flexShring: 0,
  width: theme.spacing(13),
  height: theme.spacing(10),
}))

const CardInfo = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  marginLeft: theme.spacing(3),
}))

const Title = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: theme.spacing(0.5),
}))

const Uppercase = styled('span')(() => ({
  textTransform: 'uppercase',
}))

const ImgLink = styled(Link)({
  display: 'inline-flex',
  textDecoration: 'none',
}) as typeof Link
