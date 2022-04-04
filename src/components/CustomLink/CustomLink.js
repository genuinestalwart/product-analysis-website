import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link className={match ? 'border-b-2 border-indigo-400 px-4 py-2 text-indigo-500' : 'border-b-2 border-slate-300 px-4 py-2'} to={to} {...props}>{children}</Link>
        </div>
    );
}

export default CustomLink;