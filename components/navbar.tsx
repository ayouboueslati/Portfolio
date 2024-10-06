import { Box, Text, Button, useColorMode, IconButton, Avatar, Flex } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      justify="space-between"
      align="center"
      p={4}
      bg={colorMode === "light" ? "white" : "gray.800"}
      color={colorMode === "light" ? "black" : "white"}
    >
 <Flex
  align="center"
  justify={{ base: "center", md: "start" }}
>
  <Link href="/" passHref>
    <Flex align="center" cursor="pointer">
      <Avatar
        name="Ayoub Oueslati"
        src="/ayoub.jpg"
        size="sm"
      />
      <Text fontSize="lg" ml={2}>
        Software Engineer
      </Text>
    </Flex>
  </Link>
</Flex>

      <Flex
        align="center"
        justify={{ base: "center", md: "end" }}
        mt={{ base: 4, md: 0 }}
        flexDir={{ base: "column", md: "row" }}
      >
        <Link href="/projects" passHref>
          <Button
            as="a"
            variant="ghost"
            colorScheme={colorMode === "light" ? "blue" : "yellow"}
            mr={{ base: 0, md: 4 }}
            mb={{ base: 2, md: 0 }}
          >
            Projects
          </Button>
        </Link>
        
        <Link href="/contacts" passHref>
  <Button
    as="a"
    variant="ghost"
    colorScheme={colorMode === "light" ? "blue" : "yellow"}
    mb={{ base: 2, md: 0 }}
  >
    Contact
  </Button>
</Link>


        <IconButton
          aria-label="Toggle theme"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          ml={{ base: 0, md: 4 }}
          mt={{ base: 2, md: 0 }}
        />
      </Flex>
    </Flex>
  );
}
