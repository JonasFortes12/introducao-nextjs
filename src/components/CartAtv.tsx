


type ImageProps = {
    url: string
    title: string
    description: string

}

export default function AtvCard({url, title, description} : ImageProps) {
    return (
        <div className="bg-amber-300 ml-[300px] pb-2.5 max-w-[600px] rounded-2xl">
            <div>
                <img 
                src={url}
                alt="sla"
                width={600}
                height={600}
                className="rounded-t-2xl"
                />
            </div>
            <h2 className="px-3 text-4xl my-1">{title}</h2>
            <p className="px-3">{description}</p>
        </div>
    )
}