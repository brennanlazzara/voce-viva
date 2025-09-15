import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Badge,
  Button,
  VStack,
  HStack,
  Progress,
  Icon,
  useColorModeValue,
  Flex,
  Divider,
  Spinner,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  FaBook,
  FaChartLine,
  FaPlay,
  FaClock,
  FaStar,
  FaLanguage,
  FaLock,
  FaCheckCircle,
  FaRedo,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { usePhraseData } from "../hooks/usePhrasesData.js";
import { useVerbData } from "../hooks/useVerbData.js";

// ----- Types -----
interface Verb {
  infinitive: string;
  definition: string;
  type: string; // e.g. "are" | "ere" | "ire"
  auxiliaryVerb: string; // e.g. "essere" | "avere"
  regularPresenteIndicativo?: boolean;
}

interface Phrase {
  phrase: string;
  translation: string;
  meaning?: string;
}

interface UseVerbData {
  fetchRandomVerb: () => Promise<Verb>;
  isLoading: boolean;
}

interface UsePhraseData {
  fetchPhrases: () => Promise<Phrase[]>;
  isLoading: boolean;
}

interface TenseProgressItem {
  name: string;
  completed: boolean;
  progress: number; // 0-100
  available: boolean;
}

interface QuickAction {
  title: string;
  description: string;
  icon: IconType;
  path: string;
  available: boolean;
  color: string; // Chakra color key (e.g., "blue", "green")
}

const Home: React.FC = () => {
  const cardBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const headingColor = useColorModeValue("gray.700", "gray.200");
  const progressBg = useColorModeValue("gray.100", "gray.600");

  // Verb of the day state
  const [verbOfDay, setVerbOfDay] = useState<Verb | null>(null);
  const { fetchRandomVerb, isLoading } = useVerbData() as UseVerbData;

  const [phraseOfDay, setPhraseOfDay] = useState<Phrase | null>(null);
  const { fetchPhrases, isLoading: isPhrasesLoading } =
    usePhraseData() as UsePhraseData;

  // Mock data - this will be replaced with real data later
  const learningStats = {
    verbsLearned: 12,
    totalVerbs: 76,
    currentStreak: 3,
    lessonsCompleted: 1,
  };

  // ✅ Memoized too
  const loadVerbOfDay = useCallback(async () => {
    try {
      const data = await fetchRandomVerb();
      setVerbOfDay(data);
    } catch (err) {
      console.error("Error loading verb:", err);
    }
  }, [fetchRandomVerb]);

  // ✅ Memoized too
  const loadPhraseOfDay = useCallback(async () => {
    try {
      const list = await fetchPhrases();
      if (list?.length) {
        setPhraseOfDay(list[getDailyIndex(list.length)]);
      }
    } catch (err) {
      console.error("Error loading phrase:", err);
    }
  }, [fetchPhrases]);

  useEffect(() => {
    void loadVerbOfDay();
    void loadPhraseOfDay();
  }, [loadVerbOfDay, loadPhraseOfDay]);

  const getDailyIndex = (len: number): number => {
    const d = new Date();
    // stable “phrase of the day”: changes once per day
    const seed = Number(`${d.getFullYear()}${d.getMonth() + 1}${d.getDate()}`);
    return seed % len;
  };

  const tenseProgress: TenseProgressItem[] = [
    {
      name: "Presente Indicativo",
      completed: true,
      progress: 100,
      available: true,
    },
    {
      name: "Passato Prossimo",
      completed: false,
      progress: 0,
      available: false,
    },
    { name: "Imperfetto", completed: false, progress: 0, available: false },
    { name: "Congiuntivo", completed: false, progress: 0, available: false },
    { name: "Condizionale", completed: false, progress: 0, available: false },
  ];

  const quickActions: QuickAction[] = [
    {
      title: "Continue Learning",
      description: "Practice Presente Indicativo",
      icon: FaPlay,
      path: "/verb-conjugation/indicativo/presente",
      available: true,
      color: "blue",
    },
    {
      title: "Verb Reference",
      description: "Browse all Italian verbs",
      icon: FaBook,
      path: "/verbs",
      available: false,
      color: "green",
    },
    {
      title: "Daily Challenge",
      description: "Test your skills",
      icon: FaStar,
      path: "/challenge",
      available: false,
      color: "purple",
    },
    {
      title: "Progress Tracking",
      description: "View detailed stats",
      icon: FaChartLine,
      path: "/progress",
      available: false,
      color: "orange",
    },
  ];

  return (
    <Container maxW="7xl" py={8}>
      {/* Hero Section */}
      <Box mb={8} textAlign="center">
        <Heading
          size="2xl"
          mb={4}
          color={useColorModeValue("gray.800", "white")}
        >
          Benvenuto! 🇮🇹
        </Heading>
        <Text
          fontSize="xl"
          color={useColorModeValue("gray.600", "gray.300")}
          mb={6}
        >
          Master Italian verb conjugations step by step
        </Text>

        {/* Quick Stats */}
        <HStack spacing={8} justify="center" mb={6}>
          <VStack>
            <Text fontSize="2xl" fontWeight="bold" color="blue.500">
              {learningStats.verbsLearned}
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Verbs Learned
            </Text>
          </VStack>
          <VStack>
            <Text fontSize="2xl" fontWeight="bold" color="green.500">
              {learningStats.currentStreak}
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Day Streak
            </Text>
          </VStack>
          <VStack>
            <Text fontSize="2xl" fontWeight="bold" color="purple.500">
              {learningStats.lessonsCompleted}
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Lessons Done
            </Text>
          </VStack>
        </HStack>
      </Box>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
        {/* Learning Progress */}
        <Card bg={cardBg} borderColor={borderColor} borderWidth="1px">
          <CardHeader>
            <HStack>
              <Icon as={FaChartLine} color="blue.500" />
              <Heading size="md">Learning Progress</Heading>
            </HStack>
          </CardHeader>
          <CardBody>
            <VStack spacing={4} align="stretch">
              {tenseProgress.map((tense) => (
                <Box key={tense.name}>
                  <Flex justify="space-between" align="center" mb={2}>
                    <HStack>
                      <Text fontSize="sm" fontWeight="medium">
                        {tense.name}
                      </Text>
                      {tense.completed && (
                        <Icon
                          as={FaCheckCircle}
                          color="green.500"
                          boxSize={4}
                        />
                      )}
                      {!tense.available && (
                        <Badge colorScheme="gray" size="sm">
                          Coming Soon
                        </Badge>
                      )}
                    </HStack>
                    <Text fontSize="sm" color={textColor}>
                      {tense.progress}%
                    </Text>
                  </Flex>
                  <Progress
                    value={tense.progress}
                    colorScheme={tense.completed ? "green" : "blue"}
                    size="sm"
                    bg={progressBg}
                  />
                </Box>
              ))}
            </VStack>
          </CardBody>
        </Card>

        {/* Quick Actions */}
        <Card bg={cardBg} borderColor={borderColor} borderWidth="1px">
          <CardHeader>
            <HStack>
              <Icon as={FaLanguage} color="green.500" />
              <Heading size="md">Quick Actions</Heading>
            </HStack>
          </CardHeader>
          <CardBody>
            <SimpleGrid columns={2} spacing={4}>
              {quickActions.map((action) => {
                const linkProps = action.available
                  ? ({ as: RouterLink, to: action.path } as const)
                  : ({} as const);

                return (
                  <Card
                    key={action.title}
                    {...linkProps}
                    variant="outline"
                    borderColor={borderColor}
                    opacity={action.available ? 1 : 0.6}
                    position="relative"
                    cursor={action.available ? "pointer" : "default"}
                    _hover={
                      action.available
                        ? {
                            borderColor: `${action.color}.300`,
                            transform: "translateY(-2px)",
                            transition: "all 0.2s",
                          }
                        : {}
                    }
                  >
                    <CardBody p={4} textAlign="center">
                      {!action.available && (
                        <Icon
                          as={FaLock}
                          position="absolute"
                          top={2}
                          right={2}
                          color="gray.400"
                          boxSize={3}
                        />
                      )}
                      <Icon
                        as={action.icon}
                        boxSize={8}
                        color={`${action.color}.500`}
                        mb={2}
                      />
                      <Text fontWeight="semibold" fontSize="sm" mb={1}>
                        {action.title}
                      </Text>
                      <Text fontSize="xs" color={textColor}>
                        {action.description}
                      </Text>
                    </CardBody>
                  </Card>
                );
              })}
            </SimpleGrid>
          </CardBody>
        </Card>
      </SimpleGrid>

      {/* Daily Section */}
      <Card bg={cardBg} borderColor={borderColor} borderWidth="1px" mt={8}>
        <CardHeader>
          <HStack>
            <Icon as={FaClock} color="orange.500" />
            <Heading size="md">Today's Italian</Heading>
          </HStack>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Box>
              <Flex justify="space-between" align="center" mb={2}>
                <Text fontWeight="semibold" color={headingColor}>
                  Verb of the Day
                </Text>
                <Button
                  size="sm"
                  variant="ghost"
                  colorScheme="blue"
                  onClick={loadVerbOfDay}
                  isLoading={isLoading}
                  leftIcon={<Icon as={FaRedo} />}
                >
                  New Verb
                </Button>
              </Flex>
              <Card variant="outline" p={4}>
                {isLoading ? (
                  <Flex justify="center" align="center" h="100px">
                    <Spinner color="blue.500" />
                  </Flex>
                ) : verbOfDay ? (
                  <>
                    <Text fontSize="lg" fontWeight="bold" color="blue.600">
                      {verbOfDay.infinitive}
                    </Text>
                    <Text fontSize="sm" color={textColor}>
                      {verbOfDay.definition}
                    </Text>
                    <Divider my={2} />
                    <HStack spacing={4}>
                      <Text fontSize="sm">
                        <strong>Type:</strong> -{verbOfDay.type} verb
                      </Text>
                      <Text fontSize="sm">
                        <strong>Auxiliary:</strong> {verbOfDay.auxiliaryVerb}
                      </Text>
                    </HStack>
                    {verbOfDay.regularPresenteIndicativo ? (
                      <Badge colorScheme="green" size="sm" mt={2}>
                        Regular
                      </Badge>
                    ) : (
                      <Badge colorScheme="orange" size="sm" mt={2}>
                        Irregular
                      </Badge>
                    )}
                  </>
                ) : (
                  <Text fontSize="sm" color={textColor}>
                    Failed to load verb. Try again.
                  </Text>
                )}
              </Card>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2} color={headingColor}>
                Phrase of the Day
              </Text>
              <Card variant="outline" p={4}>
                {isPhrasesLoading ? (
                  <Flex justify="center" align="center" h="100px">
                    <Spinner color="green.500" />
                  </Flex>
                ) : phraseOfDay ? (
                  <>
                    <Text fontSize="lg" fontWeight="bold" color="green.600">
                      {phraseOfDay.phrase}
                    </Text>
                    <Text fontSize="sm" color={textColor}>
                      {phraseOfDay.translation}
                    </Text>
                    <Divider my={2} />
                    <Text fontSize="sm">{phraseOfDay.meaning}</Text>
                  </>
                ) : (
                  <Text fontSize="sm" color={textColor}>
                    Unable to load phrase.
                  </Text>
                )}
              </Card>
            </Box>
          </SimpleGrid>
        </CardBody>
      </Card>

      {/* Coming Soon Banner */}
      <Box
        mt={8}
        p={6}
        bg={useColorModeValue("blue.50", "blue.900")}
        borderRadius="lg"
        textAlign="center"
      >
        <Heading
          size="md"
          mb={2}
          color={useColorModeValue("blue.700", "blue.200")}
        >
          More Features Coming Soon!
        </Heading>
        <Text color={useColorModeValue("blue.600", "blue.300")}>
          We're working hard to bring you more verb tenses, interactive
          exercises, progress tracking, and personalized learning experiences.
        </Text>
      </Box>
    </Container>
  );
};

export default Home;
