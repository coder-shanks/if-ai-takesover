import { Card, CardBody, Heading } from '@chakra-ui/react';

interface FutureJobsProps {
  futureJobs: String;
}

export default function FutureJobs({ futureJobs }: FutureJobsProps) {
  return (
    futureJobs && (
      <>
        <Heading as="h4" size="lg">
          Your future jobs
        </Heading>
        {futureJobs
          .substring(futureJobs.indexOf('1') + 3)
          .split('2.')
          .map((futureJob) => {
            return (
              <Card
                key={futureJob}
                color="white"
                bgGradient="linear(to-r, #348f50, #56b4d3)"
              >
                <CardBody>{futureJob}</CardBody>
              </Card>
            );
          })}
      </>
    )
  );
}
