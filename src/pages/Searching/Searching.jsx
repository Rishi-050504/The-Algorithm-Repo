import TopicPage from '/src/components/TopicPage';

const searchingDescription = `Searching is a fundamental operation in computer science used to locate the presence or position of a specific element within a collection of data. It plays a crucial role in various applications such as databases, search engines, operating systems, and real-time systems where quick and efficient access to data is essential. Effective searching enhances the performance of programs and systems by reducing the time needed to retrieve information, making it a key concept in data processing, problem-solving, and decision-making tasks.`;

const searchingAlgorithms = [
  'Linear Search',
  'Binary Search',
  'Binary Search on Answer Space',
  'Bound Search',
  'Search on Sorted Array'
];

export default function Searching() {
  return (
    <TopicPage
      title="Searching"
      description={searchingDescription}
      algorithms={searchingAlgorithms}
      basePath="/topic/searching"
    />
  );
}
