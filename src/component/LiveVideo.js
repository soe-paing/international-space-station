import React from 'react'

export default function LiveVideo() {
  return (
    <div className='mt-4 mb-5'>
        <iframe style={{width: "100%", aspectRatio: "7/4", marginBottom: 10 }} src="https://www.youtube.com/embed/P9C25Un7xaM?si=1sqwPFgrgUk8o3C9" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}
