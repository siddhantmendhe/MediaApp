import Button from "./Button";
import { useRemoveAlbumMutation } from "../store";
import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";

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
      List of photos in the album
      </ExpandablePanel>
}

export default AlbumsListItem;