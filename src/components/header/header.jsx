import '../header/header.css';
import{Link,NavLink} from 'react-router-dom'
const Header= ()=>{
    return (
       
            <div className="nav">
                <div className="nav-log"><h1>
                EasyMarriage
                    </h1></div>
                    <ul className="nav-menu">
                        <li>
                        <NavLink
                            to="/"
                                className={({isActive}) =>
                                    isActive ? "nav-link nav-link-active" : "nav-link"
                                }
                            >
                                Home
                            </NavLink>
                             </li>
                        <li><NavLink
                            to="/category"
                                className={({isActive}) =>
                                    isActive ? "nav-link nav-link-active" : "nav-link"
                                }
                            >
                               Category
                            </NavLink>
                             </li>
                        <li><NavLink
                            to="/about"
                                className={({isActive}) =>
                                    isActive ? "nav-link nav-link-active" : "nav-link"
                                }
                            >
                                About Us
                            </NavLink>
                             </li>
                        <li className='nav-contact'><NavLink
                            to="/contact"
                                className={({isActive}) =>
                                    isActive ? "nav-link nav-link-active" : "nav-link"
                                }
                            >
                              Contact Us
                            </NavLink>
                             </li>

                    </ul>
                </div>
        
      
    )
}
export default Header