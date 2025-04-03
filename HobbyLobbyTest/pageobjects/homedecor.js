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

    get frameAndphotoAlbum() {
        return $('//label[@data-testid="meganav-home-decor-frames-&-photo-albums"]');
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

    open() {
        return browser.url(`https://www.hobbylobby.com/`);
    }

    async arrowdownhomedecor() {
        await this.homeDecor.click();
        for (let i = 0; i < 14; i++) {
            await browser.keys('ArrowDown');
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
            this.frameAndphotoAlbum,
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
}

module.exports = new Homedecor();
