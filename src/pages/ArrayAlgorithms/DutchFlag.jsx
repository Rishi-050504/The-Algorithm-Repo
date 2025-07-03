import AlgorithmPage from '/src/components/AlgorithmPage';

export default function DutchFlag() {
  return (
    <AlgorithmPage
      title="Dutch National Flag Algorithm"
      description="The Dutch National Flag (DNF) Algorithm is a three-pointer sorting algorithm designed to sort an array containing only three distinct values, typically 0s, 1s, and 2s. It works by maintaining three regions: low (0s), mid (1s), and high (2s). Three pointers—low, mid, and high—are used to track these regions as the array is traversed. If the element at mid is 0, it is swapped with the element at low, and both pointers are incremented. If it's 1, only mid is incremented. If it's 2, it is swapped with the element at high, and high is decremented. This in-place algorithm runs in O(n) time and O(1) space, and is ideal for problems like the 'Sort Colors' problem"
      javaCode={`public void sortColors(int[] nums) {
    int low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] == 0) {
            int temp = nums[low];
            nums[low++] = nums[mid];
            nums[mid++] = temp;
        } else if (nums[mid] == 1) {
            mid++;
        } else {
            int temp = nums[mid];
            nums[mid] = nums[high];
            nums[high--] = temp;
        }
    }
}`}
      cppCode={`void sortColors(vector<int>& nums) {
    int low = 0, mid = 0, high = nums.size() - 1;
    while (mid <= high) {
        if (nums[mid] == 0) {
            swap(nums[low++], nums[mid++]);
        } else if (nums[mid] == 1) {
            mid++;
        } else {
            swap(nums[mid], nums[high--]);
        }
    }
}`}
      sampleInput={`nums = [2, 0, 2, 1, 1, 0]`}
      sampleOutput={`[0, 0, 1, 1, 2, 2]`}
      timeComplexity="O(n)"
      spaceComplexity="O(1)"
    />
  );
}
