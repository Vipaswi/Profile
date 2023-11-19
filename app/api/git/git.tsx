import {Octokit} from "octokit"

const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
})

export const GET = async() => {
  try {
    const resp = await octokit.request('GET /repos',
      {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        },
      }
    ) 
    return new Response(JSON.stringify(resp), {status: 200});
  } catch (error) {
    console.log("Fetch error:", {status: 422})
    return error    
  }
}