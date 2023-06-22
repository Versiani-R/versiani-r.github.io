import Image from 'next/image';
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Modal = ({ visibility, setVisibility }: { visibility: boolean, setVisibility: any }) => {
    return (
        <div>
            {visibility && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="w-2/3 h-2/3 p-6 bg-white rounded-lg overflow-scroll overscroll-contain">
                        <div className='w-full flex justify-end'>
                            <button className='absolute' onClick={() => setVisibility(false)}>
                                <AiOutlineCloseCircle size={24} />
                            </button>
                        </div>

                        <div className='w-11/12 h-32 flex'>
                            <div className="w-3/12 h-32 relative mr-4">
                                <Image src={'IMG_9651.JPG'} alt="Project Image" className="object-cover" fill />
                            </div>

                            <div className='flex justify-between flex-col'>
                                <span className="block text-xl text-gray-900 pt-6">Title</span>
                                <div>
                                    <span className="block text-xs text-gray-500">Business</span>
                                    <span className="block text-xs text-gray-500">02/2022 - Current</span>
                                </div>
                            </div>
                        </div>

                        <div className='w-full mt-4 flex flex-wrap items-center text-white gap-2'>
                            <span className='bg-slate-700 rounded-lg px-3 py-2 text-xs'>Typescript</span>
                            <span className='bg-slate-700 rounded-lg px-3 py-2 text-xs'>Cloud</span>
                            <span className='bg-slate-700 rounded-lg px-3 py-2 text-xs'>Azure</span>
                            <span className='bg-slate-700 rounded-lg px-3 py-2 text-xs'>Postgres</span>
                            <span className='bg-slate-700 rounded-lg px-3 py-2 text-xs'>Javascript</span>
                            <span className='bg-slate-700 rounded-lg px-3 py-2 text-xs'>Node.js</span>
                            <span className='bg-slate-700 rounded-lg px-3 py-2 text-xs'>Python</span>
                            <span className='bg-slate-700 rounded-lg px-3 py-2 text-xs'>Docker</span>
                            <span className='bg-slate-700 rounded-lg px-3 py-2 text-xs'>Helm</span>
                            <span className='bg-slate-700 rounded-lg px-3 py-2 text-xs'>AWS</span>
                            <span className='bg-slate-700 rounded-lg px-3 py-2 text-xs'>GCP</span>
                            <span className='bg-slate-700 rounded-lg px-3 py-2 text-xs'>Kubernetes</span>
                            <span className='bg-slate-700 rounded-lg px-3 py-2 text-xs'>SQL/NoSQL</span>
                            <span className='bg-slate-700 rounded-lg px-3 py-2 text-xs'>CI/CD</span>
                            <span className='bg-slate-700 rounded-lg px-3 py-2 text-xs'>MongoDB</span>
                            <span className='bg-slate-700 rounded-lg px-3 py-2 text-xs'>Redis</span>
                            <span className='bg-slate-700 rounded-lg px-3 py-2 text-xs'>RabbitMQ</span>
                            <span className='bg-slate-700 rounded-lg px-3 py-2 text-xs'>Typescript</span>
                        </div>

                        <div className='mt-8'>
                            <span className='text-sm text-gray-500'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ad voluptate neque quisquam, sunt quibusdam illum veniam? Corrupti natus dolores maxime rem ad error, animi impedit neque dignissimos, aliquid assumenda.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ad voluptate neque quisquam, sunt quibusdam illum veniam? Corrupti natus dolores maxime rem ad error, animi impedit neque dignissimos, aliquid assumenda.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ad voluptate neque quisquam, sunt quibusdam illum veniam? Corrupti natus dolores maxime rem ad error, animi impedit neque dignissimos, aliquid assumenda.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ad voluptate neque quisquam, sunt quibusdam illum veniam? Corrupti natus dolores maxime rem ad error, animi impedit neque dignissimos, aliquid assumenda.
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
