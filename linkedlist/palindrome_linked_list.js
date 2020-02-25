/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let fast = head
    let slow = head

    // 循环结束后 slow 指向 链表的中间
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    let cur = reverse(slow)
    slow = head

    while (cur) {
        if (cur.val !== slow.val) {
            return false
        }
        cur = cur.next
        slow = slow.next
    }

    return true
};

function reverse(head) {
    let cur = head
    let prev = null

    while (cur) {
        const temp = cur.next
        cur.next = prev

        prev = cur
        cur = temp
    }

    return prev
}