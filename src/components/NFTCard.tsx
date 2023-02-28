import styles from '@/styles/Custom.module.css';
import { Box, Image, Text } from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";

export default function NFTCard({
  nft,
}: {
  nft: {
    tokenUri: string;
    name: string;
    price?: string;
  };
  
}) {
  return (
    <>
    <div>
      <MediaRenderer
        src={nft.tokenUri}
        style={{
          objectFit: 'fill',
          width: '90vw',
          height: '80vw',
          position: 'relative',
          
        }} />
      <div>
        {nft.price && (
          <Box
            bgColor={'#ffffff'}
            boxShadow={'1px 3px 3px #000000'}
            h={'28vw'}
            w={'90vw'}
            mb={'30px'}
            
          >
            <div>
              <Text className={styles.cardTitle}>{nft.name} </Text>
              <div className={styles.cardTitle}>
                <Image src="https://res.cloudinary.com/ddyecvz0i/image/upload/v1671484930/FL/polygon-matic-logo_bxukaf.png" height={25} width={25}>
                </Image>
                </div>
                <div className={styles.cardPrice}>
                <Text>Price: {nft.price} Matic</Text>
              </div>
            </div>
          </Box>
        )}
      </div>
    </div>
    </>
  );
}
