/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    let cur = head

    while (cur) {
        if (cur.child) {
            const childHead = flatten(cur.child)

            cur.child = null

            let childTail = childHead
            while (childTail.next) {
                childTail = childTail.next
            }

            const tempNext = cur.next
            cur.next = childHead
            childHead.prev = cur

            childTail.next = tempNext
            if (tempNext) {
                tempNext.prev = childTail
            }
        }

        cur = cur.next
    }

    return head
};