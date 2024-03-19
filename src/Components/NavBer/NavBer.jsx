// import PropTypes from 'prop-types';
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

import Link from "../Link/Link";
import { useState } from "react";

const NavBer = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/products', name: 'Products', id: 3 },
        { path: '/products/:id', name: 'Product Details', id: 4 },
        { path: '/contact', name: 'Contact', id: 5 }
    ];


    return (
        <nav>
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <RxCross2 /> : <TiThMenu />
                }

            </div>
            <ul className={`${open ? 'top-12' : '-top-60'} duration-1000 md:flex absolute md:static bg-gray-200 ms-2 mt-2`}>
                {
                    routes.map(route => <Link key={route.id} link={route}></Link>)
                }
            </ul>
        </nav>
    );
};

NavBer.propTypes = {

};

export default NavBer;