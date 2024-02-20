import { Main } from '../../pages/Main/Main.tsx';

type AppScreenProps = {
  placesToStay: number;
}

function App({placesToStay}: AppScreenProps): JSX.Element {
  return (
    <Main placesToStay={placesToStay} />
  );
}

export default App;
