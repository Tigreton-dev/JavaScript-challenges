import * as React from 'react';

export function ComplexityAnalysis() {
    return (
        <div>
            <h3 id="complexity-analysis">Complexity Analysis</h3>
            <p>The process of determining how efficient an algorithm is. Complexity analysis usually involves finding both the time complexity and the space complexity of an algorithm.</p>
            <h3 id="time-complexity">Time Complexity</h3>
            <p>A measure of how fast an algorithm runs, time complexity is a central concept in the field of algorithms and in coding interviews.</p>
            <p>It&#39;s expressed using Big O notation.</p>
            <h3 id="space-complexity">Space Complexity</h3>
            <p>A measure of how much auxiliary memory an algorithm takes up, space complexity is a central concept in the field of algorithms and in coding interviews.</p>
            <p>It&#39;s expressed using Big O notation.</p>
        </div>
    );
}

export function BigONotation() {
    return (
        <div>
            <h3 id="big-o-notation">Big O Notation</h3>
            <p>The notation used to describe the time complexity and space complexity of algorithms.</p>
            <p>Variables used in Big O notation denote the sizes of inputs to algorithms. For example, O(n) might be the time complexity of an algorithm that traverses through an array of length n; similarly, O(n + m) might be the time complexity of an algorithm that traverses through an array of length n and through a string of length m.</p>
            <p>The following are examples of common complexities and their Big O notations, ordered from fastest to slowest:</p>
            <ul>
                <li>Constant: O(1)</li>
                <li>Logarithmic: O(log(n))</li>
                <li>Linear: O(n)</li>
                <li>Log-linear: O(nlog(n))</li>
                <li>Quadratic: O(n2)</li>
                <li>Cubic: O(n3)</li>
                <li>Exponential: O(2n)</li>
                <li>Factorial: O(n!)</li>
            </ul>
            <p>Note that in the context of coding interviews, Big O notation is usually understood to describe the worst-case complexity of an algorithm, even though the worst-case complexity might differ from the average-case complexity.</p>

        </div>
    );
}

export function Array() {
    return (
        <div>
            <p>A linear collection of data values that are accessible at numbered indices, starting at index 0.</p>
            <p>The following are an array&#39;s standard operations and their corresponding time complexities:</p>
            <ul>
                <li>Accessing a value at a given index: O(1)</li>
                <li>Updating a value at a given index: O(1)</li>
                <li>Inserting a value at the beginning: O(n)</li>
                <li>Inserting a value in the middle: O(n)</li>
                <li>Inserting a value at the end:<ul>
                    <li>amortized O(1) when dealing with a dynamic array</li>
                    <li>O(n) when dealing with a static array</li>
                </ul>
                </li>
                <li>Removing a value at the beginning: O(n)</li>
                <li>Removing a value in the middle: O(n)</li>
                <li>Removing a value at the end: O(1)</li>
                <li>Copying the array: O(n)</li>
            </ul>

            <strong>Pros</strong>:
            <ul>
                <li>Optimized for fast operations on both ends, which ensures constant time insertion and deletion.</li>
                <li>Flexible capacity. Doesn't require setting initial capacity, can be expanded indefinitely.</li>
            </ul>
            <strong>Cons</strong>:
            <ul>
                <li>Costly access and search.</li>
                <li>
                    Linked list nodes don't occupy continuous memory locations, which makes iterating a linked list
                    somewhat slower than iterating an array.
                </li>
            </ul>
            <strong>Notable uses</strong>:
            <ul>
                <li>Implementation of stacks, queues, and graphs.</li>
            </ul>
        </div>
    );
}

export function LinkedList() {
    return (
        <div>
            <strong>Quick summary</strong>:
            <ul>
                <li>a linear collection of elements ordered by links instead of physical placement in memory.</li>
            </ul>
            <strong>Important facts</strong>:
            <ul>
                <li>
                    Each element is called a <em>node</em>.
                    <ul>
                        <li>
                            The first node is called the <em>head</em>.
                        </li>
                        <li>
                            The last node is called the <em>tail</em>.
                        </li>
                    </ul>
                </li>
                <li>
                    Nodes are sequential. Each node stores a reference (pointer) to one or more adjacent nodes:
                    <ul>
                        <li>
                            In a <strong>singly linked list</strong>, each node stores a reference to the next node.
                        </li>
                        <li>
                            In a <strong>doubly linked list</strong>, each node stores references to both the next and
                            the previous nodes. This enables traversing a list backwards.
                        </li>
                        <li>
                            In a <strong>circularly linked list</strong>, the tail stores a reference to the head.
                        </li>
                    </ul>
                </li>
                <li>Stacks and queues are usually implemented using linked lists, and less often using arrays.</li>
            </ul>
            <strong>Pros</strong>:
            <ul>
                <li>Optimized for fast operations on both ends, which ensures constant time insertion and deletion.</li>
                <li>Flexible capacity. Doesn't require setting initial capacity, can be expanded indefinitely.</li>
            </ul>
            <strong>Cons</strong>:
            <ul>
                <li>Costly access and search.</li>
                <li>
                    Linked list nodes don't occupy continuous memory locations, which makes iterating a linked list
                    somewhat slower than iterating an array.
                </li>
            </ul>
            <strong>Notable uses</strong>:
            <ul>
                <li>Implementation of stacks, queues, and graphs.</li>
            </ul>
            <strong>Time complexity</strong> (worst case):
            <p>The following are a singly linked list&#39;s standard operations and their corresponding time complexities:</p>
            <ul>
                <li>Accessing the head: O(1)</li>
                <li>Accessing the tail: O(n)</li>
                <li>Accessing a middle node: O(n)</li>
                <li>Inserting / Removing the head: O(1)</li>
                <li>Inserting / Removing the tail: O(n) to access + O(1)</li>
                <li>Inserting / Removing a middle node: O(n) to access + O(1)
                    Searching for a value: O(n)</li>
            </ul>
            <p>The following are a doubly linked list&#39;s standard operations and their corresponding time complexities:</p>
            <ul>
                <li>Accessing the head: O(1)</li>
                <li>Accessing the tail: O(1)</li>
                <li>Accessing a middle node: O(n)</li>
                <li>Inserting / Removing the head: O(1)</li>
                <li>Inserting / Removing the tail: O(1)</li>
                <li>Inserting / Removing a middle node: O(n) to access + O(1)</li>
                <li>Searching for a value: O(n)</li>
            </ul>

        </div>
    );
}

export function Queue() {
    return (
        <div>
            <strong>Quick summary</strong>:
            <ul>
                <li>a sequential collection where elements are added at one end and removed from the other end.</li>
            </ul>
            <strong>Important facts</strong>:
            <ul>
                <li>Modeled after a real-life queue: first come, first served.</li>
                <li>First in, first out (FIFO) data structure.</li>
                <li>
                    Similar to a linked list, the first (last added) node is called the <em>tail</em>, and the last
                    (next to be removed) node is called the <em>head</em>.
                </li>
                <li>
                    Two fundamental operations are enqueuing and dequeuing:
                    <ul>
                        <li>
                            To <em>enqueue</em>, insert at the tail of the linked list.
                        </li>
                        <li>
                            To <em>dequeue</em>, remove at the head of the linked list.
                        </li>
                    </ul>
                </li>
                <li>
                    Usually implemented on top of linked lists because they're optimized for insertion and deletion,
                    which are used to enqueue and dequeue elements.
                </li>
            </ul>
            <strong>Pros</strong>:
            <ul>
                <li>Constant-time insertion and deletion.</li>
            </ul>
            <strong>Cons</strong>:
            <ul>
                <li>
                    Access and search are <code>O(n)</code>.
                </li>
            </ul>
            <strong>Notable uses</strong>:
            <ul>
                <li>CPU and disk scheduling, interrupt handling and buffering. </li>
            </ul>
            <strong>Time complexity</strong> (worst case):
            <ul>
                <li>
                    Access: <code>O(n)</code>
                </li>
                <li>
                    Search: <code>O(n)</code>
                </li>
                <li>
                    Insertion (enqueuing): <code>O(1)</code>
                </li>
                <li>
                    Deletion (dequeuing): <code>O(1)</code>
                </li>
            </ul>
        </div>
    );
}

export function Stack() {
    return (
        <div>
            <strong>Quick summary</strong>:
            <ul>
                <li>a sequential collection where elements are added to and removed from the same end.</li>
            </ul>
            <strong>Important facts</strong>:
            <ul>
                <li>First-in, last-out (FILO) data structure.</li>
                <li>Equivalent of a real-life pile of papers on desk.</li>
                <li>
                    In stack terms, to insert is to <em>push</em>, and to remove is to <em>pop</em>.
                </li>
                <li>
                    Often implemented on top of a linked list where the head is used for both insertion and removal. Can
                    also be implemented using dynamic arrays.
                </li>
            </ul>
            <strong>Pros</strong>:
            <ul>
                <li>
                    Fast insertions and deletions: <code>O(1)</code>.
                </li>
            </ul>
            <strong>Cons</strong>:
            <ul>
                <li>
                    Access and search are <code>O(n)</code>.
                </li>
            </ul>
            <strong>Notable uses</strong>:
            <ul>
                <li>Maintaining undo history.</li>
                <li>Tracking execution of program functions via a call stack.</li>
                <li>Reversing order of items.</li>
            </ul>
            <strong>Time complexity</strong> (worst case):
            <ul>
                <li>
                    Access: <code>O(n)</code>
                </li>
                <li>
                    Search: <code>O(n)</code>
                </li>
                <li>
                    Insertion (pushing): <code>O(1)</code>
                </li>
                <li>
                    Deletion (popping): <code>O(1)</code>
                </li>
            </ul>
        </div>
    );
}

export function HashTable() {
    return (
        <div>
            <strong>Quick summary</strong>:
            <ul>
                <li>unordered collection that maps keys to values using hashing.</li>
            </ul>
            <strong>Also known as</strong>: hash, hash map, map, unordered map, dictionary, associative array.
            <strong>Important facts</strong>:
            <ul>
                <li>Stores data as key-value pairs.</li>
                <li>
                    Can be seen as an evolution of arrays that removes the limitation of sequential numerical indices
                    and allows using flexible keys instead.
                </li>
                <li>
                    For any given non-numeric key, <em>hashing</em> helps get a numeric index to look up in the
                    underlying array.
                </li>
                <li>
                    If hashing two or more keys returns the same value, this is called a <em>hash collision</em>. To
                    mitigate this, instead of storing actual values, the underlying array may hold references to linked
                    lists that, in turn, contain all values with the same hash.
                </li>
                <li>
                    A <em>set</em> is a variation of a hash table that stores keys but not values.
                </li>
            </ul>
            <strong>Pros</strong>:
            <ul>
                <li>Keys can be of many data types. The only requirement is that these data types are hashable.</li>
                <li>
                    Average search, insertion and deletion are <code>O(1)</code>.
                </li>
            </ul>
            <strong>Cons</strong>:
            <ul>
                <li>
                    Worst-case lookups are <code>O(n)</code>.
                </li>
                <li>No ordering means looking up minimum and maximum values is expensive.</li>
                <li>
                    Looking up the value for a given key can be done in constant time, but looking up the keys for a
                    given value is <code>O(n)</code>.
                </li>
            </ul>
            <strong>Notable uses</strong>:
            <ul>
                <li>Caching.</li>
                <li>Database partitioning.</li>
            </ul>
            <strong>Time complexity</strong> (worst case):
            <ul>
                <li>
                    Access: <code> O(1) on average; O(n) in the worse case.</code>
                </li>
                <li>
                    Search: <code> O(1) on average; O(n) in the worse case.</code>
                </li>
                <li>
                    Insertion: <code> O(1) on average; O(n) in the worse case.</code>
                </li>
                <li>
                    Deletion: <code> O(1) on average; O(n) in the worse case.</code>
                </li>
            </ul>
        </div>
    );
}

export function Graphs() {
    return (
        <div>
            <strong>Quick summary</strong>:
            <ul>
                <li>a data structure that stores items in a connected, non-hierarchical network.</li>
            </ul>
            <strong>Important facts</strong>:
            <ul>
                <li>
                    Each graph element is called a <em>node</em>, or <em>vertex</em>.
                </li>
                <li>
                    Graph nodes are connected by <em>edges</em>.
                </li>
                <li>
                    Graphs can be <em>directed</em> or <em>undirected</em>.
                </li>
                <li>
                    Graphs can be <em>cyclic</em> or <em>acyclic</em>. A cyclic graph contains a path from at least one
                    node back to itself.
                </li>
                <li>
                    Graphs can be <em>weighted</em> or <em>unweighted</em>. In a weighted graph, each edge has a certain
                    numerical weight.
                </li>
                <li>
                    Graphs can be <em>traversed</em>. See important facts under <em>Tree</em> for an overview of
                    traversal algorithms.
                </li>
                <li>
                    Data structures used to represent graphs:
                    <ul>
                        <li>
                            <em>Edge list</em>: a list of all graph edges represented by pairs of nodes that these edges
                            connect.
                        </li>
                        <li>
                            <em>Adjacency list</em>: a list or hash table where a key represents a node and its value
                            represents the list of this node's neighbors.
                        </li>
                        <li>
                            <em>Adjacency matrix</em>: a matrix of binary values indicating whether any two nodes are
                            connected.
                        </li>
                    </ul>
                </li>
            </ul>
            <strong>Pros</strong>:
            <ul>
                <li>Ideal for representing entities interconnected with links.</li>
            </ul>
            <strong>Cons</strong>:
            <ul>
                <li>Low performance makes scaling hard. </li>
            </ul>
            <strong>Notable uses</strong>:
            <ul>
                <li>Social media networks.</li>
                <li>Recommendations in ecommerce websites.</li>
                <li>Mapping services.</li>
            </ul>
            <strong>Time complexity</strong> (worst case): varies depending on the choice of algorithm.{' '}
            <code>O(n*lg(n))</code> or slower for most graph algorithms.
        </div>
    );
}

export function Tree() {
    return (
        <div>
            <strong>Quick summary</strong>:
            <ul>
                <li>a data structure that stores a hierarchy of values.</li>
            </ul>
            <strong>Important facts</strong>:
            <ul>
                <li>Organizes values hierarchically.</li>
                <li>
                    A tree item is called a <em>node</em>, and every node is connected to 0 or more child nodes using{' '}
                    <em>links</em>.
                </li>
                <li>A tree is a kind of graph where between any two nodes, there is only one possible path. </li>
                <li>
                    The top node in a tree that has no parent nodes is called the <em>root</em>.
                </li>
                <li>
                    Nodes that have no children are called <em>leaves</em>.
                </li>
                <li>
                    The number of links from the root to a node is called that node's <em>depth</em>.
                </li>
                <li>The height of a tree is the number of links from its root to the furthest leaf.</li>
                <li>
                    In a <em>binary tree</em>, nodes cannot have more than two children.
                    <ul>
                        <li>Any node can have one left and one right child node.</li>
                        <li>
                            Used to make <em>binary search trees</em>.
                        </li>
                        <li>
                            In an unbalanced binary tree, there is a significant difference in height between subtrees.
                        </li>
                        <li>
                            An completely one-sided tree is called a <em>degenerate tree</em> and becomes equivalent to
                            a linked list.
                        </li>
                    </ul>
                </li>
                <li>
                    Trees (and graphs in general) can be <em>traversed</em> in several ways:
                    <ul>
                        <li>
                            <em>Breadth first search</em> (BFS): nodes one link away from the root are visited first,
                            then nodes two links away, etc. BFS finds the shortest path between the starting node and
                            any other reachable node.
                        </li>
                        <li>
                            <em>Depth first search</em> (DFS): nodes are visited as deep as possible down the leftmost
                            path, then by the next path to the right, etc. This method is less memory intensive than
                            BFS. It comes in several flavors, including:
                            <ul>
                                <li>
                                    <em>Pre order traversal</em> (similar to DFS): after the current node, the left
                                    subtree is visited, then the right subtree.
                                </li>
                                <li>
                                    <em>In order traversal</em>: the left subtree is visited first, then the current
                                    node, then the right subtree.
                                </li>
                                <li>
                                    <em>Post order traversal</em>. the left subtree is visited first, then the right
                                    subtree, and finally the current node.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <strong>Pros</strong>:
            <ul>
                <li>
                    For most operations, the average time complexity is <code>O(log(n))</code>, which enables solid
                    scalability. Worst time complexity varies between <code>O(log(n))</code> and <code>O(n)</code>.
                </li>
            </ul>
            <strong>Cons</strong>:
            <ul>
                <li>Performance degrades as trees lose balance, and re-balancing requires effort.</li>
                <li>
                    No constant time operations: trees are <em>moderately</em> fast at everything they do.
                </li>
            </ul>
            <strong>Notable uses</strong>:
            <ul>
                <li>File systems.</li>
                <li>Database indexing.</li>
                <li>Syntax trees.</li>
                <li>Comment threads.</li>
            </ul>
            <strong>Time complexity</strong>: varies for different kinds of trees.
        </div>
    );
}

export function BinarySearch() {
    return (
        <div>
            <strong>Quick summary</strong>:
            <ul>
                <li>
                    a kind of binary tree where nodes to the left are smaller, and nodes to the right are larger than
                    the current node.
                </li>
            </ul>
            <strong>Important facts</strong>:
            <ul>
                <li>
                    Nodes of a binary search tree (BST) are ordered in a specific way:
                    <ul>
                        <li>
                            All nodes to the left of the current node are smaller (or sometimes smaller or equal) than
                            the current node.
                        </li>
                        <li>All nodes to the right of the current node are larger than the current node.</li>
                    </ul>
                </li>
                <li>Duplicate nodes are usually not allowed.</li>
            </ul>
            <strong>Pros</strong>:
            <ul>
                <li>Balanced BSTs are moderately performant for all operations.</li>
                <li>
                    Since BST is sorted, reading its nodes in sorted order can be done in <code>O(n)</code>, and search
                    for a node closest to a value can be done in <code>O(log(n))</code>
                </li>
            </ul>
            <strong>Cons</strong>:
            <ul>
                <li>
                    Same as trees in general: no constant time operations, performance degradation in unbalanced trees.
                </li>
            </ul>
            <strong>Time complexity</strong> (worst case):
            <ul>
                <li>
                    Access: <code>O(n)</code>
                </li>
                <li>
                    Search: <code>O(n)</code>
                </li>
                <li>
                    Insertion: <code>O(n)</code>
                </li>
                <li>
                    Deletion: <code>O(n)</code>
                </li>
            </ul>
            <strong>Time complexity</strong> (average case):
            <ul>
                <li>
                    Access: <code>O(log(n))</code>
                </li>
                <li>
                    Search: <code>O(log(n))</code>
                </li>
                <li>
                    Insertion: <code>O(log(n))</code>
                </li>
                <li>
                    Deletion: <code>O(log(n))</code>
                </li>
            </ul>
        </div>
    );
}


