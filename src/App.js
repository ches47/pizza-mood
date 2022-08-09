import React from 'react';

import Head from './components/Head';
import Category from './components/Category';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss';

function App() {
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
            <PizzaBlock title="MiaMama" price={42 + ' $'} />
            <PizzaBlock title="Gulliver" price="31 $" />
            <PizzaBlock title="Ericson" price="22 $" />
            <PizzaBlock title="Dubller" price="47 $" />
            <PizzaBlock title="Hulious" price="52 $" />
            <PizzaBlock title="Bukkers" price="20 $" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
