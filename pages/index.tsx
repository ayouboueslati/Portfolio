import {Flex,Text,Button,Box,useColorMode,Container,Stack,IconButton,Divider} from "@chakra-ui/react";
import { Image } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { useRouter } from "next/router";
import Skills from "./programming_skills";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";


const techCards = [
  { title: "Web", languages: ["PHP", "Symfony", "Next.js"], imagePath: "web.jfif" },
  { title: "Mobile", languages: ["Kotlin", "SwiftUI", "Flutter"], imagePath: "mobile.jpg" },
  { title: "Web3.0", languages: ["Solidity"], imagePath: "blockchain.jpg" },
];

 



 

const TechCard = ({ title, languages, imagePath }: { title: string; languages: string[]; imagePath: string; }) => {
  const { colorMode } = useColorMode();
  const textColor = colorMode === 'light' ? 'black' : 'white';
  const router = useRouter();

  const handleViewProjects = () => {
    router.push(`/projects?tech=${title.toLowerCase()}`);
  };

  return (
    <Card
      className="h-full cursor-pointer transition-transform duration-300 transform hover:scale-105"
      style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
    >
      <CardBody className="p-0 relative h-full">
        <Image
          alt="Card background"
          className="object-cover w-full h-full"
          src={imagePath}
        />
        <Box
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
          style={{ opacity: 0.7 }}
        />
        <Box className="absolute inset-0 p-4 flex flex-col justify-between">
          <Text className="font-bold text-2xl text-white">
            {title}
          </Text>
          <Box>
            <Text color="white" fontSize="sm" className="font-semibold mb-2">Languages:</Text>
            <Flex wrap="wrap" gap={2}>
              {languages.map((lang, index) => (
                <Box key={index} className="bg-white bg-opacity-20 rounded-full px-2 py-1 text-xs text-white">
                  {lang}
                </Box>
              ))}
            </Flex>
            <Button
              onClick={handleViewProjects}
              colorScheme="teal"
              size="sm"
              width="full"
              mt={4}
            >
              View Projects
            </Button>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};





const ContactSection = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  const handleContactPage = () => {
    router.push("/contacts");
  };

  return (
    <Box mt={12}>
      <Text fontSize="3xl" fontWeight="bold" color={colorMode === 'light' ? 'gray.800' : 'white'}>
        Contact Me
      </Text>
      <Text color={colorMode === 'light' ? 'gray.600' : 'gray.300'}  fontStyle={"italic"} fontWeight={"bold"} fontSize={"2xl"}>
        If you d like to get in touch, feel free to reach out!
      </Text>
      <Button
        colorScheme="teal"
        mt={4}
        onClick={handleContactPage}
      >
        Contact Me
      </Button>
    </Box>
  );
};

const Footer = () => (
  <Box
    as="footer"
    bg="gray.900"
    color="gray.200"
    width="100%"
    mt={12}
    py={6} // Added padding for top and bottom
  >
    <Container maxW="container.xl">
      <Stack
        direction={["column", "row"]}
        spacing={8}
        justify="space-between"
        align="center"
        textAlign={["center", "left"]} // Center text on smaller screens
      >
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            Ayoub Oueslati
          </Text>
          <Text fontSize="md" fontWeight="medium" color="gray.400">
            Software Engineering Student
          </Text>
        </Box>
        <Stack direction="row" spacing={4}>
          <IconButton
            as={Link}
            href="https://github.com/ayouboueslati"
            aria-label="GitHub"
            icon={<FaGithub />}
            variant="ghost"
            color="gray.200" // Maintain the color for the icon
            _hover={{ color: "gray.100" }} // Change color on hover
          />
          <IconButton
            as={Link}
            href="https://www.linkedin.com/in/ayoub-weslati-73b697202/"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            variant="ghost"
            color="gray.200" // Maintain the color for the icon
            _hover={{ color: "gray.100" }} // Change color on hover
          />
        </Stack>
      </Stack>
      <Divider my={4} borderColor="gray.700" />
      <Text textAlign="center" fontStyle={"italic"} fontWeight={"bold"} fontSize={"md"}>
        &copy; {new Date().getFullYear()} Ayoub Oueslati. All rights reserved.
      </Text>
    </Container>
  </Box>
);


const Home = () => {
  const { colorMode } = useColorMode();

  return (
    <section className={`relative h-full`}>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text Section */}
          <div className="text-center xl:text-left xl:w-1/2" color={colorMode === 'light' ? 'gray.800' : 'white'}>
            <h1 className={`h1 mb-6 ${colorMode === 'light' ? 'text-gray-800' : 'text-white'}`}>
              Hello I m<br />
              <span className="text-accent">Ayoub Oueslati</span>
            </h1>

            <Text className="font-family" color={colorMode === 'light' ? 'gray.800' : 'white'} fontStyle={"italic"} fontWeight={"bold"} fontSize={"2xl"}>
            I am a Software Engineering student specializing in mobile app development. I create intuitive and engaging applications using Flutter and Dart, focusing on user-friendly interfaces and seamless functionality. Explore my work to see how I blend creativity with technical expertise!            </Text>

            {/* Download CV Button */}
           {/* Download CV Button */}
<Flex alignItems="center" gap={8} mt={4}>
  <a href="AyoubOueslati.pdf" download="Ayoub_cv.pdf">
    <Button
      variant="solid"  // Changed to 'solid' for a more prominent button
      size="lg"
      colorScheme={colorMode === 'light' ? 'blue' : 'yellow'}
      borderRadius="full"  // Full border-radius for a pill-shaped button
      boxShadow="lg"       // Added shadow for depth
      _hover={{
        transform: "translateY(-2px)", // Slight lift effect on hover
        boxShadow: "xl",               // More pronounced shadow on hover
      }}
    >
      Download CV
    </Button>
  </a>

  <Flex gap={4}>
    <a href="https://github.com/ayouboueslati" target="_blank" rel="noopener noreferrer">
      <Text
        fontSize="xl"
        fontWeight="bold"   // Bolder text for prominence
        color={colorMode === 'light' ? 'blue.600' : 'yellow.200'}
        _hover={{
          color: colorMode === 'light' ? 'blue.800' : 'yellow.400',  // Darker color on hover
          textDecoration: "underline",  // Underline for emphasis
          transform: "scale(1.05)",      // Slight zoom effect on hover
        }}
      >
        GitHub
      </Text>
    </a>
    <a href="https://www.linkedin.com/in/ayoub-weslati-73b697202/" target="_blank" rel="noopener noreferrer">
      <Text
        fontSize="xl"
        fontWeight="bold"   // Consistent bold styling
        color={colorMode === 'light' ? 'blue.600' : 'yellow.200'}
        _hover={{
          color: colorMode === 'light' ? 'blue.800' : 'yellow.400',
          textDecoration: "underline",
          transform: "scale(1.05)",
        }}
      >
        LinkedIn
      </Text>
    </a>
  </Flex>
</Flex>

          </div>

          {/* Profile Image */}
          <Box className="xl:w-1/2 mt-8 xl:mt-0 xl:ml-8 flex justify-end">
            <Box className="rounded-full overflow-hidden w-100 h-100">
              <Image
                src="ayoub.jpg"
                alt="Ayoub Oueslati"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </Box>
          </Box>
        </div>

        {/* Technologies Header */}
        <Box textAlign="center" mt={8}>
          <Text
            fontSize="3xl"
            fontWeight="bold"
            color={colorMode === 'light' ? 'gray.800' : 'white'}
            fontFamily="'Montserrat', sans-serif"
            textTransform="uppercase"
            letterSpacing="wide"
            fontStyle={"italic"}
          >

            Technologies
          </Text>
        </Box>

        {/* Tech Cards Section */}
        <Flex justifyContent="center" mt={8} flexWrap="wrap" gap={4}>
          {techCards.map((card, index) => (
            <Box key={index} width={["100%", "48%", "30%"]} mb={4} ml={2}>
              <TechCard title={card.title} languages={card.languages} imagePath={card.imagePath} />
            </Box>
          ))}
        </Flex>


       {/* Skills Section */}
<Box mt={12}>
  <Text fontSize="3xl" fontStyle={'italic'} fontWeight="bold" textAlign="center" mb={4}>Skills</Text>
  <Skills />
</Box>



        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </section>
  );
};

export default Home;
