import {  Text, Grid, GridItem, Button } from "@chakra-ui/react";

const projects = [
  { title: "Project 1", description: "This is an awesome project about X." },
  { title: "Project 2", description: "This project focuses on Y." },
  { title: "Project 3", description: "A mobile app project focusing on Z." },
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8">
      <Text fontSize="3xl" fontWeight="bold" className="mb-8">
        My Projects
      </Text>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        className="max-w-6xl w-full px-4"
      >
        {projects.map((project, index) => (
          <GridItem
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg"
          >
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              {project.title}
            </Text>
            <Text color="gray.600" mb={4}>
              {project.description}
            </Text>
            <Button
              colorScheme="yellow"
              onClick={() => alert(`${project.title} details coming soon!`)}
            >
              View Details
            </Button>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}
