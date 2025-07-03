import TopicPage from '/src/components/TopicPage';

const description = `Sliding Window is a powerful technique used to solve problems involving contiguous sequences in arrays or strings, such as finding the maximum sum of a subarray of fixed size, or the longest substring without repeating characters. It works by maintaining a "window" (a subset of elements) and moving it across the data structure, adding new elements and removing old ones as needed. This avoids reprocessing the entire window each time, improving efficiency. The sliding window technique typically runs in O(n) time, making it ideal for solving problems with large input sizes where brute-force approaches would be too slow.`;

const algorithms = ['Fixed Sliding Window', 'Variable Sliding Window'];

export default function SlidingWindow() {
  return (
    <TopicPage
      title="Sliding Window"
      description={description}
      algorithms={algorithms}
      basePath="/topic/sliding-window"
    />
  );
}
