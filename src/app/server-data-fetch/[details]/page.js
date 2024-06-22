import Link from 'next/link';
import React from 'react'

const fetchUserDetails=async(userid)=>{
    try {
        const apiResponse=await fetch(`http://dummyjson.com/users/${userid}`);
        const result=await apiResponse.json();
        return result;
    } catch (error) {
        console.log("error while fetching single userdetails:",error)
    }
}
const UserDetails = async({params}) => {
    // const {userId}=params;
    console.log(params.details)
    const userdetails=await fetchUserDetails(params.details)
  return (
    <div>
        <h1>this is user details page:{params.details}</h1>
        <p>{userdetails?.firstName} {userdetails?.lastName}</p>
        <p>{userdetails?.age}</p>
        <p>{userdetails?.email}</p>
        <p>{userdetails?.gender}</p>
        <p>{userdetails?.phone}</p>

        <Link href="/server-data-fetch">Go back</Link>
    </div>
  )
}

export default UserDetails