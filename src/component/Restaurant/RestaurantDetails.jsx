import {
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Grid,
  Button
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Demo restaurant and menu data
const demoRestaurants = [
  {
    id: "1",
    name: "The Grill House",
    description: "Juicy grilled meals with spices",
    city: "delhi",
    open: true,
    categories: ["Starters", "Main Course", "Drinks"],
    images: [
      "https://source.unsplash.com/600x400/?restaurant,grill",
      "https://source.unsplash.com/600x400/?meat,barbecue"
    ]
  },
  {
    id: "2",
    name: "Biryani Kingdom",
    description: "Authentic Hyderabadi biryani",
    city: "hyderabad",
    open: true,
    categories: ["Veg", "Non-Veg", "Special"],
    images: [
      "https://source.unsplash.com/600x400/?biryani",
      "https://source.unsplash.com/600x400/?rice,spices"
    ]
  }
];

const demoMenuItems = [
  { id: "1", name: "Grilled Chicken", category: "Main Course", vegetarian: false, seasonal: false },
  { id: "2", name: "Paneer Tikka", category: "Starters", vegetarian: true, seasonal: false },
  { id: "3", name: "Lassi", category: "Drinks", vegetarian: true, seasonal: true },
  { id: "4", name: "Chicken Biryani", category: "Non-Veg", vegetarian: false, seasonal: false },
  { id: "5", name: "Veg Biryani", category: "Veg", vegetarian: true, seasonal: false }
];

const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegetarian", value: "veg" },
  { label: "Non-Vegetarian", value: "nonveg" },
  { label: "Seasonal", value: "seasonal" }
];

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [foodType, setFoodType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredMenu, setFilteredMenu] = useState([]);

  useEffect(() => {
    const found = demoRestaurants.find(r => r.id === id);
    setRestaurant(found || null);
  }, [id]);

  useEffect(() => {
    if (restaurant) {
      const items = demoMenuItems.filter(item => {
        const matchesType =
          foodType === "all" ||
          (foodType === "veg" && item.vegetarian) ||
          (foodType === "nonveg" && !item.vegetarian) ||
          (foodType === "seasonal" && item.seasonal);

        const matchesCategory = selectedCategory === "" || item.category === selectedCategory;

        return matchesType && matchesCategory;
      });
      setFilteredMenu(items);
    }
  }, [foodType, selectedCategory, restaurant]);

  if (!restaurant) return <p className="p-10 text-xl text-gray-500">Restaurant not found.</p>;

  return (
    <div className="px-5 lg:px-20 py-5">
      <h3 className="text-gray-500 py-2">Home / {restaurant.city} / {restaurant.name}</h3>

      <Grid container spacing={2}>
        {restaurant.images.map((img, i) => (
          <Grid item xs={12} md={6} key={i}>
            <img src={img} alt={`restaurant-${i}`} className="w-full h-[250px] object-cover rounded-md" />
          </Grid>
        ))}
      </Grid>

      <div className="py-5">
        <h1 className="text-4xl font-bold">{restaurant.name}</h1>
        <p className="text-gray-500 mt-2">{restaurant.description}</p>
        <div className="mt-3 text-sm text-gray-400 space-y-2">
          <p className="flex items-center gap-2"><LocationOnIcon fontSize="small" /> {restaurant.city}</p>
          <p className="flex items-center gap-2"><CalendarTodayIcon fontSize="small" /> Open: 11AM – 10PM</p>
        </div>
      </div>

      <Divider sx={{ my: 3 }} />

      <div className="lg:flex gap-10">
        {/* Filters */}
        <div className="lg:w-1/4">
          <Typography variant="h6">Food Type</Typography>
          <RadioGroup value={foodType} onChange={(e) => setFoodType(e.target.value)}>
            {foodTypes.map(ft => (
              <FormControlLabel key={ft.value} value={ft.value} control={<Radio />} label={ft.label} />
            ))}
          </RadioGroup>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6">Category</Typography>
          <RadioGroup value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {restaurant.categories.map(cat => (
              <FormControlLabel key={cat} value={cat} control={<Radio />} label={cat} />
            ))}
          </RadioGroup>
        </div>

        {/* Menu List */}
        <div className="lg:w-3/4 space-y-4">
          <Typography variant="h5" sx={{ mb: 2 }}>Menu Items</Typography>
          {filteredMenu.length === 0 ? (
            <p className="text-gray-500">No items found.</p>
          ) : (
            filteredMenu.map(item => (
              <div key={item.id} className="bg-gray-100 p-4 rounded shadow flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.category} • {item.vegetarian ? "Veg" : "Non-Veg"}{item.seasonal ? " • Seasonal" : ""}</p>
                </div>
                <Button variant="contained" color="success">Add</Button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
