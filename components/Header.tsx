import { Box, Circle, Heading, Spacer } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logolink}>
        <Image
          alt="header text"
          src="/appLogo.png"
          width={48}
          height={48}
          style={{ borderRadius: '8px' }}
        />
        <Heading
          as="h3"
          size="lg"
          bgGradient="linear(to-r,#11998e, #38ef7d)"
          bgClip="text"
        >
          If AI Takes Over
        </Heading>
      </Link>

      <Spacer />
      <Box>
        <a
          href="https://twitter.com/fighter_shanks"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            alt="Straw Hat Icon"
            src="/strawHatLogo.jpg"
            width={36}
            height={36}
            style={{ borderRadius: '50%' }}
          />
        </a>
      </Box>
    </header>
  );
}
