import { ReactNode } from "react"
import { Navbar } from "../components/NavBar"

interface PortfolioLayoutProps {
    children : ReactNode
}

export const PortfolioLayout = ({ children } : PortfolioLayoutProps)=>{
    return(
        <>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    );
}