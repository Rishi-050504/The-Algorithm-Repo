import BitManipulation from '/src/pages/BitManipulation/BitManipulation';
import SetBit from '/src/pages/BitManipulation/SetBit';
import ClearBit from '/src/pages/BitManipulation/ClearBit';
import FlipBit from '/src/pages/BitManipulation/FlipBit';
import CheckBit from '/src/pages/BitManipulation/CheckBit';
import IsDivisibleBy2 from '/src/pages/BitManipulation/DivisibleBy2';
import IsPowerOf2 from '/src/pages/BitManipulation/PowerOf2';
import ShiftBits from '/src/pages/BitManipulation/ShiftBits';
import CountSetBits from '/src/pages/BitManipulation/CountSetBits';
import XORTrick from '/src/pages/BitManipulation/XORTrick';

export const bitManipulationRoutes = [
  { path: '/topic/bit-manipulation', element: <BitManipulation /> },
  { path: '/topic/bit-manipulation/set-bit', element: <SetBit /> },
  { path: '/topic/bit-manipulation/clear-bit', element: <ClearBit /> },
  { path: '/topic/bit-manipulation/flip-bit', element: <FlipBit /> },
  { path: '/topic/bit-manipulation/check-bit', element: <CheckBit /> },
  { path: '/topic/bit-manipulation/is-divisible-by-2', element: <IsDivisibleBy2 /> },
  { path: '/topic/bit-manipulation/is-power-of-2', element: <IsPowerOf2 /> },
  { path: '/topic/bit-manipulation/left-&-right-shift', element: <ShiftBits /> },
  { path: '/topic/bit-manipulation/count-set-bits', element: <CountSetBits /> },
  { path: '/topic/bit-manipulation/xor-trick', element: <XORTrick /> }
];
