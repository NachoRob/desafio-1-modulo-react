import Header from './Header.jsx'
import CardPizza from './CardPizza.jsx'
import { pizzas } from '../pizzas.js'

const Home = () => {
    return(
    <>
        <div className="hero-pizza">
            <Header/>
        </div> 
        <div className="pizza-cards-container">
        {pizzas.map((pizza) => (
            <CardPizza
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            />
        ))}
            
            </div>
    </>
  );
};

export default Home;