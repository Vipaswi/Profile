'use client'
import Image from "next/image"
import Vipaswi2 from '@/public/assets/Vipaswi2.jpg'
import { AboutMe } from "./sub_components/AboutMe"

const About = () => {
  return (
    <div id="About_Me"className="z-10 relative flex flex-col 2xl:flex-row md:justify-evenly items-center w-full rounded-md bg-[url('https://media.istockphoto.com/id/511661914/photo/white-marble-patterned-texture-background.jpg?s=612x612&w=0&k=20&c=o9RRB_jhshUtxn-LIO2TNQz4QycdeOh-qe1qMK4CZW4=')]">
      <div className="absolute opacity-90 inset-0 z-0">
        <Image src='https://www.toppal.com/media/images/products/cache/e201_l-2000x2000.jpg' fill style={{objectFit:"cover"}} alt="background"/> 
      </div>
      <div className='z-10 s:m-5 xl:m-10 p-10'>
        <Image src={Vipaswi2} width={850} height={850} alt="Vipaswi" className='rounded-xl priority'/>
      </div>
      <div className="z-10 pb-5 pr-5 pl-5 mb-10">
        <h1 className="text-xl text-center md:text-3xl xl:text-5xl mb-10 underline mt-6">About Me</h1> 
        <h1 className="text-md text-start md:text-xl xl:text-3xl mb-10 underline">Education</h1>
        <div className="m-2">
          <AboutMe dates="Sept, 2010 - May, 2023" type="High-School" title={"Lincoln School, Nepal"} description="An international school based in nepal. Here, I learned the school's values and became a well rounded person, learning to balance and value sports, health, and education!" tags={["Learning", "Sports", "High-school"]}/> 
        </div>
        <div className="m-2">
          <AboutMe dates="Aug, 2023 - Current" type="University" title={"Rochester Institute of Technology"} description="A university based in Rochester. Here, I am currently pursuing computer engineering. I plan to join clubs, start cooperative AboutMes, and more!" tags={["Adventure", "Engineering", "Learning"]}/> 
        </div>
        <h1 className="text-md text-start md:text-xl xl:text-3xl mb-10 underline mt-5">Hobbies</h1>
        <div className="m-2">
          <AboutMe dates="" type="Sports" title={"Soccer"} description="As a soccer player since elementary, I have participated in multiple tournaments! Most recently, I traveled for SAISA in 12th grade as the captain of my soccer team!" tags={["Soccer", "Sports", "Leadership"]}/> 
        </div>
        <div className="m-2">
          <AboutMe dates="" type="Sports" title={"Track & Field"} description="Not to brag, but I was the fastest person in elementary! Accordingly, I take joy in participating in any track & field related training. In 12th grade, I got third place in SAISA for long-jump!" tags={["Relaxation", "Sports", "Track-&-Field"]}/> 
        </div>
        <div className="m-2">
          <AboutMe dates="" type="Sports" title={"Volleyball"} description="I gained an interest in volleyball in 12th grade, and following this, I became the co-captain of the volleyball team and played as the middle-blocker." tags={["Volleyball", "Sports", "Leadership", "injuries"]}/> 
        </div>
        <div className="m-2">
          <AboutMe dates="" type="Technology" title={"Robotics"} description="In high-school, I learned arduino by following Paul-McWhorter's tutorials, and through an elective, created robots with my friends, including a 3-axis robot drawer and a joy-stick controlled car." tags={["Soccer", "Sports", "Design", "Collaboration"]}/> 
        </div>
      </div>
      <div className="absolute w-full bottom-0">
        <div className='triangular-self'></div>
      </div>
    </div>
  )
}

export default About