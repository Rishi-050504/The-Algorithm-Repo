import TopicPage from '/src/components/TopicPage';

const queueDescription = `A queue is a linear data structure that follows the First In First Out (FIFO) principle, meaning the first element inserted is the first one to be removed. It operates much like a real-world queue, such as a line of people waiting: new elements are added at the rear (enqueue), and elements are removed from the front (dequeue). Common operations include enqueue() to insert an element, dequeue() to remove the front element, peek() to view the front without removing it, and isEmpty() to check if the queue is empty. Queues are widely used in scenarios like task scheduling, buffering, and handling requests in real-time systems. `;

const queueSubtopics = [
  'Queue Operations',
  'Circular Queue',
  'Deque',
  'Minimum Queue'
];

export default function Queue() {
  return (
    <TopicPage
      title="Queue"
      description={queueDescription}
      algorithms={queueSubtopics}
      basePath="/topic/queue"
    />
  );
}
