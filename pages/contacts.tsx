import { Box, VStack, HStack, Text, useColorModeValue, Container, Image, SimpleGrid, Icon, Divider, Card,Flex } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaQuoteLeft, FaTrophy, FaUsers, FaGlobe, FaAward } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';
import {Emoji} from 'emoji-mart';


export default function AboutUs() {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const accentColor = useColorModeValue("yellow.500", "yellow.300");
  const cardBgColor = useColorModeValue("white", "gray.700");

  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const achievements = [
    { icon: FaTrophy, number: 3, text: "Technologies Certified" },
    { icon: FaUsers, number: 3, text: "internships completed" },
    { icon: FaGlobe, number: 4, text: "languages spoken" },
    { icon: FaAward, number: 10, text: "projects completed" },
  ];

  return (
    <Box minHeight="100vh" bg={bgColor} py={16}>
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <Box textAlign="center">
            <Text fontSize="4xl"  color={textColor} mb={4}  fontStyle={"italic"} fontWeight={"bold"} >
              Contact Me
            </Text>
            <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.400")} fontStyle={"italic"} fontWeight={"bold"} >
  Contact me if you need a work to be done{" "}
  <span role="img" aria-label="wink">😉</span>
</Text>

          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Image
                src="ayoub.jpg"
                alt="Company Image"
                borderRadius="lg"
                objectFit="cover"
                w="full"
                h={{ base: "200px", md: "300px" }}
              />
            </Box>
            <VStack align="start" spacing={6}>
              <Text fontSize="2xl" fontWeight="bold" color={textColor} fontStyle={"italic"} >
                Our Story
              </Text>
              <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.400")} fontStyle={"italic"} fontWeight={"bold"} >
  Contact me if you need a work to be done{" "}
  <span role="img" aria-label="wink">😉</span>
</Text>
              <HStack spacing={4}>
                <Icon as={FaQuoteLeft} color={accentColor} boxSize={8} />
                <Text fontStyle="italic" color={textColor}  fontWeight={"semibold"} fontSize={"2xl"}>
                  "Innovation is not just about ideas, it's about making ideas happen."
                </Text>
              </HStack>
            </VStack>
          </SimpleGrid>

          <Divider />

          <Box>
            <Text fontSize="2xl" fontWeight="semibold" color={textColor} mb={6} fontStyle={"italic"} >
              Contact Information
            </Text>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              <HStack spacing={4}>
                <Icon as={FaPhone} color={accentColor} boxSize={6} />
                <Text color={textColor} fontStyle={"italic"} fontWeight={"bold"} fontSize={"2xl"}>
                  +216 28 560 384
                </Text>
              </HStack>
              <HStack spacing={4}>
                <Icon as={FaEnvelope} color={accentColor} boxSize={6} />
                <Text color={textColor}fontStyle={"italic"} fontWeight={"bold"} fontSize={"2xl"}>
                  ayoubweslati00@gmail.com
                  </Text>
              </HStack>
              <HStack spacing={4}>
                <Icon as={FaMapMarkerAlt} color={accentColor} boxSize={6} />
                <Text color={textColor}fontStyle={"italic"} fontWeight={"bold"} fontSize={"2xl"}>
                  Mgerine, Tunisia
                  </Text>
              </HStack>
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
      <Box ref={ref}>
            <Text fontSize="2xl" margin={8} fontWeight="semibold" color={textColor} mb={6} textAlign={"center"}>
              Our Achievements
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              {achievements.map((achievement, index) => (
                <Box
                  key={index}
                  bg={cardBgColor}
                  p={6}
                  borderRadius="lg"
                  boxShadow="md"
                  textAlign="center"
                >
                  <Flex justifyContent="center" mb={4}>
                    <Icon as={achievement.icon} color={accentColor} boxSize={12} />
                  </Flex>
                  <Text color={textColor} fontWeight="bold" fontSize="3xl" mb={2}>
                    {inView ? (
                      <CountUp end={achievement.number} duration={4} />
                    ) : (
                      '0'
                    )}
                    {achievement.number > 10 ? '+' : ''}
                  </Text>
                  <Text color={textColor} fontWeight="medium">
                    {achievement.text}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
    </Box>
   
  );
}