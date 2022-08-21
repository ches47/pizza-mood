import React from 'react';

import styles from './search.module.scss';

export const Search = () => {
  return <input className={styles.root} placeholder="Поиск пиццы..." />;
};

export default Search;
