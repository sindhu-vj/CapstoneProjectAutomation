const { $ } = require('@wdio/globals')

class Homedecor {

    get homeDecor() {
        return $$('[class="header_headerButton__VxgmY"]')[1];
    }

    get bathroomAndcloset() {
        return $('//label[@data-testid="meganav-home-decor-bathroom-&-closet"]');
    }

    get bedding() {
        return $('//label[@data-testid="meganav-home-decor-bedding"]');
    }

    get candleAndfragrance() {
        return $('//label[@data-testid="meganav-home-decor-candles-&-fragrance"]');
    }

    get decorAndpillow() {
        return $('//label[@data-testid="meganav-home-decor-decor-&-pillows"]');
    }

    get frameAndframingSupplies() {
        return $('//label[@data-testid="meganav-home-decor-frames-&-framing-supplies"]');
    }

    get furniture() {
        return $('//label[@data-testid="meganav-home-decor-furniture"]');
    }

    get inspirationalBooks() {
        return $('//label[@data-testid="meganav-home-decor-inspirational-books"]');
    }

    get kitchenAnddinnerware() {
        return $('//label[@data-testid="meganav-home-decor-kitchen-&-dinnerware"]');
    }

    get knobsAndhardware() {
        return $('//label[@data-testid="meganav-home-decor-knobs-&-hardware"]');
    }

    get lighting() {
        return $('//label[@data-testid="meganav-home-decor-lighting"]');
    }

    get mirrorsAndwalldecors() {
        return $('//label[@data-testid="meganav-home-decor-mirrors-&-wall-decor"]');
    }

    get homeorganizationAndstorage() {
        return $('//label[@data-testid="meganav-home-decor-home-organization-&-storage"]');
    }
    get exploreAllbtn() {
        return $('.megaNavCard_megaNavExplore__EoEgG');
    }

    open() {
        return browser.url(`https://www.hobbylobby.com/`);
    }

    async arrowDownHomedecor() {
        await this.homeDecor.click();
        await this.bathroomAndcloset.moveTo();

        for (let i = 0; i < 14; i++) {
            await browser.keys('ArrowDown');
            await browser.pause(500)
        }
    }

    async categories() {
        await this.homeDecor.click();
        await browser.keys('Arrowdown');
        const categories = [
            this.bathroomAndcloset,
            this.bedding,
            this.candleAndfragrance,
            this.decorAndpillow,
            this.frameAndframingSupplies,
            this.furniture,
            this.inspirationalBooks,
            this.kitchenAnddinnerware,
            this.knobsAndhardware,
            this.lighting,
            this.mirrorsAndwalldecors,
            this.homeorganizationAndstorage
        ];

        for (let i = 0; i < categories.length; i++) {
            await categories[i].click();
        }
    }

    async exploreBtn() {
        await this.homeDecor.click();
        await this.exploreAllbtn.click();
        await browser.scroll(0, 1000);
    }
}

module.exports = new Homedecor();
