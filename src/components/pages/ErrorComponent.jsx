import { Link } from 'react-router-dom'

export const ErrorComponent = () => {
    return (
        <div className='page'>        
            <h2 className='heading'>I could not fing the page :(</h2>
            <Link to={"/home"}>Go to Home</Link>
        </div>
    )
}
