export const Navbar = () => {
    return (
        <nav>
            <ul className="list-none text-2xl py-4">
                <li className="inline-block mx-8">
                    <a href="/" className="hover:underline">Home</a>
                </li>
                <li className="inline-block mx-8">
                    <a href="/about" className="hover:underline">About</a>
                </li>
                <li className="inline-block mx-8">
                    <a href="/projects" className="hover:underline">Projects</a>
                </li>
                {/* <li className="inline-block mx-8">
                    <a href="/recordings">Recordings</a>
                </li> */}
            </ul>
            <hr />
        </nav>
    )
}