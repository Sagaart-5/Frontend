import { Box, FormControlLabel, Checkbox } from '@mui/material'
import { checkboxDefault } from 'src/ui/Checkbox/CheckboxStyles'
import styles from 'src/ui/Checkbox/CheckboxItem.module.scss'

interface CheckboxItemProps {
  title: string
  data: string[]
  value: Record<string, boolean> | string
  setValue: (type: string) => void
}

export default function CheckboxItem({
  title,
  data,
  value,
  setValue,
}: CheckboxItemProps) {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    setValue(name)
  }

  return (
    <div>
      <p className={styles.title}>{title}</p>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '10px',
          marginTop: '8px',
        }}
      >
        {data.map((checkbox, index) => (
          <FormControlLabel
            key={index}
            sx={checkboxDefault}
            control={
              <Checkbox
                checked={value[checkbox]}
                onChange={handleCheckboxChange}
                name={checkbox}
              />
            }
            label={checkbox}
          />
        ))}
      </Box>
    </div>
  )
}
