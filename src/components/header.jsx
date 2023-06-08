import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="grey lighten-5">
            <div className="nav-wrapper">
                <Link
                    to="/"
                    className="brand-logo blue-text text-darken-3"
                >
                    React Movies
                </Link>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <Link
                            to="/about"
                            className="blue-text text-darken-3"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contacts"
                            className="blue-text text-darken-3"
                        >
                            Contacts
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
