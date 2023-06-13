import puppeteer from "puppeteer";



async function sosv(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://sosv.com/portfolio/",{waitUntil: "domcontentloaded"});
    
    
    // var Button = await page.waitForXPath("//button[@type='button']")
    // Button.click('button.pum-close')
    // await page.waitForSelector("#pum-15098")
    // await page.click("#pum-15098")
    

    var el = await page.waitForXPath("//input[@name='input_1']")
    await el.type("Demo of Page", {delay : 100})

    var e2 =await  page.waitForXPath("//input[@name='input_3']")
    await e2.type("sharma", {delay : 10})

    var e3 = await page.waitForXPath("//input[@name='input_5']")
    await e3.type("Demo@gmail.com" , {delay : 10})

    var clickButton = await page.waitForXPath("//input[@type='submit']")
    clickButton.click('#gform_submit_button_18')
   await page.click("#gform_submit_button_18")

   await page.click("button.pum-close")

    var element =  await page.waitForSelector(".filtered-listing__pagination > div > button")

    for(var i = 1 ; i < 3; i++){
        console.log(i)
        await page.click("button.facetwp-load-more", {delay : 2000} )    

    }
/*
    var i = 0
    while(element){
       
        console.log("Static")
        console.log(i)
        await page.click("button.facetwp-load-more", {delay : 2000} )  
        i++;  
    }
  
*/


//    await page.goto("https://sosv.com/portfolio/",{waitUntil: "domcontentloaded"});
 


   const exractionOfData =await page.evaluate(()=>{

    
        const listOfData = document.querySelectorAll(".filtered-listing__item")
      
        
       
        const exractionOfData = Array.from(listOfData).map((data) => {
            
            const text = data.querySelector(".filtered-listing__item-title").innerText;
            const subtitle = data.querySelector(".filtered-listing__item-subtitle").innerText;
            const content = data.querySelector(".filtered-listing__item-content").innerText;
            const location = data.querySelector(".filtered-listing__item-locations").innerText;
            const term = data.querySelector(".filtered-listing__item-terms").innerText;
           

            return {text,subtitle,content, location,term}
        })
  
       return exractionOfData;
    })
    


    // await page.waitForSelector(".filtered-listing__pagination > div > button")
   
    // await page.$eval( '.filtered-listing__pagination > div > button', form => form.click() );
   
    // await page.click("button.facetwp-load-more", {delay : 5000} )
   
    // await page.goto("https://sosv.com/portfolio/",{waitUntil: "domcontentloaded"});

    // await page.click("button.facetwp-load-more", {delay : 5000} )

    // await page.goto("https://sosv.com/portfolio/",{waitUntil: "domcontentloaded"});

   
    console.log(exractionOfData)
    
    await browser.close()

    
}

sosv()



