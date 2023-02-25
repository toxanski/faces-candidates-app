import { Button } from '@chakra-ui/react';

export function ButtonPrimary({ children }: ButtonPrimaryProps) {
    return <Button>{children}</Button>;
}

interface ButtonPrimaryProps {
    children: JSX.Element | string;
}
