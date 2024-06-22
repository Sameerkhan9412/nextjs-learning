import Link from 'next/link';
import React from 'react'
/*
first time we call an api , i will request, second time ,first it will check from cache and after that if not present in cachs, then call an api.
    
    here , cache have 4 parameter:
      1) default:
      2) force -cache ( by default): it means always cache data
      3) no-cache
      4) no-store:if i want not store the data in cache, something like that
      5) only-if-cached
      6) reload
  
  */
const fetchUserList=async()=>{
  try {
      const apiResponse=await fetch('http://dummyjson.com/users',{cache:'no-cache'});
      const result=await apiResponse.json();
      return result.users
  } catch (error) {
      console.log(error)
  }
}
const serverSideFetchData = async() => {
  
 const listOfUsers= await fetchUserList();
//  console.log(listOfUsers)
  return (
    <div>
      <h1>Server side data fetching</h1>
      <ul>
        {
          listOfUsers && listOfUsers.length>0?
          listOfUsers.map(user=><li><Link href={`server-data-fetch/${user.id}`}>{user.firstName} and {user.lastName}</Link></li>):null
          
        }
      </ul>

    </div>
  )
}

export default serverSideFetchData