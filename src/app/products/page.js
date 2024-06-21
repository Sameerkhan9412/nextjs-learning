'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router=useRouter(); // this is another method for navigattion
  // console.log(router)
  const handleChange=()=>{
    router.push('./')
  }
  return (
    <div>
      <h1>This is product page</h1>
      <Link href={"/"}>Goto Home</Link>
      <h2 className='font-bold mt-3 border-2'>Alternate way of navigation using useRouter</h2>
      <button onClick={handleChange} className='border-2 border-red-500 text-2xl rounded-md m-2 p-2'>navigate to anoher page with useRouter</button>
      
    </div>
  )
}

export default page