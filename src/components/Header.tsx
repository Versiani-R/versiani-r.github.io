import Image from "next/image"

import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { BsPhoneFill } from 'react-icons/bs'
import { MdLocationPin, MdWebAsset } from 'react-icons/md'

const Header = () => {
    return (
        <div className="pb-10">
            <div className="flex w-full h-full relative">
                <div className="w-1/6 h-48 relative">
                    <Image src={'IMG_9651.JPG'} alt="Profile Picture" fill className="rounded-full object-cover object-center border-2" style={{ objectPosition: '45%' }} />
                </div>

                <div className="ml-4 w-4/5 max-h-48 overflow-y-scroll">
                    <h1 className="text-5xl mb-2">Renato Versiani</h1>

                    <h2 className="text-2xl mb-2 text-slate-600">Full Stack Senior Software Engineer</h2>

                    <p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        I'm Renato, a <strong>Harvard Educated</strong> Senior FullStack Software Engineer with <strong>9+ years of experience</strong> writing complex-free, highly efficient, scalable code.I'm experienced in application design, architecture, development, testing and deployment. I think first, I'm a fast learner and I'm ready for any kind of challenge.
                    </p>
                </div>
            </div>

            <div className="mt-6 w-screen bg-slate-700 -m-[30px] px-14 py-3">
                <div className="flex flex-wrap justify-between">
                    <div className="w-1/2">
                        <div className="w-1/2">
                            <span className="flex items-center text-white my-2">
                                <FaEnvelope className="mr-2 min-w-[16px]" />
                                renatoversianidrakk@gmail.com
                            </span>
                            <span className="flex items-center text-white my-2">
                                <MdLocationPin className="mr-2 min-w-[16px]" />
                                São Paulo, Brazil
                            </span>
                        </div>
                    </div>

                    <div className="w-1/2 flex justify-end">
                        <div className="w-1/2">
                            <span className="flex items-center text-white my-2">
                                <BsPhoneFill className="mr-2 min-w-[16px]" />
                                +55 (38) 9 8402-2924
                            </span>
                            <span className="flex items-center items-start text-white my-2">
                                <MdWebAsset className="mr-2 min-w-[16px]" />
                                <a href="https://versiani-r.github.io" target="_blank">versiani-r.github.io</a>
                            </span>
                        </div>
                    </div>

                    <div className="w-1/2">
                        <div className="w-1/2">
                            <span className="flex items-center text-white">
                                <FaLinkedin className="mr-2 min-w-[16px]" />
                                <a href="https://www.linkedin.com/in/renato-versiani/" target="_blank">linkedin.com/renato-versiani</a>
                            </span>
                        </div>
                    </div>

                    <div className="w-1/2 flex justify-end">
                        <div className="w-1/2">
                            <span className="flex items-center text-white">
                                <FaGithub className="mr-2 min-w-[16px]" />
                                <a href="https://github.com/Versiani-R" target="_blank">g.com/Versiani-R</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Header }