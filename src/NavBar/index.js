import Logo from '../images/logopoko.png';
import './style.css'


export const NavBar = () => {
    return (
        <div className="containernav">
            <img src={Logo} alt="Logo Poko play" />
            <h3> Poko Play</h3>
        
        </div>
    )
}