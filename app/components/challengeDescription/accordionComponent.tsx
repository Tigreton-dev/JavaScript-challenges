import React, { useState } from 'react';
import { Button, Accordion, AccordionItem } from '@nextui-org/react';
import DataStructureModal from './dataStructureModal';
import AlgorithmsModel from './AlgorithmsModel';

export default function AccordionComponent({ hints }) {
    const [currentDataStructure, setDataStructure] = useState('');
    const [currentAlgorithm, setAlgorithm] = useState('');
    const dataStructureList = [
        'BigONotation',
        'ComplexityAnalysis',
        'Array',
        'LinkedList',
        'Queue',
        'Stack',
        'HashTable',
        'Graphs',
        'Tree',
        'BinarySearch'
    ];
    const algorithmList = [
        'SlidingWindow',
        'TwoPointers',
        'FastSlowPointers',
        'MergeIntervals',
        'CyclicSort',
        'InPlaceReversalOfLinkedList',
        'BFS',
        'DFS',
        'TwoHeaps',
        'Subsets',
        'ModifiedBinarySearch',
        'TopKElements',
        'KwayMerge',
        'TopologicalSort'
    ];
    const defaultContent =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    const onDataStructureClicked = (type: string) => {
        setDataStructure(type);
    };

    const onAlgorithmClicked = (type: string) => {
        setAlgorithm(type);
    };

    return (
        <div>
            <DataStructureModal currentDataStructure={currentDataStructure} />
            <AlgorithmsModel currentAlgorithm={currentAlgorithm} />
            <Accordion variant="splitted" selectionMode="multiple" className="px-0 mb-2">
                <AccordionItem
                    key="1"
                    aria-label="Hint 1"
                    title="Hint 1"
                    className="border border-default-300 dark:border-default-100 rounded-lg bg-black"
                >
                    {hints.hint_1}
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label="Hint 2"
                    title="Hint 2"
                    className="border border-default-300 dark:border-default-100 rounded-lg"
                >
                    {hints.hint_2}
                </AccordionItem>
                <AccordionItem
                    key="3"
                    aria-label="Hint 3"
                    title="Hint 3"
                    className="border border-default-300 dark:border-default-100 rounded-lg"
                >
                    {hints.hint_3}
                </AccordionItem>
                <AccordionItem
                    key="4"
                    aria-label="Optimal Space & Time Complexity"
                    title="Optimal Space & Time Complexity"
                    className="border border-default-300 dark:border-default-100 rounded-lg"
                >
                    {defaultContent}
                </AccordionItem>
                <AccordionItem
                    key="5"
                    aria-label="Data Structure info"
                    title="Data Structure info"
                    className="border border-default-300 dark:border-default-100 rounded-lg"
                >
                    {dataStructureList.map(dataStructure => {
                        return (
                            <Button
                            key={dataStructure}
                                variant="bordered"
                                aria-label="Take a photo"
                                size="md"
                                radius="sm"
                                className="border border-default-300 dark:border-default-100 m-1"
                                onClick={() => onDataStructureClicked(dataStructure)}
                            >
                                {dataStructure}
                            </Button>
                        );
                    })}
                </AccordionItem>
                <AccordionItem
                    key="6"
                    aria-label="Algorithm Patterns info"
                    title="Algorithm Patterns info"
                    className="border border-default-300 dark:border-default-100 rounded-lg"
                >
                     {algorithmList.map(algorithm => {
                        return (
                            <Button
                            key={algorithm}
                                variant="bordered"
                                aria-label="Take a photo"
                                size="md"
                                radius="sm"
                                className="border border-default-300 dark:border-default-100 m-1"
                                onClick={() => onAlgorithmClicked(algorithm)}
                            >
                                {algorithm}
                            </Button>
                        );
                    })}
                </AccordionItem>
            </Accordion>
        </div>
    );
}
