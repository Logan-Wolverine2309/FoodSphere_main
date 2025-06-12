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
  {
    id: 3,
    date: '2025-06-05',
    items: [
      { id: 104, name: 'Caesar Salad', price: 5.99, quantity: 1 },
      { id: 105, name: 'Iced Tea', price: 2.49, quantity: 3 },
    ],
    total: 13.46,
    status: 'Cancelled',
  },
  {
    id: 4,
    date: '2025-06-01',
    items: [
      { id: 106, name: 'Spaghetti Carbonara', price: 11.99, quantity: 1 },
      { id: 107, name: 'Tiramisu', price: 4.99, quantity: 2 },
    ],
    total: 21.97,
    status: 'Delivered',
  },
  {
    id: 5,
    date: '2025-05-28',
    items: [
      { id: 108, name: 'Chicken Tikka Masala', price: 12.99, quantity: 1 },
      { id: 109, name: 'Naan Bread', price: 2.99, quantity: 3 },
    ],
    total: 22.96,
    status: 'Delivered',
  },
  {
    id: 6,
    date: '2025-05-25',
    items: [
      { id: 110, name: 'Fish and Chips', price: 10.99, quantity: 1 },
      { id: 111, name: 'Coleslaw', price: 3.49, quantity: 2 },
    ],
    total: 17.97,
    status: 'In Progress',
  },
  {
    id: 7,
    date: '2025-05-20',
    items: [
      { id: 112, name: 'Beef Tacos', price: 8.99, quantity: 1 },
      { id: 113, name: 'Churros', price: 4.49, quantity: 2 },
    ],
    total: 17.97,
    status: 'Delivered',
  },
  {
    id: 8,
    date: '2025-05-15',
    items: [
      { id: 114, name: 'Pancakes', price: 6.99, quantity: 1 },
      { id: 115, name: 'Coffee', price: 2.99, quantity: 2 },
    ],
    total: 12.97,
    status: 'Cancelled',
  },
  {
    id: 9,
    date: '2025-05-10',
    items: [
      { id: 116, name: 'Sushi Platter', price: 15.99, quantity: 1 },
      { id: 117, name: 'Miso Soup', price: 3.49, quantity: 2 },
    ],
    total: 22.97,
    status: 'Delivered',
  },
  {
    id: 10,
    date: '2025-05-05',
    items: [
      { id: 118, name: 'BBQ Ribs', price: 14.99, quantity: 1 },
      { id: 119, name: 'Cornbread', price: 2.99, quantity: 3 },
    ],
    total: 24.96,
    status: 'In Progress',
  },
  { id: 11,
    date: '2025-05-01',
    items: [
      { id: 120, name: 'Greek Salad', price: 8.49, quantity: 1 },
      { id: 121, name: 'Pita Bread', price: 1.99, quantity: 2 },
    ],
    total: 12.47,
    status: 'Delivered',
  },
  {
    id: 12,
    date: '2025-04-28',
    items: [
      { id: 122, name: 'Chocolate Cake', price: 5.99, quantity: 1 },
      { id: 123, name: 'Milkshake', price: 3.49, quantity: 2 },
    ],
    total: 12.97,
    status: 'Cancelled',
  },
  {
    id: 13,
    date: '2025-04-25',
    items: [
      { id: 124, name: 'Falafel Wrap', price: 6.99, quantity: 1 },
      { id: 125, name: 'Hummus', price: 2.49, quantity: 2 },
    ],
    total: 11.97,
    status: 'Delivered',
  },
  {
    id: 14,
    date: '2025-04-20',
    items: [
      { id: 126, name: 'Lamb Kebabs', price: 13.99, quantity: 1 },
      { id: 127, name: 'Rice Pilaf', price: 3.49, quantity: 2 },
    ],
    total: 20.97,
    status: 'In Progress',
  },
  {
    id: 15,
    date: '2025-04-15',
    items: [
      { id: 128, name: 'Vegetable Stir Fry', price: 7.99, quantity: 1 },
      { id: 129, name: 'Spring Rolls', price: 3.49, quantity: 2 },
    ],
    total: 14.97,
    status: 'Delivered',
  },
  {
    id: 16,
    date: '2025-04-10',
    items: [
      { id: 130, name: 'Chicken Caesar Wrap', price: 8.99, quantity: 1 },
      { id: 131, name: 'Potato Wedges', price: 2.99, quantity: 2 },
    ],
    total: 14.97,
    status: 'Cancelled',
  },
  {
    id: 17,
    date: '2025-04-05',
    items: [
      { id: 132, name: 'Shrimp Tacos', price: 9.99, quantity: 1 },
      { id: 133, name: 'Guacamole', price: 3.49, quantity: 2 },
    ],
    total: 16.97,
    status: 'Delivered',
  },
  { id: 18,
    date: '2025-04-01',
    items: [
      { id: 134, name: 'Beef Stroganoff', price: 12.99, quantity: 1 },
      { id: 135, name: 'Garlic Mashed Potatoes', price: 2.99, quantity: 2 },
    ],
    total: 18.97,
    status: 'In Progress',
  },
  {
    id: 19,
    date: '2025-03-28',
    items: [
      { id: 136, name: 'Caprese Salad', price: 7.49, quantity: 1 },
      { id: 137, name: 'Bruschetta', price: 3.49, quantity: 2 },
    ],
    total: 14.47,
    status: 'Delivered',
  },
  {
    id: 20,
    date: '2025-03-25',
    items: [
      { id: 138, name: 'Chocolate Mousse', price: 4.99, quantity: 1 },
      { id: 139, name: 'Espresso', price: 2.49, quantity: 2 },
    ],
    total: 9.97,
    status: 'Cancelled',
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
