import Select from 'react-select';
import { useDispatch, useStore } from 'react-redux';

import s from './SelectOptions.module.scss';

import { productActions } from 'redux/products/products-slice';

const optionsMenu = [
  { value: 'закуски', label: 'закуски' },
  { value: 'салати', label: 'салати' },
  { value: 'перші страви', label: 'перші страви' },
  { value: 'основні страви', label: 'основні страви' },
  { value: 'солодке', label: 'солодке' },
];

export default function SelectOptions({ options, onChange }) {
  const dispatch = useDispatch();
  const store = useStore();

  const selectValue = e => {
    dispatch(productActions.addOption(e.value));
    onChange(e.value);
  };

  if (options === 'optionsMenu') {
    return (
      <Select
        defaultValue={{ label: store.getState().products.selectOptions }}
        options={optionsMenu}
        className={s.options}
        onChange={e => selectValue(e)}
        isSearchable={false}
      />
    );
  }
}
