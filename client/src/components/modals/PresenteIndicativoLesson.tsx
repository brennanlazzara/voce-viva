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
} from "@chakra-ui/react";
import { irregularVerbLessons, IrregularVerbLesson, regularVerbLesson, RegularVerbLesson } from "../../data/irregularVerbLessons";

interface PresenteIndicativoLessonProps {
  irregularVerb?: string;
}

export interface PresenteIndicativoLessonHandle {
  onLessonModalOpen: (verb?: string) => void;
}

const PresenteIndicativoLesson = forwardRef<PresenteIndicativoLessonHandle, PresenteIndicativoLessonProps>((props, ref) => {
  const [currentVerb, setCurrentVerb] = useState<string | null>(null);
  const {
    isOpen: isLessonModalOpen,
    onOpen: onLessonModalOpen,
    onClose: onLessonModalClose,
  } = useDisclosure();

  const openLessonModal = (verb?: string) => {
    setCurrentVerb(verb || null);
    onLessonModalOpen();
  };

  useImperativeHandle(ref, () => ({
    onLessonModalOpen: openLessonModal,
  }));

  const renderIrregularLesson = (lesson: IrregularVerbLesson) => (
    <VStack spacing={4} align="stretch">
      <Box>
        <Heading size="sm" color="blue.600" mb={2}>🏛️ Etymology & Why It's Irregular</Heading>
        <Text fontSize="sm">{lesson.etymology}</Text>
      </Box>

      <Divider />

      <Box>
        <Heading size="sm" color="green.600" mb={2}>🧠 Memory Tricks</Heading>
        <UnorderedList spacing={1}>
          {lesson.memoryTricks.map((trick, index) => (
            <ListItem key={index} fontSize="sm">{trick}</ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Divider />

      <Box>
        <Heading size="sm" color="purple.600" mb={2}>💬 Common Phrases</Heading>
        <UnorderedList spacing={1}>
          {lesson.commonPhrases.map((phrase, index) => (
            <ListItem key={index} fontSize="sm">{phrase}</ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Divider />

      <Box>
        <Heading size="sm" color="red.600" mb={2}>⚠️ Common Mistakes to Avoid</Heading>
        <UnorderedList spacing={1}>
          {lesson.learnerPitfalls.map((pitfall, index) => (
            <ListItem key={index} fontSize="sm">{pitfall}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </VStack>
  );

  const renderRegularLesson = () => (
    <VStack spacing={4} align="stretch">
      <Box>
        <Heading size="sm" color="blue.600" mb={2}>🔍 Pattern Recognition & How It Works</Heading>
        <Text fontSize="sm">{regularVerbLesson.patternExplanation}</Text>
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
                    <Text fontSize="xs">({regularVerbLesson.conjugationExamples.are.infinitive})</Text>
                  </HStack>
                </Th>
                <Th>
                  <HStack>
                    <Badge colorScheme="blue">-ERE</Badge>
                    <Text fontSize="xs">({regularVerbLesson.conjugationExamples.ere.infinitive})</Text>
                  </HStack>
                </Th>
                <Th>
                  <HStack>
                    <Badge colorScheme="purple">-IRE</Badge>
                    <Text fontSize="xs">({regularVerbLesson.conjugationExamples.ire.infinitive})</Text>
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
                        {regularVerbLesson.conjugationExamples.are.stem}
                      </Text>
                      {regularVerbLesson.conjugationExamples.are.conjugations[index].slice(regularVerbLesson.conjugationExamples.are.stem.length)}
                    </Text>
                  </Td>
                  <Td>
                    <Text color="blue.600" fontWeight="medium">
                      <Text as="span" color="blue.800" fontWeight="bold">
                        {regularVerbLesson.conjugationExamples.ere.stem}
                      </Text>
                      {regularVerbLesson.conjugationExamples.ere.conjugations[index].slice(regularVerbLesson.conjugationExamples.ere.stem.length)}
                    </Text>
                  </Td>
                  <Td>
                    <Text color="purple.600" fontWeight="medium">
                      <Text as="span" color="purple.800" fontWeight="bold">
                        {regularVerbLesson.conjugationExamples.ire.stem}
                      </Text>
                      {regularVerbLesson.conjugationExamples.ire.conjugations[index].slice(regularVerbLesson.conjugationExamples.ire.stem.length)}
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
          {regularVerbLesson.memoryTricks.map((trick, index) => (
            <ListItem key={index} fontSize="sm">{trick}</ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Divider />

      <Box>
        <Heading size="sm" color="purple.600" mb={2}>💬 Common Phrases by Verb Type</Heading>
        <UnorderedList spacing={1}>
          {regularVerbLesson.commonPhrases.map((phrase, index) => (
            <ListItem key={index} fontSize="sm">{phrase}</ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Divider />

      <Box>
        <Heading size="sm" color="red.600" mb={2}>⚠️ Common Mistakes to Avoid</Heading>
        <UnorderedList spacing={1}>
          {regularVerbLesson.learnerPitfalls.map((pitfall, index) => (
            <ListItem key={index} fontSize="sm">{pitfall}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </VStack>
  );

  const currentLesson = currentVerb ? irregularVerbLessons[currentVerb] : null;

  return (
    <Modal isOpen={isLessonModalOpen} onClose={onLessonModalClose} size="xl">
      <ModalOverlay />
      <ModalContent maxH="80vh" overflowY="auto">
        <ModalHeader textAlign="center">
          <b>{currentLesson ? `${currentLesson.infinitive.toUpperCase()} - A Helpful Lesson` : "REGULAR VERBS - A Helpful Lesson"}</b>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody p={4}>
          {currentLesson ? renderIrregularLesson(currentLesson) : renderRegularLesson()}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});

export default PresenteIndicativoLesson;
