import Button from "./Button";
import { useRemoveAlbumMutation } from "../store";
import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import PhotosList from "./PhotosList";

function AlbumsListItem({album}){
    const [removeAlbum, result]= useRemoveAlbumMutation();
    const handleRemoveAlbum=()=>{
        removeAlbum(album);
    }
    const header=<>
        <Button className='mr-2' loading={result.isLoading} onClick={handleRemoveAlbum}>
            <GoTrashcan/>
        </Button>
        {album.title}
        </>
    return <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album}/>
      </ExpandablePanel>
}

export default AlbumsListItem;