import React, { useState } from "react";

const Search = (props) => {
    const { searchGoods = Function.prototype } = props;

    const [search, setSearch] = useState("");

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
                    onChange={(event) => setSearch(event.target.value)}
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
