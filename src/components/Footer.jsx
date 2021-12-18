function Footer() {
    return (
        <footer className="page-footer cyan lighten-5">
            <div className="footer-copuright">
                <div className="container blue-grey-text lighten-3">
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className="blue-grey-text text-darken-2 right"
                        href="https://github.com/OvanessTea/React-Shop"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
