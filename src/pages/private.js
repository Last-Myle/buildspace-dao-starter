import React from 'react';
import Dashboard from './dashboard';

// Import ThirdWeb
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

// Include what chains you wanna support.
// 4 = Rinkeby.
const supportedChainIds = [4];

// Include what type of wallet you want to support.
// In this case, we support Metamask which is an "injected wallet".
const connectors = {
  injected: {},
};

// Finally, wrap App with ThirdwebWeb3Provider.
function Private() {
    return (
        <React.StrictMode>
            <ThirdwebWeb3Provider
            connectors={connectors}
            supportedChainIds={supportedChainIds}
            >
            <div className="landing">
                <Dashboard />
            </div>
            </ThirdwebWeb3Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default Private;