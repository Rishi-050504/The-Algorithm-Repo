import Queue from '/src/pages/Queue/Queue';
import QueueOperations from '/src/pages/Queue/QueueOperations';
import CircularQueue from '/src/pages/Queue/CircularQueue';
import Deque from '/src/pages/Queue/Deque';
import MinimumQueue from '/src/pages/Queue/MinimumQueue';

export const queueRoutes = [
  { path: '/topic/queue', element: <Queue /> },
  { path: '/topic/queue/queue-operations', element: <QueueOperations /> },
  { path: '/topic/queue/circular-queue', element: <CircularQueue /> },
  { path: '/topic/queue/deque', element: <Deque /> },
  { path: '/topic/queue/minimum-queue', element: <MinimumQueue /> }
];
