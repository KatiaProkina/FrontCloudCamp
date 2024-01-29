import { useState } from 'react';
import { Stepper, Button, Group, TextInput, Code, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import './step-page.css';
import Advantages from './addAdvantages';
import CheckedItems from './CheckedItems';

const StepPage = () => {
  const [active, setActive] = useState(0);

  const form = useForm({
    initialValues: {
      nickname: '',
      name: '',
      surname: '',
      about: '',
    },

    validate: (values) => {
      if (active === 0) {
        return {
          nickname:
            values.nickname.trim().length < 1
              ? 'Nickname must include at least 1 characters'
              : null,
          name:
            values.name.trim().length < 1
              ? 'Name must include at least 1 characters'
              : null,
        };
      }
      if (active === 2) {
        return {
          about: values.about.trim().length < 1 ? 'Write something' : null,
        };
      }

      return {};
    },
  });

  const genderOptions = [
    { label: 'man', value: 'male' },
    { label: 'woman', value: 'female' },
  ];

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }
      return current < 3 ? current + 1 : current;
    });

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div className="step-container">
      <Stepper active={active}>
        <Stepper.Step>
          <TextInput
            label="Nickname"
            placeholder="Nickname"
            {...form.getInputProps('nickname')}
            mt="60px"
            mb="40px"
            maw="300px"
          />
          <TextInput
            label="Name"
            placeholder="Name"
            {...form.getInputProps('name')}
            mb="40px"
            maw="300px"
          />
          <TextInput
            label="Surname"
            placeholder="Surname"
            {...form.getInputProps('surname')}
            mb="40px"
            maw="300px"
          />
          <Select
            label="Sex"
            placeholder="Select gender"
            data={genderOptions}
            {...form.getInputProps('gender')}
            mb="40px"
            maw="300px"
          />
        </Stepper.Step>

        <Stepper.Step>
          <Advantages />
          <CheckedItems />
        </Stepper.Step>

        <Stepper.Step>
          <TextInput
            label="About"
            placeholder="Write something about you"
            {...form.getInputProps('about')}
            mt="100px"
          />
        </Stepper.Step>
        <Stepper.Completed>Completed! Form values:</Stepper.Completed>
      </Stepper>

      <div className="btn-step-group">
        {active !== 0 && (
          <button
            onClick={prevStep}
            className={`btn-step ${active === 0 ? 'hidden' : 'prev'}`}
          >
            Назад
          </button>
        )}
        {active !== 3 && (
          <button
            onClick={nextStep}
            className={`btn-step ${active === 0 ? 'next-first-step' : ''}`}
          >
            Далее
          </button>
        )}
      </div>
    </div>
  );
};
export default StepPage;
