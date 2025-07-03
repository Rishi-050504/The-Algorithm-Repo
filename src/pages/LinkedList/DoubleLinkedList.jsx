import AlgorithmPage from '/src/components/AlgorithmPage';

export default function DoubleLinkedList() {
  return (
    <AlgorithmPage
      title="Double Linked List"
      description={`A Doubly Linked List (DLL) is a type of linked list where each node contains three parts: data, a pointer to the next node, and a pointer to the previous node. This structure allows traversal in both forward and backward directions, unlike a singly linked list which only moves forward. The working of a DLL involves linking nodes so that the next pointer of one node points to the following node, and the prev pointer points to the preceding node.`}
      javaCode={`
    class Node {
    int data;
    Node prev, next;
    Node(int val) {
        data = val;
        prev = next = null;
    }
}

public class DoublyLinkedList {
    private Node head;

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
        newNode.prev = temp;
    }

    public void deleteNode(int val) {
        if (head == null) return;
        if (head.data == val) {
            head = head.next;
            if (head != null) head.prev = null;
            return;
        }
        Node temp = head;
        while (temp != null && temp.data != val)
            temp = temp.next;
        if (temp != null) {
            if (temp.prev != null) temp.prev.next = temp.next;
            if (temp.next != null) temp.next.prev = temp.prev;
        }
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
            if (temp.next != null) System.out.print(" <-> ");
            temp = temp.next;
        }
        System.out.println();
    }
}
`}
      cppCode={`
    struct Node {
    int data;
    Node* prev;
    Node* next;
    Node(int val) : data(val), prev(nullptr), next(nullptr) {}
};

class DoublyLinkedList {
private:
    Node* head;

public:
    DoublyLinkedList() : head(nullptr) {}

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
        newNode->prev = temp;
    }

    void deleteNode(int val) {
        if (!head) return;
        if (head->data == val) {
            Node* del = head;
            head = head->next;
            if (head) head->prev = nullptr;
            delete del;
            return;
        }
        Node* temp = head;
        while (temp && temp->data != val)
            temp = temp->next;
        if (temp) {
            if (temp->prev) temp->prev->next = temp->next;
            if (temp->next) temp->next->prev = temp->prev;
            delete temp;
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
            if (temp->next) std::cout << " <-> ";
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
      sampleOutput={`Linked List: 10 <-> 35 <-> 40
Length: 3`}
      timeComplexity="O(n)"
      spaceComplexity="O(n)"
    />
  );
}
