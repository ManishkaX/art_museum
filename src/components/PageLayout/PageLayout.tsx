import { Outlet } from "react-router"
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";

const PageLayout = () => {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
        </>
    )
}

export { PageLayout }