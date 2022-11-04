import Select from 'react-select';
import { useEffect } from 'react';

import s from './SelectOptions.module.scss';

const optionsMenu = [
  { value: 'закуски', label: 'закуски' },
  { value: 'салати', label: 'салати' },
  { value: 'перші страви', label: 'перші страви' },
  { value: 'основні страви', label: 'основні страви' },
  { value: 'солодке', label: 'солодке' },
];

export default function SelectOptions({ options, onChange }) {

  useEffect(()=> {const selectValue = e => {
    onChange(e.value);
  }}, [])

  const selectValue = e => {
    onChange(e.value);
  };

  return (
    <Select
      defaultValue={{ label: optionsMenu[0].value }}
      options={optionsMenu}
      className={s.options}
      onChange={e => selectValue(e)}
      isSearchable={false}
    />
  );
}
