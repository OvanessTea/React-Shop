import React, { useContext } from "react";
import { ShopContext } from "../context";

const Search = () => {
    const { searchGoods = Function.prototype } = useContext(ShopContext);
    const search = "";
    const handleKey = (event) => {
        if (event.key === "Enter") {
            searchGoods(search);
        }
    };

    return (
        <div className="row">
            <div className="input-field">
                <input
                    id="search-input"
                    className="validate"
                    placeholder="search"
                    type="search"
                    value={search}
                    onChange={(event) => handleKey(event.target.value)}
                    onKeyDown={handleKey}
                />
                <button
                    className="btn search-btn"
                    onClick={() => searchGoods(search)}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export { Search };
