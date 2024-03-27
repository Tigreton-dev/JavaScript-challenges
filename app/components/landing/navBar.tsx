import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';
import { GitHubIcon, SignIn, ListIcon } from '../../helpers/icons';

export default function App() {
   return (
      <nav className=" absolute w-full z-20 top-0 start-0">
         <div className="max-w-[1200px] flex flex-wrap items-center justify-between mx-auto py-4">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
               <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
               <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>

            <div className="items-center md:flex md:w-auto">
               <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
					<li>
                     <Button
							isIconOnly
                        variant="bordered"
                        aria-label="Take a photo"
                        size="md"
                        radius="sm"
                        className="border border-cyan-400 dark:border-cyan-400 text-cyan-400"
                     >
								<ListIcon size="20px" />
                     </Button>
                  </li>
                  <li>
                     <Button
                        variant="bordered"
                        aria-label="Take a photo"
                        size="md"
                        radius="sm"
                        className="border border-cyan-400 dark:border-cyan-400 text-cyan-400"
                     >
								<ListIcon size="20px" />
                        Challenges
                     </Button>
                  </li>
                  <li>
                     <Button
                        variant="bordered"
                        aria-label="Take a photo"
                        size="md"
                        radius="sm"
                        className="border border-cyan-400 dark:border-cyan-400 text-cyan-400"
                     >
                        <SignIn size="24px" />
                        Sign in
                     </Button>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}
