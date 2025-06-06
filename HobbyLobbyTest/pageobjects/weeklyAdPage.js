import { browser, expect } from '@wdio/globals'
import Basepage from './basePage';

class WeeklyAd extends Basepage{

    get weeklyAdbtn() {
        return $('.header_weeklyAdButton__rWqDS');
    }

    get weeklyAdbtnHeader() {
        return $('.header_weeklyAd__h1TpF');
    }
    
    get weeklyAdmiddleThumbnail() {
        return $('.weeklyAd_weeklyAdMiddleThumbnail__3ulnp');
    }

    get weeklyAdtiles() {
        return $('.weeklyAd_weeklyAdTiles__g_bxW');
    }
    
    weeklyAd(parameter) {
        return $(`//section[contains(@class, "weeklyAd_weeklyAd${parameter}")]`)
    }

    weeklyAdtiles(parameter) {
        return $(`//div[contains(@class, "weeklyAd_weeklyAd${parameter}")]`)
     }

    get topTitle() {
        return $('//h2[contains(text(), "Shop Weekly Ad")]')
    }

    get signupSection() {
        return $('.MuiPaper-root.MuiPaper-outlined.signUpSubscription_signupCard__Lc5lV.mui-style-1wuq9c7');
    }

    get alertMessage() {
        return $('#alert-dialog-title');
    }

    get viewTheWeeklyadbtn() {
        return $('#HLWeeklyAdButton');
    }

    get returnTositeLink() {
        return $('div.header_cartReturnDesk__DAqV_');
    }

    get subweeklyAdimage() {
        return $('#weekly-ad-image');
    }

    get color() {
        return $('h2.weeklyAd_weeklyAdTopTitle__dk4Nh');
    }

    get email() {
        return $('input[id=":Rbqq6:"]');
    }

    get signup() {
        return $('[data-testid="email-signup-confirm"]')
    }

    load () {
        return super.load();
    }

    async checkHovercolor(expectedcolor) {
        await this.weeklyAdbtn.moveTo();
        const colorProp = await this.weeklyAdbtnHeader.getCSSProperty('color');
        await expect(colorProp.value).toBe(expectedcolor);
    }

    async weeklyAdflow() {
        await this.weeklyAdbtn.click();
        await expect(await this.weeklyAd('MiddleThumbnail')).toBeDisplayed();
        await expect(await this.weeklyAd('MiddleHighlightedAd')).toBeDisplayed();
        await expect(await this.weeklyAdtiles('Tiles')).toBeDisplayed();
        await browser.scroll(0, 5000);
        await expect(this.signupSection).toBeDisplayed();
    }
   
    async navigateToWeeklyAd() {
        await this.weeklyAdbtn.click();
        await browser.scroll(0, 2000);
        await this.viewTheWeeklyadbtn.click();
    }
    
    async viewAdbtn() {
        await this.navigateToWeeklyAd();
        await expect(this.subweeklyAdimage).toBeDisplayed();
    }
    
    async returnTosite() {
        await this.navigateToWeeklyAd();
        await this.returnTositeLink.click();
        await expect(this.topTitle).toBeDisplayed();
    }

    async signupCheck(email, msg) {
        await this.weeklyAdbtn.click();
        await this.email.setValue(email);
        await this.signup.click();
        await expect(this.alertMessage).toExist(msg);
    }
}

export default new WeeklyAd();
