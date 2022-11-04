import Select from 'react-select';

import s from './SelectOptions.module.scss';

const optionsMenu = [
  { value: 'starters', label: 'закуски' },
  { value: 'salads', label: 'салати' },
  { value: 'first-courses', label: 'перші страви' },
  { value: 'main-courses', label: 'основні страви' },
  { value: 'sweet', label: 'солодке' },
];

export default function SelectOptions({ onChange }) {
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
