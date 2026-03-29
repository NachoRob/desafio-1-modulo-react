import Header from './Header.jsx'
import CardPizza from './CardPizza.jsx'
import Navigationbar from './Navbar.jsx'

const Home = () => {
    return(
    <>
        <div className="hero-pizza">
            <Header/>
        </div> 
        <div className="pizza-cards-container">
        <CardPizza
            name="Napolitana"
            price={5950}
            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
            img="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=640&auto=format&fit=crop"
            />
            <CardPizza
            name="Española"
            price={6950}
            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
            img="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=640&auto=format&fit=crop"
            />

            <CardPizza
            name="Pepperoni"
            price={6950}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=640&auto=format&fit=crop"
            />
            </div>
    </>
  );
};

export default Home;