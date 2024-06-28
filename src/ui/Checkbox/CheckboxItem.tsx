import { Box, FormControlLabel, Checkbox } from '@mui/material'
import { checkboxDefault } from 'src/ui/Checkbox/CheckboxStyles'
import styles from 'src/ui/Checkbox/CheckboxItem.module.scss'

interface CheckboxItemProps {
  title: string
  data: {
    label: string
    name: string
  }[]
}

export default function CheckboxItem({ title, data }: CheckboxItemProps) {
  // const [isInputValid, setIsInputValid] = useState(false);

  // const handleChange = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  //   setValue: (value: string) => void
  // ) => {
  //   const value = event.target.value;
  //   setValue(value);
  //   setIsInputValid(false);
  // };

  // const handleShowJobInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setIsWorkingChecked(e.target.checked);
  // };

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
            control={<Checkbox />}
            label={checkbox.label}
            name={checkbox.name}
          />
        ))}
      </Box>
    </div>
  )
}
