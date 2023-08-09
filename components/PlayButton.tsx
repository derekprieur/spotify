import { FaPlay, FaPause } from 'react-icons/fa'

type Props = {
    isPlaying?: boolean
}

const PlayButton = ({ isPlaying }: Props) => {
    const Icon = isPlaying ? FaPause : FaPlay
    return (
        <button className={`transition rounded-full flex items-center bg-green-500 p-4 drop-shadow-md group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ${!isPlaying && 'opacity-0 translate-y-1/4'}`}>
            <Icon className='text-black' />
        </button>
    )
}

export default PlayButton