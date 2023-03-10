import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import Skeleton from "./Skeleton";
import { fetchUsers } from "../store";

function UsersList(){
    const dispatch=useDispatch();
    const {isLoading,data,error}=useSelector((state)=>{
        return state.users;
    })

    useEffect(()=>{
        dispatch(fetchUsers());
    },[dispatch]);
    
    if(isLoading){
        return <Skeleton times={1} className="h-10 w-full"></Skeleton>
    }
    if(error){
        return <div>Error fetching data...</div>
    }
    
    return <div>
        {data.length}
    </div>
}

export default UsersList;