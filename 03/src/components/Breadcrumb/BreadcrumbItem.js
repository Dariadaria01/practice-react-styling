import React from 'react';


const BreadcrumbItem = ({ href, active, children }) => {
    
    if (active) {
        return (
            <li className="breadcrumb-item active" aria-current="page">
                {children}
            </li>
        );
    }

    return (
        <li className="breadcrumb-item">
            <a href={href}>
                {children}
            </a>
        </li>
    );
};

export default BreadcrumbItem;