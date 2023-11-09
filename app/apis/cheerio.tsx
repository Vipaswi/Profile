const puppeteer = require("puppeteer")
const fs = require('fs')

async function projects (URL: string) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage() //Creates a new page within puppeteer
  await page.goto(URL)

  try {
    let table = await page.$$eval('#user-repositories-list > ul > li', (list: any) => 
      list.map(
        (li: any) => {
          return {
            Title: li.querySelector('h3').innerText,
            Description: li.querySelector('p').innerText
          }
        }
      )
    )
    return table
  }
  catch(err){
    return err
  }
}

projects("https://github.com/Vipaswi?tab=repositories")
