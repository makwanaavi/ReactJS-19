import { useState } from "react";
import { IoMenu } from "react-icons/io5";
function Navbar() {
    const [showMenu, setShowMenu] = useState();

    const handleToggleButton = () =>{
        setShowMenu(!showMenu)
    }
    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="logo">
                        <h1>@VI</h1>
                    </div>

                    <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Services</a></li>
                        </ul>
                    </nav>
                    <div className="ham-menu">
                        <button onClick={handleToggleButton}>
                            <IoMenu />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
