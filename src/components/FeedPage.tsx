'use client'

import { useState } from "react"
import PostCard from "./PostCard"

type Props = {
    posts: {
        title: string,
        text: string,
        author: string,
        likes?: number
    }[]
}


export default function FeedPage({ posts }: Props){

    const [post, setPost] = useState(posts)

    const onLike = (index: number) => {
        const newPosts = [...post]
        newPosts[index].likes = (newPosts[index].likes || 0) + 1
        setPost(newPosts)
    }

    return(
        <div className=" rounded-2xl shadow-md max-w-lg">
            {post.map((post, index) => (
                <PostCard key={index} {...post} onLike={() => onLike(index) } />
            ))}
        </div>
    )
}