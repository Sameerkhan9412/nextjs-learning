import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div>
        <h1>Not found that page</h1>
        <Link href={'/'}>Back to Home</Link>
    </div>
  )
}

export default notFound