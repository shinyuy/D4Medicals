'use client'
import { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { title } from 'process';

interface Props {
    isSelected?: boolean;
    isMobile?: boolean;
    isBanner?: boolean;
    href?: string;
    children: React.ReactNode;
    title: string;
    [rest: string]: any;
    options: { link: string; title: string }[];
}


const NavDropdown = ({
    isSelected,
    isMobile,
    isBanner,
    href,
    children,
    title,
    string,
    options,
    ...rest
}: Props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const className = cn(
        rest.className,
        'text-white rounded-md px-3 py-2 font-medium',
        {
            'underline': isSelected,
            'text-white hover:underline':
                !isSelected && !isBanner,
            'block text-base underline': isMobile,
            'text-sm': !isMobile,
            'text-green-300': isBanner,
        }
    );

    if (!href) {
        return (
            <span className={className} role='button' onClick={rest.onClick}>
                {children}
            </span>
        );
    }

    return (
        <>
            <Link className={className} href={href}
                // className="text-white rounded-md px-3 py-2 hover:text-gray-300 focus:outline-none"
                onMouseEnter={() => setIsDropdownOpen(true)}
            // onMouseLeave={() => setIsDropdownOpen(false)}
            >
                {title}
            </Link>
            {isDropdownOpen && (
                <div
                    className="absolute mt-36 bg-white text-gray-800 rounded-md shadow-lg w-56 group-hover:block"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    {options.map((option, i) => (
                        <Link href={option.link} className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md">{option.title}</Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default NavDropdown;
