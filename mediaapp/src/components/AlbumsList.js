import { useFetchAlbumsQuery } from '../store';

function AlbumsList({ user }) {
const {data,isError, isLoading}= useFetchAlbumsQuery(user);

  console.log(data,isLoading,isError)

  return <div>Albums for {user.name}</div>;
}

export default AlbumsList;
