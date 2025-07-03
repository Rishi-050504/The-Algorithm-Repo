import TopicPage from '/src/components/TopicPage';

const bitManipulationDescription = `Bit manipulation refers to the act of algorithmically manipulating bits or binary digits, which are the most basic form of data in computing. It's essential for optimization, system programming, and low-level algorithm design.`;

const bitAlgorithms = [
  'Set Bit',
  'Clear Bit',
  'Flip Bit',
  'Check Bit',
  'Is Divisible by 2',
  'Is Power of 2',
  'Left & Right Shift',
  'Count Set Bits',
  "XOR Trick"
];

export default function BitManipulation() {
  return (
    <TopicPage
      title="Bit Manipulation"
      description={bitManipulationDescription}
      algorithms={bitAlgorithms}
      basePath="/topic/bit-manipulation"
    />
  );
}
