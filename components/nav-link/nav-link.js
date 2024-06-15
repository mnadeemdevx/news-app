'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = (props) => {
    const { children, href } = props;

    const path = usePathname();

    return (
        <Link href={href} className={path.startsWith(href) ? 'active' : ''}>
            {children}
        </Link>
    );
};

export default NavLink;
