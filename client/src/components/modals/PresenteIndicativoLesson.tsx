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
} from "@chakra-ui/react";
import { irregularVerbLessons, IrregularVerbLesson } from "../../data/irregularVerbLessons";

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
    <Text textAlign="center">
      To conjugate regular Italian verbs in the{" "}
      <b>*Presente Indicativo* </b>
      tense, start with the verb's infinitive form. <br /> For{" "}
      <b>*-ARE* </b>
      verbs, remove *-ARE* and add endings like *-o*, *-i*, *-a*, *-iamo*,
      *-ate*, *-ano*. <br /> For <b>*-ERE* </b> verbs, drop *-ERE* and use
      endings like *-o*, *-i*, *-e*, *-iamo*, *-ete*, *-ono*. <br /> For{" "}
      <b>*-IRE* </b> verbs, remove *-IRE* and attach *-o*, *-i*, *-e*,
      *-iamo*, *-ite*, *-ono*. <br /> Just follow this pattern to
      correctly conjugate most verbs in the present tense!
    </Text>
  );

  const currentLesson = currentVerb ? irregularVerbLessons[currentVerb] : null;

  return (
    <Modal isOpen={isLessonModalOpen} onClose={onLessonModalClose} size={currentLesson ? "xl" : "lg"}>
      <ModalOverlay />
      <ModalContent maxH="80vh" overflowY="auto">
        <ModalHeader textAlign="center">
          <b>{currentLesson ? `${currentLesson.infinitive.toUpperCase()} - A Helpful Lesson` : "A Helpful Lesson"}</b>
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
