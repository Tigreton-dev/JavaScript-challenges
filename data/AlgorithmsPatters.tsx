import Image from 'next/image';

export function SlidingWindow() {
    return (
        <div>
            <p>
                The Sliding Window pattern is used to perform a required operation on a specific window size of a given
                array or linked list, such as finding the longest subarray containing all 1s. Sliding Windows start from
                the 1st element and keep shifting right by one element and adjust the length of the window according to
                the problem that you are solving. In some cases, the window size remains constant and in other cases the
                sizes grows or shrinks.
            </p>
            <p>problem might require a sliding window</p>
            <ul>
                <li>The problem input is a linear data structure such as a linked list, array, or string</li>
                <li>You’re asked to find the longest/shortest substring, subarray, or a desired value</li>
                <li>Maximum sum subarray of size ‘K’ (easy)</li>
                <li>Longest substring with ‘K’ distinct characters (medium)</li>
                <li>String anagrams (hard)</li>
            </ul>
        </div>
    );
}

export function TwoPointers() {
    return (
        <div>
            <p>
                Two Pointers is a pattern where two pointers iterate through the data structure in tandem until one or
                both of the pointers hit a certain condition.Two Pointers is often useful when searching pairs in a
                sorted array or linked list; for example, when you have to compare each element of an array to its other
                elements.
            </p>
            <p>
                Two pointers are needed because with just pointer, you would have to continually loop back through the
                array to find the answer. This back and forth with a single iterator is inefficient for time and space
                complexity — a concept referred to as asymptotic analysis. While the brute force or naive solution with
                1 pointer would work, it will produce something along the lines of O(n²). In many cases, two pointers
                can help you find a solution with better space or runtime complexity.
            </p>
            <ul>
                <li>
                    {' '}
                    It will feature problems where you deal with sorted arrays (or Linked Lists) and need to find a set
                    of elements that fulfill certain constraints
                </li>
                <li> The set of elements in the array is a pair, a triplet, or even a subarray</li>
            </ul>
        </div>
    );
}

export function FastSlowPointers() {
    return (
        <div>
            <p>
                The Fast and Slow pointer approach, also known as the Hare & Tortoise algorithm, is a pointer algorithm
                that uses two pointers which move through the array (or sequence/linked list) at different speeds. This
                approach is quite useful when dealing with cyclic linked lists or arrays.
            </p>
            <p>
                By moving at different speeds (say, in a cyclic linked list), the algorithm proves that the two pointers
                are bound to meet. The fast pointer should catch the slow pointer once both the pointers are in a cyclic
                loop.
            </p>
            <p>How do you identify when to use the Fast and Slow pattern?</p>
            <ul>
                <li>The problem will deal with a loop in a linked list or array</li>
                <li>
                    When you need to know the position of a certain element or the overall length of the linked list.
                </li>
            </ul>
            <p>
                There are some cases where you shouldn’t use the Two Pointer approach such as in a singly linked list
                where you can’t move in a backwards direction. An example of when to use the Fast and Slow pattern is
                when you’re trying to determine if a linked list is a palindrome.
            </p>
        </div>
    );
}

export function MergeIntervals() {
    return (
        <div>
            <p>
                The Merge Intervals pattern is an efficient technique to deal with overlapping intervals. In a lot of
                problems involving intervals, you either need to find overlapping intervals or merge intervals if they
                overlap. The pattern works like this:
            </p>
            <p>
                Given two intervals (‘a’ and ‘b’), there will be six different ways the two intervals can relate to each
                other:
            </p>
            <Image src="/images/mergeIntervals.png" alt="Picture of the author" width={500} height={500} />
            <p>
                Understanding and recognizing these six cases will help you help you solve a wide range of problems from
                inserting intervals to optimizing interval merges.
            </p>
            <p>How do you identify when to use the Merge Intervals pattern?</p>
            <ul>
                <li>f you’re asked to produce a list with only mutually exclusive intervals</li>
                <li>f you hear the term “overlapping intervals”. Merge interval problem patterns:</li>
            </ul>
        </div>
    );
}

export function CyclicSort() {
    return (
        <div>
            <p>
                This pattern describes an interesting approach to deal with problems involving arrays containing numbers
                in a given range. The Cyclic Sort pattern iterates over the array one number at a time, and if the
                current number you are iterating is not at the correct index, you swap it with the number at its correct
                index. You could try placing the number in its correct index, but this will produce a complexity of
                O(n^2) which is not optimal, hence the Cyclic Sort pattern.
            </p>
            <Image src="/images/CyclicSort.png" alt="Picture of the author" width={200} height={600} />
            <p>How do I identify this pattern?</p>
            <ul>
                <li>They will be problems involving a sorted array with numbers in a given range</li>
                <li>
                    If the problem asks you to find the missing/duplicate/smallest number in an sorted/rotated array
                </li>
            </ul>
        </div>
    );
}

export function InPlaceReversalOfLinkedList() {
    return (
        <div>
            <p>
                In a lot of problems, you may be asked to reverse the links between a set of nodes of a linked list.
                Often, the constraint is that you need to do this in-place, i.e., using the existing node objects and
                without using extra memory. This is where the above mentioned pattern is useful.
            </p>
            <p>
                This pattern reverses one node at a time starting with one variable (current) pointing to the head of
                the linked list, and one variable (previous) will point to the previous node that you have processed. In
                a lock-step manner, you will reverse the current node by pointing it to the previous before moving on to
                the next node. Also, you will update the variable “previous” to always point to the previous node that
                you have processed.
            </p>
            <p>How do I identify when to use this pattern:</p>
            <ul>
                <li>If you’re asked to reverse a linked list without using extra memory</li>
            </ul>
        </div>
    );
}

export function BFS() {
    return (
        <div>
            <p>
                This pattern is based on the Breadth First Search (BFS) technique to traverse a tree and uses a queue to
                keep track of all the nodes of a level before jumping onto the next level. Any problem involving the
                traversal of a tree in a level-by-level order can be efficiently solved using this approach.
            </p>
            <p>
                The Tree BFS pattern works by pushing the root node to the queue and then continually iterating until
                the queue is empty. For each iteration, we remove the node at the head of the queue and “visit” that
                node. After removing each node from the queue, we also insert all of its children into the queue.
            </p>
            <p>How to identify the Tree BFS pattern:</p>
            <ul>
                <li>If you’re asked to traverse a tree in a level-by-level fashion (or level order traversal)</li>
            </ul>
        </div>
    );
}

export function DFS() {
    return (
        <div>
            <p>Tree DFS is based on the Depth First Search (DFS) technique to traverse a tree.</p>
            <p>
                You can use recursion (or a stack for the iterative approach) to keep track of all the previous (parent)
                nodes while traversing.
            </p>
            <p>
                The Tree DFS pattern works by starting at the root of the tree, if the node is not a leaf you need to do
                three things:
            </p>
            <ul>
                <li>
                    Decide whether to process the current node now (pre-order), or between processing two children
                    (in-order) or after processing both children (post-order).
                </li>
                <li>Make two recursive calls for both the children of the current node to process them.</li>
            </ul>
            <p>How to identify the Tree DFS pattern:</p>
            <ul>
                <li>If you’re asked to traverse a tree with in-order, preorder, or postorder DFS</li>
                <li>If the problem requires searching for something where the node is closer to a leaf</li>
            </ul>
        </div>
    );
}

export function TwoHeaps() {
    return (
        <div>
            <p>
                In many problems, we are given a set of elements such that we can divide them into two parts. To solve
                the problem, we are interested in knowing the smallest element in one part and the biggest element in
                the other part. This pattern is an efficient approach to solve such problems.
            </p>
            <p>
                This pattern uses two heaps; A Min Heap to find the smallest element and a Max Heap to find the biggest
                element. The pattern works by storing the first half of numbers in a Max Heap, this is because you want
                to find the largest number in the first half. You then store the second half of numbers in a Min Heap,
                as you want to find the smallest number in the second half. At any time, the median of the current list
                of numbers can be calculated from the top element of the two heaps.
            </p>
            <p>Ways to identify the Two Heaps pattern:</p>
            <ul>
                <li>Useful in situations like Priority Queue, Scheduling</li>
                <li>If the problem states that you need to find the smallest/largest/median elements of a set</li>
                <li>Sometimes, useful in problems featuring a binary tree data structure</li>
            </ul>
        </div>
    );
}

export function Subsets() {
    return (
        <div>
            <p>
                A huge number of coding interview problems involve dealing with Permutations and Combinations of a given
                set of elements. The pattern Subsets describes an efficient Breadth First Search (BFS) approach to
                handle all these problems.
            </p>
            <p>Given a set of [1, 5, 3]</p>
            <ul>
                <li>Start with an empty set: [[]]</li>
                <li>Add the first number (1) to all the existing subsets to create new subsets: [[], [1]];</li>
                <li>Add the second number (5) to all the existing subsets: [[], [1], [5], [1,5]];</li>
                <li>
                    dd the third number (3) to all the existing subsets: [[], [1], [5], [1,5], [3], [1,3], [5,3],
                    [1,5,3]].
                </li>
            </ul>
            <p>Here is a visual representation of the Subsets pattern:</p>
            <Image src="/images/subset.png" alt="Picture of the author" width={600} height={300} />
            <p>How to identify the Subsets pattern:</p>
            <ul>
                <li>Problems where you need to find the combinations or permutations of a given set</li>
            </ul>
        </div>
    );
}

export function ModifiedBinarySearch() {
    return (
        <div>
            <p>
                Whenever you are given a sorted array, linked list, or matrix, and are asked to find a certain element,
                the best algorithm you can use is the Binary Search. This pattern describes an efficient way to handle
                all problems involving Binary Search.
            </p>
            <p>The patterns looks like this for an ascending order set:</p>
            <ul>
                <li>
                    First, find the middle of start and end. An easy way to find the middle would be: middle = (start +
                    end) / 2. But this has a good chance of producing an integer overflow so it’s recommended that you
                    represent the middle as: middle = start + (end — start) / 2
                </li>
                <li>If the key is equal to the number at index middle then return middle</li>
                <li>If ‘key’ isn’t equal to the index middle:</li>
                <ul>
                    <li>Check if key {'<'} arr[middle]. If it is reduce your search to end = middle — 1</li>
                    <li>Check if key {'>'} arr[middle]. If it is reduce your search to end = middle + 1</li>
                </ul>
            </ul>
            <p>Here is a visual representation of the Modified Binary Search pattern:</p>
            <Image src="/images/binarySearch.png" alt="Picture of the author" width={600} height={300} />
        </div>
    );
}

export function TopKElements() {
    return (
        <div>
            <p>
                Any problem that asks us to find the top/smallest/frequent ‘K’ elements among a given set falls under
                this pattern.
            </p>
            <p>
                The best data structure to keep track of ‘K’ elements is Heap. This pattern will make use of the Heap to
                solve multiple problems dealing with ‘K’ elements at a time from a set of given elements. The pattern
                looks like this:
            </p>
            <ul>
                <li>Insert ‘K’ elements into the min-heap or max-heap based on the problem.</li>
                <li>
                    Iterate through the remaining numbers and if you find one that is larger than what you have in the
                    heap, then remove that number and insert the larger one.
                </li>
            </ul>

            <p>There is no need for a sorting algorithm because the heap will keep track of the elements for you.</p>
            <p>How to identify the Top ‘K’ Elements pattern:</p>
            <ul>
                <li>If you’re asked to find the top/smallest/frequent ‘K’ elements of a given set</li>
                <li>If you’re asked to sort an array to find an exact element</li>
            </ul>
        </div>
    );
}

export function KwayMerge() {
    return (
        <div>
            <p>K-way Merge helps you solve problems that involve a set of sorted arrays.</p>
            <p>
                Whenever you’re given ‘K’ sorted arrays, you can use a Heap to efficiently perform a sorted traversal of
                all the elements of all arrays. You can push the smallest element of each array in a Min Heap to get the
                overall minimum. After getting the overall minimum, push the next element from the same array to the
                heap. Then, repeat this process to make a sorted traversal of all elements.
            </p>
            <p>The pattern looks like this:</p>
            <ul>
                <li>Insert the first element of each array in a Min Heap.</li>
                <li>After this, take out the smallest (top) element from the heap and add it to the merged list.</li>
                <li>
                    After removing the smallest element from the heap, insert the next element of the same list into the
                    heap.
                </li>
                <li>Repeat steps 2 and 3 to populate the merged list in sorted order.</li>
            </ul>
            <p>How to identify the K-way Merge pattern:</p>
            <ul>
                <li>The problem will feature sorted arrays, lists, or a matrix</li>
                <li>If the problem asks you to merge sorted lists, find the smallest element in a sorted list.</li>
            </ul>
        </div>
    );
}

export function TopologicalSort() {
    return (
        <div>
            <p></p>
        </div>
    );
}
