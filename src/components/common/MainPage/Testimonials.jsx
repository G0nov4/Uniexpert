import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
      noOfLines={3}
      >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading colorScheme="yellow" variant="custom">Nuestros expositores dijeron</Heading>
          <Text>Nosotros estamos trabajando por hacer todo mas facil por ti</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Colaboracion efficiente</TestimonialHeading>
              <TestimonialText>
                Tu puedes registrarte como tu quieras, dependediendo si quieres ser Participante, Expositor. En los siguientes enlaces de aqui abajo....Tu puedes registrarte como tu quieras, dependediendo si quieres ser Participante, Expositor. En los siguientes enlaces de aqui abajo.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://random.imagecdn.app/400/150'
              }
              name={'Jane Cooper'}
              title={'CEO at ABC Corporation'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Diseño intiutivo</TestimonialHeading>
              <TestimonialText>
              Tu puedes registrarte como tu quieras, dependediendo si quieres ser Participante, Expositor. En los siguientes enlaces de aqui abajo....Tu puedes registrarte como tu quieras, dependediendo si quieres ser Participante, Expositor. En los siguientes enlaces de aqui abajo....
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://random.imagecdn.app/300/150'
              }
              name={'Jane Cooper'}
              title={'CEO at ABC Corporation'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Facil de usar</TestimonialHeading>
              <TestimonialText noof>
              Tu puedes registrarte como tu quieras, dependediendo si quieres ser Participante, Expositor. En los siguientes enlaces de aqui abajo....Tu puedes registrarte como tu quieras, dependediendo si quieres ser Participante, Expositor. En los siguientes enlaces de aqui abajo....
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://random.imagecdn.app/500/150'
              }
              name={'Jane Cooper'}
              title={'CEO at ABC Corporation'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}