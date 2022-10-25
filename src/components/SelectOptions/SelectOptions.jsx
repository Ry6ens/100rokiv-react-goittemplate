import Select from 'react-select';
import { useDispatch, useStore } from 'react-redux';

import s from './SelectOptions.module.scss';

import { productActions } from 'redux/products/products-slice';

const optionsDelivery = [
  { value: 'закуски', label: 'закуски' },
  { value: 'салати', label: 'салати' },
  { value: 'перші страви', label: 'перші страви' },
  { value: 'основні страви', label: 'основні страви' },
  { value: 'солодке', label: 'солодке' },
];

const optionsGiftVoucher = [
  { value: '1000', label: '1000 грн' },
  { value: '1500', label: '1500 грн' },
  { value: '2000', label: '2000 грн' },
  { value: '2500', label: '2500 грн' },
  { value: '3000', label: '3000 грн' },
];

export default function SelectOptions({ options, onChange }) {
  const dispatch = useDispatch();
  const store = useStore();

  const selectValue = (e) => {
    dispatch(productActions.addOption(e.value));
    onChange(e.value)
  }

  if (options === 'optionsDelivery') {
    return (
      <Select
        defaultValue={{ label: store.getState().products.selectOptions }}
        options={optionsDelivery}
        className={s.options}
        onChange={(e)=> selectValue(e)}
        isSearchable={false}
      />
    );
  }

  if (options === 'optionsGiftVoucher') {
    return (
      <Select
        placeholder="Оберіть суму ..."
        options={optionsGiftVoucher}
        className={s.options}
        isClearable
        isSearchable={false}
        onChange={onChange}
      />
    );
  }
}
