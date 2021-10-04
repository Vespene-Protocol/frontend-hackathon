import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import React from "react";
import VButton from "../components/vButton";

export default function Connect() {
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    availableInstallTypes,
    connect,
    install,
    disconnect,
  } = useWallet();

  return (
    <div>
      <h1>Connect Sample</h1>
      <section>
        <pre className="bg-black text-blue-100">
          {JSON.stringify(
            {
              status,
              network,
              wallets,
              availableConnectTypes,
              availableInstallTypes,
            },
            null,
            2
          )}
        </pre>
      </section>
      <footer>
        {status === WalletStatus.WALLET_NOT_CONNECTED && (
          <>
            {availableInstallTypes.map((connectType) => (
              <VButton
                key={"install-" + connectType}
                onClick={() => install(connectType)}
              >
                Install {connectType}
              </VButton>
            ))}
            {availableConnectTypes.map((connectType) => (
              <VButton
                key={"connect-" + connectType}
                onClick={() => connect(connectType)}
              >
                Connect {connectType}
              </VButton>
            ))}
          </>
        )}
        {status === WalletStatus.WALLET_CONNECTED && (
          <VButton onClick={() => disconnect()}>Disconnect</VButton>
        )}
      </footer>
    </div>
  );
}
