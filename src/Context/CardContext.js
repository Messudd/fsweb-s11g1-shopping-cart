import React , {createContext , useState} from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

export const CardContext = createContext();


const CardContextProvider = (props) => {

  const [cards , setCards] = useState([]);

  const toastContent = {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const addItem = (item) => {
        if (cards.filter((value) => value.id === item.id).length > 0) {
          toast.warn('Already cart added !', {...toastContent }
          );
        } else {
          setCards([...cards, item]);
          toast.success("Cart added !", {...toastContent}
          );
        }
      };

  return (
    <CardContext.Provider value={{cards, setCards , addItem}}>
        {props.children}
    </CardContext.Provider>
  )
}

export default CardContextProvider;