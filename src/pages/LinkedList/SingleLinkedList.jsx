import AlgorithmPage from '/src/components/AlgorithmPage';

export default function SingleLinkedList() {
  return (
    <AlgorithmPage
      title="Single Linked List"
      description={`A Singly Linked List (SLL) is a linear data structure consisting of nodes where each node contains data and a pointer to the next node in the sequence. Unlike doubly linked lists, nodes in an SLL only link forward, meaning traversal is only possible from the head (start) of the list to the end. The working of an SLL involves creating nodes and linking each node’s next pointer to the following node, with the last node pointing to null to mark the end. Operations like insertion, deletion, and traversal are performed by moving through the nodes starting at the head. SLLs are simple and memory-efficient, commonly used in applications like dynamic memory management`}
      javaCode={`
    class Node {
    int data;
    Node next;
    Node(int val) {
        data = val;
        next = null;
    }
}

public class SinglyLinkedList {
    private Node head;

    public SinglyLinkedList() {
        head = null;
    }

    public void insert(int val) {
        Node newNode = new Node(val);
        if (head == null) {
            head = newNode;
            return;
        }
        Node temp = head;
        while (temp.next != null)
            temp = temp.next;
        temp.next = newNode;
    }

    public void deleteNode(int val) {
        if (head == null) return;

        if (head.data == val) {
            head = head.next;
            return;
        }

        Node temp = head;
        while (temp.next != null && temp.next.data != val)
            temp = temp.next;

        if (temp.next != null)
            temp.next = temp.next.next;
    }

    public void update(int oldVal, int newVal) {
        Node temp = head;
        while (temp != null) {
            if (temp.data == oldVal)
                temp.data = newVal;
            temp = temp.next;
        }
    }

    public int length() {
        int count = 0;
        Node temp = head;
        while (temp != null) {
            count++;
            temp = temp.next;
        }
        return count;
    }

    public void printList() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data);
            if (temp.next != null) System.out.print(" -> ");
            temp = temp.next;
        }
        System.out.println();
    }
}
`}
    cppCode={`
    struct Node {
    int data;
    Node* next;
    Node(int val) {
        data = val;
        next = nullptr;
    }
};

class SinglyLinkedList {
private:
    Node* head;

public:
    SinglyLinkedList() {
        head = nullptr;
    }

    void insert(int val) {
        Node* newNode = new Node(val);
        if (!head) {
            head = newNode;
            return;
        }
        Node* temp = head;
        while (temp->next)
            temp = temp->next;
        temp->next = newNode;
    }

    void deleteNode(int val) {
        if (!head) return;
        if (head->data == val) {
            Node* del = head;
            head = head->next;
            delete del;
            return;
        }
        Node* temp = head;
        while (temp->next && temp->next->data != val)
            temp = temp->next;
        if (temp->next) {
            Node* del = temp->next;
            temp->next = temp->next->next;
            delete del;
        }
    }

    void update(int oldVal, int newVal) {
        Node* temp = head;
        while (temp) {
            if (temp->data == oldVal)
                temp->data = newVal;
            temp = temp->next;
        }
    }

    int length() {
        int count = 0;
        Node* temp = head;
        while (temp) {
            count++;
            temp = temp->next;
        }
        return count;
    }

    void printList() {
        Node* temp = head;
        while (temp) {
            std::cout << temp->data;
            if (temp->next) std::cout << " -> ";
            temp = temp->next;
        }
        std::cout << "\n";
    }
};
`}
      sampleInput={`Insert: 10 20 30 40
Delete: 20
Update: 30 -> 35
Length`}
      sampleOutput={`Linked List: 10 -> 35 -> 40
Length: 3`}
      timeComplexity="O(n)"
      spaceComplexity="O(n)"
    />
  );
}
