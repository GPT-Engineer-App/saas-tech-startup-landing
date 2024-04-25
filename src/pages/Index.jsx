import { Box, Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaCloud, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.50" minH="100vh">
      <Flex align="center" justify="center" p={8}>
        <VStack spacing={10}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwwfHx8fDE3MTQwMzY0MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Tech Startup" />
          <Heading as="h1" size="2xl" textAlign="center">
            Innovate with CloudTech
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Revolutionize your business with our cutting-edge cloud solutions.
          </Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="blue" size="lg">
            Get Started
          </Button>
          <Flex gap={5}>
            <Box textAlign="center">
              <FaCloud size="3em" />
              <Text mt={2}>Cloud Services</Text>
            </Box>
            <Box textAlign="center">
              <FaRocket size="3em" />
              <Text mt={2}>Fast Deployment</Text>
            </Box>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
