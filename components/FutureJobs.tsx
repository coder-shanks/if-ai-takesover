import { Card, CardBody, Flex, Heading, Text } from '@chakra-ui/react';
import { TwitterIcon, TwitterShareButton } from 'react-share';

const APP_URL = 'https://if-ai-takesover.vercel.app/';
const HASHTAGS = ['ifAItakesover', 'chatgpt', 'vercel'];

interface FutureJobsProps {
  futureJobs: String;
}

export default function FutureJobs({ futureJobs }: FutureJobsProps) {
  const formattedJobs = futureJobs
    .substring(futureJobs.indexOf('1') + 3)
    .split('2.');

  return (
    futureJobs && (
      <>
        <Heading as="h4" size="lg">
          Your future jobs
        </Heading>
        {formattedJobs.map((formattedJob) => {
          return (
            <Card
              key={formattedJob}
              color="white"
              bgGradient="linear(to-r, #348f50, #56b4d3)"
            >
              <CardBody>{formattedJob}</CardBody>
            </Card>
          );
        })}

        <Flex alignItems="center" gap="8px">
          <Text>Share on </Text>

          <TwitterShareButton
            title={`This app predicted my future jobs if AI takes over the world.\n${futureJobs.toString()}\n`}
            url={APP_URL}
            hashtags={HASHTAGS}
          >
            <TwitterIcon size={32} style={{ borderRadius: '50%' }} />
          </TwitterShareButton>
        </Flex>
      </>
    )
  );
}
