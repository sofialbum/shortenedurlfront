import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import UuidPage from './pages/Uuid';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/:id', element: <UuidPage />}
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
