import React from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";

const Item = (props) => {
  const { value, deleteCard } = props;


  return (
    <ScCartItem>
      <img src={value.image} alt={`${value.title} book`} />

      <ScCartItemDetails>
        <h2>{value.title}</h2>
        <p>$ {value.price}</p>
        <button  onClick={() => deleteCard(value.id)}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
