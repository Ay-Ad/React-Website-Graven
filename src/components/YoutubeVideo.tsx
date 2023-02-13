

type VideoProps = {
    id: string
}

export const YoutubeVideo : React.FC<VideoProps> = ({ id }) => {
    return(
        <div>
            <iframe width="560" height="315" 
            src={"https://www.youtube.com/embed/" + id} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}