import { ReactNode } from 'react';
import '../App.css';

interface Props {
    children?: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <header>
                <h1>Music Search</h1>
            </header>
            <main>
                {children}
            </main>
        </>
    )
};

export default Layout;
