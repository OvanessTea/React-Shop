import { useEffect, useContext } from "react";
import { API_HOST, API_KEY, API_URL } from "../config";
import { ShopContext } from "../context";
import { GoodsList } from "./GoodsList";
import { Preloader } from "./Preloader";
import { Cart } from "./Cart";
import { Search } from "./Search";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

function Main() {
    const { loading, order, isBasketShow, alertName, setGoods, toggleLoading } =
        useContext(ShopContext);

    const searchGoods = (str) => {
        toggleLoading(true);
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
                toggleLoading(false);
            })
            .catch((err) => {
                console.error(err);
            });
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
            })
            .catch((err) => {
                console.error(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <main className="container content">
            <Search searchGoods={searchGoods} />
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <GoodsList />}
            {isBasketShow && <BasketList />}
            {alertName && <Alert />}
        </main>
    );
}

export { Main };
