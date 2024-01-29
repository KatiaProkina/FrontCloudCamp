import { useForm } from '@mantine/form';
import { TextInput, Group, ActionIcon, Box, Text, Button } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons-react';

const Advantages = () => {
  const form = useForm({
    initialValues: {
      advantage: [{ name: '', key: randomId() }],
    },
  });

  const fields = form.values.advantage.map((item, index) => (
    <Group key={item.key} mt="xs">
      <TextInput
        withAsterisk
        style={{ flex: 1 }}
        {...form.getInputProps(`advantage.${index}.name`)}
      />

      <ActionIcon color="red" onClick={() => form.removeListItem('advantage', index)}>
        <IconTrash size="1rem" />
      </ActionIcon>
    </Group>
  ));

  return (
    <Box maw={300} pt="70px">
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text fw={500} size="sm" style={{ flex: 1 }}>
            Advantages
          </Text>
        </Group>
      ) : (
        <Text c="dimmed" ta="center">
          No one here...
        </Text>
      )}

      {fields}

      <Group mt="md">
        <Button
          onClick={() =>
            form.insertListItem('advantage', { name: '', active: false, key: randomId() })
          }
        >
          +
        </Button>
      </Group>
    </Box>
  );
};
export default Advantages;
