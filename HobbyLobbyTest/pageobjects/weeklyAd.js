const { $ } = require('@wdio/globals')

class WeeklyAd {

    get weeklyAdbtn() {
        return $('.header_weeklyAdButton__rWqDS');
    }

    get weeklyAdbtnHeader() {
        return $('.header_weeklyAd__h1TpF');
    }

    get weekAdmiddleThumbnail() {
        return $('.weeklyAd_weeklyAdMiddleThumbnail__3ulnp');
    }

    get weekAdtiles() {
        return $('.weeklyAd_weeklyAdTiles__g_bxW');
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

    get returnTosite() {
        return $('div.header_cartReturnDesk__DAqV_');
    }

    get printThisweeklyads() {
        return $('//button[contains(text(), "Print this week")]');
    }

    get cancelPrintbtn() {
        return $('#background]');
    }

    get subweeklyAdimage() {
        return $('#weekly-ad-image');
    }

    get getText() {
        return $('h2.weeklyAd_weeklyAdTopTitle__dk4Nh');
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

    async checkText(item) {
        await expect(this.getText).toHaveText(item);
    }

    open() {
        return browser.url(`https://www.hobbylobby.com/`);
    }

    async hoverColor(color) {
        await this.weeklyAdbtn.moveTo();
        const colorProp = await this.weeklyAdbtnHeader.getCSSProperty('color');
        await expect(colorProp.value).toBe(color);
    }

    async headerCheck(header) {
        await this.weeklyAdbtn.click();
        await expect(this.weeklyAdbtnHeader).toExist(header);
    }
    async weeklyAdflow() {
        await this.weeklyAdbtn.click();
        await browser.scroll(0, 300);
        await this.viewTheWeeklyadbtn.click();
        await this.returnTosite.click();
        await expect(this.weekAdmiddleThumbnail).toBeDisplayed();
        await expect(this.weekAdtiles).toBeDisplayed();
        await browser.scroll(0, 5000);
        await expect(this.signupSection).toBeDisplayed();
    }
    async viewAdbtn() {
        await this.weeklyAdbtn.click();
        await browser.scroll(0, 300);
        await browser.pause(1000)
        await this.viewTheWeeklyadbtn.click();
        await expect(this.subweeklyAdimage).toBeDisplayed();
    }

    async signupCheck(email, msg) {
        await this.weeklyAdbtn.click();
        await this.email.setValue(email);
        await this.signup.click();
        await expect(this.alertMessage).toExist(msg);
    }
}
module.exports = new WeeklyAd();
