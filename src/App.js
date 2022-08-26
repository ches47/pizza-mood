import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, test } from './redux/slices/filterSlice';
import { Routes, Route } from 'react-router-dom';

import Head from './components/Head';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

import './scss/app.scss';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <button aria-label="Increment value" onClick={() => dispatch(test())}>
        Increment
      </button>
      <span>{count}</span>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Head />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
