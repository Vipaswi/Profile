'use client'
import { useEffect, useState } from "react"
import {Project} from './sub_components/Project'

export const Projects = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchProjects = async() => {
      const projects = await fetch('./api/git')
      const data = await projects.json()

      setData(data)
  }
  fetchProjects()
  },[])

  return (
    <div>
      {data.map((element: any) => {return(
        <div className="">
          <Project title={element["name"]} description={element["description"]} tags={element["topics"]}/> {/*change the tags and stuff */}
        </div>
        )})
      }
    </div>
  )
}