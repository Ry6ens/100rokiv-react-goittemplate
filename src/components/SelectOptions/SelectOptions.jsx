import Select from 'react-select';
import {  useSelector } from 'react-redux';

import s from './SelectOptions.module.scss';

import { getSelectedCategory } from 'redux/products/products-selectors';

const optionsMenu = [
  { value: 'starters', label: 'закуски' },
  { value: 'salads', label: 'салати' },
  { value: 'first-courses', label: 'перші страви' },
  { value: 'main-courses', label: 'основні страви' },
  { value: 'sweet', label: 'солодке' },
];

export default function SelectOptions({ onChange }) {
  const selectedCategory = useSelector(getSelectedCategory)

  const selectValue = e => {
    onChange(e.value);
  };

  const defaultValue = () => {
    const result = optionsMenu.find(el => el.value === selectedCategory)
    return result.label
  }

  return (
    <Select
      defaultValue={{ label: defaultValue() }}
      options={optionsMenu}
      className={s.options}
      onChange={e => selectValue(e)}
      isSearchable={false}
    />
  );
}
