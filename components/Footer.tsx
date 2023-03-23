import { Box, Flex, Link, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Footer() {
  return (
    <Flex as="footer" width="100%" padding="1rem 0.5rem">
      <Box>
        Powered by{' '}
        <Link
          href="https://openai.com/blog/chatgpt"
          target="_blank"
          rel="noreferrer"
          color="teal.500"
          fontWeight="500"
        >
          ChatGPT
        </Link>
        ,{' '}
        <Link
          href="https://chakra-ui.com/"
          target="_blank"
          rel="noreferrer"
          color="teal.500"
          fontWeight="500"
        >
          Chakra UI{' '}
        </Link>
        and{' '}
        <Link
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer"
          color="teal.500"
          fontWeight="500"
        >
          Vercel
        </Link>
      </Box>
      <Spacer />
      <Box>
        Inspired by{' '}
        <Link
          as={NextLink}
          target="_blank"
          href="https://twitter.com/nutlope"
          color="teal.500"
          fontWeight="500"
        >
          @nutlope
        </Link>
      </Box>
    </Flex>
  );
}
