import { Button } from "@chakra-ui/react";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
import { signIn, SignInResponse } from "next-auth/react";
import { useRouter } from "next/router";
import { useAccount, useConnect, useDisconnect, useSignMessage } from "wagmi";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

function SignIn(): JSX.Element {
  const { connectAsync } = useConnect({
    connector: new WalletConnectConnector({ options: { qrcode: true } }),
  });
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();
  const { push } = useRouter();

  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync();

    const challenge = await requestChallengeAsync({
      address: account,
      chainId: chain.id,
    });

    if (!challenge) {
      console.error("Challenge not received");
      return;
    }

    const { message } = challenge;

    const signature = await signMessageAsync({ message });

    // redirect user after success authentication to '/user' page
    const signInResponse: SignInResponse | undefined = await signIn("moralis-auth", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/",
    });

    if (signInResponse?.url) {
      push(signInResponse.url);
    }
  };

  return (
    <div>
      <Button
      bg={'mediumpurple'} 
      border={'1px'} 
      colorScheme={'green'}
      borderRadius={'0.5rem'}
      w={'120px'}
      h={'45px'}
      onClick={handleAuth}>
    <h3>
      CONNECT
    </h3>
      </Button>
    </div>
  );
}

export default SignIn;
