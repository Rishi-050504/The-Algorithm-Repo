import AlgorithmPage from '/src/components/AlgorithmPage';

export default function CycleDetection() {
  return (
    <AlgorithmPage
      title="Cycle Detection"
      description={`Cycle Detection in a Linked List using the Tortoise and Hare algorithm is a method to determine if a linked list contains a loop. It uses two pointers: a slow pointer that moves one step at a time and a fast pointer that moves two steps at a time. Because the fast pointer moves twice as fast, the difference in the distance traveled by both pointers increases by one each step. When the slow pointer reaches the cycle entry after traveling a steps, and the cycle length is L, there exists a positive integer k such that k·L ≥ a. At this point, the slow pointer has traveled k·L steps inside the cycle, while the fast pointer has traveled 2·k·L steps. Since the cycle length is L, their positions overlap modulo L, causing both pointers to meet inside the cycle. This meeting confirms the presence of a cycle in the linked list.`}
      javaCode={`
    class ListNode {
    int val;
    ListNode next;
    ListNode(int x) {
        val = x;
        next = null;
    }
}

public class LinkedListCycle {
    // 1. Check for cycle
    public boolean hasCycle(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }

    // 2. Return start of cycle (assuming cycle exists)
    public ListNode detectCycle(ListNode head) {
        ListNode slow = head, fast = head;

        // First find meeting point
        do {
            if (fast == null || fast.next == null) return null;
            slow = slow.next;
            fast = fast.next.next;
        } while (slow != fast);

        // Move slow to head, keep fast at meeting point
        slow = head;
        while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow; // starting node of the cycle
    }
}
`}
      cppCode={`
    struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class LinkedListCycle {
public:
    // 1. Check for cycle
    bool hasCycle(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;

        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast) return true;
        }
        return false;
    }

    // 2. Return start of cycle (assuming cycle exists)
    ListNode* detectCycle(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;

        do {
            if (!fast || !fast->next) return nullptr;
            slow = slow->next;
            fast = fast->next->next;
        } while (slow != fast);

        slow = head;
        while (slow != fast) {
            slow = slow->next;
            fast = fast->next;
        }
        return slow; // starting node of the cycle
    }
};
`}
      sampleInput={`List: 3 -> 2 -> 0 -> -4 (cycle starts at node with value 2)`}
      sampleOutput={`Cycle Detected: true
Cycle Starts At Node With Value: 2`}
      timeComplexity="O(n)"
      spaceComplexity="O(1)"
    />
  );
}
