import AlgorithmPage from '/src/components/AlgorithmPage';

export default function CircularLinkedList() {
  return (
    <AlgorithmPage
      title="Circular Linked List"
      description={`A Circular Linked List is a variation of the linked list in which the last node points back to the first node instead of having a null reference. This forms a circular loop, allowing traversal from any node and continuing indefinitely. It can be singly circular (each node points to the next, and the last points to the head) or doubly circular (each node has both next and previous pointers, forming a bidirectional loop). This structure is useful in applications like round-robin scheduling or real-time systems where continuous looping through the list is required without resetting pointers.`}
      javaCode={`
    class Node {
    int data;
    Node next;
    Node(int val) {
        data = val;
        next = null;
    }
}

public class CircularLinkedList {
    private Node head;

    public void insert(int val) {
        Node newNode = new Node(val);
        if (head == null) {
            head = newNode;
            head.next = head;
            return;
        }
        Node temp = head;
        while (temp.next != head)
            temp = temp.next;
        temp.next = newNode;
        newNode.next = head;
    }

    public void deleteNode(int val) {
        if (head == null) return;

        if (head.data == val && head.next == head) {
            head = null;
            return;
        }

        Node curr = head, prev = null;
        do {
            if (curr.data == val) {
                if (curr == head) {
                    Node last = head;
                    while (last.next != head) last = last.next;
                    head = head.next;
                    last.next = head;
                } else {
                    prev.next = curr.next;
                }
                return;
            }
            prev = curr;
            curr = curr.next;
        } while (curr != head);
    }

    public void update(int oldVal, int newVal) {
        if (head == null) return;
        Node temp = head;
        do {
            if (temp.data == oldVal)
                temp.data = newVal;
            temp = temp.next;
        } while (temp != head);
    }

    public int length() {
        if (head == null) return 0;
        int count = 0;
        Node temp = head;
        do {
            count++;
            temp = temp.next;
        } while (temp != head);
        return count;
    }

    public void printList() {
        if (head == null) {
            System.out.println();
            return;
        }
        Node temp = head;
        do {
            System.out.print(temp.data);
            temp = temp.next;
            if (temp != head) System.out.print(" -> ");
        } while (temp != head);
        System.out.println(" -> (back to head)");
    }
}
`}
      cppCode={`
    struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

class CircularLinkedList {
private:
    Node* head;

public:
    CircularLinkedList() : head(nullptr) {}

    void insert(int val) {
        Node* newNode = new Node(val);
        if (!head) {
            head = newNode;
            newNode->next = head;
            return;
        }
        Node* temp = head;
        while (temp->next != head)
            temp = temp->next;
        temp->next = newNode;
        newNode->next = head;
    }

    void deleteNode(int val) {
        if (!head) return;

        if (head->data == val && head->next == head) {
            delete head;
            head = nullptr;
            return;
        }

        Node *curr = head, *prev = nullptr;
        do {
            if (curr->data == val) {
                if (curr == head) {
                    Node* last = head;
                    while (last->next != head) last = last->next;
                    head = head->next;
                    last->next = head;
                    delete curr;
                } else {
                    prev->next = curr->next;
                    delete curr;
                }
                return;
            }
            prev = curr;
            curr = curr->next;
        } while (curr != head);
    }

    void update(int oldVal, int newVal) {
        if (!head) return;
        Node* temp = head;
        do {
            if (temp->data == oldVal)
                temp->data = newVal;
            temp = temp->next;
        } while (temp != head);
    }

    int length() {
        if (!head) return 0;
        int count = 0;
        Node* temp = head;
        do {
            count++;
            temp = temp->next;
        } while (temp != head);
        return count;
    }

    void printList() {
        if (!head) {
            std::cout << "\n";
            return;
        }
        Node* temp = head;
        do {
            std::cout << temp->data;
            temp = temp->next;
            if (temp != head) std::cout << " -> ";
        } while (temp != head);
        std::cout << " -> (back to head)\n";
    }
};
`}
      sampleInput={`Insert: 10 20 30 40
Delete: 20
Update: 30 -> 35
Length`}
      sampleOutput={`Linked List: 10 -> 35 -> 40 -> (back to head)
Length: 3`}
      timeComplexity="O(n)"
      spaceComplexity="O(n)"
    />
  );
}
