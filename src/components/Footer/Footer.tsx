import cl from "./Footer.module.scss";
import MuseumLogoWhite from "@assets/museum_logo_white.svg";
import ModsenLogo from "@assets/modsen_logo.svg"

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.footer_inner}>
                <MuseumLogoWhite />
                <ModsenLogo />
                {/* <NavBar /> */}
            </div>
        </footer>
    );
}

export { Footer }