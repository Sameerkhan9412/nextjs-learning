import { redirect } from 'next/navigation';
import React from 'react'

const Account = () => {
  const userProfileInfo=null;
  // if(userProfileInfo===null) redirect("/profile")
  if(userProfileInfo===null) redirect("/dynamic-routes/products?search=sameer")
  
  return (
    <div>
      <h1>this is accound page</h1>
      {/* assume that profile info is null */}

    </div>
  )
}

export default Account