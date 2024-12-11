import { ReactNode } from "react"
import cl from "./Main.module.scss";


const Main = ({ children }: MainProps) => {
    return (
        <main className={cl.main}>
            {children}
        </main>
    )
}

export { Main }

type MainProps = {
    children: ReactNode;
}