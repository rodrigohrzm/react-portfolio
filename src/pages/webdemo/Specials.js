import { Link } from "react-router-dom"
import Card from "./Card"

const dishes = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of cripsy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("../../assets/images/greek salad.jpg"),
  },
  {
    title: "Bruschetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      getImageSrc: () => require("../../assets/images/bruschetta.jpg"),
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been ourced and is as authentic as can be imagined.",
      getImageSrc: () => require("../../assets/images/lemon dessert.jpg"),
  },
];


function Specials() {
    return (
      <section class="specialDishes">
      <div class="topArea">
        <h2>This week's Specials!</h2>
        <button><Link to={"/"}>Online Menu</Link></button>
      </div>
      <div class="cardsGrid">
        {dishes.map((dish) => (<Card
          title={dish.title}
          price={dish.price}
          description={dish.description}
          imageSrc={dish.getImageSrc()}
        /> ))}
      </div>
      </section>
    );
  }

export default Specials;