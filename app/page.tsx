import Image from 'next/image'

export default function Home() {
  return (
    <p className='text-red-500 font-bold'>
      Only authenticated users can see this page
    </p>
  )
}
