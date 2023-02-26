import { SearchIcon } from '@chakra-ui/icons';
import {
    InputGroup,
    Input as ChackraInput,
    InputLeftElement,
} from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface InputProps {
    placeholder: string;
    maxWidth?: number | string;
}

export function Input({ placeholder, maxWidth }: InputProps) {
    return (
        <InputGroup colorScheme="yellow" maxWidth={maxWidth}>
            <InputLeftElement children={<SearchIcon />} h="36px" />
            <ChackraInput
                colorScheme="yellow"
                placeholder={placeholder}
                h="36px"
                sx={{
                    borderRadius: '36px',
                }}
            />
        </InputGroup>
    );
}

export default Input;
