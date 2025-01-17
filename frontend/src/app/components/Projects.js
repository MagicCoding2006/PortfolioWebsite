"use client";

import Image from 'next/image';
import Link from 'next/link';
import MindfulnessZoneBanner from '../../../public/MindfulnessZoneBanner.png';
import CallAnalyzer from '../../../public/CallAnalyzer.png';
import AITravelApp from '../../../public/AITravelApp.png';
import RAGimg from '../../../public/RAGimg.png';

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
                        src={CallAnalyzer}
                        alt="AI Call Analyzer"
                        layout="responsive"
                        width={400}
                        height={300}
                        className="rounded-md mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">AI Call Analyzer</h3>
                    <p>A specialized AI-powered SaaS designed to enhance the performance of Sales Development Representatives (SDRs) by analyzing their calls and identifying areas for improvement. The platform also includes robust management features for team leads to oversee and optimize SDR performance. The solution is hosted securely in the cloud via Google Cloud Run (GCR).</p>
                </div>
                <div className="p-4 rounded-lg shadow-md" style={{backgroundColor: '#1D1D1D'}}>
                    <Image
                        src={AITravelApp}
                        alt="Travel Planning App Powered By AI"
                        layout="responsive"
                        width={400}
                        height={300}
                        className="rounded-md mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Travel Planning App Powered By AI</h3>
                    <p>An innovative travel application that integrates multiple tools to streamline the vacation booking process, reducing it to under 10 minutes. Leveraging web scraping, along with APIs for flights, hotels, and Google Console, this app provides a seamless and efficient booking experience.</p>
                </div>
                <div className="p-4 rounded-lg shadow-md" style={{backgroundColor: '#1D1D1D'}}>
                    <Image
                        src={RAGimg}
                        alt="AI Social Media Assistant"
                        layout="responsive"
                        width={400}
                        height={300}
                        className="rounded-md mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">AI Social Media Assistant</h3>
                    <p>An advanced SaaS solution that employs web scraping to aggregate content from your social media accounts. The platform downloads videos, analyzes them frame by frame, examines engagement metrics and transcripts, and leverages Retrieval-Augmented Generation (RAG) with a Large Language Model (LLM) to facilitate interactive insights and suggestions based on your content.</p>
                </div>
            </div>
        </section>
    );
}