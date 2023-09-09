// this file will contain AppRouter

import React from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import MainLayout from './components/templates/MainLayout/MainLayout';

function App() {
  return (
    <div className="App">
      <MainLayout>
        {<HomeContainer />}
      </MainLayout>
    </div>
  );
}

export default App;
