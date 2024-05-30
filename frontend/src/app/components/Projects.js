"use client";

import Image from 'next/image';
import Link from 'next/link';
import MindfulnessZoneBanner from '../../../public/MindfulnessZoneBanner.png';
import CoffeeSite from '../../../public/CoffeeSite.png';
import ThreadsClone from '../../../public/ThreadsClone.png';
import CryptoSite from '../../../public/CryptoSite.png';

export default function Projects() {
    return (
        <section className="p-8 bg-black text-white">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
                    <p className="text-lg text-gray-300">Some of my recent projects after <b className="text-red-600"><u>3000</u>+</b> hours of work</p>
                </div>
                <div className="w-full md:w-auto mt-4 md:mt-0">
                    <Link href="/portfolio">
                        <p className="bg-red-600 text-center py-3 px-6 font-semibold text-md rounded-md md:inline-block w-full md:w-auto">View All</p>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-4 rounded-lg shadow-md" style={{backgroundColor: '#1D1D1D'}}>
                    <Image
                        src={MindfulnessZoneBanner}
                        alt="MindfulnessZone"
                        layout="responsive"
                        width={400}
                        height={300}
                        className="rounded-md mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Mindfulness Zone</h3>
                    <p>An interactive web application designed to promote mindfulness and mental well-being through guided meditation, relaxation techniques, and stress management resources.</p>
                </div>
                <div className="p-4 rounded-lg shadow-md" style={{backgroundColor: '#1D1D1D'}}>
                    <Image
                        src={CoffeeSite}
                        alt="Coffee Shop Website"
                        layout="responsive"
                        width={400}
                        height={300}
                        className="rounded-md mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Coffee Shop Website</h3>
                    <p>A stylish and modern website for a coffee shop, featuring an online menu, ordering system, and information about the shop&apos;s locations and special events.</p>
                </div>
                <div className="p-4 rounded-lg shadow-md" style={{backgroundColor: '#1D1D1D'}}>
                    <Image
                        src={ThreadsClone}
                        alt="Threads Clone"
                        layout="responsive"
                        width={400}
                        height={300}
                        className="rounded-md mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Threads Clone</h3>
                    <p>A social media platform inspired by Threads, allowing users to share updates, connect with friends, and engage in community discussions.</p>
                </div>
                <div className="p-4 rounded-lg shadow-md" style={{backgroundColor: '#1D1D1D'}}>
                    <Image
                        src={CryptoSite}
                        alt="Crypto Fund Transfering Website"
                        layout="responsive"
                        width={400}
                        height={300}
                        className="rounded-md mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Crypto Fund Transfering Website</h3>
                    <p>A secure and user-friendly website for transferring cryptocurrency funds, offering transaction tracking, wallet integration, and real-time exchange rates.</p>
                </div>
            </div>
        </section>
    );
}