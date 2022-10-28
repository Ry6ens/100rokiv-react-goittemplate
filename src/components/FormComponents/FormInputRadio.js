import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import { Controller } from 'react-hook-form';
import { nanoid } from '@reduxjs/toolkit';

const options = [
  {
    label: 'Самовивіз з ресторану м. Київ',
    value: "0",
  },
  {
    label: 'Доставка по м. Київ 125грн',
    value: "125",
  },
];

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark'
        ? 'rgba(57,75,89,.5)'
        : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#fff',
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#43291b,#43291b 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#fff',
  },
});

function BpRadio(props) {
  return (
    <Radio
      size="small"
      sx={{
        '&:hover': {
          bgcolor: 'transparent',
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const StyledFormControlLabel = styled(props => (
  <FormControlLabel key={nanoid()} {...props} />
))(() => ({
  '.MuiFormControlLabel-label': {
    fontFamily: "'ZionTrainOT', Sans-serif",
    fontSize: '12px',
    lineHeight: '2',
    letterSpacing: '0.24em',
    textAlign: 'left',
    textTransform: 'initial',
  },
}));

export default function FormInputRadio({ name, control, label }) {
  const generateRadioOptions = () => {
    return options.map((props, { label, value }) => (
      <StyledFormControlLabel
        key={nanoid()}
        value={value}
        label={label}
        defaultValue="0"
        control={<BpRadio />}
        {...props}
      />
    ));
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        rules={{
          required: "Обов'язкове поле",
        }}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState,
        }) => (
          <RadioGroup value={value} onChange={onChange}>
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
}
