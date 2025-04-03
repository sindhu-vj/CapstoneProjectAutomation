const { $ } = require('@wdio/globals');
const Search = require('../pageobjects/search');
const WeeklyAd = require('../pageobjects/weeklyAd');
const Homedecor = require('../pageobjects/homedecor');
const Cart = require('../pageobjects/cart');
// const sleep = ms => new Promise(r => setTimeout(r, ms));

describe('Hobby Lobby', () => {
    it('should search for a product and display the results', async () => {
        await Search.open();
        await Search.search('Mirror');
    });

    it('Auto suggestions', async () => {
        await Search.open();
        await Search.autosearch('easter');
    });

    it('should change the color of weeklyad button when it is hovered', async () => {
        await WeeklyAd.open();
        await WeeklyAd.hoverColor('rgba(0,0,0,0.87)');
    });

    it('should click on the weeklyAd button and display the related content', async () => {
        await WeeklyAd.open();
        await WeeklyAd.headerCheck('Shop Weekly Ad')
    });

    it('should add Email id in the input field to receive weeklyads', async () => {
        await WeeklyAd.open();
        await WeeklyAd.signupCheck('sinqalearning@gmail.com', 'Thank you for signing up');
    });

    it('should increase and decrease the quantity of an item in the cart when (+) and (-) buttons are clicked', async () => {
        await Cart.open();
        await Cart.quantityCheck('summer outdoor games');
    });

    it('Should add items to cart and delete them', async () => {
        await Cart.open();
        await Cart.addRemoveCheck('summer toys');
    });

    it('should add items to cart and added items should be visible in My List upon clicking favorite icon', async () => {
        await Cart.open();
        await Cart.cartfavItm('summer toys', 'My Lists');
    });

    it('should display list of items when Home Decor component is clicked', async () => {
        await Homedecor.open();
        await Homedecor.arrowdownhomedecor();
    });

    it('should click each categories under Home decor', async () => {
        await Homedecor.open();
        await Homedecor.categories();
    })
})

