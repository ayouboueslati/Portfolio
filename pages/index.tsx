import {
  Flex,
  Text,
  Button,
  Box,
  useColorMode,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Progress
} from "@chakra-ui/react";
import { Image } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { useState } from "react";

const techCards = [
  { title: "Web", languages: ["PHP", "Symfony", "Next.js"], imagePath: "web.jfif" },
  { title: "Mobile", languages: ["Kotlin", "SwiftUI", "Flutter"], imagePath: "mobile.jpg" },
  { title: "Web3.0", languages: ["Solidity"], imagePath: "blockchain.jpg" },
];

const projects = [
  { title: "Project One", description: "Brief description of project one.", imagePath: "iqraa.jpg", link: "https://example.com" },
  { title: "Project Two", description: "Brief description of project two.", imagePath: "FootballLogo.jpg", link: "https://example.com" },
  // Add more projects as needed
];

const testimonials = [
  { name: "John Doe", feedback: "Ayoub is a great developer!", role: "Former Mentor" },
  { name: "Jane Smith", feedback: "Impressed with his skills in Flutter.", role: "Project Collaborator" },
  // Add more testimonials as needed
];

const skills = [
  { skill: "Flutter", level: 90 },
  { skill: "Koltin", level: 85 },
  { skill: "SwiftUi", level: 75 },
  { skill: "NodeJs", level: 65 },
  { skill: "NextJs", level: 45 },
  // Add more skills as needed
];

const TechCard = ({ title, languages, imagePath }: { title: string; languages: string[]; imagePath: string; }) => {
  const { colorMode } = useColorMode();
  const textColor = colorMode === 'light' ? 'black' : 'white';

  return (
    <Card
      className="py-4 h-[300px] cursor-pointer transition-transform duration-300 transform hover:scale-105"
      style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Text className="font-bold text-lg transition-colors duration-300 hover:text-accent" color={textColor}>
          {title}
        </Text>
      </CardHeader>
      <CardBody className="overflow-hidden py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl w-full h-full transition-transform duration-500 hover:scale-110"
          src={imagePath}
        />
      </CardBody>
      <CardFooter>
        <Box>
          <Text color={textColor} fontSize="sm" className="font-semibold">Languages:</Text>
          <Flex wrap="wrap" gap={5}>
            {languages.map((lang, index) => (
              <Box key={index} className="bg-gray-200 rounded-full px-2 py-1" color="black">
                {lang}
              </Box>
            ))}
          </Flex>
        </Box>
        <Button
          onClick={() => {/* Logic to open modal or navigate */}}
          colorScheme="teal"
          size="sm"
          mt={2}
        >
          View Projects
        </Button>
      </CardFooter>
    </Card>
  );
};

// const ProjectCard = ({ title, description, imagePath, link }: { title: string; description: string; imagePath: string; link: string; }) => (
//   <Card className="flex flex-col h-full" style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)", transition: "transform 0.3s", "&:hover": { transform: "scale(1.05)" } }}>
//     <CardHeader className="text-center" style={{ fontWeight: "bold" }}>{title}</CardHeader>
//     <CardBody className="flex-grow">
//       <Image src={imagePath} alt={title} className="w-full h-48 object-cover mb-4" />
//       <Text className="text-center">{description}</Text>
//     </CardBody>
//     <CardFooter>
//       <Button as="a" href={link} target="_blank" colorScheme="teal" width="full">View Project</Button>
//     </CardFooter>
//   </Card>
// );



const TestimonialsSection = () => (
  <Box mt={12}>
    <Text fontSize="3xl" fontWeight="bold">Testimonials</Text>
    <Flex justifyContent="center" flexWrap="wrap" gap={4}>
      {testimonials.map((testimonial, index) => (
        <Box key={index} p={4} borderWidth={1} borderRadius="md">
          <Text fontWeight="bold">{testimonial.name}</Text>
          <Text>"{testimonial.feedback}"</Text>
          <Text fontStyle="italic">{testimonial.role}</Text>
        </Box>
      ))}
    </Flex>
  </Box>
);

const SkillsSection = () => (
  <Box mt={12}>
    <Text fontSize="3xl" fontWeight="bold">Skills</Text>
    {skills.map((skill, index) => (
      <Box key={index} mb={4}>
        <Text>{skill.skill}</Text>
        <Progress value={skill.level} />
      </Box>
    ))}
  </Box>
);

const ContactSection = () => (
  <Box mt={12}>
    <Text fontSize="3xl" fontWeight="bold">Contact Me</Text>
    <Text>If you'd like to get in touch, feel free to reach out!</Text>
    <Button colorScheme="teal" mt={4}>Contact Me</Button>
  </Box>
);

const Footer = () => (
  <Box as="footer" mt={12} py={4} textAlign="center" backgroundColor="gray.800" color="white">
    <Text>&copy; 2024 Ayoub Oueslati. All rights reserved.</Text>
  </Box>
);

const Home = () => {
  const { colorMode } = useColorMode();
  const [selectedTech, setSelectedTech] = useState<{ title: string; languages: string[] } | null>(null);

  return (
    <section className={`relative h-full`}>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text Section */}
          <div className="text-center xl:text-left xl:w-1/2" color={colorMode === 'light' ? 'gray.800' : 'white'}>
            <h1 className={`h1 mb-6 ${colorMode === 'light' ? 'text-gray-800' : 'text-white'}`}>
              Hello I'm<br />
              <span className="text-accent">Ayoub Oueslati</span>
            </h1>

            <Text className="font-family" color={colorMode === 'light' ? 'gray.800' : 'white'}>
              I am a computer science student passionate about mobile app development, particularly with Flutter...
            </Text>

            {/* Download CV Button */}
            <Flex alignItems="center" gap={8} mt={4}>
              <a href="AyoubOueslati.pdf" download="Ayoub_cv.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  colorScheme={colorMode === 'light' ? 'blue' : 'yellow'}
                >
                  Download CV
                </Button>
              </a>
              <Flex gap={4}>
                <a href="https://github.com/ayouboueslati" target="_blank" rel="noopener noreferrer">
                  <Text fontSize="xl" color={colorMode === 'light' ? 'blue.600' : 'yellow.200'}>GitHub</Text>
                </a>
                <a href="https://www.linkedin.com/in/ayoub-weslati-73b697202/" target="_blank" rel="noopener noreferrer">
                  <Text fontSize="xl" color={colorMode === 'light' ? 'blue.600' : 'yellow.200'}>LinkedIn</Text>
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
                width={256}
                height={256}
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

        {/* Projects Section */}
        {/* <Box textAlign="center" mt={12}>
          <Text fontSize="3xl" fontWeight="bold">Projects</Text>
          <Flex justifyContent="center" flexWrap="wrap" gap={4} mt={8}>
            {projects.map((project, index) => (
              <Box key={index} width={["100%", "48%", "30%"]}>
                <ProjectCard {...project} />
              </Box>
            ))}
          </Flex>
        </Box> */}

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </section>
  );
};

export default Home;
