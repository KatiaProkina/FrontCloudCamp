import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import '@mantine/core/styles.css';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { Api } from './store/api';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <ApiProvider api={Api}>
        <RouterProvider router={router} />
      </ApiProvider>
    </MantineProvider>
  </React.StrictMode>,
);
