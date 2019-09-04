import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "0"};
  overflow: auto;
`;

const FlexRow = styled(Flex)`
  flex-direction: row;
`;

const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

export { FlexRow, FlexColumn };
