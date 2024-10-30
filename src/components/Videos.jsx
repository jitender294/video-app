import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
  const videosArr = [
    'https://rococo-salamander-b3c33d.netlify.app/videoplayback%20(1).mp4',
    'https://venerable-trifle-c3c431.netlify.app/Disk%20Brake%20VS%20Drum%20Brake%20Which%20System%20Is%20Best%20In%20Motorcycle.mp4',
    'https://glittering-cobbler-613153.netlify.app/videoplayback.mp4',
    'https://wonderful-baklava-20f13a.netlify.app/videoplayback.mp4',
    ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{
            width: '100%',
          }}
        ></video>

        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Video 1</Heading>
          <Text>
            This is a sample video for testing and demo. This is called
            description.
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p="8"
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => setVideoSrc(item)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
