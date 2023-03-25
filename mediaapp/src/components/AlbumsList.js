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
    content=<Skeleton className="h-10 w-full" times={3}/>
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
    <div className='m-2 flex flex-row items-center justify-between'>
      <h3 className="text-lg font-bold">Albums for {user.name}</h3>
    <Button onClick={handleAddAlbum} loading={results.isLoading}>
      + Add Album

    </Button>
    </div>
    <div>{content}</div>
    </div>;
}

export default AlbumsList;
