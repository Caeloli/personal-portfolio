import clsx from 'clsx';
import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface NavbarProps {
    toggleDarkMode: () => void;
}

function Navbar({ toggleDarkMode }: NavbarProps): ReactElement {

    /** Tailwind Class Logic **/
    const navigationItemsStylesLogic = (isActive: boolean) => {
        const classNavigationItemClass = clsx(
            `flex gap-2 px-3 relative font-size-xl uppercase items-center font-semibold duration-300
      hover:text-blue-green
      after:w-0.5 after:h-full after:absolute  after:left-0 after:transition-all after:duration-300
      `

        );
        if (isActive)
            return twMerge('[&_span]:text-fire-opal', 'after:bg-fire-opal', classNavigationItemClass)
        else
            return twMerge('[&_span]:text-blue-green', 'text-black', 'dark:text-white', 'after:bg-blue-green', classNavigationItemClass)
    }

    return (

        <header className='w-full p-4 lg:px-40 lg:pt-12 lg:pb-4'>
            <nav className='flex w-full justify-between lg:justify-between sticky top-0 backdrop-blur-sm shadow-sm rounded-b-md'>
                <div className=''>
                    <span onClick={toggleDarkMode} className='
            flex items-center shadow justify-center cursor-pointer bg-white text-black rounded-full w-10 h-10 transition-all duration-300
            dark:bg-black dark:text-white
            '>
                        <i className='fa fa-moon'></i>
                    </span>
                </div>
                {/** Desktop **/}
                <div className='hidden lg:flex items-center justify-center'>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => navigationItemsStylesLogic(isActive)}
                    >
                        <span className='inline-flex transition-all duration-300'>0</span>
                        <h6
                            className="inline-flex text-black dark:text-white transition-all duration-300"
                        >About</h6>
                    </NavLink>
                    <NavLink
                        to="/academic"
                        className={({ isActive }) => navigationItemsStylesLogic(isActive)}
                    >
                        <span className='inline-flex transition-all duration-300'>1</span>
                        <h6
                            className="inline-flex text-black dark:text-white transition-all duration-300"
                        >Academic</h6>
                    </NavLink>
                    <NavLink
                        to="/technologies"
                        className={({ isActive }) => navigationItemsStylesLogic(isActive)}
                    >
                        <span className='inline-flex transition-all duration-300'>2</span>
                        <h6
                            className="inline-flex text-black dark:text-white transition-all duration-300"
                        >Technologies</h6>
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) => navigationItemsStylesLogic(isActive)}
                    >
                        <span className='inline-flex transition-all duration-300'>3</span>
                        <h6
                            className="inline-flex text-black dark:text-white transition-all duration-300"
                        >Projects</h6>
                    </NavLink>
                    <NavLink
                        to="/resume"
                        className={({ isActive }) => navigationItemsStylesLogic(isActive)}
                    >
                        <span className='inline-flex transition-all duration-300'>4</span>
                        <h6
                            className="inline-flex text-black dark:text-white transition-all duration-300"
                        >Resume</h6>
                    </NavLink>
                </div>
                {/** ****** **/}
                {/** Mobile Main Nav **/}
                <div className='flex lg:hidden items-center justify-center flex-col gap-1 cursor-pointer'>
                    <span className='flex bg-black dark:bg-white w-5 h-0.5'></span>
                    <span className='flex bg-black dark:bg-white w-5 h-0.5'></span>
                    <span className='flex bg-black dark:bg-white w-5 h-0.5'></span>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;