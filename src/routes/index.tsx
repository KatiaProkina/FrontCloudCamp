import { createBrowserRouter } from 'react-router-dom';
import IntroPage from '../pages/intro-page/introPage';
import StepPage from '../pages/step-page/stepPage';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <IntroPage />,
      },
      {
        path: '/steps',
        element: <StepPage />,
      },
    ],
  },
]);
