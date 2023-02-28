import Body from '@/components/Body';
import styles from '@/styles/Custom.module.css';
import { Box, Button, HStack, Image, Stack } from "@chakra-ui/react";
import Head from "next/head";
import { GiBreakingChain, GiFilmSpool, GiFilmStrip, GiHammerBreak } from "react-icons/gi";
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
<Image
    width={'120%'}
    height={'120%'}
    mb={'40px'}
    src='https://res.cloudinary.com/ddyecvz0i/image/upload/v1677090721/FL/BG_Mobile_pfiskh.png'
    alt='ScannanImage'
  /> 
        <div className={styles.title}
          >
            <h2>
            Here is your chance to win a grand prize, from $1,000! 
            </h2>
        </div>
        

        <div className={styles.title}>
            <h3>
            Crowdfund this film and raise awareness of mental health.
            </h3>
            <div className={styles.description}>
            <h4>
            We are using NFTs differently, are you up to the challenge? This is your chance to win a cash or crypto prize with the Scannan series and Film-Legion. Each NFT cost between ¢50 and $1.20 (in MATIC), and you will be assisting in the funding of critical research into severe, enduring mental health and physical health disorders. You will also be crowdfunding the production of Scannan, a 3-part feature length series, 30 YEARS in the making. Only on FilmLegion.com
            </h4>
        </div>
        
        <div className={styles.description}>
        <h4>
            A single cryptic clue is hidden within these images. You must collect all of the correct characters to recieve a secret question. Follow the questions to get closer to the ever growing prize, and a guarenteed $1,000. Please sell at least 2 NFTs to WIN, and sell more so others may participate and raise money for producing Scannan, and fund these worthy causes.
        </h4>
        </div>
        </div>
 
        <div className={styles.nftTitle}>
        <h2>
          See The Collections
        </h2>

        </div>
        <div className={styles.placeholder}>
        <Box w={'90vw'} h={'100vw'} bg={'#212121'}> </Box>
        </div>

        <Stack w={'100vw'} h={'100%'} bg={'#ffffff'}>
       <div className={styles.whiteTitles}>
        <h1>
          Explore Scannan
        </h1>
       </div>
        <div>
        <HStack p={'20'} ml={35} gap={'5'}>
        
        <Button 
        w={'140px'} 
        h={'50'}
        p={'20'}
        borderRadius={'0.5rem'}
        bg={'#ffffff'}
        borderColor={'mediumpurple'}
        >
        <h3>
        All NFTs
        </h3>
        </Button>
        <Button 
        w={'140px'} 
        h={'50'} 
        borderRadius={'0.5rem'}
        bg={'#ffffff'}
        borderColor={'mediumpurple'}
        > 
        <h3>
        Filter by Wave
        </h3>
      </Button>
          
        </HStack>
      </div>
      <Body />
      <h4> use show more filter</h4>
        </Stack>

      <Stack w={'100vw'} h={'100vw'} bg={'#000000'}>
        <div className={styles.main}>
        <h1>
          Collect and Sell Your NFTs
        </h1>
        <h4 className={styles.descriptionCentred}>
          Film-Legion is dedicated to offering safe and vetted projects as well as helping them grow their own fan base.
        </h4>
        </div>
        
        <div className={styles.descIcons}>
        <GiBreakingChain size={'50px'} />
        </div>
        <h1 className={styles.blackTitles}>
          Blockchain Entertainment
        </h1>
        <h4 className={styles.descriptionLeft}>
        The new generation of unparalleled media engagement. Support the latest film makers by purchasing their crowdfunding tokens and NFTs, take part in airdrops, and stream their latest work. All in one place!
        </h4>


        <div className={styles.descIcons}>
        <GiHammerBreak size={'50px'} />
        </div>
        <h1 className={styles.blackTitles}>
          Building Legions of Fans
        </h1>
        <h4 className={styles.descriptionLeft}>
          Film-Legion allows you to privately own dedicated project tokens and NFT's that represent the level of support for a campaign. After the launch, you will be able to exchange these for exclusive rewards, swap on a DEX, or sell them. 
        </h4>


        <div className={styles.descIcons}>
        <GiFilmStrip size={'50px'} />
        </div>

        
        <h1 className={styles.blackTitles}>
          Get Made!
        </h1>
        <h4 className={styles.descriptionLeft}>
          See how you can get your showcase on this platform! Hedge-FX is here to help by offering access to the Web3 world tailored to your project. If you are starting from script, need a streaming stage, or raising capital, we will scale to your needs with zero upfront, always.  
        </h4>


        <div className={styles.descIcons}>
        <GiFilmSpool size={'50px'} />
        </div>

        <h1 className={styles.blackTitles}>
          Get Behind the Scenes
        </h1>
        <h4 className={styles.descriptionLeft}>
          Keep up to date with how a project is progressing with news, podcasts, and behind the scenes footage, before the red carpet rolls out. Use these features to help make an informed decision about your crowdfinding options. Equity and steaking may also be available, depending on your interest. Join our community to discuss with other like minded Legionaries.  
        </h4>
      </Stack>

    </>
  )
}