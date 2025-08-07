import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { string } from "zod/v4-mini";
{/* <FaHeart />
<CiHeart /> */}

interface LikeProps {
    initial: number
}


export default function LikeButton(props: LikeProps) {

    const [like, setLike] = useState(props.initial)

    return (
        <div className="bg-amber-400 rounded-2xl px-[80px] py-[50px] mt-5 flex gap-1 items-center">
            <button onClick={() => setLike(like + 1)} className="pr-4 text-6xl text-white hover:text-red-600"><FaHeart /></button>
            <p className="text-6xl">{like}</p>
        </div>
    )
}