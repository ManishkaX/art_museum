import FavoritesIcon from "@assets/favorites_icon.svg";
import HomeIcon from "@assets/home_icon.svg";
import { NavLink, useLocation } from "react-router";
import cl from "./NavBar.module.scss"

const NavBar = () => {
    const { pathname } = useLocation();

    return (
        <nav className={cl.nav}>
            {pathname !== "/" ?
                <NavLink to="/" className={cl.nav_link}>
                    <div className={cl.nav_item}>
                        <HomeIcon />
                        <span className={cl.nav_link_title}>Home</span>
                    </div>
                </NavLink>
                : ''}

            <NavLink to="/favorites" className={cl.nav_link}>
                <div className={cl.nav_item}>
                    <FavoritesIcon />
                    <span className={cl.nav_link_title}>Your favorites</span>
                </div>
            </NavLink>
        </nav>
    )
}

export { NavBar }