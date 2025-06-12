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
  {
    id: 4,
    name: "Pasta Perfection",
    image: "/images/pasta-perfection.jpg",
    cuisine: "Italian",
    rating: 4.7,
    address: "77 Pasta Lane, Downtown",
  },
  {
    id: 5,
    name: "Spice Symphony",
    image: "/images/spice-symphony.jpg",
    cuisine: "Indian",
    rating: 4.6,
    address: "23 Curry Road, Eastside",
  },
  {
    id: 6,
    name: "Burger Haven",
    image: "/images/burger-haven.jpg",
    cuisine: "American",
    rating: 4.3,
    address: "99 Burger Street, Westside",
  },
  {
    id: 7,
    name: "Sushi Sensation",
    image: "/images/sushi-sensation.jpg",
    cuisine: "Japanese",
    rating: 4.9,
    address: "30 Sushi Way, Uptown",
  },
  {
    id: 8,
    name: "Vegan Vibes",
    image: "/images/vegan-vibes.jpg",
    cuisine: "Vegan",
    rating: 4.4,
    address: "60 Green Road, Eco City",
  },
  {
    id: 9,
    name: "Dessert Dreams",
    image: "/images/dessert-dreams.jpg",
    cuisine: "Desserts",
    rating: 4.1,
    address: "10 Sweet Street, Candyland",
  },
  {
    id: 10,
    name: "Grill Masters",
    image: "/images/grill-masters.jpg",
    cuisine: "Barbecue",
    rating: 4.0,
    address: "55 Grill Road, Smoky Town",
  },
  {
    id: 11,
    name: "Coffee Craze",
    image: "/images/coffee-craze.jpg",
    cuisine: "Cafe",
    rating: 4.3,
    address: "20 Coffee Lane, Brew City",
  },
  {
    id: 12,
    name: "Taco Fiesta",
    image: "/images/taco-fiesta.jpg",
    cuisine: "Mexican",
    rating: 4.6,
    address: "45 Taco Street, Fiesta Town",
  },
  {
    id: 13,
    name: "Pizzeria Paradise",
    image: "/images/pizzeria-paradise.jpg",
    cuisine: "Italian",
    rating: 4.8,
    address: "80 Pizza Avenue, Slice City",
  },
  {
    id: 14,
    name: "Curry Corner",
    image: "/images/curry-corner.jpg",
    cuisine: "Indian",
    rating: 4.5,
    address: "35 Curry Lane, Spice Town",
  },
  {
    id: 15,
    name: "Noodle Nirvana",
    image: "/images/noodle-nirvana.jpg",
    cuisine: "Asian Fusion",
    rating: 4.7,
    address: "90 Noodle Street, Wok City",
  },  
  {
    id: 16,
    name: "Steakhouse Supreme",
    image: "/images/steakhouse-supreme.jpg",
    cuisine: "American",
    rating: 4.4,
    address: "25 Steak Road, Grill City",
  },
  {
    id: 17,
    name: "Bakery Bliss",
    image: "/images/bakery-bliss.jpg",
    cuisine: "Bakery",
    rating: 4.2,
    address: "70 Bakery Lane, Sweet Town",
  },
  {
    id: 18,
    name: "Smoothie Station",
    image: "/images/smoothie-station.jpg",
    cuisine: "Healthy Drinks",
    rating: 4.1,
    address: "50 Smoothie Street, Fresh City",
  },
  {
    id: 19,
    name: "Tapas Time",
    image: "/images/tapas-time.jpg",
    cuisine: "Spanish",
    rating: 4.3,
    address: "65 Tapas Road, Iberia Town",
  },
  {
    id: 20,
    name: "Bistro Bliss",
    image: "/images/bistro-bliss.jpg",
    cuisine: "French",
    rating: 4.5,
    address: "85 Bistro Lane, Parisian District",
  },
];

const Favourites = () => {
  return (
    <Card className="max-w-5xl mx-auto mt-10 p-6 shadow-2xl rounded-2xl bg-white">
      <CardContent>
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Favourites</h2>

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
