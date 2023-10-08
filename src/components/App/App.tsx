import React from 'react';
import Navigation from '../Navigation/Navigation';
import Slider from '../Slider/Slider';
import MobileApp from '../Mobile App/MobileApp';
import TopPicks from '../TopPicks/TopPicks';
import Meal from '../Meal/Meal';
import Categories from '../Categories/Categories';
import Footer from '../Footer/Footer';
import '../../styles/App.scss';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Slider/>
      <MobileApp/>
      <TopPicks/>
      <Meal/>
      <Categories/>
      <Footer/>
    </div>
  );
}

export default App;
