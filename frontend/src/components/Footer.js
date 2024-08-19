import React from 'react';
import { CgArrowsExpandUpRight } from "react-icons/cg";

const Footer = () => {
    return (
        <footer className="bottom-0 left-0 w-full bg-black text-gray-100 py-4 flex">
            <div className="flex flex-col md:flex-row justify-between items-start w-4/6 mx-auto gap-8">
                <div className="flex flex-col">
                    <h2 className="font-semibold text-2xl mb-4">ABSTRACT</h2>
                    <p className="font-medium text-sm text-zinc-400">Branches</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="font-semibold text-2xl mb-4">RESOURCES</h2>
                    <p className="font-medium text-sm text-zinc-400">Blog</p>
                    <p className="font-medium text-sm text-zinc-400">Help Center</p>
                    <p className="font-medium text-sm text-zinc-400">Release Notes</p>
                    <p className="font-medium text-sm text-zinc-400">Status</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="font-semibold text-2xl mb-4">COMMUNITY</h2>
                    <p className="font-medium text-sm text-zinc-400">Twitter</p>
                    <p className="font-medium text-sm text-zinc-400">LinkedIn</p>
                    <p className="font-medium text-sm text-zinc-400">Facebook</p>
                    <p className="font-medium text-sm text-zinc-400">Dribble</p>
                    <p className="font-medium text-sm text-zinc-400">Podcast</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="font-semibold text-2xl mb-4">Company</h2>
                    <p className="font-medium text-sm text-zinc-400">About us</p>
                    <p className="font-medium text-sm text-zinc-400">Career</p>
                    <p className="font-medium text-sm text-zinc-400">Legal</p>
                    <div className="mt-7">
                        <h2 className="font-semibold text-sm">Contact us</h2>
                        <p className="font-medium text-xs text-zinc-400">info@abstract.com</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-[14rem] relative top-32 mb-44 ml-8  items-start mt-8">
                <div className="bg-white rounded-lg p-2 mb-2">
                    <CgArrowsExpandUpRight className="text-black text-lg" />
                </div>
                <div className="text-white text-sm">
                    <h1 className='font-semibold text-sm text-zinc-400'>© Copyright 2022</h1>
                    <h1 className='font-semibold text-sm text-zinc-400'>Abstract Studio Design, Inc.</h1>
                    <h1 className='font-semibold text-sm text-zinc-400'>All rights reserved</h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
