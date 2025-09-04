"use client"

import { useState } from "react";

import { FaHeart } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"

type likeButtonProops = {
    isLiked: boolean;
    onToggle: () => void;
    likes: number;
}

export default function LikeButton({isLiked, onToggle, likes}: likeButtonProops) {  
    return(
        <button
            onClick={onToggle}
            className={`flex items-center
                rounded-md
                bg-gray-50 hover:bg-gray-100
            ${isLiked ? 
                "text-red-500 bg-red-100 hover:bg-red-200" :
                "text-gray-400 hover:text-gray-500 bg-gray-50 hover:bg-gray-100"}
            `}
        >
            <span>{isLiked ? <FaHeart/> : <FaRegHeart/>}</span>
            <span>{likes}</span>
        </button>
    );
}