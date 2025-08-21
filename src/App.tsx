import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllLoad = () => {
    getAll().then(setGoods);
  };

  const handleFirst5Load = () => {
    get5First().then(setGoods);
  };

  const handleAllRed = () => {
    getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllLoad}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirst5Load}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleAllRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
