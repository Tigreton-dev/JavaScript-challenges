"use client";
import * as React from 'react';

export const DataContext = React.createContext(null);


const defaultState = {
    currentProblem: {
        refName: 'bestBridge',
        refNumber: 35,
        category: 'Graphs',
        difficulty: 'Easy',
        title: 'Best Bridge',
        tags: ['Easy', 'Graphs'],
        description:
            '<p>Write a function, bestBridge, that takes in a grid as an argument. The grid contains water (W) and land (L). There are exactly two islands in the grid. An island is a vertically or horizontally connected region of land. Return the minimum length bridge needed to connect the two islands. A bridge does not need to form a straight line.</p>',
        examples: {
            example1: {
                input: "input = [   ['W', 'W', 'W', 'L', 'L'],\n   ['L', 'L', 'W', 'W', 'L'],   ['L', 'L', 'L', 'W', 'L'],   ['W', 'L', 'W', 'W', 'W'],   ['W', 'W', 'W', 'W', 'W'],   ['W', 'W', 'W', 'W', 'W'], ];",
                output: '1'
            },
            example2: {
                input: "input = [   ['W', 'W', 'W', 'W', 'W'],   ['W', 'W', 'W', 'W', 'W'],   ['L', 'L', 'W', 'W', 'L'],   ['W', 'L', 'W', 'W', 'L'],   ['W', 'W', 'W', 'L', 'L'],   ['W', 'W', 'W', 'W', 'W'], ];",
                output: '2'
            }
        },
        hints: {
            hint_1: '...',
            hint_2: '...',
            hint_3: '...',
            Optimal_Space__Time_Complexity: '...'
        },
        startedCode: {
            javaScript: 'function bestBridge(grid) {\n    // Write your solution...\n    return true;\n}'
        },
        solutionCode: {
            javaScript: [
                "// r = number of rows\n// c = number of columns\n// Time: O(rc)\n// Space: O(rc)\nfunction bestBridge(grid) {\n    let mainIsland;\n    for (let r = 0; r < grid.length; r += 1) {\n        for (let c = 0; c < grid[0].length; c += 1) {\n            const possibleIsland = traverseIsland(grid, r, c, new Set());\n            if (possibleIsland.size > 0) {\n                mainIsland = possibleIsland;\n                break;\n            }\n        }\n    }\n    return brith(grid, mainIsland)\n}\nfunction isInbounds(grid, row, col) {\n    const rowInbounds = 0 <= row && row < grid.length;\n    const colInbounds = 0 <= col && col < grid[0].length;\n    return rowInbounds && colInbounds;\n};\nfunction traverseIsland(grid, row, col, visited) {\n    if (!isInbounds(grid, row, col) || grid[row][col] === 'W') return visited;\n    const pos = row + ',' + col;\n    if (visited.has(pos)) return visited;\n    visited.add(pos);\n    traverseIsland(grid, row - 1, col, visited);\n    traverseIsland(grid, row + 1, col, visited);\n    traverseIsland(grid, row, col - 1, visited);\n    traverseIsland(grid, row, col + 1, visited);\n    return visited;\n};\nfunction brith(grid, mainIsland) {\n    const visited = new Set(mainIsland);\n    const queue = [];\n    for (let pos of mainIsland) {\n        const [row, col] = pos.split(',').map(Number);\n        queue.push([row, col, 0]);\n    }\n    while (queue.length > 0) {\n        const [row, col, distance] = queue.shift();\n        const pos = row + ',' + col;\n        if (grid[row][col] === 'L' && !mainIsland.has(pos)) return distance - 1;\n        const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];\n        for (let delta of deltas) {\n            const [deltaRow, deltaCol] = delta;\n            const neighborRow = row + deltaRow;\n            const neighborCol = col + deltaCol;\n            const neighborPos = neighborRow + ',' + neighborCol;\n            if (\n                isInbounds(grid, neighborRow, neighborCol) &&\n                !visited.has(neighborPos)\n            ) {\n                visited.add(neighborPos);\n                queue.push([neighborRow, neighborCol, distance + 1]);\n            }\n        }\n    }\n}"
            ]
        },
        submittedCode: {
            javaScript: ''
        },
        testCases: {
            Test_1: {
                test_input: [
                    [
                        ['W', 'W', 'W', 'L', 'L'],
                        ['L', 'L', 'W', 'W', 'L'],
                        ['L', 'L', 'L', 'W', 'L'],
                        ['W', 'L', 'W', 'W', 'W'],
                        ['W', 'W', 'W', 'W', 'W'],
                        ['W', 'W', 'W', 'W', 'W']
                    ]
                ],
                test_expected: 1,
                code_output: null,
                passed_test: false
            },
            Test_2: {
                test_input: [
                    [
                        ['W', 'W', 'W', 'W', 'W'],
                        ['W', 'W', 'W', 'W', 'W'],
                        ['L', 'L', 'W', 'W', 'L'],
                        ['W', 'L', 'W', 'W', 'L'],
                        ['W', 'W', 'W', 'L', 'L'],
                        ['W', 'W', 'W', 'W', 'W']
                    ]
                ],
                test_expected: 2,
                code_output: null,
                passed_test: false
            },
            Test_3: {
                test_input: [
                    [
                        ['W', 'W', 'W', 'W', 'W'],
                        ['W', 'W', 'W', 'L', 'W'],
                        ['L', 'W', 'W', 'W', 'W']
                    ]
                ],
                test_expected: 3,
                code_output: null,
                passed_test: false
            },
            Test_4: {
                test_input: [
                    [
                        ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ['W', 'W', 'W', 'W', 'W', 'L', 'W', 'W'],
                        ['W', 'W', 'W', 'W', 'L', 'L', 'W', 'W'],
                        ['W', 'W', 'W', 'W', 'L', 'L', 'L', 'W'],
                        ['W', 'W', 'W', 'W', 'W', 'L', 'L', 'L'],
                        ['L', 'W', 'W', 'W', 'W', 'L', 'L', 'L'],
                        ['L', 'L', 'L', 'W', 'W', 'W', 'W', 'W'],
                        ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
                    ]
                ],
                test_expected: 3,
                code_output: null,
                passed_test: false
            },
            Test_5: {
                test_input: [
                    [
                        ['L', 'L', 'L', 'L', 'L', 'L', 'L', 'L'],
                        ['L', 'W', 'W', 'W', 'W', 'W', 'W', 'L'],
                        ['L', 'W', 'W', 'W', 'W', 'W', 'W', 'L'],
                        ['L', 'W', 'W', 'W', 'W', 'W', 'W', 'L'],
                        ['L', 'W', 'W', 'W', 'W', 'W', 'W', 'L'],
                        ['L', 'W', 'W', 'W', 'W', 'W', 'W', 'L'],
                        ['L', 'W', 'W', 'L', 'W', 'W', 'W', 'L'],
                        ['L', 'W', 'W', 'W', 'W', 'W', 'W', 'L'],
                        ['L', 'W', 'W', 'W', 'W', 'W', 'W', 'L'],
                        ['L', 'W', 'W', 'W', 'W', 'W', 'W', 'L'],
                        ['L', 'W', 'W', 'W', 'W', 'W', 'W', 'L'],
                        ['L', 'L', 'L', 'L', 'L', 'L', 'L', 'L']
                    ]
                ],
                test_expected: 2,
                code_output: null,
                passed_test: false
            },
            Test_6: {
                test_input: [
                    [
                        ['W', 'L', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ['W', 'L', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ['W', 'W', 'W', 'W', 'W', 'W', 'L', 'W'],
                        ['W', 'W', 'W', 'W', 'W', 'W', 'L', 'L'],
                        ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'L']
                    ]
                ],
                test_expected: 8,
                code_output: null,
                passed_test: false
            }
        },
        platform: 'structy'
    },
    currentProblemList: {},
    fontSize: 14,
    isFullScreen: false,
    problemPassesAllTests: false,
    appSize: 16
};

interface Props {
    children: React.ReactNode;
}

const DataProvider: React.FC<Props> = ({ children }) => {
    const [data, setData] = React.useState(defaultState);

    function updateData(payload: object) {
        setData(data => {
            const newState = typeof payload === 'function' ? payload(data) : payload;
            return {
                ...data,
                ...newState
            };
        });
    }

    return <DataContext.Provider value={{ data, updateData }}>{children}</DataContext.Provider>;
};

export default DataProvider;
