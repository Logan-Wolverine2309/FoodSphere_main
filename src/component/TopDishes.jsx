import React, { useState, useEffect } from 'react';
import {
  Card, CardMedia, CardContent, Typography,
  IconButton, Grid, Box
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const initialItems = [
  {
    id: 1,
    name: 'Greek salad',
    desc: 'Food provides essential nutrients for overall health and well-being',
    price: 120,
    image: 'https://source.unsplash.com/300x200/?greek,salad',
  },
  {
    id: 2,
    name: 'Veg salad',
    desc: 'Food provides essential nutrients for overall health and well-being',
    price: 180,
    image: 'https://source.unsplash.com/300x200/?vegetarian,salad',
  },
  {
    id: 3,
    name: 'Clover Salad',
    desc: 'Food provides essential nutrients for overall health and well-being',
    price: 160,
    image: 'https://source.unsplash.com/300x200/?clover,salad',
  },
  {
    id: 4,
    name: 'Chicken Salad',
    desc: 'Food provides essential nutrients for overall health and well-being',
    price: 240,
    image: 'https://source.unsplash.com/300x200/?chicken,salad',
  },
];

const TopDishes = ({ items = initialItems }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCart(saved);
    } catch (err) {
      console.error("Error loading cart from localStorage", err);
      setCart([]);
    }
  }, []);

  const saveCart = (updated) => {
    setCart(updated);
    localStorage.setItem('cartItems', JSON.stringify(updated));
  };

  const handleAdd = (item) => {
    const existing = cart.find((i) => i.id === item.id);
    let updatedCart;
    if (existing) {
      updatedCart = cart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }];
    }
    saveCart(updatedCart);
  };

  const handleRemove = (item) => {
    const existing = cart.find((i) => i.id === item.id);
    if (!existing) return;

    let updatedCart;
    if (existing.quantity === 1) {
      updatedCart = cart.filter((i) => i.id !== item.id);
    } else {
      updatedCart = cart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
      );
    }
    saveCart(updatedCart);
  };

  // Create a quantity map to reduce repeated searching
  const quantityMap = cart.reduce((acc, item) => {
    acc[item.id] = item.quantity;
    return acc;
  }, {});

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Top dishes near you
      </Typography>
      <Grid container spacing={3}>
        {items.map((item) => {
          const qty = quantityMap[item.id] || 0;
          return (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  border: qty > 0 ? '2px solid #4caf50' : 'none',
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={item.image}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                  <Typography fontWeight="bold" mt={1}>
                    ₹{item.price}
                  </Typography>
                  <Box mt={2} display="flex" alignItems="center">
                    {qty > 0 ? (
                      <>
                        <IconButton onClick={() => handleRemove(item)}>
                          <RemoveCircleOutlineIcon />
                        </IconButton>
                        <Typography>{qty}</Typography>
                        <IconButton onClick={() => handleAdd(item)}>
                          <AddCircleOutlineIcon />
                        </IconButton>
                      </>
                    ) : (
                      <IconButton onClick={() => handleAdd(item)} color="primary">
                        <AddCircleOutlineIcon />
                      </IconButton>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default TopDishes;
