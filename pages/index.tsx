import Head from 'next/head';
import { useState } from 'react';
import { Button, Container, Divider, Flex, Heading } from '@chakra-ui/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UserInput, { VibeType } from '@/components/UserInput';
import FutureJobs from '@/components/FutureJobs';

export default function Home() {
  const [currentJob, setCurrentJob] = useState<string>('');
  const [vibe, setVibe] = useState<VibeType>('Fantasy');
  const [futureJobs, setFutureJobs] = useState<String>('');
  const [loading, setLoading] = useState<boolean>(false);

  const prompt = `If AI takes over the world, predict 2 future jobs with a ${vibe} vibe and descriptions having less than 50 characters clearly labeled "1." and "2." for a person with current job as a ${currentJob}.`;

  const generateFutureJobs = async (e: any) => {
    e.preventDefault();
    setFutureJobs('');
    setLoading(true);
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      setLoading(false);
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setFutureJobs((prev) => prev + chunkValue);
    }
    setLoading(false);
  };

  return (
    <Container maxW="4xl" minH="100vh" centerContent>
      <Head>
        <title>If AI Takes Over</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Divider />
      <Flex
        as="main"
        direction="column"
        gap={8}
        alignItems="center"
        width="100%"
        flexGrow={1}
        padding="2rem 0"
      >
        <Heading as="h2" size="2xl" textAlign="center">
          Predict your future job if AI takes over
        </Heading>

        <UserInput
          currentJob={currentJob}
          setCurrentJob={setCurrentJob}
          vibe={vibe}
          setVibe={setVibe}
        />

        <Button
          colorScheme="teal"
          onClick={(e) => generateFutureJobs(e)}
          isLoading={loading}
          isDisabled={!currentJob}
        >
          What will you do in future?
        </Button>

        <FutureJobs futureJobs={futureJobs} />
      </Flex>
      <Divider />
      <Footer />
    </Container>
  );
}
