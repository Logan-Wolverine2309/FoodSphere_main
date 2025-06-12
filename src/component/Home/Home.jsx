import React from 'react';
import "./Home.css";
import RestaurantCard from '../Restaurant/RestaurantCard';
import MultiItemCarousel from './MultiItemCarousel';
import Footer from '../Footer';
import TopDishes from '../TopDishes';

// Demo restaurant data
const demoRestaurants = [
  {
    id: 1,
    name: "The Grill House",
    description: "Juicy grilled meals with spices",
    images: ["https://source.unsplash.com/600x400/?restaurant,grill"],
    open: true,
    address: { city: "delhi" }
  },
  {
    id: 2,
    name: "Biryani Kingdom",
    description: "Authentic Hyderabadi biryani",
    images: ["https://source.unsplash.com/600x400/?biryani,food"],
    open: true,
    address: { city: "hyderabad" }
  },
  {
    id: 3,
    name: "Veggie Delight",
    description: "Pure veg meals and snacks",
    images: ["https://source.unsplash.com/600x400/?vegetarian,meal"],
    open: false,
    address: { city: "mumbai" }
  },
  {
    id: "4",
    name: "Spice Route",
    description: "Explore the flavors of India",
    city: "mumbai",
    open: true,
    categories: ["Starters", "Main Course", "Desserts"],
    images: [
      "https://source.unsplash.com/600x400/?indian,spices",
      "https://source.unsplash.com/600x400/?curry,naan"
    ]
  },
  {
    id: "5",
    name: "Sweet Tooth",
    description: "Desserts and sweets from around the world",
    city: "chennai",
    open: true,
    categories: ["Desserts", "Drinks"],
    images: [
      "https://source.unsplash.com/600x400/?dessert,cake",
      "https://source.unsplash.com/600x400/?icecream,sweets"
    ]
  },
  {
    id: "6",
    name: "Pasta Paradise",
    description: "Italian pasta dishes with a twist",
    city: "pune",
    open: true,
    categories: ["Starters", "Main Course", "Drinks"],
    images: [
      "https://source.unsplash.com/600x400/?pasta,italian",
      "https://source.unsplash.com/600x400/?noodles,sauce"
    ]
  },
  {
    id: "7",
    name: "Sushi Station",
    description: "Fresh sushi and Japanese cuisine",
    city: "jaipur",
    open: true,
    categories: ["Starters", "Main Course", "Drinks"],
    images: [
      "https://source.unsplash.com/600x400/?sushi,japanese",
      "https://source.unsplash.com/600x400/?fish,seafood"
    ]
  },
  {
    id: "8",
    name: "Tandoori Treats",
    description: "Authentic tandoori dishes and more",
    city: "kolkata",
    open: true,
    categories: ["Starters", "Main Course", "Drinks"],
    images: [
      "https://source.unsplash.com/600x400/?tandoori,indian",
      "https://source.unsplash.com/600x400/?chicken,tandoor"
    ]
  },
  {
    id: "9",
    name: "Healthy Haven",
    description: "Wholesome meals for a healthy lifestyle",
    city: "gurgaon",
    open: true,
    categories: ["Salads", "Smoothies", "Bowls"],
    images: [
      "https://source.unsplash.com/600x400/?healthy,food",
      "https://source.unsplash.com/600x400/?salad,smoothie"
    ]
  },
  {
    id: "10",
    name: "Café Corner",
    description: "Cozy café with coffee and snacks",
    city: "noida",
    open: true,
    categories: ["Coffee", "Snacks", "Desserts"],
    images: [
      "https://source.unsplash.com/600x400/?cafe,coffee",
      "https://source.unsplash.com/600x400/?pastry,bakery"
    ]
  },
  {
    id: "11",
    name: "Barbecue Bliss",
    description: "Smoky barbecue dishes and sides",
    city: "chandigarh",
    open: true,
    categories: ["Starters", "Main Course", "Drinks"],
    images: [
      "https://source.unsplash.com/600x400/?barbecue,grill",
      "https://source.unsplash.com/600x400/?smoked,meat"
    ]
  },
  {
    id: "12",
    name: "Fusion Flavors",
    description: "Innovative dishes with global influences",
    city: "ahmedabad",
    open: true,
    categories: ["Starters", "Main Course", "Desserts"],
    images: [
      "https://source.unsplash.com/600x400/?fusion,food",
      "https://source.unsplash.com/600x400/?international,cuisine"
    ]
  },
  {
    id: "13",
    name: "Curry House",
    description: "Rich and flavorful curries from India",
    city: "surat",
    open: true,
    categories: ["Starters", "Main Course", "Drinks"],
    images: [
      "https://source.unsplash.com/600x400/?curry,indian",
      "https://source.unsplash.com/600x400/?naan,roti"
    ]
  },
  {
    id: "14",
    name: "Pizza Palace",
    description: "Delicious pizzas with fresh toppings",
    city: "coimbatore",
    open: true,
    categories: ["Pizzas", "Pastas", "Drinks"],
    images: [
      "https://source.unsplash.com/600x400/?pizza,italian",
      "https://source.unsplash.com/600x400/?cheese,toppings"
    ]
  },
  {
    id: "15",
    name: "Burger Barn",
    description: "Juicy burgers and crispy fries",
    city: "indore",
    open: true,
    categories: ["Burgers", "Sides", "Drinks"],
    images: [
      "https://source.unsplash.com/600x400/?burger,fastfood",
      "https://source.unsplash.com/600x400/?fries,cheeseburger"
    ]
  },
  {
    id: "16",
    name: "Noodle Nook",
    description: "Asian noodles and stir-fry dishes",
    city: "lucknow",
    open: true,
    categories: ["Noodles", "Stir-Fry", "Drinks"],
    images: [
      "https://source.unsplash.com/600x400/?noodles,asian",
      "https://source.unsplash.com/600x400/?stirfry,vegetables"
    ]
  },
  {
    id: "17",
    name: "Taco Town",
    description: "Spicy tacos and Mexican delights",
    city: "jaipur",
    open: true,
    categories: ["Tacos", "Burritos", "Drinks"],
    images: [
      "https://source.unsplash.com/600x400/?taco,mexican",
      "https://source.unsplash.com/600x400/?burrito,salsa"
    ]
  },
  {
    id: "18",
    name: "Samosa Station",
    description: "Crispy samosas and Indian snacks",
    city: "pune",
    open: true,
    categories: ["Snacks", "Chaat", "Drinks"],
    images: [
      "https://source.unsplash.com/600x400/?samosa,indian",
      "https://source.unsplash.com/600x400/?chaat,spicy"
    ]
  },
  {
    id: "19",
    name: "Pancake Paradise",
    description: "Fluffy pancakes and breakfast delights",
    city: "mumbai",
    open: true,
    categories: ["Breakfast", "Pancakes", "Drinks"],
    images: [
      "https://source.unsplash.com/600x400/?pancake,breakfast",
      "https://source.unsplash.com/600x400/?maple,syrup"
    ]
  },
  {
    id: "20",
    name: "Ice Cream Island",
    description: "Cool down with our ice creams and sundaes",
    city: "chennai",
    open: true,
    categories: ["Ice Cream", "Sundaes", "Drinks"],
    images: [
      "https://source.unsplash.com/600x400/?icecream,sundae",
      "https://source.unsplash.com/600x400/?dessert,cold"
    ]
  },
  {
    id: "21",
    name: "Salad Station",
    description: "Fresh salads and healthy bowls",
    city: "delhi",
    open: true,
    categories: ["Salads", "Bowls", "Drinks"],
    images: [
      "https://source.unsplash.com/600x400/?salad,healthy",
      "https://source.unsplash.com/600x400/?bowl,vegetables"
    ]
  },
  {
    id: "22",
    name: "Wrap World",
    description: "Delicious wraps and rolls",
    city: "hyderabad",
    open: true,
    categories: ["Wraps", "Rolls", "Drinks"],
    images: [
      "https://source.unsplash.com/600x400/?wrap,roll",
      "https://source.unsplash.com/600x400/?tortilla,stuffed"
    ]
  },
  {
    id: "23",
    name: "Curry Corner",
    description: "Authentic Indian curries and breads",
    city: "bangalore",
    open: true,
    categories: ["Curries", "Breads", "Drinks"],
    images: [
      "https://source.unsplash.com/600x400/?curry,indian",
      "https://source.unsplash.com/600x400/?naan,roti"
    ]
  },
  {
    id: "24",
    name: "Smoothie Spot",
    description: "Refreshing smoothies and juices",
    city: "mumbai",
    open: true,
    categories: ["Smoothies", "Juices", "Drinks"],
    images: [
      "https://source.unsplash.com/600x400/?smoothie,juice",
      "https://source.unsplash.com/600x400/?fruit,healthy"
    ]
  },
];

const Home = () => {
  return (
    <div className='pb-10'>
      <section className='banner -z-50 relative flex flex-col justify-center items-center'>
        <div className='w-[50vw] z-10 text-center'>
          <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>FoodSphere</p>
          <p className='z-10 text-gray-300 text-xl lg:text-4xl'>The Ultimate Comfortable Tasty Foods for Every Mood</p>
        </div>
        <div className='cover absolute top-0 left-0 right-0'></div>
        <div className='fadout'></div>
      </section>

      <section className='p-10 lg:py-10 lg:px-20'>
        <p className='text-2xl font-semibold text-gray-400 py-3 pb-10'>What's on your mind?</p>
        <MultiItemCarousel />
      </section>
      <TopDishes />

      <section className='px-5 lg:px-20 pt-10'>
        <h1 className='text-2xl font-semibold text-gray-400 pb-8'>Order From Our Handpicked Favourites</h1>
        <div className='flex flex-wrap items-center justify-around gap-5'>
          {demoRestaurants.map((item) => (
            <RestaurantCard item={item} key={item.id} />
          ))}
        </div>
      </section>
      
      <Footer/>
    </div>
  );
};

export default Home;
