import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AllEvents = ({data}) => {
  return (
    <div className="events_page">
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`} className="card">
            <Image alt={ev.title} height={500} width={400} src={ev.image} />
            <h2>{ev.title}</h2>
          </Link>
        ))}
    </div>
  )
}

export default AllEvents 