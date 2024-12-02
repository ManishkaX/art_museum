import { useParams } from "react-router"

const PictureDetails = () => {
    const { pictureId } = useParams();

    return (
        <div> 
            <p>PictureDetails</p>
            <p>Picture id: {pictureId}</p>
        </div>
    )
}

export { PictureDetails }