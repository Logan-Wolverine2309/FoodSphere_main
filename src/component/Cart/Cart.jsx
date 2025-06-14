import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Divider,
  IconButton
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";


const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 40 : 0;
  const total = subtotal + deliveryFee;

  const handleProceedToPay = () => {
    // if (subtotal === 0) {
    //   alert("Your cart is empty.");
    //   navigate("/");
    //   return;
    // }
    localStorage.setItem("orderTotal", total);
    navigate("/payment", { state: { total } });
  };

  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>Your Cart</Typography>

      {/* Headers */}
      <Box display="flex" justifyContent="space-between" px={2} mb={3}>
        {['Item', 'Title', 'Price', 'Qty', 'Total', 'Remove'].map(h => (
          <Typography key={h} variant="subtitle2" color="textSecondary">{h}</Typography>
        ))}
      </Box>
      <Divider />

      {/* Items */}
      {cartItems.map((item) => (
        <Box key={item.id} display="flex" alignItems="center" justifyContent="space-between" px={2} py={2}>
          <Box width={80} height={80}>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Typography>{item.name}</Typography>
          <Typography>₹{item.price}</Typography>
          <Typography>{item.quantity}</Typography>
          <Typography>₹{item.price * item.quantity}</Typography>
          <IconButton onClick={() => removeFromCart(item.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}

      <Divider sx={{ mt: 4, mb: 6 }} />

      {/* Summary */}
      <Box display="flex" justifyContent="space-between" mt={2} flexWrap="wrap">
        <Box flex="1" maxWidth="400px">
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Cart Totals
          </Typography>
          <Box display="flex" justifyContent="space-between" my={1}>
            <Typography>Subtotal</Typography>
            <Typography>₹{subtotal}</Typography>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between" my={1}>
            <Typography>Delivery Fee</Typography>
            <Typography>₹{deliveryFee}</Typography>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between" my={1}>
            <Typography fontWeight="bold">Total</Typography>
            <Typography fontWeight="bold">₹{total}</Typography>
          </Box>
          <Button
            variant="contained"
            onClick={handleProceedToPay}
            sx={{ mt: 2, bgcolor: "#ff5722", px: 4, py: 1.5 }}
            fullWidth
          >
            PROCEED TO CHECKOUT
          </Button>
        </Box>

        {/* Promo Code */}
        <Box flex="1" maxWidth="400px" mt={{ xs: 4, md: 0 }}>
          <Typography variant="subtitle1" mb={2}>
            If you have a promo code, enter it here
          </Typography>
          <Box display="flex">
            <TextField
              placeholder="promo code"
              fullWidth
              variant="outlined"
              size="small"
              sx={{ mr: 1, flexGrow: 1 }}
            />
            <Button variant="contained" sx={{ bgcolor: "primary.main", px: 3 }}>
              SUBMIT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
