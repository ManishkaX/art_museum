import { artworkService } from "@/api/ArtworkService";

const HomePage = () => {

    const getAllArtworks = async () => {
        await artworkService.getAllArtworks();
    }

    const getArtworkWithId4 = async () => {
        await artworkService.getArtworkById(185180);
    }

    const searchArtwork = async () => {
        await artworkService.searchArtwork('Lilies');
    }
    return (
        <div>
            <img src={artworkService.getImageUrlById('8f9c85e4-28a2-88e0-2d99-f919fd0e2782')}
                width="300px" height="300px"></img>
            <button onClick={() => getAllArtworks()}>Запрос всех картин</button>
            <button onClick={() => getArtworkWithId4()}>Запрос картины с id 4</button>
            <button onClick={() => searchArtwork()}>Поиск картин со словом Lilies</button>
        </div>
    )
}

export { HomePage }