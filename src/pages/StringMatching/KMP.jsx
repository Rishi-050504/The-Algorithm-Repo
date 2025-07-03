import AlgorithmPage from '/src/components/AlgorithmPage';

export default function KMP() {
  return (
    <AlgorithmPage
      title="KMP (Knuth-Morris-Pratt)"
      description="The Knuth-Morris-Pratt (KMP) algorithm is an efficient string matching algorithm that avoids redundant comparisons by preprocessing the pattern to create a Longest Prefix Suffix (LPS) array. This array stores the length of the longest proper prefix which is also a suffix for each position in the pattern. While scanning the text, if a mismatch occurs, KMP uses the LPS array to skip ahead in the pattern instead of restarting the match from the beginning. This ensures that each character in the text is compared at most once, resulting in linear time complexity, making KMP highly efficient for single pattern searches."
      javaCode={`
int[] computePrefixFunction(String s) {
    int n = s.length();
    int[] pi = new int[n];
    for (int i = 1; i < n; i++) {
        int j = pi[i - 1];
        while (j > 0 && s.charAt(i) != s.charAt(j))
            j = pi[j - 1];
        if (s.charAt(i) == s.charAt(j))
            j++;
        pi[i] = j;
    }
return pi;
}
`}
      cppCode={`
vector<int> computePrefixFunction(string s) {
    int n = s.length();
    vector<int> pi(n);
    for (int i = 1; i < n; i++) {
        int j = pi[i - 1];
        while (j > 0 && s[i] != s[j])
            j = pi[j - 1];
        if (s[i] == s[j])
            j++;
        pi[i] = j;
    }
    return pi;
}
`}
      sampleInput={`text: "abxabcabcaby"\npattern: "abcaby"`}
      sampleOutput={`Match at index: 6`}
      timeComplexity="O(n + m)"
      spaceComplexity="O(m)"
    />
  );
}
