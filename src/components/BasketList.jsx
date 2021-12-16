import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const { order } = props;
    return (
        <ul className="collection">
            <li className="collection-item active">Корзина</li>
            {order.length ? (
                order.map((item) => <BasketItem key={item.appId} {...item} />)
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            <li className="collection-item active">Общая стоимость:</li>
        </ul>
    );
}

export { BasketList };
