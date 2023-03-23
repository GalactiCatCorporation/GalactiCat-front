import React from 'react'
import { Helmet } from "react-helmet";

function Meta() {
    const pathname = window.location.pathname;
    const canonical = `http://localhost:3000${pathname}`;

    return (
        <Helmet>
            <link rel="canonical" href={canonical} />
        </Helmet>
    )
}

export default Meta