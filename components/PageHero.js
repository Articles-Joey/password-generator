export default async function PageHero({
    text,
    image
}) {

    const finalImage = `url("${image}")`

    return (
        <div 
            className="page-hero mb-5"
            style={{
                ...(image && {backgroundImage: finalImage}),
                backgroundPositionY: "20%",
                backgroundPositionY: "top center"
            }}
        >

            <div className="overlay"></div>

            <div className="text">{text}</div>

        </div>
    )

}