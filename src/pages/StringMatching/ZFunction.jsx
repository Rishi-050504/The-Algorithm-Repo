import AlgorithmPage from '/src/components/AlgorithmPage';

export default function ZFunction() {
  return (
    <AlgorithmPage
      title="Z-Function"
      description="The Z-Algorithm is a string matching technique that builds a Z-array where each element at position i stores the length of the longest substring starting from i that matches the prefix of the string. To apply it for pattern matching, the pattern and text are combined as pattern + '$' + text, and the Z-array is computed for this combined string. A match is found wherever the Z-value equals the length of the pattern. The algorithm runs in linear time and is useful not only for pattern matching but also for detecting repetitions and prefix-suffix overlaps in strings."
      javaCode={`
int[] zFunction(String s) {
    int n = s.length();
    int[] z = new int[n];
    int l = 0, r = 0;
    for (int i = 1; i < n; i++) {
        if (i < r)
            z[i] = Math.min(r - i, z[i - l]);
        while (i + z[i] < n && s.charAt(z[i]) == s.charAt(i + z[i]))
            z[i]++;
        if (i + z[i] > r) {
            l = i;
            r = i + z[i];
        }
    }
    return z;
}
`}
      cppCode={`
vector<int> zFunction(string s) {
    int n = s.size();
    vector<int> z(n);
    int l = 0, r = 0;
    for (int i = 1; i < n; i++) {
        if (i < r)
            z[i] = min(r - i, z[i - l]);
        while (i + z[i] < n && s[z[i]] == s[i + z[i]])
            z[i]++;
        if (i + z[i] > r) {
            l = i;
            r = i + z[i];
        }
    }
    return z;
}
`}
      sampleInput={`"abacaba"`}
      sampleOutput={`[0,0,1,0,3,0,1]`}
      timeComplexity="O(n)"
      spaceComplexity="O(n)"
    />
  );
}
