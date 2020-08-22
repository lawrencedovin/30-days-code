// Input Format

// The insert function has  parameters: a pointer to a Node named , and an integer value, .
// The constructor for Node has  parameter: an integer value for the  field.

// Output Format

// Your insert function should return a reference to the  head node of the linked list.


this.insert = (head,data) =>
    {
        //complete this method

        // Create a new node with the data passed in
        let newNode = new Node(data);
        // Set the current node as the passed in head
        let curNode = head;

        // If the current node is not null (it has values), walk the node list
        if (curNode != null )
        {
            while (curNode.next != null)
            {
                curNode = curNode.next;
            }
            curNode.next = newNode;
        }
        // Otherwise, if the list is empty, return the created node
        else
        {
            head = newNode;
        }
    
        return head;

};