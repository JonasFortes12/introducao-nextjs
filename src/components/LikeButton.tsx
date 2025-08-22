import { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'

export default function LikeButton() {

    const [isLike, setIsLike] = useState(false)


    return (
        <div className="flex justify-center">
            <button
            onClick={()=>{setIsLike(!isLike)}}
            className={`text-center flex m-4 p-2 space-x-2 text-2xl rounded-2xl ${isLike ? 'text-red-600 bg-red-300 hover:bg-red-400' : 'text-black bg-gray-300 hover:bg-gray-400'}`}>
                <span>{isLike ? <FaHeart/> : <FaRegHeart/>}</span>  
                <span className='text-[14px] flex items-end'>{isLike ? 'Curtido' : 'Curtir'}</span>
            </button>
        </div>
    )
}