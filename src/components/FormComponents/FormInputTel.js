import { Controller } from 'react-hook-form';
import { MuiTelInput } from 'mui-tel-input';
import { styled } from '@mui/material/styles';

const MuiTelInputStyled = styled(MuiTelInput)({
  '& .MuiTelInput-TextField': {
    fontFamily: "'ZionTrainOTLight', Sans-serif",
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '2',
    letterSpacing: '0.24em',
    textTransform: 'initial',
    zIndex: '1',
  },
  '& .MuiInput-underline:before': {
    borderBottom: '1px solid hsl(0deg, 0%, 80%)',
    bottom: '-3px',
  },
  '& .MuiInput-underline:after': {
    borderBottom: '2px solid #43291b',
    bottom: '-3px',
  },
  '& .Mui-error:after': {
    borderBottom: "2px solid #d32f2f",
  },
  '& .MuiInput-input': {
    height: "42px",
    fontFamily: "'ZionTrainOTLight', Sans-serif",
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '2',
    letterSpacing: '0.24em',
    textTransform: 'initial',
    boxShadow:
      'inset 0 0 0 1px rgba(253, 251, 248, 1), inset 0 0 0 100px rgba(253, 251, 248, 1)',
  },
  '& .MuiFormHelperText-root': {
    paddingLeft: '10px',
    fontFamily: "'ZionTrainOTLight', Sans-serif",
    fontSize: '10px',
    fontWeight: '300',
    lineHeight: '2',
    letterSpacing: '0.24em',
    textTransform: 'initial',
  },
})

export default function FormInputTel({ name, control }) {

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: "Обов'язкове поле",
        maxLength: 16,
      }}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <MuiTelInputStyled
          size="small"
          variant="standard"
          forceCallingCode
          defaultCountry="UA"
          langOfCountryName="uk"
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
    />
  );
}
