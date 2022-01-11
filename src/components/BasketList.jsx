import { BasketItem } from "./BasketItem";
import { useContext } from "react";
import { ShopContext } from "../context";

function BasketList() {
    const { order = [], handleBasketShow = Function.prototype } =
        useContext(ShopContext);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {order.length ? (
                order.map((item) => <BasketItem key={item.appId} {...item} />)
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            <li className="collection-item active">
                Общее количество товаров: {order.length}
                <button
                    className="btn-flat waves-effect waves-light right btn-arrange"
                    type="submit"
                    name="action"
                >
                    Оформить
                    <i className="material-icons right">send</i>
                </button>
            </li>
            <i
                className="material-icons basket-close"
                onClick={handleBasketShow}
            >
                close
            </i>
        </ul>
    );
}

export { BasketList };
