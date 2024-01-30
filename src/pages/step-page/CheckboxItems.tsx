import { useListState, randomId } from '@mantine/hooks';
import { Checkbox, Text } from '@mantine/core';
import './step-page.css';

const initialValuesCheckbox = [
  { label: '1', checked: false, key: randomId() },
  { label: '2', checked: false, key: randomId() },
  { label: '3', checked: false, key: randomId() },
];

export function IndeterminateCheckbox() {
  const [values, handlers] = useListState(initialValuesCheckbox);

  const itemsCheckbox = values.map((value, index) => (
    <Checkbox
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
    <div className="cheks">
      <Text mb="3px">Checkbox group</Text>
      {itemsCheckbox}
    </div>
  );
}
