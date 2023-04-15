import puppeteer from 'puppeteer';
import path from 'path';
import { PREFIX, SAVE_PATH } from './envLayer';

const DIV_ID = '#jubo';

const PUPPETEER_OPTIONS = {
  headless: true,
  args: [
    '--use-gl=egl',
    '--disable-dev-shm-usage',
    '--disable-setuid-sandbox',
    '--no-first-run',
    '--no-sandbox',
    '--no-zygote',
    '--single-process',
    "--proxy-server='direct://'",
    '--proxy-bypass-list=*',
    '--deterministic-fetch',
    '--window-size=960,540',
  ],
  timeout: 60000,
};
export async function saveScreenshot(url: string) {
  const browser = await puppeteer.launch(PUPPETEER_OPTIONS);
  const page = await browser.newPage();
  await page.setViewport({ width: 960, height: 540 });
  await page.goto(url);
  await page.waitForSelector(DIV_ID);

  const filename = path.join(
    SAVE_PATH,
    `${PREFIX}-${new Date().toISOString()}.png`
  );
  const element = await page.$(DIV_ID);
  await new Promise((res) =>
    setTimeout(async () => {
      await element?.screenshot({ path: filename, encoding: 'binary' });
      res(1);
    }, 1000)
  );

  await browser.close();

  return filename;
}
