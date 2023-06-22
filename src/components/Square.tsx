import Image from "next/image"
import Modal from "./Modal"
import { useState } from "react"

const Square = () => {

    const [visibility, setVisibility] = useState(false)

    return (
        <>
            <Modal visibility={visibility} setVisibility={setVisibility} />
            <div className="w-[30%] mb-16">
                <div className="w-full h-48 relative">
                    <Image src={'IMG_9651.JPG'} alt="Project Image" className="object-cover" fill />
                </div>

                <span className="block text-lg text-gray-900 mt-2">Title</span>

                <div className="max-h-20" style={{ WebkitMaskImage: 'linear-gradient(0deg, transparent 10px, white)' }}>
                    <span className="text-xs text-gray-500">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo necessitatibus ad ex. Non rem beatae quis obcaecati, culpa officiis velit ipsam illo, eos sapiente, nihil exercitationem dolorum aliquid ducimus! Nostrum. Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo necessitatibus ad ex. Non rem beatae quis obcaecati, culpa officiis velit ipsam illo, eos sapiente, nihil exercitationem dolorum aliquid ducimus! Nostrum. Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo necessitatibus ad ex. Non rem beatae quis obcaecati, culpa officiis velit ipsam illo, eos sapiente, nihil exercitationem dolorum aliquid ducimus! Nostrum.</span>
                </div>

                <span className="text-purple-400 text-xs mt-2 p-4 pl-0 hover:cursor-pointer select-none" onClick={() => setVisibility(true)}>
                    Read more
                </span>
            </div>
        </>
    )
}

export { Square }