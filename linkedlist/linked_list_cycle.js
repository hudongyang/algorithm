function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * HashTable solution
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    const map = new Map()

    let current = head
    while (current) {
        if (map.get(current)) {
            return true
        }

        map.set(current, 1)

        current = current.next
    }

    return false
};

/**
 * the two-pointer technique
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCyleV2 = function (head) {
    if (head === null || head.next === null) {
        return false
    }

    let slow = head
    let fast = head.next

    while (slow !== fast) {
        if (fast === null || fast.next === null) {
            return false
        }
        slow = slow.next
        fast = fast.next.next
    }

    return true
}