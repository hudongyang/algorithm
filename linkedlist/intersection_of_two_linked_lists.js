/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Brute Force
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    for (let curA = headA; curA !== null; curA = curA.next) {
        for (let curB = headB; curB !== null; curB = curB.next) {
            if (curA === curB) {
                return curA
            }
        }
    }

};

/**
 * Two Points
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    let curA = headA
    let curB = headB

    while (curA !== curB) {
        curA = curA ? curA.next : headB
        curB = curB ? curB.next : headA
    }

    return curA
};


/**
 * HashTable
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    const setA = fillSet(headA)

    function fillSet(head) {
        const set = new Set()
        let cur = head
        while (cur) {
            set.add(cur)
            cur = cur.next
        }

        return set
    }

    let curB = headB
    while (curB) {
        if (setA.has(curB)) {
            return curB
        }

        curB = curB.next
    }

}