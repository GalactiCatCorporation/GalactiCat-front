import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Meta() {
    const pathname = window.location.pathname;
    const canonical = `http://localhost:3000${pathname}`;

    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href={canonical} />
            </Helmet>
        </HelmetProvider>
    )
}

export default Meta