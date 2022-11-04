import Select from 'react-select';

import s from './SelectOptions.module.scss';

const optionsMenu = [
  { value: 'закуски', label: 'закуски' },
  { value: 'салати', label: 'салати' },
  { value: 'перші страви', label: 'перші страви' },
  { value: 'основні страви', label: 'основні страви' },
  { value: 'солодке', label: 'солодке' },
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
