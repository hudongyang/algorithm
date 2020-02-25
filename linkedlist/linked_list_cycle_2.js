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
var detectCycle = function (head) {
    const map = new Map()
    let current = head

    while (current) {
        if (map.get(current)) {
            return map.get(current)
        }

        map.set(current, 1)
        current = current.next
    }

    return null
};

/**
 * http://fisherlei.blogspot.com/2013/11/leetcode-linked-list-cycle-ii-solution.html
 * 
 * LinkedList 里面有 cycle, 找到cycle的起始点(第一个重复出现的element).

    #### Slow, fast Pointer
    - 快慢指针, O(1)space.
    - 1. 确认有cycle后 2. 数学问题:找到开头.
    - 当head == slow.next时候， head就是cycle starting point.
    - 也就是说，当slow 移动到了那个回溯点，slow.next那个点就刚好是head的那个点...

    #### 证明
    - 1. 假设慢指针走t步, 快指针走快一倍, 也就是2t.
    - 2. 我们假设cycle的长度是Y, 而进入cycle之前的长度为X.
    - 3. 假设慢指针走了m圈cycle, 而快指针走了n圈cycle之后, 两个pointer相遇.
    - 4. 最终在Y cycle里面的K点相遇, 也就是两个指针都在这最后一圈里面走了K 步.
    - 那么:
    - t = X + mY + K
    - 2t = X + nY + K
    - 整合公式: X + K = (n - 2m)Y
    - 这里的m和n不过是整数的跑圈数, 也就是说X和K加在一起, 总归是结束cycle. X 和 K 互补
    - 结论: 当slow/fast 指针在K点相遇后, 再走X步, 就到了cycle的起点, 也就是题目要求的起点.

    #### Hash Table, O(n) space
    
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle2 = function (head) {
    let fast = head
    let slow = head

    while (fast !== null && slow !== null) {
        slow = slow.next
        fast = fast.next

        if (fast === null) {
            return null
        }

        fast = fast.next
        if (fast === slow) {
            break
        }
    }

    if (fast === null) {
        return null
    }

    let cur = head
    while (cur !== slow) {
        cur = cur.next
        slow = slow.next
    }

    return cur
};

