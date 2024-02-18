import { CryptoContextProvider } from './Context/crypto-context';
import Applayout from './Components/layout/Applayout';

export default function App() {
  return (
    <CryptoContextProvider>
      <Applayout />
    </CryptoContextProvider>
  )
}
