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

    get firstSearchResults() {
        return $('//li[@id="autocomplete-1-0-item-0"]');
    }

    get autoSuggestionforMirror() {
        return $('section.aa-Source');
    }

    get expectsearchText() {
        return $('span.sr-only');
    }

    load () {
        return super.load();
    }  

    async searchText(item) {
        await this.searchInput.setValue(item);
        await this.searchIcon.click();
    }

    async searchProduct(item) {
        await this.searchText(item);
        await expect(this.resultHeader).toExist('Results for "Mirror"');
    }

    async noMatchingResult(item) {
        await this.searchText(item);
        await expect(this.resultmsg).toExist('Oops! No matches for “abababa”');
    }

    async specialCharacters(item) {
        await this.searchText(item);
        await expect(this.expectsearchText).toExist('Results for "*!*#"');
    }
    async firstThreeLetters(item) {
        await this.searchInput.setValue(item);
        await expect(this.autoSuggestionforMirror).toBeDisplayed();
    }

    async autoSearch() {
        await this.searchInput.click();
        await expect(this.suggestionpane).toBeDisplayed();   
        await browser.keys('ArrowDown');
        await this.firstSearchResults.click();
        await expect(this.expectsearchText).toExist('Results for " "');   
    }
}
export default new Search();
