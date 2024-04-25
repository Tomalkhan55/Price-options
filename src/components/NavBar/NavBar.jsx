import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'ProductDetails', path: '/products/:id' },
        { id: 5, name: 'Contact', path: '/contact' }
    ];


    return (
        <nav className="text-black bg-yellow-200 p-6">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <MdClose></MdClose> 
                    : <HiMenuAlt1></HiMenuAlt1>
                }
                
            </div>
            <ul className={`md:flex absolute md:static duration-1000
            ${open ? 'top-24': '-top-80'}
            bg-yellow-200 px-6`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;