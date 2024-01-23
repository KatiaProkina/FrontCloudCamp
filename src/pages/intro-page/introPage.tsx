import './style_intro.css';
import folder_img from '../../../public/img/folder.svg';
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, Box } from '@mantine/core';

const IntroPage = () => {
  const form = useForm({
    initialValues: { phoneNumber: '', email: '' },

    validate: {
      phoneNumber: (value) =>
        /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value) ? null : 'Invalid phone number',
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  return (
    <>
      <header className="header-intro">
        <div className="avatar">АИ</div>
        <div className="user-container">
          <div className="username">Иван Иванов</div>
          <div className="user-links">
            <div className="user-link">
              <img src={folder_img} alt="" />
              <a href="http://" className="link">
                Telegram
              </a>
            </div>
            <div className="user-link">
              <img src={folder_img} alt="" />
              <a href="http://" className="link">
                Github
              </a>
            </div>
            <div className="user-link">
              <img src={folder_img} alt="" />
              <a href="http://" className="link">
                Resume
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="intro-form-container">
        <Box maw={340}>
          <form onSubmit={form.onSubmit(console.log)}>
            <NumberInput
              label="Номер телефона"
              placeholder="+7 (900) 000-00-00"
              mask="+7 (111) 111-11-11"
              hideControls
              {...form.getInputProps('phoneNumber')}
            />
            <TextInput
              mt="sm"
              label="Email"
              placeholder="Введите Email"
              {...form.getInputProps('email')}
            />
            <button className="btn-start">Начать</button>
          </form>
        </Box>
      </main>
    </>
  );
};
export default IntroPage;
