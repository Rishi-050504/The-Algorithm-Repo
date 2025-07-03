import TopicPage from '/src/components/TopicPage';

const stringMatchingDescription = `String matching is the task of finding occurrences of a pattern within a larger text. Rabin-Karp uses hashing to compare the pattern with text substrings, making it efficient for multiple patterns. KMP (Knuth-Morris-Pratt) builds a prefix table to avoid unnecessary comparisons, ensuring linear-time performance for single-pattern searches. The Z-Algorithm constructs a Z-array that stores prefix matches to efficiently locate patterns or repeated substrings.`;

const stringMatchingAlgorithms = [
  'KMP',
  'Rabin Karp',
  'Z-Function',
  
];

export default function StringMatching() {
  return (
    <TopicPage
      title="String Matching"
      description={stringMatchingDescription}
      algorithms={stringMatchingAlgorithms}
      basePath="/topic/string-matching"
    />
  );
}
