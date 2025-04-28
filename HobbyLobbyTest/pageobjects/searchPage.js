import { browser, expect } from '@wdio/globals'
import Basepage from './basePage';

class Search extends Basepage {

    get searchInput() {
        return $('input#autocomplete-1-input');
    }

    get searchIcon() {
        return $('.autoComplete_searchButton__aHJbS');
    }

    get resultHeader() {
        return $('h1.breadcrumb_breadcrumbsTitle__SRXgx');
    }

    get resultmsg() {
        return $('.common_emptyBook__Sq_hB h3');
    }

    get suggestionpane() {
        return $('.aa-PanelLayout.aa-Panel--scrollable');
    }

    get autosearch() {
        return $$('li.aa-Item');
    }
    get autoSuggestionforMirror() {
        return $('section.aa-Source');
    }

    get firstSearchResults() {
        return $('li#autocomplete-1-0-item-0');
    }

    get expectsearchText() {
        return $('h1.breadcrumb_breadcrumbsTitle__SRXgx');
    }
   
    load () {
        return super.load();
    }
    
    async searchText(item) {
        await this.searchInput.setValue(item);
        await this.searchIcon.click();
    }

    async search(item) {
        await this.searchText(item);
        await expect(this.resultHeader).toExist('Results for "Mirror"');
    }

    async msg(item) {
        await this.searchText(item);
        await expect(this.resultmsg).toExist('Oops! No matches for “abababa”');
    }

    async specialCharacters(item) {
        await this.searchText(item);
        await expect(this.expectsearchText).toExist('Results for "*!*#"');
    }
    async autoLetters(item) {
        await this.searchInput.setValue(item);
        await expect(this.autoSuggestionforMirror).toBeDisplayed();
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

export default new Search();
