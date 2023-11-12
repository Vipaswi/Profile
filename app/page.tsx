import Introduction from '@/components/Introduction'
import Poly from '@/components/Footbar'
import Image from 'next/image'
import Footbar from '@/components/Footbar'

export default function Home() {
  return (
    <main className="d">
      <div className="">
        <Introduction/>
        <Footbar/>
      </div>
    </main>
  )
}
