import React, { useEffect, useRef, useCallback, useState } from 'react';
import Split from 'react-split';
import CodeEditor from './codeEditor';
import Console from './console';
import { DataContext } from '../../context/dataContext';
import { MackOsTitleBar } from '../../helpers';

export default function ChallengeSolution({ startedCode, refName, testCases, solutionCode, submittedCode }) {
   return (
      <div>
         <Split
            className="splitHorizontal"
            sizes={[100, 0]}
            minSize={32}
            expandToMin={false}
            gutterSize={10}
            gutterAlign="center"
            snapOffset={50}
            dragInterval={1}
            direction="vertical"
         >
            <div className="relative border border-default-300 dark:border-default-100 overflow-hidden rounded-lg">
               <MackOsTitleBar />
               <CodeEditor
                  startedCode={startedCode}
                  refName={refName}
                  testCases={testCases}
                  submittedCode={submittedCode}
               />
            </div>
            <div className="border border-default-300 dark:border-default-100 overflow-hidden rounded-lg">
               <MackOsTitleBar />
               <Console />
            </div>
         </Split>
      </div>
   );
}
