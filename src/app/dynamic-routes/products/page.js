
import React from 'react'

const page = ({searchParams}) => {
  console.log(searchParams)
  console.log(searchParams.search)
  return (
    <div>Welcome to product routes</div>
  )
}

export default page