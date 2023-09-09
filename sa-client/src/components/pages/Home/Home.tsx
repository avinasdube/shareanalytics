// Home Page focuses on UI and presentation, rendering what the user sees.

import React from 'react';
import Button from '../../atoms/Button/Button';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Home Page</h1>
      <Button onClick={() => alert('Button Clicked')}>Click Me</Button>
    </div>
  );
};

export default Home;
