import {Octokit} from "octokit"

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN
})

export const GET = async() => {
  try {
    const projects = await octokit.request("GET /user/repos", {
      headers: {
          "X-GitHub-Api-Version": "2022-11-28",
      },
      visibility: 'public'
  }); 
  return new Response(JSON.stringify(projects))
  } catch (error) {
    console.log("Fetch error:", error)  
  }
}