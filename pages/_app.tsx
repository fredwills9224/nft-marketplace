import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/navbar';

function App({ Component, pageProps }: AppProps) {
  return(
    <>

      <Navbar/>
      <Component {...pageProps} />
    
    </>
  ) 
}

export default App;