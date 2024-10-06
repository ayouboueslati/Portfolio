import { Card, CardBody, Box, Text, Image } from "@chakra-ui/react";
import { useState } from "react";

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const languages = [
    {
      name: "Flutter",
      img: "flutter.svg",
    },
    {
      name: "Kotlin",
      img: "kotlin.png",
    },
    {
      name: "SwiftUI",
      img: "swift.png",
    },
    {
      name: "NextJs",
      img: "nextjs.svg",
    },
    {
      name: "Java",
      img: "java.webp",
    },
    {
      name: ".Net",
      img: "net.webp",
    },
    {
      name: "Nodejs",
      img: "node.png",
    },
    {
      name: "PHP",
      img: "php.png",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {languages.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          onClick={() => console.log("item pressed")}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          position="relative"
        >
          <CardBody className="flex items-center justify-center p-4">
            <Image
              shadow="sm"
              borderRadius="lg"
              width="50px"
              height="50px"
              src={item.img}
              alt={item.name}
              objectFit="contain"
            />
            {hoveredIndex === index && (
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="rgba(0,0,0,0.7)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="lg"
              >
                <Text color="white" fontWeight="bold">{item.name}</Text>
              </Box>
            )}
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
