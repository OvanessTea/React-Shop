function BasketItem(props) {
    const {
        appId,
        title,
        price,
        quantity,
        removeFromBasket = Function.prototype,
    } = props;

    let totalPrice = price
        .split("")
        .map(function (item) {
            return item.replace(/\s+/g, "").replace("-", "");
        })
        .filter(function (n) {
            return n.length > 0;
        })
        .join("");

    if (totalPrice === "FreeToPlay") {
        totalPrice = "Free To Play";
    } else if (totalPrice === "Free") {
        totalPrice = "Free";
    } else {
        totalPrice = +totalPrice.slice(0, -1).replace(",", ".");
        totalPrice *= quantity;
        totalPrice += "€";
    }
    console.log(totalPrice);

    return (
        <li className="collection-item">
            {title} x {quantity} = {totalPrice}
            <span className="secondary-content">
                <i
                    className="material-icons basket-delete"
                    onClick={() => removeFromBasket(appId)}
                >
                    close
                </i>
            </span>
        </li>
    );
}

export { BasketItem };
