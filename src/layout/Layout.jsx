import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';

const Layout = () => {
    return (
        <div>
            <header class=" ">
                <NavBar/>
            </header>
            <hr></hr>
            <Outlet/>
            
        </div>
    )
}

export default Layout
