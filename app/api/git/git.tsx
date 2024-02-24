import {Octokit} from "octokit"

export const fetchProjects = async() => {
  try {
    const octokit = new Octokit({
      auth: process.env.NEXT_PUBLIC_GITHUBUSERNAME
    })
    console.log(process.env)
    const projects = await octokit.request("GET /user/repos", {
      headers: {
          "X-GitHub-Api-Version": "2022-11-28",
      },
      visibility: 'public'
    }); 


    // create a dictionary of project
 
  return projects.data
  } catch (error) {
    console.log("Fetch error:", error)  
  }
}