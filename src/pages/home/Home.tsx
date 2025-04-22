import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper>
      <h1>react_template</h1>
      <Box></Box>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100dvw;
  height: 100dvh;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: #000;
  margin: 0px 10px;
`;
