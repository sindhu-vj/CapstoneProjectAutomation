import Search from '../pageobjects/searchPage';
import WeeklyAd from '../pageobjects/weeklyAdPage';
import Homedecor from '../pageobjects/homedecorPage';
import Cart from '../pageobjects/cartPage';

describe('Hobby Lobby', () => {
    it.only('should search for a product and display the results', async () => {
        await Search.load();
        await Search.searchProduct('Mirror');
    });

    it.only('should display No matches found when entering a random text into input field', async () => {
        await Search.load();
        await Search.noMatchingResult('abababa');
    });

    it.only('should display list of products when a random characters are entered into input field', async () => {
        await Search.load();
        await Search.specialCharacters('*!*#');
    });

    it.only('should automatically suggest the product names when first 3 letters are entered', async () => {
        await Search.load();
        await Search.firstThreeLetters('Mir');
    });

    it.only('Auto suggestions', async () => {
        await Search.load();
        await Search.autoSearch('easter');
    });

    it('should change the color of weeklyad button when it is hovered over', async () => {
        await WeeklyAd.load();
        await WeeklyAd.hoverColor('rgba(0,0,0,0.87)');
    });

    it('should display weeklyad page and its details when the WeeklyAd button is clicked ', async () => {
        await WeeklyAd.load();
        await WeeklyAd.weeklyAdflow();
    });

    it('should display sub weekly Ad image when View the WeeklyAd button is clicked', async () => {
        await WeeklyAd.load();
        await WeeklyAd.viewAdbtn();
    });

    it('should return to the Weekly Ad page when return to site link is clicked', async () => {
        await WeeklyAd.load();
        await WeeklyAd.returnTosite();
    });

    it('should enter an Email id in the input field to receive weeklyads', async () => {
        await WeeklyAd.load();
        await WeeklyAd.signupCheck('dummyemail@example.com', 'Thank you for signing up');
    });

    it('should display the cart icon at the top right of the homepage and be clickable', async () => {
        await Cart.load();
        await Cart.cartIconcheck();
    });

    it('should return to the homepage when HOBBY LOBBY logo is clicked', async () => {
        await Cart.load();
        await Cart.returnToHomepage();
    });

    it('should add one of the Featured products to the cart', async () => {
        await Cart.load();
        await Cart.addingSingleItem();
    });

    it('should add multiple items to the cart successfully', async () => {
        await Cart.load();
        await Search.searchText('Summer Toys');
        await Cart.addingMultipleItems();
    });

    it ('Should remove items from the cart when delete button is clicked', async () => {
        await Cart.load();
        await Cart.deletingItems();
    });

    it('should increase the quantity of an item in the cart when (+) icon is clicked', async () => {
        await Cart.load();
        await Cart.increasingTheitems('summer outdoor games');
    });

    it('should decrease the quantity of an item in the cart when (-) icon is clicked', async () => {
        await Cart.load();
        await Cart.decreasingTheitems('summer outdoor games');
    });

    it('should change the color of the favorite icon to red when clicked', async () => {
        await Cart.load();
        await Cart.favoriteIcon();
    });

    it('should display a list of items when Home Decor component is clicked', async () => {
        await Homedecor.load();
        await Homedecor.homedecorComponent();
    });

    it('should highlight all the dropdown items under Home decor', async () => {
        await Homedecor.load();
        await Homedecor.arrowDownHomedecor();
    });

    it('should click each category under Home decor', async () => {
        await Homedecor.load();
        await Homedecor.homeDecorDropdown();
        });
    

    it('should click the Explore all button to display Home Decor products across all related Categories', async () => {
        await Homedecor.load();
        await Homedecor.exploreBtn("I/'m looking for");
    })
})

