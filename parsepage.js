import puppeteer from 'puppeteer'; // or import puppeteer from 'puppeteer-core';
import fs from 'fs'


let pageUrl = 'https://www.webnovel.com/book/reverend-insanity-the-final-arc--fan-edition_21315899805928005/chapter-2345_57474694898576209';


let p_sel = `div > p`;

const browser = await puppeteer.launch({
    headless:false,
    args:[
        '--start-maximized' // you can also use '--start-fullscreen'
     ]

});
const page = await browser.newPage();
await page.setViewport({ width: 1920, height: 1024});
await page.goto(pageUrl,{ waitUntil: 'domcontentloaded' });


let element = await page.$('h1')
let value = await page.evaluate(el => el.textContent, element)
console.log(value)



const allInputValues = await page.$$eval(p_sel, elements =>
    elements.map(e => e.textContent)
  );


let result = ``
allInputValues.forEach((elem)=>{
    result = result + elem.split('\n')[0] + '\n' + '\n'
})

console.log(result)
console.log(typeof(result))


const filename = `${value.split(':')[0]}.txt`;

fs.writeFile(filename, value +'\n \n ' + result, (err) => {
  if (err) {
    console.error('Ошибка записи в файл:', err);
  } else {
    console.log(`Данные успешно записаны в файл ${filename}`);
  }
});

console.log(value)
console.log(typeof(value))
await browser.close();