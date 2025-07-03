import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `The Nim Game is a classic strategy game where players take turns removing any number of stones from a single pile, and the player who removes the last stone wins. The winning strategy relies on computing the XOR of all pile sizes: if the XOR is zero, the current player is in a losing position; if it's non-zero, the player can make a move to force a win by reducing the XOR to zero. This XOR-based approach, grounded in binary arithmetic, is the foundation of the optimal strategy in Nim.`;

const javaCode = `
boolean nimGame(int[] piles) {
    int xor = 0;
    for (int pile : piles)
        xor ^= pile;
    return xor != 0;
}
`;

const cppCode = `
bool nimGame(const vector<int>& piles) {
    int xor_sum = 0;
    for (int pile : piles)
        xor_sum ^= pile;
    return xor_sum != 0;
}
`;

export default function NimGame() {
  return (
    <AlgorithmPage
      title="Nim Game"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`3 piles: [1, 4, 5]`}
      sampleOutput={`First player wins`}
      timeComplexity="O(n)"
      spaceComplexity="O(1)"
    />
  );
}
