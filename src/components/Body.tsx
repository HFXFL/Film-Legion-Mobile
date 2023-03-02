import { Box, Text, VStack } from '@chakra-ui/react';
import {
  useActiveListings,
  useContract
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import Link from "next/link";
import NFTCard from "./NFTCard";

const Body: NextPage = () => {
  const { contract } = useContract(
    "0xeA8B599cECEFB601D35923cd4A59C6e95272BEc4",
    "marketplace"
  );

  const { data: nfts, isLoading } = useActiveListings(contract);

  if (isLoading) {
  return (
    <Text
    fontSize='xl'
    >Loading Scannan...</Text>
  );
}
  return (
  
  <>
    <Box >
   <VStack >
      {nfts &&
        nfts.map((nft) => {
          return (
            <Link
              href={`/assets/${nft.id}`}
              key={nft.assetContractAddress + nft.id}
            >
              <Link href={`/assets/${nft.id}`}
                    key={nft.assetContractAddress + nft.id}>
                <NFTCard
                  nft={{
                    name: nft.asset.name as string,
                    tokenUri: nft.asset.image as string,
                    price: nft.buyoutCurrencyValuePerToken?.displayValue,
                  }} />
              </Link>
            </Link>
          );
        })}
    </VStack>
    </Box>


    </>
  
  );
};

export default Body;