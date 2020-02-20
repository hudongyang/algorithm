function ListNode(val) {
    this.val = val
    this.next = null
}

function LinkedList() {
    this.head = null
}

LinkedList.prototype.addAtHead = function (val) {
    // 1. Initialize a new node cur
    const cur = new ListNode(val)

    // 2. Link the new node to our original head node head
    cur.next = this.head

    // 3. Assign cur to head
    this.head = cur
}

LinkedList.prototype.size = function () {
    let size = 0
    let current = this.head
    while (current) {
        size++
        current = current.next
    }

    return size
}

LinkedList.prototype.get = function (index) {
    if (index >= this.size() || index < 0) {
        return undefined
    }

    let current = this.head
    for (let i = 0; i < index; i++) {
        current = current.next
    }

    return current
}

const list = new LinkedList()
list.addAtHead(9)
list.addAtHead(3)
list.addAtHead(6)

console.log(list.get(2).val);
