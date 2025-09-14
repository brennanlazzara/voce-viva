import React, { useState, useEffect, useRef } from "react";
import { InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  VStack,
  HStack,
  ScaleFade,
  Badge,
  useColorModeValue,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import VerbTreeGraphDialog from "../../../../components/modals/VerbTreeGraphDialog";
import HintDialog from "../../../../components/modals/HintDialog";
import PresenteIndicativoLesson, { PresenteIndicativoLessonHandle } from "../../../../components/modals/PresenteIndicativoLesson";
import { useVerbData } from "../../../../hooks/useVerbData";

const IrregularCard = () => {
  const [tense] = useState("presenteIndicativo");
  const [pronoun, setPronoun] = useState("");
  const [verb, setVerb] = useState("");
  const [verbType, setVerbType] = useState("");
  const [verbDefinition, setVerbDefinition] = useState("");
  const [conjugationData, setConjugationData] = useState<any>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hasFlippedOnce, setHasFlippedOnce] = useState(false);

  const { fetchRandomPronoun, fetchRandomVerb, isLoading } = useVerbData();
  const {
    isOpen: isHintOpen,
    onOpen: onHintOpen,
    onClose: onHintClose,
  } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const {
    isOpen: isVerbTreeOpen,
    onOpen: onVerbTreeOpen,
    onClose: onVerbTreeClose,
  } = useDisclosure();
  const lessonModalRef = useRef<PresenteIndicativoLessonHandle>(null);

  useEffect(() => {
    loadNewCard();
  }, []);

  const loadNewCard = async () => {
    try {
      // Fetch pronoun and irregular verb in parallel
      const [pronounData, verbData] = await Promise.all([
        fetchRandomPronoun(),
        fetchRandomVerb({ regularOnly: false }),
      ]);

      setPronoun(pronounData);
      setVerb(verbData.infinitive);
      setVerbType(verbData.type);
      setVerbDefinition(verbData.definition);
      setConjugationData(verbData.conjugations);
    } catch (error) {
      console.error("Error loading new card:", error);
    }
  };

  const conjugateIrregularPresenteIndicativo = (
    pronoun: string,
    verb: string
  ) => {
    if (!conjugationData || !conjugationData.presenteIndicativo) {
      return verb;
    }

    const pronounMap: { [key: string]: string } = {
      "Io": "io",
      "Tu": "tu",
      "Lui/Lei": "luiLei",
      "Noi": "noi",
      "Voi": "voi",
      "Loro": "loro"
    };

    const pronounKey = pronounMap[pronoun];
    return conjugationData.presenteIndicativo[pronounKey] || verb;
  };

  const checkAnswer = () => {
    const correctAnswer = conjugateIrregularPresenteIndicativo(pronoun, verb);
    const isAnswerCorrect =
      userAnswer.trim().toLowerCase() === (correctAnswer ?? "").toLowerCase();
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setTimeout(() => {
        getNewCard();
      }, 1000);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setHasFlippedOnce(true);
  };

  const bgColor = useColorModeValue("white", "gray.700");
  const cardBgColor = useColorModeValue("gray.100", "gray.600");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const getNewCard = () => {
    loadNewCard();
    setIsFlipped(false);
    setUserAnswer("");
    setIsCorrect(null);
    setHasFlippedOnce(false);
    setConjugationData(null);
  };

  const getHint = () => {
    if (verbType === "are" && verb === "stare") {
      return {
        verb: `This is 'Stare'. (${verbDefinition})`,
        endings: ["-o", "-ai", "-a", "-iamo", "-ate", "-anno"],
      };
    } else if (verbType === "ere" && verb === "leggere") {
      return {
        verb: `This is 'Leggere'. (${verbDefinition})`,
        endings: ["-o", "-i", "-e", "-iamo", "-ete", "-ono"],
      };
    } else if (verbType === "ire" && verb === "venire") {
      return {
        verb: `This is 'Venire'. (${verbDefinition})`,
        endings: ["-go", "-i", "-e", "-iamo", "-ite", "-gono"],
      };
    }
    return { verb: "", endings: [] };
  };

  const hint = getHint();

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="6"
      boxShadow="lg"
      bg={bgColor}
      borderColor={borderColor}
    >
      <VStack spacing={4}>
        <HStack spacing={4}>
          <Heading fontSize="xl">Irregular Verbs</Heading>
          <InfoIcon onClick={onHintOpen} cursor="pointer" />
        </HStack>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Badge
              colorScheme={
                verbType === "are"
                  ? "green"
                  : verbType === "ere"
                  ? "blue"
                  : "purple"
              }
            >
              -{verbType.toUpperCase()}
            </Badge>
            <Box
              as={motion.div}
              w="100%"
              h="150px"
              bg={cardBgColor}
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              borderRadius="md"
              onClick={handleFlip}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ScaleFade in={true} initialScale={0.9}>
                <Text fontSize="2xl" fontWeight="bold">
                  {isFlipped ? verb : pronoun}
                </Text>
              </ScaleFade>
            </Box>
            {!hasFlippedOnce && (
              <Text fontSize="sm" color="gray.500">
                Click the card to flip
              </Text>
            )}
            <Input
              placeholder="Enter conjugation (example: 'Uso')"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  checkAnswer();
                }
              }}
            />
            <HStack spacing={4} width="100%">
              <Button colorScheme="gray" onClick={getNewCard} flex={1}>
                New Card
              </Button>
              <Button colorScheme="blue" onClick={checkAnswer} flex={1}>
                Check Answer
              </Button>
            </HStack>
            {isCorrect !== null && (
              <Text
                color={isCorrect ? "green.500" : "red.500"}
                fontWeight="bold"
              >
                {isCorrect ? "Correct!" : "Incorrect. Try again!"}
              </Text>
            )}
          </>
        )}
        <Button colorScheme="green" onClick={onVerbTreeOpen}>
          View My Verb Tree Graphs
        </Button>
        <Button
          colorScheme="green"
          onClick={() => lessonModalRef.current?.onLessonModalOpen(verb)}
        >
          A Helpful Lesson
        </Button>

        <HintDialog
          isOpen={isHintOpen}
          onClose={onHintClose}
          hint={hint as unknown as { type: string; endings: string[] }}
          cancelRef={cancelRef}
        />
        <VerbTreeGraphDialog
          title={`Verb Tree Graph - ${verb}`}
          isOpen={isVerbTreeOpen}
          onClose={onVerbTreeClose}
          tense={tense as "presenteIndicativo" | "passatoProssimo"}
          verbType={conjugationData ? "irregular" : (verbType as "are" | "ere" | "ire")}
          irregularConjugations={conjugationData?.presenteIndicativo}
        />
        <PresenteIndicativoLesson ref={lessonModalRef} />
      </VStack>
    </Box>
  );
};

export default IrregularCard;
