const puppeteer = require('puppeteer');

(async() => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://bnifsc.in', {waitUntil: 'networkidle'});
// Type our query into the search bar
    await page.type('puppeteer');

// Wait for the results to show up
    await page.waitFor(30*1000);

// Extract the results from the page
    const links = await page.evaluate(() => {
        const anchors = Array.from(document.querySelectorAll('html'));
        let  array = [];
        array.push(anchors[0].innerHTML);
        return array;
    });
    console.log(links.join('\n'));
    browser.close();

})();