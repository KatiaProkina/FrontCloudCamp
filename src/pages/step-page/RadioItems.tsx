import { useListState, randomId } from '@mantine/hooks';
import { Radio, Text } from '@mantine/core';
import './step-page.css';

const initialValuesRadio = [
  { label: '1', checked: false, key: randomId() },
  { label: '2', checked: false, key: randomId() },
  { label: '3', checked: false, key: randomId() },
];

export function IndeterminateRadio() {
  const [values, handlers] = useListState(initialValuesRadio);

  const itemsRadio = values.map((value, index) => (
    <Radio
      mt="3px"
      label={value.label}
      key={value.key}
      checked={value.checked}
      onChange={(event) =>
        handlers.setItemProp(index, 'checked', event.currentTarget.checked)
      }
    />
  ));

  return (
    <div className="radio">
      <Text mb="3px">Radio group</Text>
      {itemsRadio}
    </div>
  );
}
