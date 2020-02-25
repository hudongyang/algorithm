function ListNode(val) {
    this.val = val
    this.next = undefined
}

function LinkedList() {
    this.head = undefined
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
        return -1
    }

    let current = this.head
    for (let i = 0; i < index; i++) {
        current = current.next
    }

    return current.val
}

LinkedList.prototype.addAtTail = function (val) {
    const node = new ListNode(val)

    if (!this.head) {
        this.head = node
        return
    }

    // 尾部 node
    let current = this.head
    while (current.next) {
        current = current.next
    }

    current.next = node
}

LinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.size()) {
        return
    }

    if (index === 0) {
        this.addAtHead(val)
        return
    }

    const node = new ListNode(val)

    // 空链表特殊处理
    if (this.head === undefined) {
        this.head = node
        return
    }

    // 找到 index - 1 node
    let current = this.head
    for (let i = 0; i < index - 1; i++) {
        current = current.next
    }

    // 链接
    const next = current.next
    current.next = node
    node.next = next
}

LinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size()) {
        return
    }

    if (index === 0) {
        this.head = this.head.next
        return
    }

    let prev = this.head
    for (let i = 0; i < index - 1; i++) {
        prev = prev.next
    }

    const current = prev.next
    const next = current.next

    // 前一个 链到 下一个
    prev.next = next
}

const list = new LinkedList()
list.addAtHead(9)
list.addAtHead(3)
list.addAtHead(6)
list.addAtTail(8)

list.addAtIndex(4, 1)

console.log(list);
