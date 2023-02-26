import {
    Button as ChakraButton,
    ThemeTypings,
    ThemingProps,
} from '@chakra-ui/react';

export function Button({
    variant = 'solid',
    colorScheme = 'yellow',
    px = '32px',
    fullWidth = false,
    children,
}: ButtonPrimaryProps) {
    return (
        <ChakraButton
            sx={{ borderRadius: 22, width: fullWidth ? '100%' : 'auto' }}
            colorScheme={colorScheme}
            variant={variant}
            h={'auto'}
            lineHeight="16px"
            py="10px"
            px={px}
        >
            {children}
        </ChakraButton>
    );
}

interface ButtonPrimaryProps {
    children: JSX.Element | string;
    variant?: ThemingProps<'Button'>['variant'];
    colorScheme?: ThemeTypings['colorSchemes'];
    px?: number | string;
    fullWidth?: boolean;
}
