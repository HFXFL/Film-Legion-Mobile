import styles from '@/styles/Custom.module.css';
import { Box, Button, Divider, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { useContract, useListing } from "@thirdweb-dev/react";
import Head from 'next/head';
//import { Header } from "components/modules";
import { useRouter } from "next/router";
import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube, IoMenuSharp, IoSearchSharp } from 'react-icons/io5';
import { MdAccountCircle } from 'react-icons/md';
//import { logo } from '../../src/components/helpers/logo';


export default function NFT() {
  const router = useRouter();
  const { listingId } = router.query;
  const { contract } = useContract(
    "0xeA8B599cECEFB601D35923cd4A59C6e95272BEc4",
    "marketplace",
  );

  const { data: nft, isLoading } = useListing(contract, listingId as string);
  if (isLoading || !nft) {
    return (
      <Text pl={'45vw'} pt={'20vw'}>Loading Project...</Text>
    );
}
  return (
    <>

        <Head>
        <title>Film-Legion</title>
        <meta name="description" content="Film, NFT's, Web3, Movies, Blockchain, Cryptocurrency, Hedge-FX" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text className={styles.listingHeader}> What do you see in {nft?.asset?.name}?</Text>


    <HStack p={'20'} ml={'25%'} gap={'5'}>
      <IoLogoYoutube size={'20px'} color='#bab3b3' />
      <IoLogoTwitter size={'20px'} color='#bab3b3' />
      <IoLogoInstagram size={'20px'} color='#bab3b3' />

      <Button 
      bg={'mediumpurple'} 
      border={'1px'} 
      colorScheme={'green'}
      borderRadius={'0.5rem'}
      w={'120px'}
      h={'45px'}
      
      >
    <h3>
      METAMASK
    </h3>
      </Button>


    </HStack>
      <hr/>

    <HStack gap={'20'}>
    <Image
      onClick={() => router.back()}
      mr={'30%'}
      width={'20vw'}
      pt={'15px'}
      pb={'10px'}
      src='https://res.cloudinary.com/ddyecvz0i/image/upload/v1676487528/FL/fllogo_m8xsex.png'
      alt='Fl-Logo'
      />
      <MdAccountCircle size={'30px'} color='#55ff00' />
      <IoSearchSharp size={'30px'} color='#55ff00' />
      <IoMenuSharp size={'30px'} color='#ffffff' />
    </HStack>
  
    <Stack className={styles.listingStack}>
        {/* <Icon
          onClick={() => router.back()}
          color={'#ffffff'}
          as={BsArrowLeftSquare}
          h={'80'}
          w={'80'}
      /> */}

{/* {logo && 
      logo.map((e) => ( 
  <Image
    w={'600px'}
    h={'100px'}
    mx={'100px'}
    mt={'7vw'}

    src={e.Logo} 
    /> ))} */}




       
        {/* <Image src={`/matic-logo.png`} height={20} width={20} /> */}

        <div>
       <Text className={styles.listingTitle} >{nft?.asset?.name}</Text>
       
        <Image
          src={nft?.asset.image as string}
          width={'100vw'}
          height={'100vw'}
          p={'4'}
       
          mb={10}
          />
   </div>       

        {/* <Text pt={10} ml={'-80'}>Owner: {nft?.sellerAddress}</Text> */}

<Divider pt={10} mb={'10'} orientation='vertical' color={'#000000'}  />


<div>
<Box
mt={'10'}>


    <iframe
    src={`https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/marketplace.html?contract=0xeA8B599cECEFB601D35923cd4A59C6e95272BEc4&chainId=80001&listingId=${nft.id}&theme=dark&primaryColor=black`}
    width="400px"
    height="400px">
    </iframe>
</Box>
</div>

<Text className={styles.listingOwner} >Owner: {nft?.sellerAddress}</Text>
<Box
pb={'20'}> 
</Box>
  </Stack>
  <a href='https://www.thirdweb.com' rel="noopener noreferrer" target="_blank">
<Image w={'100px'} h={'30px'} src="https://res.cloudinary.com/ddyecvz0i/image/upload/v1673130522/FL/Thirdweblogo_nnvagy.png">
</Image>   
</a>   
</>
     
  );
}

