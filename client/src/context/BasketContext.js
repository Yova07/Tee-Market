import { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export const useBasketContext = () => {
    return useContext(BasketContext);
}

export const BasketContextProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);

    return (
        <BasketContext.Provider value={{ basket, setBasket }}>
            { children }
        </BasketContext.Provider>
    )
}

