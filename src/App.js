import React from 'react';

import Head from './components/Head';
import Category from './components/Category';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss';

function App() {
  return (
    <div class="wrapper">
      <Head />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Category />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
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
