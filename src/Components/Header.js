import React from "react"
import Home from '../Assets/Home.svg';

export default function Header() {
    return (
        <>
            <div className="max-w-7xl px-2 sm:px-6 lg:px-8" style={{marginLeft:'100px', marginTop:'65px'}}>
                <div className="relative flex h-16 items-center justify-between">
                    <nav class="flex justify-start" aria-label="Breadcrumb">
                        <div className="relative flex h-16 items-center justify-between">
                            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                <li>
                                    <div class="flex items-center">
                                        <img src={Home} alt="home" />
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center">
                                        <svg class="rtl:rotate-180 w-3 h-3 mx-1" style={{ color: '#06286E' }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <span class="ms-1 font-medium md:ms-2" style={{ color: '#696671', fontSize: '18px' }}>Home</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center">
                                        <svg class="rtl:rotate-180 w-3 h-3 mx-1" style={{ color: '#06286E' }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <span class="ms-1 text-xl font-medium md:ms-2" style={{ color: '#696671', fontSize: '18px' }}>Mathematics</span>
                                    </div>
                                </li>
                                <li aria-current="page">
                                    <div class="flex items-center">
                                        <svg class="rtl:rotate-180 w-3 h-3 mx-1" style={{ color: '#06286E' }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <span class="ms-1 text-xl font-medium md:ms-2" style={{ color: '#06286E', fontSize: '18px' }}>Relation and Function</span>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="px-2 sm:px-6 lg:px-8" style={{marginLeft:'100px', marginTop:'40px'}}>
                <div className="flex h-16 items-center justify-between">
                    <span class="ms-1 font-medium md:ms-2" style={{ background: 'linear-gradient(to right, #06286E, #164EC0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '32px', fontWeight: '700' }}>Relations and Functions ( Mathematics )</span>
                </div>
            </div>
        </>
    )
}
