import { useMemo } from 'react'
import {
  styled,
  InputLabel,
  NativeSelect,
  NativeSelectProps,
  Typography,
  Theme,
} from '@mui/material'

const selectStyles = (theme: Theme) => ({
  border: `1px solid ${theme.palette.divider}`,
  width: '100%',
  '&::before, &::after': {
    content: 'none',
  },
  '.MuiNativeSelect-select': {
    padding: `${theme.spacing(0.5, 1)}`,
  },
})

type SelectProps = NativeSelectProps & {
  label?: string
}

export function Select(props: SelectProps) {
  const { label, ...selectProps } = props

  const select = useMemo(
    () => <NativeSelect {...selectProps} sx={selectStyles} />,
    [selectProps],
  )

  return label ? (
    <Label>
      <LabelText>{label}</LabelText> {select}
    </Label>
  ) : (
    select
  )
}

const Label = styled(InputLabel)(({ theme }) => ({
  '& + &': {
    marginTop: theme.spacing(1),
  },
}))

const LabelText = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  fontSize: theme.typography.caption.fontSize,
  marginBottom: theme.spacing(0.5),
}))
