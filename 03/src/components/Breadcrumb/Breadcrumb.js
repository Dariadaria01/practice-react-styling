import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';


const Breadcrumb = ({ children }) => {
    return (
        
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {children}
            </ol>
        </nav>
    );
};


 
Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;