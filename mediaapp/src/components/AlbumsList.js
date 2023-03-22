import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store';
import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import Skeleton from './Skeleton';
function AlbumsList({ user }) {
  const {data,isError, isLoading}= useFetchAlbumsQuery(user);
  const [addAlbum,results]=useAddAlbumMutation();
  console.log(data)

  const handleAddAlbum=()=>{
    addAlbum(user);
  }
  let content;
  if(isLoading){
    content=<Skeleton times={3}/>
  }
  else if(isError){
    content=<div>Error loading albums.</div>
  } 
  else{
    content=data.map(album=>{
      const header=<div>{album.title}</div>
      return <ExpandablePanel key={album.id} header={header}>
        List of photos in the album
        </ExpandablePanel>
    })
  }

  console.log(data,isLoading,isError)

  return <div>
    <div>Albums for {user.name}
    <Button onClick={handleAddAlbum}>
      + Add Album

    </Button>
    </div>
    <div>{content}</div>
    </div>;
}

export default AlbumsList;
