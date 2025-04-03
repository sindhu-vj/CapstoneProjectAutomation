const { $ } = require('@wdio/globals')

class Cart {

    get searchInput() {
        return $('input#autocomplete-1-input');
    }

    get searchIcon() {
        return $('.autoComplete_searchButton__aHJbS');
    }

    get cartAddbutton() {
        return $('button[id=":R439jbaq6:"]');
    }

    get cartAddbutton1() {
        return $('button[id=":R459jbaq6:"]');
    }

    get cartAddbutton2() {
        return $('button[id=":R479jbaq6:"]');
    }

    get cartIcon() {
        return $('[data-testid="ShoppingCartOutlinedIcon"]');
    }

    get searchInput() {
        return $('input#autocomplete-1-input');
    }

    get searchIcon() {
        return $('.autoComplete_searchButton__aHJbS');
    }

    get closeIcon() {
        return $('.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.mui-style-ncheqt');
    }

    get incrementBtn() {
        return $('.cartProductTile_increment__Lp6Gc');
    }

    get decrementBtn() {
        return $('.cartProductTile_decrement__KyGOI');
    }

    get deleteBtn() {
        return $('.cartProductTile_deleteButton__Cfe9X');
    }

    get quantityNum() {
        return $('.cartProductTile_itemQuantity__k0vps');
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


    open() {
        return browser.url(`https://www.hobbylobby.com/`);
    }
    async quantityCheck(item) {
        await this.searchInput.setValue(item);
        await this.searchIcon.click();
        await this.cartAddbutton.click();
        await this.closeIcon.click();
        await this.cartIcon.click();
        for (let i = 0; i < 5; i++) {
            await this.incrementBtn.click();
        }
        for (let i = 0; i < 5; i++) {
            await this.decrementBtn.click();
        }
        await this.deleteBtn.click();
    }

    async addRemoveCheck(item) {
        const addButton = [this.cartAddbutton, this.cartAddbutton1, this.cartAddbutton2];
        await this.searchInput.setValue(item);
        await this.searchIcon.click();
        for (let i = 0; i < addButton.length; i++) {
            await addButton[i].click();
            await this.closeIcon.click();
        }
        await this.cartIcon.click();

        for (let i = 0; i < 3; i++) {
            await this.deleteBtn.click();
        }
    }
    async cartfavItm(item) {
        await this.searchInput.setValue(item);
        await this.searchIcon.click();
        await this.cartAddbutton.click();
        await this.closeIcon.click();
        await this.cartIcon.click();
        await this.favoriteProductIcon.click();
        await this.favoriteProductMainicon.click();
        await this.viewListbutton.click();
        await expect(this.myListHeader).toExist(item);
    }
}

module.exports = new Cart();
