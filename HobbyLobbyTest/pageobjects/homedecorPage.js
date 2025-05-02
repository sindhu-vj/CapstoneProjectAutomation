import { $$, browser, expect } from '@wdio/globals'
import Basepage from './basePage';

class Homedecor extends Basepage {

    get homeDecor() {
        return $$('[class="header_headerButton__VxgmY"]')[1];
    }

    get dropdownList() {
        return $('//section[contains(@class, "megaNavCard_megaNavCategories__raahz")]')
    }
    
    get dropdownContainer() {
        return $$('//section[contains(@class, "megaNavCard_megaNavCategories__raahz")]//label')
    }
   
    get bathroomAndcloset() {
        return $('//label[@data-testid="meganav-home-decor-bathroom-&-closet"]');
    }
    
    get exploreAllbtn() {
        return $('.megaNavCard_megaNavExplore__EoEgG');
    }
    
    get categoryHeader() {
        return $('h3.departmentPage_categoryHeader__pf7Sv');
    }

    load () {
        return super.load();
    }

    async homedecorComponent() {
        await this.homeDecor.click();
        await expect(this.dropdownList).toBeDisplayed();
    }

    async arrowDownHomedecor() {
        await this.homeDecor.click();
        await this.bathroomAndcloset.moveTo();
        const dropdownItems = await this.dropdownContainer;

        for (let i = 0; i < dropdownItems.length; i++) {
            await browser.keys('ArrowDown');   
        }
            await expect(this.exploreAllbtn).toExist();      
    }

    async homeDecorDropdown() {
            await this.homeDecor.click();
            await browser.keys('ArrowDown');
            const dropdownItems = await this.dropdownContainer;

            for (let i = 0; i < dropdownItems.length; i++) {
               await dropdownItems[i].click();
            }
            await expect(this.exploreAllbtn).toExist();
        }

    async exploreBtn(text) {
        await this.homeDecor.click();
        await this.exploreAllbtn.click();
        await expect(this.categoryHeader).toExist(text);
       
    }
}

export default new Homedecor();
