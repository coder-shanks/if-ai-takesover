import { Box, Text, Input, RadioGroup, Stack, Radio } from '@chakra-ui/react';

export type VibeType = 'Fantasy' | 'Funny' | 'Professional';
let vibes: VibeType[] = ['Fantasy', 'Funny', 'Professional'];
const MAX_INPUT_LENGTH = 30;

interface UserInputProps {
  currentJob: string;
  setCurrentJob: (job: string) => void;
  vibe: VibeType;
  setVibe: (vibe: VibeType) => void;
}

export default function UserInput({
  currentJob,
  setCurrentJob,
  vibe,
  setVibe,
}: UserInputProps) {
  return (
    <>
      <Box>
        <Text marginBottom="8px">Mention your current job in 2-3 words</Text>
        <Input
          focusBorderColor="teal.500"
          variant="outline"
          placeholder="finance influencer"
          value={currentJob}
          maxLength={MAX_INPUT_LENGTH}
          onChange={(e) => setCurrentJob(e.target.value)}
        />
      </Box>

      <Box>
        <Text marginBottom="8px">Select a vibe</Text>

        <RadioGroup
          colorScheme="teal"
          onChange={(val) => setVibe(val as VibeType)}
          value={vibe}
        >
          <Stack direction="row">
            {vibes.map((vb) => (
              <Radio key={vb} value={vb}>
                {vb}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </Box>
    </>
  );
}
