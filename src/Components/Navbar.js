import React from 'react';
import image from '../Assets/image.svg';

const navigation = [
    { name: 'Home', href: '#', current: false },
    { name: 'Flashcard', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
    { name: 'FAQ', href: '#', current: false },
    { name: 'Login', href: '#', current: true },
];

export default function Navbar() {
    return (
        <nav>
            <div className="max-w-7xl px-2 my-10 sm:px-6 lg:px-8" style={{ marginLeft: '104px' }}>
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <img
                            className="h-8 w-auto"
                            src={image}
                            alt="Your Company"
                        />
                    </div>
                    <div className="flex space-x-4">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`text-xl font-medium ${item.current ? 'bg-gradient-to-r from-blue-900 to-blue-600 text-white rounded-full' : 'text-black rounded-full'
                                    }`}
                                aria-current={item.current ? 'page' : undefined}
                                style={{ padding: '13px 40px', fontSize: '18px', margin:'2px', fontWeight:'400' }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
