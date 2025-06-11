import { Card, Chip, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantCard = ({ item }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false); // Local state for demo favorite toggle

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const handleNavigateToRestaurant = () => {
    navigate(`/restaurants/demo/${item.id}/${item.name}`);
  };

  return (
    <Card className="w-[18rem]">
      <div className="relative cursor-pointer" onClick={handleNavigateToRestaurant}>
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src={item.image || "/images/placeholder.jpg"}
          alt={item.name}
        />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={item.open ? "success" : "error"}
          label={item.open ? "Open" : "Closed"}
        />
      </div>

      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-lg cursor-pointer" onClick={handleNavigateToRestaurant}>
            {item.name}
          </p>
          <p className="text-gray-500 text-sm">
            {item.description || "No description available"}
          </p>
        </div>
        <div>
          <IconButton onClick={handleToggleFavorite}>
            {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
