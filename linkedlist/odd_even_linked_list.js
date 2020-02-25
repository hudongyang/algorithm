/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (head === null) {
        return null
    }

    let odd = head
    let even = head.next
    let evenHead = even

    while (even && even.next) {
        const nextOdd = even.next
        const nextEven = nextOdd.next

        odd.next = nextOdd
        even.next = nextEven

        odd = nextOdd
        even = nextEven
    }

    odd.next = evenHead

    return head
};
const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}

oddEvenList(head)