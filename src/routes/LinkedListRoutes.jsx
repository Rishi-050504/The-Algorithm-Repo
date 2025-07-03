import LinkedList from '/src/pages/LinkedList/LinkedList';
import SingleLinkedList from '/src/pages/LinkedList/SingleLinkedList';
import DoubleLinkedList from '/src/pages/LinkedList/DoubleLinkedList';
import CircularLinkedList from '/src/pages/LinkedList/CircularLinkedList';
import CycleDetection from '/src/pages/LinkedList/CycleDetection';

export const linkedListRoutes = [
  { path: '/topic/linked-list', element: <LinkedList /> },
  { path: '/topic/linked-list/single-linked-list', element: <SingleLinkedList /> },
  { path: '/topic/linked-list/double-linked-list', element: <DoubleLinkedList /> },
  { path: '/topic/linked-list/circular-linked-list', element: <CircularLinkedList /> },
  { path: '/topic/linked-list/cycle-detection', element: <CycleDetection /> }
];
