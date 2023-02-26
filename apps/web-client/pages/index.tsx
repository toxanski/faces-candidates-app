import styled from '@emotion/styled';
// import { Button } from '@chakra-ui/react';
import { Button, Input, Link } from '@faces-candidates-app/shared-ui';

const StyledPage = styled.div`
    .page {
    }
`;

export function Index() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.@emotion/styled file.
     */
    return (
        <StyledPage>
            <div className="wrapper">
                <div className="container">
                    <Button variant="outline" px="56px">
                        123
                    </Button>
                    <Button>123</Button>
                    <Input placeholder="Поиск" maxWidth="320px" />
                    <Link href="/">Ссылка</Link>
                </div>
            </div>
        </StyledPage>
    );
}

export default Index;
