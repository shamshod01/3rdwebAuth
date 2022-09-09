import type { AppProps } from 'next/app'
import {ThirdwebWeb3Provider} from "@3rdweb/hooks";
import {RecoilRoot} from "recoil";
import "regenerator-runtime/runtime";
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps){
  const supportedChainIds = [1,4];

  const connectors = {
    injected: {},
  };

  return (
      // @ts-ignore
      <ThirdwebWeb3Provider
          supportedChainIds={supportedChainIds}
          connectors={connectors}
      >
          <RecoilRoot>
              <Component {...pageProps} />
          </RecoilRoot>
      </ThirdwebWeb3Provider>
  );
}

export default MyApp;