import styled from 'styled-components';
import { useCounterStore } from '../../stores';

const Home = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <Wrapper>
      <h1>react_template</h1>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100dvw;
  height: 100dvh;

  button {
    padding: 10px 8px;
    width: 100px;
    font-size: 30px;
    border: 1px solid #000;
  }
`;
