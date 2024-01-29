import {
  TextInput,
  Group,
  ActionIcon,
  Box,
  Text,
  Button,
  Checkbox,
  Radio,
} from '@mantine/core';
import { useState } from 'react';

const CheckedItems = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Text mt="25px">Checkbox group</Text>

      <Checkbox
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        label="1"
      />
      <Checkbox
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        label="2"
        mt="3px"
      />
      <Checkbox
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        label="3"
        mt="3px"
      />
      <Text mt="25px">Radio group</Text>
      <Radio
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        label="1"
        mt="3px"
      />
      <Radio
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        label="2"
        mt="3px"
      />
      <Radio
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        label="3"
      />
    </>
  );
};

export default CheckedItems;
