import { useState, useEffect } from 'react';
import {  Text, Flex, Button, Container, useColorMode, Select, Skeleton} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useRouter } from 'next/router';
import projects from '../data/projectsData.js';
import { GetServerSidePropsContext } from 'next/types';

interface Project {
  title: string;
  description: string;
  imagePath: string;
  technology: string;
}

const ProjectsPage = ({ initialProjects, initialTech }: { initialProjects: Project[]; initialTech: string | null }) => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(initialProjects);
  const [selectedTech, setSelectedTech] = useState<string | null>(initialTech);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const projectsPerPage = 1;

  const technologies = Array.from(new Set(initialProjects.map(project => project.technology)));

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after fetching
    }, 2000); // Simulate a 2-second data fetching delay
  }, []);

  // Filter projects based on selected technology
  useEffect(() => {
    if (selectedTech) {
      setFilteredProjects(initialProjects.filter(project => project.technology.toLowerCase() === selectedTech.toLowerCase()));
    } else {
      setFilteredProjects(initialProjects);
    }
  }, [selectedTech, initialProjects]);

  // Pagination Logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const handleTechChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTech = event.target.value;
    setSelectedTech(newTech);
    setCurrentPage(1);
    router.push({
      pathname: '/projects',
      query: newTech ? { tech: newTech } : {},
    }, undefined, { shallow: true });
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredProjects.length / projectsPerPage)) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Flex justifyContent="space-between" alignItems="center" mb={8}>
        <Text fontSize="5xl" fontWeight="bold" color={colorMode === 'light' ? 'gray.800' : 'white'}>
          Projects {selectedTech ? `- ${selectedTech}` : ""}
        </Text>
        <Select placeholder="Filter by technology" value={selectedTech || ''} onChange={handleTechChange} width="200px">
          <option value="">All</option>
          {technologies.map((tech) => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </Select>
      </Flex>

      <Flex wrap="wrap" justify="center" gap={8}>
        {isLoading ? (
          // Display skeletons when loading
          Array.from({ length: projectsPerPage }).map((_, index) => (
            <Flex key={index} w="100%" justify="space-between" alignItems="center">
              <Skeleton height="200px" width="50%" borderRadius="10px" />
              <Skeleton height="250px" width="45%" borderRadius="10px" />
            </Flex>
          ))
        ) : (
          // Display actual content when not loading
          currentProjects.map((project: Project, index: number) => (
            <Flex key={index} w="100%" justify="space-between" alignItems="center">
              {/* Left side: Number, Title, Description, Technology */}
              <Card className="py-4" style={{ width: "50%", height: "auto" }}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <Text className="font-bold text-3xl mb-2" fontFamily="Great Vibes" color={colorMode === 'light' ? 'gray.800' : 'white'}>
                    {String(indexOfFirstProject + index + 1).padStart(2, '0')} {/* Number formatted as 01, 02, etc */}
                  </Text>
                  
                  <Text className="font-bold text-5xl mb-2" fontFamily="BebasNeue-Regular" color={colorMode === 'light' ? 'gray.800' : 'white'}>
                    {project.title} {/* Only project name here */}
                  </Text>

                  <Text fontSize="md" lineHeight="tall" color={colorMode === 'light' ? 'gray.800' : 'white'}>
                    {project.description}
                  </Text>

                  <Text mt={4} className="text-sm uppercase font-bold text-teal-500 mb-2">
                    {project.technology}
                  </Text>
                </CardHeader>
              </Card>

              {/* Right side: Project Image */}
              <Card className="py-4" style={{ width: "45%", height: "auto" }}>
                <CardBody className="overflow-visible py-2">
                  <Image alt={project.title} className="object-cover rounded-xl" src={project.imagePath} width={370} height={250} />
                </CardBody>
              </Card>
            </Flex>
          ))
        )}
      </Flex>

      {/* Pagination controls */}
      <Flex justify="center" mt={8} gap={4}>
        <Button onClick={handlePrevPage} isDisabled={currentPage === 1}>
          Previous
        </Button>
        <Button onClick={handleNextPage} isDisabled={currentPage === Math.ceil(filteredProjects.length / projectsPerPage)}>
          Next
        </Button>
      </Flex>
    </Container>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { tech } = context.query;

  let filteredProjects;
  if (tech && typeof tech === 'string') {
    filteredProjects = projects.filter(project => project.technology.toLowerCase() === tech.toLowerCase());
  } else {
    filteredProjects = projects;
  }

  return {
    props: {
      initialProjects: filteredProjects,
      initialTech: tech || null,
    },
  };
}

export default ProjectsPage;
