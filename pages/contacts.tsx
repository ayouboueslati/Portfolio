import { Box, VStack, HStack, Text, useColorModeValue, Link } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";

export default function Contact() {
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center" bg={useColorModeValue("gray.100", "gray.900")}>
      <Box  p={8} shadow="xl" borderRadius="lg" maxW="md" w="full">
        <VStack spacing={6} align="stretch">
          <Text fontSize="3xl" fontWeight="bold" textAlign="center" color={textColor}>
            Contact Information
          </Text>

          <HStack spacing={4}>
            <Box as={FaPhone} size="24px" color="yellow.500" />
            <Text color={textColor}>+216 28 560 384</Text>
          </HStack>

          <HStack spacing={4}>
            <Box as={FaEnvelope} size="24px" color="yellow.500" />
            <Link href="mailto:contact@example.com" color={textColor}>
              ayoubweslati00@gmail.com
            </Link>
          </HStack>

          <HStack spacing={4}>
            <Box as={FaMapMarkerAlt} size="24px" color="yellow.500" />
            <Text color={textColor}>Mgerine, Tunisia</Text>
          </HStack>


        </VStack>
      </Box>
    </Box>
  );
}
