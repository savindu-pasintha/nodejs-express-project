const puppeter = require('puppeteer');
class card {

async initBrowser(){
    const  random_url = "https://www.walmart.com/ip/Apple-AirPods-Pro-with-MagSafe-Charging-Case/975690481?athcpid=975690481&athpgid=AthenaHomepageDesktop__gm__-1.0&athcgid=null&athznid=SeasonalCampaigns_6fe92024-377d-4272-8406-8e51842e092f_items&athieid=null&athstid=CS020&athguid=Bc1WMb0UhJLkzGqEFMdHPhRtlsF2US1uZMfv&athancid=null&athena=true&athbdg=L1800";
    const browser = await puppeter.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(random_url);
}

async addToCart(page){
  await page.$eval(" ", element => element.click());
  await page.waitFor(2000);

  await page.$eval(" ", element => element.click());
  await page.waitFor(2000);
}

async checkOut(){
    const page = await initBrowser();
    await addToCart(page);
}

}


//---------------------Flow-------------------
// STEP  1 -  access crome devtool -> Element tab
//       2 -  access Nessary Element Id/Class atribute
//       3 -  set nessaaty commands to that html elements 
//  npm i puppeteer --save  