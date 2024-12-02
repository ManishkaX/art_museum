import { NavLink, Outlet } from "react-router"

const PageLayout = () => {
    return (
        <>
            <div> PageLayout </div>
            <NavLink to="/favorites">Favorites</NavLink>
            <NavLink to="/details/42/">Picture 42</NavLink>
            <Outlet />
        </>
    )
}

export { PageLayout }