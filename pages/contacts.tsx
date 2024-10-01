import { Box, Input, Textarea, Button, FormControl, FormLabel } from "@chakra-ui/react";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Box className="bg-white p-8 shadow-md rounded-lg max-w-xl w-full">
        <FormControl isRequired mb={4}>
          <FormLabel>Your Name</FormLabel>
          <Input placeholder="Enter your name" />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>Your Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>Your Message</FormLabel>
          <Textarea placeholder="Enter your message" />
        </FormControl>
        <Button
          mt={4}
          colorScheme="yellow"
          onClick={() => alert("Message sent!")}
        >
          Send Message
        </Button>
      </Box>
    </div>
  );
}
