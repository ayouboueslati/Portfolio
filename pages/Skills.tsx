import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";

const skills = [
  { skill: "Flutter", level: 90 },
  { skill: "Kotlin", level: 85 },
  { skill: "SwiftUI", level: 75 },
  { skill: "NodeJs", level: 65 },
  { skill: "NextJs", level: 45 },
  // Add more skills as needed
];

const SkillBar = ({ skill, level }: { skill: string; level: number }) => {
  const fillColor = useColorModeValue("teal.500", "teal.300");
  const bgColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box mb={4}>
      <Flex justify="space-between" align="center" mb={2}>
        <Text fontWeight="medium">{skill}</Text>
        <Text fontWeight="medium">{level}%</Text>
      </Flex>
      <Box h="8px" w="100%" bg={bgColor} borderRadius="full" overflow="hidden">
        <Box
          h="100%"
          w={`${level}%`}
          bg={fillColor}
          borderRadius="full"
          transition="width 0.5s ease-in-out"
        />
      </Box>
    </Box>
  );
};

export const SkillsSection = () => {
  const titleColor = useColorModeValue("gray.800", "white");

  return (
    <Box mt={12}>
      <Text fontSize="3xl" fontWeight="bold" mb={6} color={titleColor}>
        Skills
      </Text>
      {skills.map((skill, index) => (
        <SkillBar key={index} skill={skill.skill} level={skill.level} />
      ))}
    </Box>
  );
};
