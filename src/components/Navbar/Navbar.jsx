import AppLogo from '../../assets/logo.png'
import './nav.css'

export default function Navbar(){
    return(
    <>
        <nav>
            <div className="navbar">
                <img className='logo' src={AppLogo} alt='logo image'/>
                <p>PhotoFolio</p>
            </div>            
        </nav>
    </>
    )
}