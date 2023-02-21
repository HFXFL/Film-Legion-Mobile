import styles from '@/styles/Custom.module.css';
import { Button, HStack, Image } from "@chakra-ui/react";
import Head from "next/head";
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
  IoMenuSharp,
  IoSearchSharp
} from "react-icons/io5";

import { MdAccountCircle } from "react-icons/md";



export default function Home (){
  return (
    <>
    <Head>
        <title>Film-Legion</title>
        <meta name="description" content="Film, NFT's, Web3, Movies, Blockchain, Cryptocurrency, Hedge-FX" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h4 className={styles.main}>
      Film-Legion presents the all new Scannan Collection.
    </h4>

    {/* <Box pb={'30px'}>
      <h4 className={styles.main}>Socials Here in a GRID</h4>
    </Box> */}

    <HStack p={'20'} ml={'25%'} gap={'5'}>
      <IoLogoYoutube size={'20px'} color='#bab3b3' />
      <IoLogoTwitter size={'20px'} color='#bab3b3' />
      <IoLogoInstagram size={'20px'} color='#bab3b3' />
      <Button colorScheme={'green'}>METAMASK</Button>
    </HStack>
      <hr/>

    <HStack gap={'20'}>
    <Image
      mr={'30%'}
      width={'20vw'}
      pt={'15px'}
      pb={'10px'}
      src='https://res.cloudinary.com/ddyecvz0i/image/upload/v1676487528/FL/fllogo_m8xsex.png'
      alt='Fl-Logo'
      />
      <MdAccountCircle size={'30px'} color='#55ff00' />
      <IoSearchSharp size={'30px'} color='#55ff00' />
      <IoMenuSharp size={'30px'} color='#55ff00' />
    </HStack>
<Image
    width={'100vw'}
    height={'50vw'}
    mb={'40px'}
    src='https://res.cloudinary.com/ddyecvz0i/image/upload/v1676410495/FL/image001_1_gmdscx.png'
    alt='ScannanImage'
  /> 
        <div className={styles.title}
          >
            <h3>
            Here's your chance to win a grand prize, from $1,000! 
            </h3>
        </div>
        

        <div className={styles.title}>
            <h3>
            Crowdfund this film and raise awareness of mental health.
            </h3>
            <div className={styles.description}>
            <p>
            We are using NFTs differently, are you up to the challenge? This is your chance to win a cash or crypto prize with the Scannan series and Film-Legion. Each NFT cost between ¢50 and $1.20 (in MATIC), and you will be assisting in the funding of critical research into severe, enduring mental health and physical health disorders. You will also be crowdfunding the production of Scannan, a 3-part feature length series, 30 YEARS in the making. Only on FilmLegion.com

            </p>
        </div>
        </div>
 
        <div className={styles.description}>
        <p>
            A single cryptic clue is hidden within these images. You must collect all of the correct characters to recieve a secret question. Follow the questions to get closer to the ever growing prize, and a guarenteed $1,000. Please sell at least 2 NFTs to WIN, and sell more so others may participate and raise money for producing Scannan, and fund these worthy causes.
        </p>
        </div>

        <div className={styles.nftTitle}>
        <p>
          See The Collections
        </p>
        </div>


    </>
  )
}