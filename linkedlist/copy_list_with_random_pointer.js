/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
const map = new Map()
var copyRandomList = function (head) {
    if (!head) return head

    let node = map.get(head)
    if (node) {
        return node
    }

    node = new Node(head.val)
    map.set(head, node)
    node.next = copyRandomList(head.next)
    node.random = copyRandomList(head.random)

    return node
};


/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
const map = new Map()
function copyNode(node) {
    if (!node) return node

    let newNode = map.get(node)
    if (!newNode) {
        newNode = new Node(node.val)
        map.set(node, newNode)
    }

    return newNode
}
var copyRandomList = function (head) {
    let cur = head
    const newHead = copyNode(head)
    let newCur = newHead

    while (cur) {
        newCur.next = copyNode(cur.next)
        newCur.random = copyNode(cur.random)

        cur = cur.next
        newCur = newCur.next
    }

    return newHead
};