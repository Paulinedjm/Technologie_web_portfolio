export function Navbar(){
    return(
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <ul className = "flex space-x-4">
                <li>
                    <a href="/" className = "hover:text-gray-400 hover:bg-gray-100">
                    Home
                    </a>
                </li>
                <li>
                    <a href="/my-first-page" className="hover:text-gray-400  hover:bg-gray-100">
                    My first page
                    </a>
                </li>
                <li>
                    <a href="/CVentry" className="hover:text-gray-400  hover:bg-gray-100">
                    Mon CV
                    </a>
                </li>
                <li>
                    <a href="/todo" className="hover:text-gray-400  hover:bg-gray-100">
                    To-Do list
                    </a>
                </li>
                                <li>
                    <a href="/blog" className="hover:text-gray-400  hover:bg-gray-100">
                    Blog
                    </a>
                </li>
            </ul>

            <ul className="flex space-x-4">
                <li>
                    <a href="/login" className="hover:text-gray-400 hover:bg-gray-100"> Log in</a>
                </li>
                <li>
                    <a href="/register" className="hover:text-gray-400 hover:bg-gray-100">Sign up</a>
                </li>
           </ul>

        </nav>
    )
}