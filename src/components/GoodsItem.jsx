function GoodsItem(props) {
    const {
        appId,
        title,
        url,
        imgUrl,
        released,
        price,
        addToBasket = Function.prototype,
    } = props;

    return (
        <div className="card goods">
            <div className="card-image ">
                <img src={imgUrl} alt={title} />
            </div>

            <label>
                <div className="card-content">
                    <span className="card-title">
                        <a href={url}>{title}</a>
                    </span>
                    <p className="right" style={{ fontSize: "1rem" }}>
                        {released}
                    </p>
                </div>
                <div className="card-action">
                    <button
                        className="btn"
                        onClick={() => addToBasket(appId, title, price)}
                    >
                        Buy now
                    </button>
                    <span
                        className="right blue-text"
                        style={{ fontSize: "1.2rem" }}
                    >
                        {price}
                    </span>
                </div>
            </label>
        </div>
    );
}

export { GoodsItem };
