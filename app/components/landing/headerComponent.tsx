import React from 'react';
import Image from 'next/image';
import LandingNavBar from './navBar';
import { Button } from '@nextui-org/react';
import { RoundedErrorIcon, CheckedIcon, GitHubIcon, PlayIcon } from '../../helpers/icons';

export default function HeaderComponent() {
   return (
      <header className="mb-12 mt-[60px] z-10">
         <LandingNavBar />
         <div className="flex w-[100%] h-[700px] items-center max-w-[1200px] m-auto gap-12">
            <div className=" flex-1">
               <h1 className="text-5xl mb-8 font-light">
                  The open source platform to increase
                  <br />
                  your <span className="text-cyan-400">algorithms</span> skills
               </h1>
               <p className=" mb-12 dark:text-neutral-400 font-extralight">
                  <strong>Embrace the challenge</strong>, and embark on a journey towards coding excellence with{' '}
                  <strong className="text-cyan-400">oChallenge</strong>. Start mastering{' '}
                  <strong>data structures</strong> and <strong>algorithms</strong> today, and unlock your potential as a
                  software developer. <strong className="text-cyan-400">oChallenge</strong> provide with the ultimate
                  platform to mastery it.
               </p>
               <Button
                  variant="bordered"
                  aria-label="Take a photo"
                  size="lg"
                  radius="sm"
                  className="border border-cyan-400 dark:border-cyan-400 text-cyan-400 mr-4"
               >
						 <PlayIcon size={"24px"} />
                  Get started
               </Button>
               <Button
                  variant="bordered"
                  aria-label="Take a photo"
                  size="lg"
                  radius="sm"
                  className="border border-cyan-400 dark:border-cyan-400 text-cyan-400"
               >
                  <GitHubIcon size={"24px"} />
                  GitHub
               </Button>
            </div>
            <div className="flex-1 flex justify-end relative" style={{transform: "perspective(500px) rotateY(-10deg)"}}>
               <div className="h-[507px] w-[450px] flex flex-col border border-default-200 rounded-lg overflow-hidden">
                  <MackOsTitleBarLanding />
                  <Image src="/images/codeImage.png" width="1244" height="1332" />
               </div>
               <div className="h-[350px] w-[320px] flex flex-col absolute bottom-[-30px] left-0 border border-default-200 rounded-lg overflow-hidden bg-black">
                  <MackOsTitleBarLanding />
                  <div className="p-3 h-[323px]">
                     <BoxTestPass />
                     <BoxTestPass />
                     <BoxTestFail />
                     <BoxTestPass />
                     <BoxTestFail />
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}

export function MackOsTitleBarLanding() {
   return (
      <div className="flex items-center sticky top-0 left-0 px-4 z-10 justify-between h-[25px] bg-code-background w-full bg-default-100 dark:bg-default-50 dark:border-b border-default-100">
         <div className="flex items-center gap-2 basis-1/3">
            <div className="w-[10px] h-[10px] rounded-full bg-red-500"></div>
            <div className="w-[10px] h-[10px] rounded-full bg-yellow-500"></div>
            <div className="w-[10px] h-[10px] rounded-full bg-green-500"></div>
         </div>
         <div className="flex basis-1/3 h-full justify-center items-center"></div>
         <div className="flex basis-1/3"></div>
      </div>
   );
}

function BoxTestFail() {
   return (
      <div className="w-[100%] h-[50px] rounded-lg bg-default-100 dark:bg-default-50 box-border mb-3 flex items-center pl-3 text-[#ff11009b]">
         <RoundedErrorIcon size="40px" />
         <p className="m-0 ml-3 p-0">Test failed</p>
      </div>
   );
}

function BoxTestPass() {
   return (
      <div className="w-[100%] h-[50px] rounded-lg bg-default-100 dark:bg-default-50 box-border mb-3 flex items-center pl-3 text-green-600">
         <CheckedIcon size="35px" />
         <p className="m-0 ml-3 p-0">Test passed</p>
      </div>
   );
}
