import { API_HOST, API_KEY, API_URL } from "./config";

export function reducer(state, { type, payload }) {
    switch (type) {
        case "SET_GOODS":
            return {
                ...state,
                goods: payload || [],
                loading: false,
            };
        case "SEARCH_GOODS":
            fetch(`${API_URL}${payload}/page/1`, {
                method: "GET",
                headers: {
                    "x-rapidapi-host": API_HOST,
                    "x-rapidapi-key": API_KEY,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    return {
                        ...state,
                        goods: data,
                        loading: false,
                    };
                })
                .catch((err) => {
                    console.error(err);
                });
        // eslint-disable-next-line no-fallthrough
        case "ADD_TO_BASKET":
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.appId === payload.id
            );
            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.title,
            };
        case "INCREMENT_QUANTITY":
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.appId === payload.id) {
                        const newQuantity = el.quantity + 1;
                        return {
                            ...el,
                            quantity: newQuantity,
                        };
                    } else {
                        return el;
                    }
                }),
            };
        case "DECREMENT_QUANTITY":
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.appId === payload.id) {
                        const newQuantity = el.quantity - 1;
                        return {
                            ...el,
                            quantity: newQuantity >= 0 ? newQuantity : 0,
                        };
                    } else {
                        return el;
                    }
                }),
            };
        case "TOGGLE_BASKET":
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            };
        case "REMOVE_FROM_BASKET":
            return {
                ...state,
                order: state.order.filter((el) => el.appId !== payload.id),
            };
        case "CLOSE_ALERT":
            return {
                ...state,
                alertName: "",
            };
        default:
            return state;
    }
}
