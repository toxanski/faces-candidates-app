import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';
import { ButtonPrimary, SharedUi } from '@faces-candidates-app/shared-ui';

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
                    <Button>123</Button>
                    <SharedUi />
                    <ButtonPrimary>123</ButtonPrimary>
                </div>
            </div>
        </StyledPage>
    );
}

export default Index;
