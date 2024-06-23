import { Button } from '@mui/material'

interface SubmitButtonProps {
  title?: string
  height?: string
  margin?: string
  color?: string
  padding?: string
  borderColor?: string
  onClick?: () => void
  disabled?: boolean
  backgroundColor?: string
  style?: React.CSSProperties
}

export default function SubmitButton({
  title,
  height,
  margin,
  color,
  padding,
  borderColor,
  onClick,
  disabled,
  backgroundColor,
}: SubmitButtonProps) {
  return (
    <Button
      variant='contained'
      sx={{
        backgroundColor: backgroundColor ? backgroundColor : '#6750A4',
        color: color ? color : '#fff',
        border:
          '3px solid linear-gradient(rgba(143, 143, 143, 0.7), rgba(41, 41, 41, 0.8), rgba(41, 41, 41, 1))',
        borderColor: borderColor ? borderColor : '#6750A4',
        '&:hover': {
          backgroundColor: 'white',
        },
        '&:focus': {
          outline: 'none',
        },
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
        height: height ? height : '35px',
        fontSize: '14px',
        fontWeight: '400',
        fontHeight: '18.2px',
        textTransform: 'none',
        margin: margin ? margin : '0',
        padding: padding ? padding : '9.5px 44px',
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </Button>
  )
}
