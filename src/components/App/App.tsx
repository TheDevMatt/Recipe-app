import React from 'react';
import Navigation from '../Navigation/Navigation';
import Slider from '../Slider/Slider';
import MobileApp from '../Mobile App/MobileApp';
import '../../styles/App.scss';
import TopPicks from '../TopPicks/TopPicks';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Slider/>
      <MobileApp/>
      <TopPicks/>
    </div>
  );
}

export default App;
