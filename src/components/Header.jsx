function Header() {
    return (
        <nav className="cyan lighten-4">
            <div className="nav-wrapper">
                <a
                    href="index.html"
                    className="brand-logo blue-grey-text text-darken-2"
                >
                    React Shop
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a
                            href="https://github.com/OvanessTea/React-Shop"
                            target="_blank"
                            rel="noreferrer"
                            className="blue-grey-text text-darken-2"
                        >
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export { Header };
