import { useState } from 'react';
import { Stepper, TextInput, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import './step-page.css';
import Advantages from './addAdvantages';
import { IndeterminateCheckbox } from './CheckboxItems';
import { IndeterminateRadio } from './RadioItems';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import { useSubmitFormMutation } from '../../store/api';

const StepPage = () => {
  const [active, setActive] = useState(0);
  const [submitForm, { isError, data }] = useSubmitFormMutation();

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
      if (active === 3) {
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
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/');
  };
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('nickname', form.values.nickname);
      formData.append('name', form.values.name);
      formData.append('surname', form.values.surname);
      formData.append('about', form.values.about);

      await submitForm(formData);

      console.log('все збс');
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
      console.log('все не збс');
    }
  };

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
          <IndeterminateCheckbox />
          <IndeterminateRadio />
        </Stepper.Step>

        <Stepper.Step>
          <TextInput
            label="About"
            placeholder="Write something about you"
            {...form.getInputProps('about')}
            mt="100px"
          />
        </Stepper.Step>
      </Stepper>

      <div>
        {active == 0 && (
          <button
            onClick={handleStart}
            className={`btn-step ${active === 1 ? 'hidden' : 'prev'}`}
          >
            Назад
          </button>
        )}
      </div>

      <div className="btn-step-group">
        {active !== 0 && (
          <button
            onClick={prevStep}
            className={`btn-step ${active === 0 ? 'hidden' : 'prev'}`}
          >
            Назад
          </button>
        )}
        {active !== 2 ? (
          <button
            onClick={nextStep}
            className={`btn-step ${active === 0 ? 'next-first-step' : ''}`}
          >
            Далее
          </button>
        ) : null}
        {active === 2 && (
          <button
            onClick={handleSubmit}
            className={`btn-step ${active === 0 ? 'next-first-step' : ''}`}
          >
            Отправить
          </button>
        )}
      </div>
    </div>
  );
};
export default StepPage;
