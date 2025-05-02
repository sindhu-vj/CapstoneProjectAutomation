import { $$, browser, expect } from '@wdio/globals'
import Basepage from './basePage.js';

class Cart extends Basepage {

    get cartIcon() {
        return $('[data-testid="ShoppingCartOutlinedIcon"]');
    }
    
    get cartHeader() {
        return $('.orderSummary_cartTitle__Z_gYu');
    }
    
    get hobbyLobbyLogo() {
        return $('.header_hl_logo__MCZ1m');
    }

    get storeLocator() {
        return $('//div[@class="headerStoreLocator_headerStoreLocator__KktRM"]');
    }

    get featuredItem() {
        return $('(//button[@class="common_submitButton__ydII0"])[1]');
    }

    get currentPrice() {
        return $('span.sr-only');
    }

    get orderSummary() {
        return $('h2.orderSummary_summaryTitle__Dpn5Z');
    }

    get checkout() {
        return $('(//a[@class="orderSummary_checkoutButton__X9O67"])[1]');
    }

    get total() {
        return $('//span[@class="orderSummary_orderSummaryTotal__H8M_R"]');
    }

    get searchInput() {
        return $('input#autocomplete-1-input');
    }

    get searchIcon() {
        return $('.autoComplete_searchButton__aHJbS');
    }

    get product1() {
        return $('button[id=":R439jbaq6:"]')
    }

    get product2() {
        return $('button[id=":R459jbaq6:"]');
    }

    get product3() {
        return $('button[id=":R479jbaq6:"]');
    }

    get continueshoppingbtn() {
        return $('.addToCart_shoppingLink__hTh5S');
    }

    get productTitle() {
        return $('.cartProductTile_productName__ncsb2');
    }

    get viewCartbtn() {
        return $('.addToCart_checkoutLink__te9Ct');
    }
    
    get itemQuantity() {
        return $('.cartProductTile_itemQuantity__k0vps');
    }

    get outdoorGameProduct1() {
        return $('//div[@class="common_submitWrapper__D_k_e"]');
    }

    get incrementBtn() {
        return $('.cartProductTile_increment__Lp6Gc');
    }

    get decrementBtn() {
        return $('button.cartProductTile_decrement__KyGOI');
    }
    
    get mothersdayGifts() {
        return $('//img[@alt="Mother\'s Day Gift Ideas"]');
    }
    
    get giftItem1() {
        return $('//button[@id=":R439j7aq6:"]');
    }
    
    get deleteBtn() {
        return $('button.cartProductTile_deleteButton__Cfe9X');
    }

    get favoriteProductIconUnfilled() {
        return $$('svg[data-testid="FavoriteBorderIcon"]')[1]; 
    }
 
    get favoriteProductIconFilled() {
        return $('svg[data-testid="FavoriteIcon"]');
    }

    load () {
        return super.load();
    }   

    async cartIconcheck() {
        await expect(this.cartIcon).toBeDisplayed();
        await this.cartIcon.click();
        await expect(this.cartHeader).toBeDisplayed();
    }

    async returnToHomepage() {
        await this.cartIcon.click();
        await this.hobbyLobbyLogo.click();
        await expect(this.storeLocator).toBeDisplayed();
    }
    
    async addOneItem() {
        await browser.scroll(0, 2500);
        await this.featuredItem.click();
        await this.viewCartbtn.click();
    }
    
    async addSingleItem() {
        await this.addOneItem();
        await expect(this.itemQuantity).toBeDisplayed();
        await expect(this.currentPrice).toBeDisplayed();
        await expect(this.orderSummary).toBeDisplayed();
        await expect(this.total).toBeDisplayed();
        await expect(this.cartHeader).toBeDisplayed();
    }

    async addMultipleItems() {
        const products = [this.product1, this.product2];

        for (let i = 0; i < products.length; i++) {
            await products[i].click();
            await expect(this.productTitle).toBeDisplayed();
            await this.continueshoppingbtn.click();
        }
        await this.product3.click();
        await this.viewCartbtn.click();

        const checkElements = [this.productTitle, this.currentPrice, this.itemQuantity, this.orderSummary, this.checkout]

        for (const Elements of checkElements) {
            await expect(Elements).toBeDisplayed();
        }
        await browser.scroll(0, 400);
    }
    
     async deleteItems() {
        await browser.scroll(0, 1300);
        await this.mothersdayGifts.click();
        await this.giftItem1.click();
        await this.viewCartbtn.click();
        await this.deleteBtn.click();
     }

    async increaseItems(item) {
        await this.searchInput.setValue(item);
        await this.searchIcon.click();
        await this.outdoorGameProduct1.click();
        await this.viewCartbtn.click();

        for (let i = 0; i < 4; i++) {
            await this.incrementBtn.click();
        }
    }

    async decreaseItems(item) {
        await this.increasingTheitems(item);
        for (let i = 0; i < 5 ; i++) {
            await this.decrementBtn.click();
        }
    }

    async favoriteIcon() {
        await this.addingOneItem();
        await this.favoriteProductIconUnfilled.click();
        await expect(this.favoriteProductIconFilled).toBeDisplayed();
    }
}

export default new Cart();