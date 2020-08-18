import React from 'react';

import { Helmet } from 'react-helmet-async';

const Layout = ({title, description, children}) => {
    return <main>
        <Helmet>
            <title>{ title ? `${title} - PLT` : "PLT" }</title>
            <meta name="description" content={ description ? `${description} - PLT` : "PLT" } />
        </Helmet>
        {children}
    </main>
}

export default Layout;