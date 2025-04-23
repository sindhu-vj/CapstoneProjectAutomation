const { $ } = require('@wdio/globals');
const Search = require('../pageobjects/search');
const WeeklyAd = require('../pageobjects/weeklyAd');
const Homedecor = require('../pageobjects/homedecor');
const Cart = require('../pageobjects/cart');

describe('Hobby Lobby', () => {
    it('should search for a product and display the results', async () => {
        await Search.open();
        await Search.search('Mirror');
    });

    it('should display no matches found when enter a random text in the input field', async () => {
        await Search.open();
        await Search.msg('abababa');
    });

    it('should display a set of products list when a random characters are entered in the input field', async () => {
        await Search.open();
        await Search.specialCharacters('*!*#');
    });

    it('should automatically suggest the products name when first 3 letters are entered', async () => {
        await Search.open();
        await Search.autoLetters('Mir');
    });

    it('Auto suggestions', async () => {
        await Search.open();
        await Search.autosearch('easter');
    });

    it('should change the color of weeklyad button when it is hovered', async () => {
        await WeeklyAd.open();
        await WeeklyAd.hoverColor('rgba(0,0,0,0.87)');
    });

    it('should display weeklyad page and the details when WeeklyAd button is clicked ', async () => {
        await WeeklyAd.open();
        await WeeklyAd.weeklyAdflow();
    });

    it('should display Weekly Ad image when View the WeeklyAd button is clicked', async () => {
        await WeeklyAd.open();
        await WeeklyAd.weeklyAdflow();
    });

    it('should return to the Weekly Ad page when return to site is clicked', async () => {
        await WeeklyAd.open();
        await WeeklyAd.weeklyAdflow();
    });

    it('should click on the weeklyAd button and display the related content', async () => {
        await WeeklyAd.open();
        await WeeklyAd.headerCheck('Shop Weekly Ad')
    });

    it('should add Email id in the input field to receive weeklyads', async () => {
        await WeeklyAd.open();
        await WeeklyAd.signupCheck('sinqalearning@gmail.com', 'Thank you for signing up');
    });

    it('should display the cart icon on the top right of the homepage and should be clickable', async () => {
        await Cart.open();
        await Cart.cartIconcheck();
    });

    it('should return to the homepage when HOBBY LOBBY is clicked', async () => {
        await Cart.open();
        await Cart.homepageReturn();
    });

    it('should add one of the Featured products to the cart', async () => {
        await Cart.open();
        await Cart.addingSingleitem();
    });

    it('should add items to the cart', async () => {
        await Cart.open();
        await Search.searchText('Summer Toys');
        await browser.scroll(0, 400);
        await Cart.verifyCartPage();
    });

    it('Should delete items from the cart when delete button is clicked', async () => {
        await Cart.cartPage();
        await Cart.deleteItems();
    });

    it('should increase the quantity of an item in the cart when (+) icon is clicked', async () => {
        await Cart.open();
        await Cart.increasingTheitems('summer outdoor games');
    });

    it('should decrease the quantity of an item in the cart when (-) icon is clicked', async () => {
        await Cart.cartPage();
        await Cart.decreasingTheitems();
    });

    it('should change the color of the favorite icon to red when it is clicked', async () => {
        await Cart.cartPage();
        await Cart.favoriteProductIcon.click();
    });

    it('should display list of items when Home Decor component is clicked', async () => {
        await Homedecor.open();
        await Homedecor.homeDecor.click();
    });

    it('should highlight all the dropdown items when Home Decor component is clicked', async () => {
        await Homedecor.open();
        await Homedecor.arrowDownHomedecor();
    });

    it('should click each categories under Home decor', async () => {
        await Homedecor.open();
        await Homedecor.categories();
    });

    it('should click the Explore all button to display a Home Decor products across all related Categories', async () => {
        await Homedecor.open();
        await Homedecor.exploreBtn();
    })
})

