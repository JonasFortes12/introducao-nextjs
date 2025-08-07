'use client'

import LikeButton from "@/components/LikeButton";


export default function LikesPage() {
    return (
        <div className="flex justify-center h-screen items-center">
            <LikeButton
                initial={0}
            />
        </div>
    )
}