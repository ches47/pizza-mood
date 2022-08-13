import React from 'react';

import Head from './components/Head';
import Category from './components/Category';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';

import './scss/app.scss';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://62f69273a3bce3eed7c40a0e.mockapi.io/Items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);

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
            {items.map((obj) => (
              <Skeleton key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
