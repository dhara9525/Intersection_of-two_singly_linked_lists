/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) 
{
   var map1=new Map();
   let a=headA;
   let b=headB;
    
   while(a)
   {
       map1.set(a,true);
       a=a.next;
   }
   console.log(map1);
   while(b)
   {
        if(map1.get(b)==true)
        {
            return b;
        }
        else
        {
            map1.set(a,true);
            b=b.next;
        }
   } 
    return null;
};