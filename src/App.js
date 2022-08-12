import React from 'react';

import Head from './components/Head';
import Category from './components/Category';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import pizzasJSON from './assets/pizzas.json';

import './scss/app.scss';

function App() {
  fetch('https://62f69273a3bce3eed7c40a0e.mockapi.io/Items').then((res) => {
    return res.json();
  });

  return (
    <div className="wrapper">
      <Head />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Category />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzasJSON.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
