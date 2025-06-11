import React, { useEffect, useState } from 'react';
import OrderCard from '../Profile/OrderCard';

const demoOrders = [
  {
    id: 1,
    date: '2025-06-10',
    items: [
      { id: 101, name: 'Pizza Margherita', price: 9.99, quantity: 1 },
      { id: 102, name: 'Garlic Bread', price: 3.49, quantity: 2 },
    ],
    total: 16.97,
    status: 'Delivered',
  },
  {
    id: 2,
    date: '2025-06-08',
    items: [
      { id: 103, name: 'Veggie Burger', price: 7.99, quantity: 1 },
    ],
    total: 7.99,
    status: 'In Progress',
  },
];

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading and fetch delay
    const timer = setTimeout(() => {
      setOrders(demoOrders);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <img src="/images/loading.gif" alt="loading" />
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <img src="/images/empty.gif" alt="empty" />
        <h2 className="text-white text-lg mt-4">No orders found</h2>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-xl text-center py-7 font-semibold">My Orders</h1>
      <div className="space-y-5 w-full lg:w-1/2">
        {orders.map((order) =>
          order.items.map((item) => (
            <OrderCard key={item.id} order={order} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Order;
