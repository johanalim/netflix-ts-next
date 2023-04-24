import { useEffect, useState } from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'
import ImageUrl from '../assets/banner.png'
import Image from 'next/image'

// interface Props {
//   netflixOriginals: Movie[]
// }

function Banner() {
//   const [movie, setMovie] = useState<Movie | null>(null)

//   useEffect(() => {
//     setMovie(
//       netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
//     )
//   }, [netflixOriginals])

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
            fill
            src={ImageUrl}
            alt={''}        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        GI JOE
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        a team of elite soldiers is called into action to stop a weapons designer and the evil
      </p>
      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <PlayIcon className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>

        <button
          className="bannerButton bg-[gray]/70"
        >
        More Info
        </button>
      </div>
    </div>
  )
}

export default Banner