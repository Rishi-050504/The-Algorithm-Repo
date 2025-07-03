import AlgorithmPage from '/src/components/AlgorithmPage';

export default function RabinKarp() {
  return (
    <AlgorithmPage
      title="Rabin-Karp Algorithm"
      description="Rabin-Karp is a string matching algorithm that uses hashing to efficiently find a pattern in a text. It computes a hash value for the pattern and for each substring of the text of the same length, then compares these hashes to check for a match. If the hashes match, it performs a character-by-character comparison to confirm, since hash collisions are possible. By using a rolling hash technique, it efficiently updates the hash when moving the window over the text, avoiding recomputation from scratch. Rabin-Karp is especially useful when searching for multiple patterns in the same text.."
      javaCode={`
    List<Integer> rabinKarp(String pattern, String text) {
        int prime = 31;
        int mod = 1000000009;
        int P = pattern.length(), T = text.length();

        long[] p_pow = new long[Math.max(P, T)];
        p_pow[0] = 1;
        for (int i = 1; i < p_pow.length; i++)
            p_pow[i] = (p_pow[i - 1] * prime) % mod;

        long[] h = new long[T + 1];
        for (int i = 0; i < T; i++)
            h[i + 1] = (h[i] + (text.charAt(i) - 'a' + 1) * p_pow[i]) % mod;

        long h_pattern = 0;
        for (int i = 0; i < P; i++)
            h_pattern = (h_pattern + (pattern.charAt(i) - 'a' + 1) * p_pow[i]) % mod;

        List<Integer> occurrences = new ArrayList<>();
        for (int i = 0; i + P <= T; i++) {
            long cur_h = (h[i + P] + mod - h[i]) % mod;
            if (cur_h == (h_pattern * p_pow[i]) % mod)
                occurrences.add(i);
        }

        return occurrences;
    }
`}
      cppCode={`
    vector<int> rabin_karp(const string& pattern, const string& text) {
        const int prime = 31;
        const int mod = 1e9 + 9;
        int P = pattern.size(), T = text.size();

        vector<long long> p_pow(max(P, T)); 
        p_pow[0] = 1;
        for (int i = 1; i < (int)p_pow.size(); i++)
            p_pow[i] = (p_pow[i - 1] * prime) % mod;

        vector<long long> h(T + 1, 0);
        for (int i = 0; i < T; i++)
            h[i + 1] = (h[i] + (text[i] - 'a' + 1) * p_pow[i]) % mod;

        long long h_pattern = 0;
        for (int i = 0; i < P; i++)
            h_pattern = (h_pattern + (pattern[i] - 'a' + 1) * p_pow[i]) % mod;

        vector<int> occurrences;
        for (int i = 0; i + P <= T; i++) {
            long long cur_h = (h[i + P] + mod - h[i]) % mod;
            if (cur_h == h_pattern * p_pow[i] % mod)
                occurrences.push_back(i);
        }

        return occurrences;
    }
`}
      sampleInput={`text: "abcdef", pattern: "cde"`}
      sampleOutput={`Match at index: 2`}
      timeComplexity="O(n + m)" // average case
      spaceComplexity="O(1)"
    />
  );
}
