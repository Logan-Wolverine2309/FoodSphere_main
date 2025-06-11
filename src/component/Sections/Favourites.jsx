import React from "react";
import { Card, CardContent } from "@mui/material";
import RestaurantCard from "../Restaurant/RestaurantCard";

// Purely local demo data (no API)
const demoFavorites = [
  {
    id: 1,
    name: "Cozy Corner Café",
    image: "/images/cozy-corner.jpg",
    cuisine: "Cafe",
    rating: 4.2,
    address: "42 Peace Ave, Hilltown",
  },
  {
    id: 2,
    name: "Dragon Bowl",
    image: "/images/dragon-bowl.jpg",
    cuisine: "Asian Fusion",
    rating: 4.8,
    address: "88 Dragon Street, Chinatown",
  },
  {
    id: 3,
    name: "La Fiesta Mexicana",
    image: "/images/la-fiesta.jpg",
    cuisine: "Mexican",
    rating: 4.5,
    address: "15 Sunset Blvd, Southside",
  },
];

const Favourites = () => {
  return (
    <Card className="max-w-5xl mx-auto mt-10 p-6 shadow-2xl rounded-2xl bg-white">
      <CardContent>
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Favourites (Demo)</h2>

        {demoFavorites.length > 0 ? (
          <div className="flex flex-wrap gap-6 justify-center">
            {demoFavorites.map((item) => (
              <RestaurantCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <img src="/images/empty.gif" alt="No favorites" className="w-40 mx-auto mb-4" />
            <p>No favorite restaurants added yet.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Favourites;
