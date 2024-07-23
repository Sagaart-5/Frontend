import { Box, FormControlLabel, Checkbox } from '@mui/material'
import { checkboxDefault } from 'src/ui/Checkbox/CheckboxStyles'
import Up from 'src/assets/images/icons/hide.svg'
import styles from 'src/ui/Checkbox/CheckboxItem.module.scss'
import { useState } from 'react'
import cn from 'classnames/bind'
const cx = cn.bind(styles)

interface CheckboxItemProps {
  title: string
  data: string[]
  value: string[]
  setValue: (type: string[]) => void
}

export default function CheckboxItem({
  title,
  data,
  value,
  setValue,
}: CheckboxItemProps) {
  const [isOpen, setIsOpen] = useState(true)
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    let updatedValues = [...value]
    if (checked) {
      updatedValues = [...updatedValues, name]
    } else {
      updatedValues = updatedValues.filter((item: string) => item !== name)
    }
    setValue(updatedValues)
  }

  function toggleCheckbox() {
    setIsOpen(prev => !prev)
  }

  return (
    <div>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <div
          className={cx('hideCheckbox', { hideCheckboxRotate: isOpen })}
          onClick={toggleCheckbox}
        >
          <Up />
        </div>
      </div>
      {isOpen ? (
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
      ) : (
        ''
      )}
    </div>
  )
}
