import Introduction from '@/components/Introduction'
import Poly from '@/components/Footbar'
import Image from 'next/image'
import Footbar from '@/components/Footbar'
import { Projects } from '@/components/Projects'
import About from '@/components/About'

export default function Home() {
  return (
    <main className="d">
      <div className="">
        <Introduction/>
        <Footbar/>
        <Projects/>
        <About/>
      </div>
    </main>
  )
}
