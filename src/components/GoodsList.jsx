import React from "react";
import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (!goods.length) {
        return <h3>Nothing was found</h3>;
    }
    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem
                    key={item.appId}
                    {...item}
                    addToBasket={addToBasket}
                />
            ))}
        </div>
    );
}

export { GoodsList };
