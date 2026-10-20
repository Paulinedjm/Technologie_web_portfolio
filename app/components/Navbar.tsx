export function Navbar(){
    return(
        <nav className="bg-gray-800 text-white p-4">
            <ul className = "flex space-x-4">
                <li>
                    <a href="/" className = "hover:text-gray-400">
                    Home
                    </a>
                </li>
                <li>
                    <a href="/my-first-page" className="hover:text-gray-400">
                    My first page
                    </a>
                </li>
            </ul>
        </nav>
    )
}