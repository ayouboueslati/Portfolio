import { Text, Button, useColorMode, IconButton, Avatar, Flex, Box, useDisclosure } from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={4}
      bg={colorMode === "light" ? "#F0F4F8" : "#2D3748"} // Light Gray-Blue for light mode, Charcoal for dark mode
      color={colorMode === "light" ? "#2D3748" : "#F7FAFC"} // Charcoal text for light mode, Light Gray for dark mode
    >
      <Flex align="center">
        <Link href="/" passHref>
          <Flex align="center" cursor="pointer">
            <Avatar name="Ayoub Oueslati" src="/ayoub.jpg" size="sm" />
            <Text fontSize="lg" ml={2} display={{ base: "none", md: "block" }} fontStyle={"italic"} fontWeight={"bold"} >
              Software Engineer
            </Text>
          </Flex>
        </Link>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={onToggle}>
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="outline"
          aria-label="Toggle Navigation"
        />
      </Box>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "center" }}
          justify={{ base: "center", md: "flex-end" }}
          w="100%"
        >
          <Link href="/projects" passHref>
            <Button
              as="a"
              variant="ghost"
              colorScheme={colorMode === "light" ? "blue" : "yellow"}
              w={{ base: "full", md: "auto" }}
              mb={{ base: 2, md: 0 }}
              mr={{ base: 0, md: 4 }}
              _hover={{ bg: colorMode === "light" ? "#63B3ED" : "#4A5568" }} // Hover effect
              _active={{ bg: colorMode === "light" ? "#3182CE" : "#2D3748" }} // Active effect
            >
              Projects
            </Button>
          </Link>
          <Link href="/contacts" passHref>
            <Button
              as="a"
              variant="ghost"
              colorScheme={colorMode === "light" ? "blue" : "yellow"}
              w={{ base: "full", md: "auto" }}
              mb={{ base: 2, md: 0 }}
              mr={{ base: 0, md: 4 }}
              _hover={{ bg: colorMode === "light" ? "#63B3ED" : "#4A5568" }} // Hover effect
              _active={{ bg: colorMode === "light" ? "#3182CE" : "#2D3748" }} // Active effect
            >
              Contact
            </Button>
          </Link>
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            size="md"
            colorScheme={colorMode === "light" ? "blue" : "yellow"} // Matching icon color with theme
          />
        </Flex>
      </Box>
    </Flex>
  );
}
