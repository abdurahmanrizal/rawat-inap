import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppLayout } from '@/layouts/AppLayout';
import { PatientFormPage } from '@/pages/PatientFormPage';
import { PatientListPage } from '@/pages/PatientListPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/pasien-masuk" replace /> },
      { path: 'pasien-masuk', element: <PatientFormPage /> },
      { path: 'pasien-aktif', element: <PatientListPage /> },
    ],
  },
]);
