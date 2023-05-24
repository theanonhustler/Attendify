import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import metamask from "@public/assets/metamask.svg";
import walletconnect from "@public/assets/walletconnect.svg";
// import { useWeb3React } from "@web3-react/core";
// import { injected, walletConnect } from "../../../web3/provider/connector";
// import { useToasts } from "react-toast-notifications";
// import { getConnectionError } from "../../../web3/helper";

function Wallet({ closeModal }) {
  const { active, activate } = useWeb3React();
  const { addToast } = useToasts();

  const connectWallet = (connector) => {
    activate(connector, handleError);
    console.log("Wallet connecting............");
  };

  const handleError = (err) => {
    const errorString = getConnectionError(err);
    addToast(errorString, { appearance: "error" });
    // closeModal();
  };

  useEffect(
    () => {
      if (active) addToast("Wallet Connected", { appearance: "success" });
    },
    // eslint-disable-next-line
    [active]
  );

  return (
    <section onClick={closeModal}>
      <h2 className="text-white font-bold font-jakarta capitalize text-3xl">
        Connect wallet
      </h2>
      <p className="text-[#BEC9DA] mt-2 font-jakarta">
        Please connect your wallet
      </p>
      <div className="my-4">
        <div
          onClick={() => connectWallet(injected)}
          className="flex items-center border-b border-[#7d92b5] border-opacity-20 p-1 cursor-pointer justify-between"
        >
          <div>
            <p className="text-[#BEC9DA] font-normal font-jakarta">Metamask</p>
          </div>
          <div>
            <Image src={metamask} alt="metamask" />
          </div>
        </div>
        <div
          onClick={() => connectWallet(walletConnect)}
          className="flex items-center border-b border-[#7d92b5] border-opacity-20 p-1 cursor-pointer mt-4 mb-6 justify-between"
        >
          <div>
            <p className="text-[#BEC9DA] font-normal font-jakarta">
              Walletconnect
            </p>
          </div>
          <div>
            <Image src={walletconnect} alt="walletconnect" />
          </div>
        </div>
      </div>
      <p className="text-white">
        Don&rsquo;t have a wallet? Get Metamask
        <Link
          className="cursor-pointer text-blue-300"
          href="https://metamask.io/download/"
          target="_blank"
          rel="noopener"
        >
          here
        </Link>
      </p>
    </section>
  );
}

export default Wallet;
