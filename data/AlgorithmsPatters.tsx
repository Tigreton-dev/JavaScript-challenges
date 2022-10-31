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
            <p></p>
        </div>
    );
}

export function BFS() {
    return (
        <div>
            <p></p>
        </div>
    );
}

export function DFS() {
    return (
        <div>
            <p></p>
        </div>
    );
}

export function TwoHeaps() {
    return (
        <div>
            <p></p>
        </div>
    );
}

export function Subsets() {
    return (
        <div>
            <p></p>
        </div>
    );
}

export function ModifiedBinarySearch() {
    return (
        <div>
            <p></p>
        </div>
    );
}

export function TopKElements() {
    return (
        <div>
            <p></p>
        </div>
    );
}

export function KwayMerge() {
    return (
        <div>
            <p></p>
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
