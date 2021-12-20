var express = require('express');
var router = express.Router();
const card = require('../Logic/card');
const puppeter = require('puppeteer');
/* GET home page. */
router.get('/in', function(req, res, next) {

  async function initBrowser(){
      const  random_url = "https://www.walmart.com/ip/Apple-AirPods-Pro-with-MagSafe-Charging-Case/975690481?athcpid=975690481&athpgid=AthenaHomepageDesktop__gm__-1.0&athcgid=null&athznid=SeasonalCampaigns_6fe92024-377d-4272-8406-8e51842e092f_items&athieid=null&athstid=CS020&athguid=Bc1WMb0UhJLkzGqEFMdHPhRtlsF2US1uZMfv&athancid=null&athena=true&athbdg=L1800";
      const browser = await puppeter.launch({headless: false});
      const page = await browser.newPage();
      await page.goto(random_url);
  }
  
  async function addToCart(page){
    await page.$eval("button[class='w_r w_t w_y']", element => element.click());
    await page.waitFor(2000);
  
  //  await page.$eval(" ", element => element.click());
   // await page.waitFor(2000);
  }
  
  async  function checkOut(){
      const page = await initBrowser();
      await addToCart(page);
  }
  checkOut();
});



/* GET home page index.jade kiyn ek . */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Open with nodemon express app' });
});

/* GET err. */
router.get('/layout', function(req, res, next) {
  res.render('layout', { title: 'Open with nodemon express app' });
});

/* GET err. */
router.get('/error', function(req, res, next) {
  res.render('error', { title: 'Open with nodemon express app' });
});


module.exports = router;
