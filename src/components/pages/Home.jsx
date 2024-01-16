import { Link } from 'react-router-dom';
export const Home = () => {
    return (
        <div className="page">
            <h1>Welcome to my Blog</h1>
            <p className='home-text'>This was created using MERN (Mongo, Express, React, Node)</p>
            <Link className='goTo' to={"/articles"}>Go to Articles</Link>
        </div>
    )
}
