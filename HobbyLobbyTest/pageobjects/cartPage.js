import { browser, expect } from '@wdio/globals'
import Basepage from './basePage.js';

class Cart extends Basepage {

    get cartIcon() {
        return $('[data-testid="ShoppingCartOutlinedIcon"]');
    }

    get featuredItem() {
        return $('(//button[@class="common_submitButton__ydII0"])[1]');
    }

    get currentPrice() {
        return $('span.sr-only');
    }

    get quantity() {
        return $('.cartProductTile_quantity__n6mb9');
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

    get quantityNum() {
        return $('.cartProductTile_itemQuantity__k0vps');
    }

    get hobbyLobbyheader() {
        return $('.header_imageButton__Hhqx_');
    }

    get outdoorGameProduct1() {
        return $('//div[@class="common_submitWrapper__D_k_e"]');
    }

    get closeIcon() {
        return $('.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.mui-style-ncheqt');
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

    get favoriteProductIcon() {
        return $$('svg[data-testid="FavoriteBorderIcon"]')[1];
    }

    get favoriteProductMainicon() {
        return $$('svg[data-testid="FavoriteBorderIcon"]')[0];
    }

    get viewListbutton() {
        return $('a.shoppingListModal_viewList__I5YVn');
    }

    get myListHeader() {
        return $('.lists_header__n7XKg');
    }

    load () {
        return super.load();
    }

    cartPage() {
        return browser.url(`https://www.hobbylobby.com/cart`);
    }

    async cartIconcheck() {
        await expect(this.cartIcon).toBeDisplayed();
        await this.cartIcon.click();
    }

    async homepageReturn() {
        await this.cartIcon.click();
        await this.hobbyLobbyheader.click();
    }
    async addingOneItem() {
        await browser.scroll(0, 3000);
        await this.featuredItem.click();
        await this.viewCartbtn.click();
    }
    
    async addingSingleItem() {
        await this.addingOneItem();
        await expect(this.currentPrice).toBeDisplayed();
        await expect(this.orderSummary).toBeDisplayed();
        await expect(this.total).toBeDisplayed();
    }

    async addingMultipleItems() {
        const products = [this.product1, this.product2];

        for (let i = 0; i < products.length; i++) {
            await products[i].click();
            await expect(this.productTitle).toBeDisplayed();
            await this.continueshoppingbtn.click();
        }
        await this.product3.click();
        await this.viewCartbtn.click();

        const checkElements = [this.productTitle, this.currentPrice, this.quantity, this.orderSummary, this.checkout]

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

    async increasingTheitems(item) {
        await this.searchInput.setValue(item);
        await this.searchIcon.click();
        await this.outdoorGameProduct1.click();
        await this.viewCartbtn.click();

        for (let i = 0; i < 4; i++) {
            await this.incrementBtn.click();
        }
    }

    async decreasingTheitems(item) {
        await this.increasingTheitems(item);
        for (let i = 0; i < 5 ; i++) {
            await this.decrementBtn.click();
        }
    }

    async favoriteIcon() {
        await this.addingOneItem();
        await this.favoriteProductIcon.click();
    }

}

export default new Cart();
