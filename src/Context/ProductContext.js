import React, {createContext, useState} from 'react'
import { data } from '../data'

export const ProductContext = createContext();


const ProductContextProvider = (props) => {
    const [products , setProducts] = useState(data)

  return (
    <ProductContext.Provider value={{products , setProducts}}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider;