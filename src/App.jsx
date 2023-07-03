import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/Layout';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<DashboardLayout />}>
          <Route path='/' element={<Dashboard />} />
          {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
            <Route key={el} path={`/item-${el}`} element={<Dashboard />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
