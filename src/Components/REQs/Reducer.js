export const initialState = {
  basket: [],
  user: null
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => amount + item.price, 0);

const reducer = (state, action) => {
    switch(action.type) {
        case "SET_USER":
        return {
            ...state,
            user: action.user,
        };
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
          
            const removedBasketItem = state.basket.findIndex(
              (basketItem) => basketItem.id === action.id
            );
            if (removedBasketItem >= 0) {
                newBasket.splice(removedBasketItem, 1);
            } 
            else {
                console.warn(
                  `Cant remove product ( id: ${action.id}) as its not in basket! )`
                );
            }
            return {
                ...state,
                basket: newBasket,
            };
        default: 
            return state;
    }
}

export default reducer;