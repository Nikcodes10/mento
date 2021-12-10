import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return(
        <>
        <div className='footer__encloser'>
            <section>
                <div className='footer__info'>
                    <span></span>
                    <h1>Untitled UI</h1>
                </div>
                <p>
                    Design amazing Nonsense that create more happiness in the world!
                </p>
            </section>
            <main>
                <section className='footer__links'>
                    <h5>Product</h5>
                    <ul>
                        <li><Link to="/">Overview</Link></li>
                        <li><Link to="/">Features</Link></li>
                        <li><Link to="/">Solutions</Link><span>New</span></li>
                        <li><Link to="/">Tutorials</Link></li>
                        <li><Link to="/">Pricing</Link></li>
                    </ul>
                </section>
                <section className='footer__links'>
                    <h5>Company</h5>
                    <ul>
                        <li><Link to="/">About us</Link></li>
                        <li><Link to="/">Careers</Link></li>
                        <li><Link to="/">Press</Link></li>
                        <li><Link to="/">News</Link></li>
                        <li><Link to="/">Media kit</Link></li>
                    </ul>
                </section>
                <section className='footer__links'>
                    <h5>Resources</h5>
                    <ul>
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/">Newsletter</Link></li>
                        <li><Link to="/">Events</Link></li>
                        <li><Link to="/">Help center</Link></li>
                        <li><Link to="/">Tutorials</Link></li>
                    </ul>
                </section>
                <section className='footer__links'>
                    <h5>Social</h5>
                    <ul>
                        <li><Link to="/">Twitter</Link></li>
                        <li><Link to="/">Linkedin</Link></li>
                        <li><Link to="/">Facebook</Link></li>
                        <li><Link to="/">Github</Link></li>
                        <li><Link to="/">AngelList</Link></li>
                    </ul>
                </section>
                <section className='footer__links'>
                    <h5>Legal</h5>
                    <ul>
                        <li><Link to="/">Terms</Link></li>
                        <li><Link to="/">Privacy</Link></li>
                        <li><Link to="/">Cookies</Link></li>
                        <li><Link to="/">Licenses</Link></li>
                        <li><Link to="/">Settings</Link></li>
                    </ul>
                </section>
            </main>
        </div>
        <section className='footer__copyright'>
                <h5>@2077 Untitled UI. All rights reserved.</h5>
                <ul className='footer__icons'>
                    <li>
                        <span></span>
                    </li>
                    <li>
                        <span></span>
                    </li>
                    <li>
                        <span></span>
                    </li>
                    <li>
                        <span></span>
                    </li>
                    <li>
                        <span></span>
                    </li>
                    <li>
                        <span></span>
                    </li>
                </ul>
            </section>
        </>
    )
}