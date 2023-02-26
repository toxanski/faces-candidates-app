import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';

/* eslint-disable-next-line */
export interface LinkProps {
    children: JSX.Element | string;
    href: string;
}

export function Link({ children, href }: LinkProps) {
    return (
        <ChakraLink as={NextLink} href={href}>
            {children}
        </ChakraLink>
    );
}

export default Link;
