import Header from '../components/Header.jsx'
import CardPizza from './CardPizza.jsx'
import { useEffect, useState } from 'react'

const Home = () => {
    const [pizzaCard, setPizzaCard] = useState([]);
    const [error, setError] = useState(null);
    const consultarApi = async () => {

        try {
        const url = "https://api-backend-pizza-mama-mia.onrender.com/api/pizzas";
        const response = await fetch(url);
        const data = await response.json();
        setPizzaCard(data);
        } catch(error){
            setError(error.message);
        }
    };
    
    useEffect(()=> {
        consultarApi();
    },[]);

    return(
    <>
        <div className="hero-pizza">
            <Header/>
        </div> 
        <div className="pizza-cards-container">
        {pizzaCard.map((data) => (
            <CardPizza
            id={data.id}
            name={data.name}
            price={data.price}
            ingredients={data.ingredients}
            img={data.img}
            />
        ))}
            
            </div>
    </>
  );
};

export default Home;