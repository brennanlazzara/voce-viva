import React, { forwardRef, useImperativeHandle, useState } from "react";
import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Divider,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  HStack,
  Badge,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useLessonData } from "../../hooks/useLessonData";

interface PresenteIndicativoLessonProps {
  irregularVerb?: string;
}

export interface PresenteIndicativoLessonHandle {
  onLessonModalOpen: (verb?: string) => void;
}

const PresenteIndicativoLesson = forwardRef<PresenteIndicativoLessonHandle, PresenteIndicativoLessonProps>((props, ref) => {
  const [currentVerb, setCurrentVerb] = useState<string | null>(null);
  const [lessonData, setLessonData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const {
    isOpen: isLessonModalOpen,
    onOpen: onLessonModalOpen,
    onClose: onLessonModalClose,
  } = useDisclosure();

  const { fetchRegularLesson, fetchIrregularLesson, isLoading } = useLessonData();

  const openLessonModal = async (verb?: string) => {
    setCurrentVerb(verb || null);
    setError(null);
    setLessonData(null);

    try {
      let data;
      if (verb) {
        // Fetch irregular lesson
        data = await fetchIrregularLesson(verb, "presenteIndicativo");
      } else {
        // Fetch regular lesson
        data = await fetchRegularLesson("presenteIndicativo");
      }
      setLessonData(data);
    } catch (error) {
      console.error("Failed to fetch lesson:", error);
      setError("Failed to load lesson data. Please try again.");
    }

    onLessonModalOpen();
  };

  useImperativeHandle(ref, () => ({
    onLessonModalOpen: openLessonModal,
  }));

  const renderIrregularLesson = (lesson: any) => (
    <VStack spacing={4} align="stretch">
      <Box>
        <Heading size="sm" color="blue.600" mb={2}>🏛️ Etymology & Why It's Irregular</Heading>
        <Text fontSize="sm">{lesson.etymology}</Text>
      </Box>

      <Divider />

      <Box>
        <Heading size="sm" color="green.600" mb={2}>🧠 Memory Tricks</Heading>
        <UnorderedList spacing={1}>
          {lesson.memoryTricks.map((trick: string, index: number) => (
            <ListItem key={index} fontSize="sm">{trick}</ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Divider />

      <Box>
        <Heading size="sm" color="purple.600" mb={2}>💬 Common Phrases</Heading>
        <UnorderedList spacing={1}>
          {lesson.commonPhrases.map((phrase: string, index: number) => (
            <ListItem key={index} fontSize="sm">{phrase}</ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Divider />

      <Box>
        <Heading size="sm" color="red.600" mb={2}>⚠️ Common Mistakes to Avoid</Heading>
        <UnorderedList spacing={1}>
          {lesson.learnerPitfalls.map((pitfall: string, index: number) => (
            <ListItem key={index} fontSize="sm">{pitfall}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </VStack>
  );

  const renderRegularLesson = (lesson: any) => (
    <VStack spacing={4} align="stretch">
      <Box>
        <Heading size="sm" color="blue.600" mb={2}>🔍 Pattern Recognition & How It Works</Heading>
        <Text fontSize="sm">{lesson.patternExplanation}</Text>
      </Box>

      <Divider />

      <Box>
        <Heading size="sm" color="orange.600" mb={2}>📊 Color-Coded Conjugation Examples</Heading>
        <TableContainer>
          <Table size="sm" variant="simple">
            <Thead>
              <Tr>
                <Th>Pronoun</Th>
                <Th>
                  <HStack>
                    <Badge colorScheme="green">-ARE</Badge>
                    <Text fontSize="xs">({lesson.conjugationExamples.are.infinitive})</Text>
                  </HStack>
                </Th>
                <Th>
                  <HStack>
                    <Badge colorScheme="blue">-ERE</Badge>
                    <Text fontSize="xs">({lesson.conjugationExamples.ere.infinitive})</Text>
                  </HStack>
                </Th>
                <Th>
                  <HStack>
                    <Badge colorScheme="purple">-IRE</Badge>
                    <Text fontSize="xs">({lesson.conjugationExamples.ire.infinitive})</Text>
                  </HStack>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {["Io", "Tu", "Lui/Lei", "Noi", "Voi", "Loro"].map((pronoun, index) => (
                <Tr key={index}>
                  <Td fontWeight="bold">{pronoun}</Td>
                  <Td>
                    <Text color="green.600" fontWeight="medium">
                      <Text as="span" color="green.800" fontWeight="bold">
                        {lesson.conjugationExamples.are.stem}
                      </Text>
                      {lesson.conjugationExamples.are.conjugations[index].slice(lesson.conjugationExamples.are.stem.length)}
                    </Text>
                  </Td>
                  <Td>
                    <Text color="blue.600" fontWeight="medium">
                      <Text as="span" color="blue.800" fontWeight="bold">
                        {lesson.conjugationExamples.ere.stem}
                      </Text>
                      {lesson.conjugationExamples.ere.conjugations[index].slice(lesson.conjugationExamples.ere.stem.length)}
                    </Text>
                  </Td>
                  <Td>
                    <Text color="purple.600" fontWeight="medium">
                      <Text as="span" color="purple.800" fontWeight="bold">
                        {lesson.conjugationExamples.ire.stem}
                      </Text>
                      {lesson.conjugationExamples.ire.conjugations[index].slice(lesson.conjugationExamples.ire.stem.length)}
                    </Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Divider />

      <Box>
        <Heading size="sm" color="green.600" mb={2}>🧠 Memory Tricks</Heading>
        <UnorderedList spacing={1}>
          {lesson.memoryTricks.map((trick: string, index: number) => (
            <ListItem key={index} fontSize="sm">{trick}</ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Divider />

      <Box>
        <Heading size="sm" color="purple.600" mb={2}>💬 Common Phrases by Verb Type</Heading>
        <UnorderedList spacing={1}>
          {lesson.commonPhrases.map((phrase: string, index: number) => (
            <ListItem key={index} fontSize="sm">{phrase}</ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Divider />

      <Box>
        <Heading size="sm" color="red.600" mb={2}>⚠️ Common Mistakes to Avoid</Heading>
        <UnorderedList spacing={1}>
          {lesson.learnerPitfalls.map((pitfall: string, index: number) => (
            <ListItem key={index} fontSize="sm">{pitfall}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </VStack>
  );

  const renderContent = () => {
    if (isLoading) {
      return (
        <VStack spacing={4} align="center" py={8}>
          <Spinner size="lg" />
          <Text>Loading lesson...</Text>
        </VStack>
      );
    }

    if (error) {
      return (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      );
    }

    if (!lessonData) {
      return (
        <Alert status="info">
          <AlertIcon />
          No lesson data available.
        </Alert>
      );
    }

    return lessonData.type === "irregular"
      ? renderIrregularLesson(lessonData)
      : renderRegularLesson(lessonData);
  };

  return (
    <Modal isOpen={isLessonModalOpen} onClose={onLessonModalClose} size="xl">
      <ModalOverlay />
      <ModalContent maxH="80vh" overflowY="auto">
        <ModalHeader textAlign="center">
          <b>
            {lessonData?.type === "irregular"
              ? `${lessonData.infinitive.toUpperCase()} - A Helpful Lesson`
              : "REGULAR VERBS - A Helpful Lesson"
            }
          </b>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody p={4}>
          {renderContent()}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});

export default PresenteIndicativoLesson;
