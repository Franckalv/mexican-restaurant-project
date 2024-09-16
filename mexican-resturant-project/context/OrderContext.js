import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [history, setHistory] = useState([]);

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  const sendOrder = () => {
    setHistory([...history, order]);
    setOrder([]);
  };

  return (
    <OrderContext.Provider value={{ order, addToOrder, sendOrder, history }}>
      {children}
    </OrderContext.Provider>
  );
};