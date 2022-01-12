export function reducer(state, { type, payload }) {
    switch (type) {
        case "SET_GOODS":
            return {
                ...state,
                goods: payload || [],
                loading: false,
            };
        case "TOGGLE_LOADING":
            return {
                ...state,
                loading: payload,
            };
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
