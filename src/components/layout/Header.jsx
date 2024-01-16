import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <div className="play"></div>
                </div>
                <h1>Blog</h1>
            </header>
            <nav className="nav">
                <ul>
                    <li><NavLink to={'/home'}>Home</NavLink></li>
                    <li><NavLink to={'/articles'}>Articles</NavLink></li>
                    <li><NavLink to={'create-article'}>Create article</NavLink></li>
                    <li><NavLink href="#">Contact</NavLink></li>
                </ul>
            </nav>
        </>
    )
}
