import styled from '@emotion/styled';
import { Link } from '@faces-candidates-app/shared-ui';

const StyledNav = styled.nav`
    /* &:last-child {
        margin-right: 0;
    } */
`;

// Fixme: chakra не поддерживает переопределение стилей с помощью синтаксиса шаблонов
const StyledLink = styled(Link)`
    display: inline-block;
    margin-right: 32px;
    background-color: red;
`;

export function NavMenu() {
    return (
        <nav>
            <StyledLink href="/">Найти кандидата</StyledLink>
            <StyledLink href="/">Попасть в базу</StyledLink>
            <StyledLink href="/">О сервисе</StyledLink>
            <StyledLink href="/">Портал</StyledLink>
            <StyledLink href="/">Портал</StyledLink>
        </nav>
    );
}
