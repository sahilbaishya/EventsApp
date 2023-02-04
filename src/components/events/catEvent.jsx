import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CatEvent = ({data, pageName}) => {
  return (
    <div className='cat_events'>
      <h1>Events In {pageName}</h1>

      <div className='content'>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref className='card'>
            <Image alt={ev.title} height={300} width={300} src={ev.image} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CatEvent