import React from 'react'

function blog({ params }: { params: { slug: string } }) {
  return (
   <div>My Post: {params.slug}</div>
  )
}

export default blog
