import React from "react";
import Bell from '../Assets/Bell.svg';
import Volume from '../Assets/Volume.svg';
import { Typography } from '@mui/material';
import left from '../Assets/left.svg';
import right from '../Assets/right.svg';
import reload from '../Assets/Reload.svg';
import box from '../Assets/Box.svg';
import Ellipse from '../Assets/Ellipse 1.svg';
import imageWithoutLogo from '../Assets/imageWithoutLogo.svg';
import Plus from '../Assets/Plus.svg';
import DropDown from '../Assets/Dropdown.svg';
import { ArrowDropDown } from "@mui/icons-material";


export default function Content() {
    return (
        <>
            {/* Custom Tabs */}
            <div className="px-2 sm:px-6 lg:px-8" style={{ marginTop: '25px' }}>
                <div className="flex h-16 items-center justify-center">
                    <div class="items-center w-full md:flex md:w-auto md:order-1">
                        <ul class="flex flex-col gap-10 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" style={{ color: '#06286E', fontSize: '20px', fontWeight: '700' }} class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Study</a>
                                <hr class="w-full" style={{ borderColor: '#06286E', borderWidth: '2px' }} />
                            </li>
                            <li>
                                <a href="#" style={{ color: '#696671', fontSize: '20px', fontWeight: '500' }} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Quiz</a>
                            </li>
                            <li>
                                <a href="#" style={{ color: '#696671', fontSize: '20px', fontWeight: '500' }} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Test</a>
                            </li>
                            <li>
                                <a href="#" style={{ color: '#696671', fontSize: '20px', fontWeight: '500' }} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Game</a>
                            </li>
                            <li>
                                <a href="#" style={{ color: '#696671', fontSize: '20px', fontWeight: '500' }} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Others</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Calculated Div */}
            <div className="flex flex-1 items-center justify-center mt-6">
                <div style={{ borderRadius: '42.5px', background: 'linear-gradient(to right, #1F80EB, #061C93), linear-gradient(to bottom, #051A91, #2284F1)', width: "712px", height: "394px", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                    <img
                        className="h-8 w-auto absolute top-8 left-8"
                        src={Bell}
                        alt="Bell Icon"
                    />
                    <span style={{ fontSize: '38px', color: 'white', position: "absolute" }}>9 + 6 + 7x - 2x - 3</span>
                    <img
                        className="h-8 w-auto absolute top-8 right-8"
                        src={Volume}
                        alt="Volume Icon"
                    />
                </div>
            </div>

            {/* Pagination */}
            <div className="flex flex-1 items-center justify-center my-6">
                <div style={{ width: "612px", height: "60px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
                    <div>
                        <img src={reload} />
                    </div>
                    <div className="flex items-center gap-8">
                        <img src={left} style={{ width: '50px' }} />
                        <Typography color="#202B37" className="font-normal" style={{ fontSize: '20px', fontWeight: '700' }}>
                            01/10
                        </Typography>
                        <img src={right} style={{ width: '50px' }} />
                    </div>
                    <div>
                        <img src={box} />
                    </div>
                </div>
            </div>

            {/* Powered */}
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }} className="flex flex-1 mx-28 my-20">
                <div style={{ display: 'flex', flexDirection: 'row', gap: '21.26px', left: '0' }}>
                    <div style={{ borderRadius: '50%', boxShadow: '0px 0px 31px rgba(0, 0, 0, 0.4)', display: 'flex', padding: '10px', width: '80px', height: '80px', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={Ellipse} style={{ width: '44px', height: '34px' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '115px', height: '60px', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <div style={{ marginBottom: '8px' }}>
                            <Typography color="#202B37" className="font-normal" style={{ fontSize: '12.4px', fontWeight: '700' }}>
                                Published by
                            </Typography>
                        </div>
                        <div>
                            <img className="h-8" src={imageWithoutLogo} alt="Your Company" />
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', right: "0" }}>
                    <img src={Plus} />
                    <Typography className="font-normal" style={{ position: "relative", fontSize: '28px', fontWeight: '600' }}>
                        <span style={{ background: 'linear-gradient(to right, #06286E, #164EC0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Create Flashcard</span>
                    </Typography>
                </div>


            </div>

            {/* FAQ */}
            <div style={{ display: "flex", flexDirection: 'column', justifyContent: "start", alignItems: "start" }} className="flex flex-1 mx-28 my-20">
                <Typography className="font-normal" style={{ position: "relative", fontSize: '48px', fontWeight: '700' }}>
                    <span style={{ background: 'linear-gradient(to right, #06286E, #164EC0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>FAQ</span>
                </Typography>

                <div className="mt-12" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", border: '1px solid blue', borderRadius: '12px', width:'848px'}}>
                    <div style={{ flexGrow: 1 }}>
                        Can education flashcards be used for all age groups?
                    </div>
                    <div>
                        <img src={DropDown} />
                    </div>
                </div>
                <div className="mt-8" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", border: '1px solid blue', borderRadius: '12px', width:'848px' }}>
                    <div style={{ flexGrow: 1 }}>
                        How do education flashcards work?
                    </div>
                    <div>
                        <img src={DropDown} />
                    </div>
                </div>
                <div className="mt-8" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", border: '1px solid blue', borderRadius: '12px', width:'848px' }}>
                    <div style={{ flexGrow: 1 }}>
                        Can education flashcards be used for test preparation?
                    </div>
                    <div>
                        <img src={DropDown} />
                    </div>
                </div>

            </div>
        </>
    )
}