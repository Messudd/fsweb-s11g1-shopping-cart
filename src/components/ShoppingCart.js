import React, {useContext, useEffect} from "react";
import { ScCartCheckout } from "./scParts";

// Components
import Item from "./ShoppingCartItem";
import { CardContext } from "../Context/CardContext";

const ShoppingCart = () => {
  const {cards , setCards} = useContext(CardContext);
  const getCartTotal = () => {
    return cards
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  const deleteCard = (id) => {
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
 }

 useEffect(() => {
  console.log('cards : ',cards);
},[cards]);

  return (
    <div>
      {cards.map((item) => (
        <Item key={item.id} value = {item} deleteCard = {deleteCard} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;
