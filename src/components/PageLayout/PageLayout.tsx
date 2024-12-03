import { Outlet } from "react-router"
import { Header } from "../Header/Header";

const PageLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export { PageLayout }