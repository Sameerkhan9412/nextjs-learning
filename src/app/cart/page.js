'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

const Cart = () => {
    const pathName=usePathname();
    console.log(pathName)

    const searchParams=useSearchParams();
    console.log(searchParams.get("search"),searchParams.get("random"))
  return (
    <div>
        <h1>this is cart Page</h1>
    </div>
  )
}

export default Cart