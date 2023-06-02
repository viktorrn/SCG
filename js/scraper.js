import puppeteer from 'puppeteer';

export async function run(){
    let browser;
    try {

        browser =  await puppeteer.connect({
            browserWSEndpoint: 'ws://localhost:3000'
        });

        return;
    } catch (error) 
    {
        console.log("scrape failed",error);
    }
    finally {
        await browser?.close();
    }
}

run();