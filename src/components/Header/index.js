import { Link } from "preact-router"

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/users">Users</Link>
                    </li>
                    <li>
                        <Link href="/todos">Todos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;