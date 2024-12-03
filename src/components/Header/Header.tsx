import { NavBar } from "@components/NavBar/NavBar";
import cl from "./Header.module.scss";
import MuseumLogo from "@assets/museum-logo.svg";

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.header_inner}>
                <MuseumLogo />
                <NavBar />
            </div>
        </header>
    )
}

export { Header }