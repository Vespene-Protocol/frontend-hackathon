import DropdownContainer from './DropdownContainer';
import DropdownBox from './DropdownBox';
import {
    ConnectType,
    useWallet,
    WalletStatus,
  } from '@terra-money/wallet-provider';
import React, { useCallback, useState } from 'react';

export default function Wallet() {
    const {
        install,
        status,
        connect,
        disconnect,
        wallets,
        network,
        availableConnectTypes,
        availableInstallTypes,
      } = useWallet();
    
    const [openDropdown] = useState(false);

    const connectWallet = useCallback(() => {
        if (availableConnectTypes.length > 1) {
            setOpenDropdown(true);
        } else if (availableConnectTypes.length === 1) {
            connect(availableConnectTypes[0]);
        }
    }, [availableConnectTypes, connect]);

    const onClickAway = useCallback(() => {
        setOpenDropdown(false);
      }, []);

      switch (status) {
        case WalletStatus.INITIALIZING:
          return (
            <div>
                <button className="bg-pink-400 rounded font-semibold text-white disabled">
                    Initializing wallet...
                </button>
            </div>
          );
          case WalletStatus.WALLET_NOT_CONNECTED:
            return (
                <div>
                    <button className="bg-pink-400 rounded font-semibold text-white" onClick={connectWallet}>
                        Connect Wallet
                    </button>
                    {openDropdown && (
                        <DropdownContainer>
                          <DropdownBox>
                            <section className="flex pt-8 pr-7 flex-col">
                              {availableConnectTypes.some(
                                (connectType) => connectType === ConnectType.WEBEXTENSION,
                              ) ? (
                                <FlatButton
                                  onClick={() => {
                                    connect(ConnectType.WEBEXTENSION);
                                    setOpenDropdown(false);
                                  }}
                                >
                                  <IconSpan>
                                    <Terra />
                                    Terra Station (extension)
                                  </IconSpan>
                                </FlatButton>
                              ) : availableConnectTypes.some(
                                  (connectType) =>
                                    connectType === ConnectType.CHROME_EXTENSION,
                                ) ? (
                                <FlatButton
                                  onClick={() => {
                                    connect(ConnectType.CHROME_EXTENSION);
                                    setOpenDropdown(false);
                                  }}
                                >
                                  <IconSpan>
                                    <Terra />
                                    Terra Station (extension)
                                  </IconSpan>
                                </FlatButton>
                              ) : availableInstallTypes.some(
                                  (connectType) =>
                                    connectType === ConnectType.CHROME_EXTENSION,
                                ) ? (
                                <BorderButton
                                  onClick={() => {
                                    install(ConnectType.CHROME_EXTENSION);
                                    setOpenDropdown(false);
                                  }}
                                >
                                  <IconSpan>
                                    <Terra />
                                    Install Chrome Extension
                                  </IconSpan>
                                </BorderButton>
                              ) : null}

                              {availableConnectTypes.some(
                                (connectType) =>
                                  connectType === ConnectType.WALLETCONNECT,
                              ) && (
                                <FlatButton
                                  className="connect-walletconnect"
                                  onClick={() => {
                                    connect(ConnectType.WALLETCONNECT);
                                    setOpenDropdown(false);
                                  }}
                                >
                                  <IconSpan>
                                    <Walletconnect />
                                    Terra Station (mobile)
                                  </IconSpan>
                                </FlatButton>
                              )}

                              <hr />

                              {availableConnectTypes.some(
                                (connectType) => connectType === ConnectType.READONLY,
                              ) && (
                                <Tooltip
                                  title="Read-only mode for viewing information. Please connect through Terra Station (extension or mobile) to make transactions."
                                  placement="bottom"
                                >
                                  <BorderButton
                                    className="connect-readonly"
                                    onClick={() => {
                                      connect(ConnectType.READONLY);
                                      setOpenDropdown(false);
                                    }}
                                  >
                                    View an address
                                  </BorderButton>
                                </Tooltip>
                              )}
                            </section>
                          </DropdownBox>
                        </DropdownContainer>
                    )}
                </div>
            );
          case WalletStatus.WALLET_CONNECTED:
            return (
                <div className="">
                </div>
            );
              }
}