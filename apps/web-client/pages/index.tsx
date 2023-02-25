import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react'

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
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
