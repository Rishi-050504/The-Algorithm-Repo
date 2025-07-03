import TopicPage from '/src/components/TopicPage';

const linkedListDescription = `A Linked List is a linear data structure where elements, called nodes, are connected using pointers. Each node contains two parts: data and a reference (or pointer) to the next node in the sequence. Unlike arrays, linked lists do not require contiguous memory, making insertion and deletion operations more efficient, especially at the beginning or middle.`;

const linkedListTopics = [
  'Single Linked List',
  'Double Linked List',
  'Circular Linked List',
  'Cycle Detection'
];

export default function LinkedList() {
  return (
    <TopicPage
      title="Linked List"
      description={linkedListDescription}
      algorithms={linkedListTopics}
      basePath="/topic/linked-list"
    />
  );
}
