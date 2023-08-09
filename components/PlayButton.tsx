import { FaPlay, FaPause } from 'react-icons/fa'

type Props = {
    isPlaying?: boolean
}

const PlayButton = ({ isPlaying }: Props) => {
    const Icon = isPlaying ? FaPause : FaPlay
    return (
        <button className='transition opacity-0 rounded-full flex items-center bg-green-500 p-4 drop-shadow-md translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110'>
            <Icon className='text-black' />
        </button>
    )
}

export default PlayButton