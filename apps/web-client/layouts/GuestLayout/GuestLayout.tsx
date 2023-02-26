import styled from '@emotion/styled';
import { Header } from '../Header';

const StyledGuestLayout = styled.div`
    max-width: 1296px;
    margin: 0 auto;
`;

export function Guestlayout({ children }: Guestlayout) {
    return (
        <StyledGuestLayout>
            <Header />
            <div>{children}</div>
            <footer>footer</footer>
        </StyledGuestLayout>
    );
}

interface Guestlayout {
    children: JSX.Element[] | JSX.Element;
}
