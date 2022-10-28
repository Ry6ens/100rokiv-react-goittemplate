import { Controller } from 'react-hook-form';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

const CssFormControl = styled(FormControl)({
  '& .MuiFormLabel-root': {
    fontFamily: "'ZionTrainOTLight', Sans-serif",
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '2',
    letterSpacing: '0.24em',
    textTransform: 'initial',
    zIndex: '1',
    left: "-5px",
  },
  '& .MuiSvgIcon-root': {
    color: '#43291b',
  },
  '& label.Mui-focused': {
    fontFamily: "'ZionTrainOTLight', Sans-serif",
    fontWeight: '500',
    color: '#43291b',
    left: '-5px',
  },
  '& .MuiInput-underline': {
    fontFamily: "'ZionTrainOTLight', Sans-serif",
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '2',
    letterSpacing: '0.24em',
    textAlign: "left",
  },
  '& .MuiInput-underline:before': {
    borderBottom: '1px solid hsl(0deg, 0%, 80%)',
    bottom: '-3px',
  },
  '& .MuiInput-underline:after': {
    borderBottom: '2px solid #43291b',
    bottom: '-3px',
  },
  '& .MuiInput-input': {
    paddingLeft: '10px',
    fontFamily: "'ZionTrainOTLight', Sans-serif",
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '2',
    letterSpacing: '0.24em',
    textTransform: 'initial',
    boxShadow:
      'inset 0 0 0 1px rgba(253, 251, 248, 1), inset 0 0 0 100px rgba(253, 251, 248, 1)',
  },
});

export default function FormInputSelect({ name, control, required, label }) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{
          required,
        }}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState,
        }) => (
          <CssFormControl>
            <InputLabel id="select-standard-label">{label}</InputLabel>
            <Select
              labelId="select-standard-label"
              variant="standard"
              value={value}
              onChange={onChange}
              label={label}
            >
              <MenuItem value={'1000'}>1000 грн</MenuItem>
              <MenuItem value={'1500'}>1500 грн</MenuItem>
              <MenuItem value={'2000'}>2000 грн</MenuItem>
              <MenuItem value={'2500'}>2500 грн</MenuItem>
              <MenuItem value={'3000'}>3000 грн</MenuItem>
            </Select>
          </CssFormControl>
        )}
      />
    </>
  );
}
