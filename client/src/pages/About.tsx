import React from "react";
import { Box, Container } from "@chakra-ui/react";

const About = () => {
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>About The Developer</h1>
      <Box>
        <p style={{ textAlign: "center" }}>
          Brennan Lazzara is a Senior Full Stack Developer with 7+ years of
          experience building scalable, high-performing web applications. He has
          led cross-functional teams to deliver e-commerce solutions used by
          millions, driving 30% faster page load times, reducing errors by 25%,
          and optimizing analytics pipelines to improve decision-making across
          business units. Skilled in React, TypeScript, Node.js, and Next.js,
          Brennan combines technical expertise with strong leadership and
          mentoring, bridging business and engineering needs to ship
          results-driven solutions that scale.
        </p>
      </Box>
    </Container>
  );
};

export default About;
