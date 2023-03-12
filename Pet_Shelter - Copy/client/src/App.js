import React, { useState } from 'react';
import ShelterList from './components/shelterList';
import ShelterForm from './components/shelterForm';
import Detail from './components/detail';
import Update from './components/update';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route element={<ShelterList/>} path='/' />
            <Route element={<ShelterForm/>} path='/api/shelters/new' />
            <Route element={<Detail/>} path='/api/shelters/:id'/>
            <Route element={<Update/>} path='/api/shelters/edit/:id'/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
