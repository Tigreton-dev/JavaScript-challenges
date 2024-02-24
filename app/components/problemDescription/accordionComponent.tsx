import React, { useState } from "react";
import { Button, Accordion, AccordionItem } from "@nextui-org/react";
import DataStructureModal from "./dataStructureModal"
import AlgorithmsModel from "./AlgorithmsModel"

export default function AccordionComponent({ hints }) {
    const [currentDataStructure, setDataStructure] = useState("");
    const [currentAlgorithm, setAlgorithm] = useState("");
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    const onDataStructureClicked = (type: string) => {
        setDataStructure(type)
    }

    const onAlgorithmClicked = (type: string) => {
        setAlgorithm(type)
    }

    return (
        <div>
            <DataStructureModal currentDataStructure={currentDataStructure} />
            <AlgorithmsModel currentAlgorithm={currentAlgorithm} />
            <Accordion variant="splitted" selectionMode="multiple" className="px-0 mb-2">
                <AccordionItem key="1" aria-label="Hint 1" title="Hint 1" className="border border-default-300 dark:border-default-100 rounded-lg bg-black">
                    {hints.hint_1}
                </AccordionItem>
                <AccordionItem key="2" aria-label="Hint 2" title="Hint 2" className="border border-default-300 dark:border-default-100 rounded-lg">
                    {hints.hint_2}
                </AccordionItem>
                <AccordionItem key="3" aria-label="Hint 3" title="Hint 3" className="border border-default-300 dark:border-default-100 rounded-lg">
                    {hints.hint_3}
                </AccordionItem>
                <AccordionItem key="4" aria-label="Optimal Space & Time Complexity" title="Optimal Space & Time Complexity" className="border border-default-300 dark:border-default-100 rounded-lg">
                    {defaultContent}
                </AccordionItem>
                <AccordionItem key="5" aria-label="Data Structure info" title="Data Structure info" className="border border-default-300 dark:border-default-100 rounded-lg">
                    <Button onClick={() => onDataStructureClicked('BigONotation')}>BigONotation</Button>
                    <Button onClick={() => onDataStructureClicked('ComplexityAnalysis')}>ComplexityAnalysis</Button>
                    <Button onClick={() => onDataStructureClicked('Array')}>Array</Button>
                    <Button onClick={() => onDataStructureClicked('LinkedList')}>LinkedList</Button>
                    <Button onClick={() => onDataStructureClicked('Queue')}>Queue</Button>
                    <Button onClick={() => onDataStructureClicked('Stack')}>Stack</Button>
                    <Button onClick={() => onDataStructureClicked('HashTable')}>HashTable</Button>
                    <Button onClick={() => onDataStructureClicked('Graphs')}>Graphs</Button>
                    <Button onClick={() => onDataStructureClicked('Tree')}>Tree</Button>
                    <Button onClick={() => onDataStructureClicked('BinarySearch')}>BinarySearch</Button>
                </AccordionItem>
                <AccordionItem key="6" aria-label="Algorithm Patterns info" title="Algorithm Patterns info" className="border border-default-300 dark:border-default-100 rounded-lg">
                    <Button onClick={() => onAlgorithmClicked('SlidingWindow')}>Sliding Window</Button>
                    <Button onClick={() => onAlgorithmClicked('TwoPointers')}>Two Pointers</Button>
                    <Button onClick={() => onAlgorithmClicked('FastSlowPointers')}>Fast and Slow pointers</Button>
                    <Button onClick={() => onAlgorithmClicked('MergeIntervals')}>Merge Intervals</Button>
                    <Button onClick={() => onAlgorithmClicked('CyclicSort')}>Cyclic sort</Button>
                    <Button onClick={() => onAlgorithmClicked('InPlaceReversalOfLinkedList')}>In-place reversal of linked list</Button>
                    <Button onClick={() => onAlgorithmClicked('BFS')}>Tree BFS</Button>
                    <Button onClick={() => onAlgorithmClicked('DFS')}>Tree DFS</Button>
                    <Button onClick={() => onAlgorithmClicked('TwoHeaps')}>Two heaps</Button>
                    <Button onClick={() => onAlgorithmClicked('Subsets')}>Subsets</Button>
                    <Button onClick={() => onAlgorithmClicked('ModifiedBinarySearch')}>Modified binary search</Button>
                    <Button onClick={() => onAlgorithmClicked('TopKElements')}>Top K elements</Button>
                    <Button onClick={() => onAlgorithmClicked('KwayMerge')}>K-way Merge</Button>
                    <Button onClick={() => onAlgorithmClicked('TopologicalSort')}>Topological sort</Button>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
