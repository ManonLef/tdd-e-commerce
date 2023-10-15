# Shopping Cart Notes

Here is where I will keep a log of this project's progress. 

## Assignment:

1.  Create a new React project.
2.  Think about the component and the folder structure. How could you set up your application? Which components or functionalities do you need? It's a good idea to note this down somewhere you can easily get to and refer back and add to it to keep track.
3.  You should have at least two pages (a home page and a shop page, which includes your shopping cart). Let the user navigate between the pages with a navigation bar, which will be shown on both pages.
4.  To your homepage, you can add whatever you'd like! A few images or information will be totally fine; it doesn't have to be something fancy - it's to test the concepts taught thus far.
5.  On the shopping cart page, you should have the same navigation bar that displays the number of items currently in the cart. You should also have a button next to it where you can go to the cart to checkout and pay (however we are not going to implement this logic here).
6.  Build individual card elements for each of your products. Display an input field on it, which lets a user manually type in how many items they want to buy. Also, add an increment and decrement button next to it for fine-tuning. You can also display a title for each product as well as an "Add To Cart" button.
7.  Fetch your shop items from [FakeStore API](https://fakestoreapi.com) or something similar.
8.  Once a user has submitted their order, the amount on the cart itself should adjust accordingly.
9.  Make sure to test your app thoroughly using the React Testing Library. Be careful not to test `react-router-dom` directly, since it is an external library and the developers working on it must have tested the library already.
10. As usual, style your application so you can show it off! You have a host of options provided already.
11. Lastly, it's time to deploy it! Depending on what hosting solution you're using, you may need some additional configuration so that your routing is handled correctly as a single page application (SPA). *removed instructions on deploying*

## Notes on Assignment before starting the project:

1. ✅ [completed](#2023-10-09) 
2. Before starting this, I believe it would make sense to keep the header and footer in place throughout, and the main section should change based on current link. I am thinking about the following components:
    - main app
    - header which includes a shopping cart icon, link to homepage and link to shop 
    - data fetcher
    - shopping cart page (could perhaps be implemented on the shop page reading those instructions)
    - shop page
      - includes cards for each product
    - card component for each product
      - should have an input field for number of items, and buttons to increase/decrease
    - home page
    - footer
3. covered in the above. 
4. Homepage could be a fancy introduction to the shop I will pick. It would be nice to include a few hot selling items perhaps, or a call to action like "shop now". I probably want to gather some inspiration for this on real shopping sites. 
5. covered in point 2. This makes me think the shopping cart should indeed have it's own page to make most sense. You could probably technically have a state and conditionally render it from the shop, but I'd rather keep those separate and have every item, be added to cart on add-to-cart action
6. added to number 2 (input field for amount of items)
7. Find possible API's online to use for this. At first thought, just as with memory card, this really makes me want to build my own API, but that would be a new rabbit hole that should probably wait until I reach that section. 
8. This makes me believe the cart item in the header section should be a component inside the header. This way we don't have to re-render the whole header component. 
9. "Be careful not to test `react-router-dom` directly" comment makes me wonder why this was put in here. I should probably find out if this is a common mistake or something. I am assuming I should test for components rendering, shopping cart updating amount, and updated amount updating/rendering in the header section as well. 
10. I have no styling ideas yet and will gather inspiration for it once the main functionality is implemented. I am intending to make it a pretty basic but sleek or fashionable site. I do not want to spend too much time on styling. I have learned about styling components and CSS in JS so might try to implement this here after using TailWind for the past few projects. 
11. Not applicable right now. I'll probably stick to Vercel but I'll look at this once I'm ready to deploy. 

## 2023-10-09
- set up my React project with Vite. 
- [ ] find and keep track of available API's I could use for this project
- [ ] go through the `React Testing Library` docs and review testing section as needed

## 2023-10-12
- I started sketching out the basic idea but most of the base components are layed out already. 
- Need to have a plan for the hierarchy regarding shopping cart, items in cart, nav bar. Since the shopping cart amount of items need to be displayed inside the navbar.
- the cart amount of items could possibly be a child of cart, with cart being lower in hierarchy/child of nav bar. That way the state is lifted up to where it's required. 
- Do:
  - [x] create product components to display on the shop page
- Now I want to add a button to product, which adds to cart. This means the cart state has to be adjusted which is outside this component so has to be higher up the tree?
  - I probably need to add all properties to the product itself since it has to be editable later as well, like removing items (from cart). This means default in cart is 0.
  - This might just be the answer since then all we have to share and edit are the product key/values
    - concern: would have to filter through all available products to display cart. So this is probably not an option. As soon as user clicks add to cart, it should add the product to a cart array probably if it has a value > 0
- I'll work on gathering the data through the API first
- [Mock shop](https://mock.shop/) which has a nice [Demo](https://demostore.mock.shop/)
- I decided to add the API fetch to the `App` component since that way it only fires once on initial load.  

- [ ] Testing: create mock for API data

### Pseudo API data
- [x] get products from [data fetch](https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}})
- [x] assign data I want to product properties
  - what do I want exactly from each `node`?
    - [x] title => `node.title`
    - [x] description => `node.description`
    - [x] image => `node.featuredImage.url`
    - [x] price => `node.variants.edges[0].node. price.amount` (no currency)
    - [x] id/key => `node.id`
- [x] add product with required data to Products list
- [x] do this for all products before passing them to the element that needs it. 

## 2023-10-12 End of day notes
- I struggled a bit with the data fetching since I didn't want to fetch on each shop link click. I ended up adding the fetch to the router for now... Not sure if that's the best way, but it will not remount, so also not refetch, and I can pass the resulting data as props to the children that need it. I will look at it more tomorrow. 
- I also managed to get the data from the API to render my products. I will call it a day for now.

## 2023-10-13
- I will start with creating the footer
- [ ] add image div to header for shop logo
- create footer component
- [ ] add highlights to homepage
  - create helper to pick 3 random items from API data
- [x] create footer element
  - don't add data yet. Might wish to draw some inspiration from other websites
- BUG refresh doesn't work on `/shop`, array is empty without routing apparently, nor does it with back button in browser
- [ ] rethink fetch data

## 2023-10-14 morning
- Struggling a bit with the hierarchy of states/data. It seems I should pass the variables and needed data at router level perhaps if I am to stay away from context or redux tools for example. It doesn't make full sense  to me to add this data to the router component, so I'll check to see if there's a better place for it. However, testing this with some prop drilling does seem to do the trick with regards to updating both the header cart items (App > Header) and the rendered route to shop as well (I passed the setter here as well with a test function)
- [ ] rewrite to account for lifted state fetching. 
- I did run into a bunch of problems earlier with fetching the data and storing said data into its own object. Might still want to attempt this however since I don't think we should be fetching data each time. Unless the data array is empty perhaps 🤔
- Considering clean repo for rewrite to save the data in this one for now. 

## 2023-10-14 evening update
- after thinking about this throughout the day I dove into some more research and conversation about this because my research seemed to conclude I wasn't stuck without reason and this should usually be handled using `context` or a tool like `redux`. I considered diving into `context` and that was confirmed [in this react-router discussion](https://github.com/remix-run/react-router/discussions/10440) I got linked to by my peers. So that's what I'll do first. Then when it's time for the rewrite, I need to take a deep breath and NOT forget about implementing tests first... I somehow entirely forgot to approach this project TDD. 

## 2023-10-15 
- read up about `context`which I could implement or I could go with router not having its own component. I will try to implement `context` since that seems to be what you'd use (or alternative outside tools) when working with more complex projects.
- data to have available:
  - products
  - shopping cart
  - method to update shopping cart

## TDD rewrite in this repo
- [x] rewrite basic setup with `main.jsx`

## 2023-10-15 rewrite progress:
- Approached it TDD
- Had some **failing tests** after my router addition. Fixed by wrapping the `App` and `Header` component in my Router component inside the test file.

- added initial setup of `context` but didn't manage to test it yet due to many errors. Will have to read in to more examples later.

## Ideas for future
- store API data fetch in localStorage and only useEffect (if possible) based on data available in LS
  -(this is probably not needed now but might be good for future to limit API calls?)