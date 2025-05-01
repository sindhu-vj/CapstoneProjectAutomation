import { browser } from '@wdio/globals'


export default class Basepage {
    load() {
        return browser.url(`https://www.hobbylobby.com/`);
    } 
}
