import React from "react";
import { Route } from "react-router-dom";
// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import ProductContextProvider from "./Context/ProductContext";
import CardContextProvider from "./Context/CardContext";

function App() {
  return (
    <ProductContextProvider>
      <CardContextProvider>
        <div className="App">
          <Navigation />
          {/* Routelar */}
          <main className="content">
            <Route exact path="/">
              <Products/>
            </Route>
            <Route path="/cart">
              <ShoppingCart/>
            </Route>
          </main>
        </div>
      </CardContextProvider>
    </ProductContextProvider>
  );
}

export default App;
