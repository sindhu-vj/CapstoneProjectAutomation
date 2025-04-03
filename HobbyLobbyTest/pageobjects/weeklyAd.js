const { $ } = require('@wdio/globals')

class WeeklyAd {

    get weeklyAdbtn() {
        return $('.header_weeklyAdButton__rWqDS');
    }

    get weeklyAdbtnHeader() {
        return $('.header_weeklyAd__h1TpF');
    }

    get mirrorHeader() {
        return $('h1.breadcrumb_breadcrumbsTitle__SRXgx');
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
        return $('.signUpSubscription_spanButton__Akqsi');
    }

    get alertMessage() {
        return $('#alert-dialog-title');
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

    async signupCheck(email, msg) {
        await this.weeklyAdbtn.click();
        await this.email.setValue(email);
        await this.signup.click();
        await expect(this.alertMessage).toExist(msg);
    }
}


module.exports = new WeeklyAd();
