import Link from 'next/link';
import cn from 'classnames';

interface Props {
    isSelected?: boolean;
    isMobile?: boolean;
    isBanner?: boolean;
    href?: string;
    px: number;
    py: number;
    children: React.ReactNode;
    [rest: string]: any;
}

export default function NavButton({
    isSelected,
    isMobile,
    isBanner,
    href,
    px,
    py,
    children,
    ...rest
}: Props) {
    const className = cn(
        rest.className,
        `text-white rounded-full px-${px} py-${py} font-medium bg-green-900`,
        {
            'bg-green-900': isSelected,
            'text-white hover:bg-green-700 hover:text-white':
                !isSelected && !isBanner,
            'block text-base': isMobile,
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
        <Link className={className} href={href}>
            {children}
        </Link>
    );
}
