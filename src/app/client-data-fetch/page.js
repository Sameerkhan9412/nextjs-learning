'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

/* in client side , data can we fetched by using

    1)useEffect hook
    2)swr or useswr hoook

*/



const clientSideFetchData = () => {
  // fetch
    const [loading,setLoading]=useState(false);
    const [users,setUsers]=useState([])
    const fetchUserDetails=async()=>{
      try {
        setLoading(true)
        const apiResponse=await fetch("http://dummyjson.com/users")
        const result=await apiResponse.json()
        setUsers(result.users)
        setLoading(false)
        
      } catch (error) {
        console.log(error) 
        setUsers([])
        setLoading(false)
      }
    }
    useEffect(()=>{
      fetchUserDetails()
    },[])
  return (
    <div>
      <h1>client side data fetching</h1>
      <ul>
        {
          loading?<h2>Loading User Details</h2>:
          users && users.length>0?
          users.map(user=><li><Link href={`server-data-fetch/${user.id}`}>{user.firstName} and {user.lastName}</Link></li>):null
          
        }
      </ul>
      
    </div>
  )
}

export default clientSideFetchData