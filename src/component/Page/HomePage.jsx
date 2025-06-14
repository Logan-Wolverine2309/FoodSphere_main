
import { demoDishes } from '../Data/mockData';
import DishCard from '../DishCard';


const HomePage = () => {
  return (
    <div>
      <h2>Popular Dishes</h2>
      <div>
        {demoDishes.map(dish => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
