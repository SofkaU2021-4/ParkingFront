import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';

const Layout = () => {
    return (
        <div>
            <header class="  ">
                <NavBar/>
            </header>
            <Outlet/>
            
        </div>
    )
}

export default Layout
