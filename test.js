class LinkedList {
    constructor(){
        this.head = null;
    }

    push(element){
        var node = new Node(element);
        //node.value = element;
        node.next = null;

        if(this.head === null){
            this.head = node;
        } else {
            var current = this.head;
            while(current.next != null){
                current = current.next
            }
            current.next = node;
        }
    }
}

var test = new LinkedList();

test.push(12)