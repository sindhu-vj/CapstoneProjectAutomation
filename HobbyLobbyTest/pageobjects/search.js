const { $ } = require('@wdio/globals')


class Search {

    get searchInput() {
        return $('input#autocomplete-1-input');
    }

    get searchIcon() {
        return $('.autoComplete_searchButton__aHJbS');
    }

    get resultHeader() {
        return $('h1.breadcrumb_breadcrumbsTitle__SRXgx');
    }

    get suggestionpane() {
        return $('.aa-PanelLayout.aa-Panel--scrollable');
    }

    get autosearch() {
        return $$('li.aa-Item');
    }

    get firstSearchResults() {
        return $('li#autocomplete-1-0-item-0');
    }

    get expectsearchText() {
        return $('h1.breadcrumb_breadcrumbsTitle__SRXgx');
    }


    open() {
        return browser.url(`https://www.hobbylobby.com/`);
    }


    async search(item) {
        await this.searchInput.setValue(item);
        await this.searchIcon.click();
        await expect(this.resultHeader).toExist('Results for ' + item);
    }

    async autosearch(item) {
        await this.searchInput.click();
        await expect(this.suggestionpane).toBeDisplayed();
        await browser.keys('ArrowDown');
        await expect(this.firstSearchResults).toHaveText(item);
        await browser.keys('Enter');
        await expect(this.expectsearchText).toExist('Results for ' + item);
    }
}

module.exports = new Search();
