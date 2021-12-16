import { useState, useEffect } from "react";
import { API_HOST, API_KEY, API_URL } from "../config";

import { GoodsList } from "./GoodsList";
import { Preloader } from "./Preloader";
import { Cart } from "./Cart";
import { Search } from "../components/Search";
import { BasketList } from "../components/BasketList";

function Main() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);

    const searchGoods = (str) => {
        setLoading(true);
        fetch(`${API_URL}${str}/page/1`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": API_HOST,
                "x-rapidapi-key": API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };
    const addToBasket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );
        console.log(itemIndex);
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...item,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
    };

    useEffect(function getGoods() {
        fetch(`${API_URL}Counter%20Strike/page/1`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": API_HOST,
                "x-rapidapi-key": API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    return (
        <main className="container content">
            <Search searchGoods={searchGoods.bind(this)} />
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} addToBasket={addToBasket} />
            )}
            {isBasketShow && <BasketList order={order} />}
        </main>
    );
}

export { Main };
