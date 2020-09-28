import { Fragment } from 'react';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Header />
            {children}
            <p>footer</p>
        </Fragment>
    );
};

export default Layout;