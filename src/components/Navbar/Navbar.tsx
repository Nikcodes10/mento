import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(props :any) {
    return(
    <div className='navbar__encloser'>
        <main className='navbar__main'>
            <div>
                <span></span>
                <h3>Untitled UI</h3>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Products</Link>
                </li>
                <li>
                    <Link to="/">Resources</Link>
                </li>
                <li>
                    <Link to="/">Pricing</Link>
                </li>
            </ul>
        </main>
    </div>
    )
}