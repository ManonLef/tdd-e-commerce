const Home = () => {
  console.log("rendering Home component");
  const img1 = new URL("../images/image1.jpg", import.meta.url).href;
  const img2 = new URL("../images/image2.jpg", import.meta.url).href;
  const img3 = new URL("../images/image3.jpg", import.meta.url).href;

  return (
    <div className="flex-1 p-5">
      <h1 className="text-2xl">Welcome to our shop!</h1>

      <div>
        <p>
          We are dedicated to making your shopping
          experience memorable. Thank you for choosing us as your go-to
          destination for all your fashion needs. Wishing you a joyful holiday
          season and a stylish year ahead!
        </p>
      </div>

      <div className="flex gap-3 justify-around">
        <img src={img1} alt="" className="w-1/3 p-3 rounded-bl-full" />
        <img src={img2} alt="" className="w-1/3 p-3 " />
        <img src={img3} alt="" className="w-1/3 p-3 rounded-tr-full" />
      </div>

      <div className="flex gap-5 flex-wrap">
        <div>
          <h2>New Arrivals</h2>
          <p>
            Discover the latest additions to our collection! Fall in love with
            our new arrivals, handpicked to elevate your style. From cozy
            sweaters to chic accessories, we have something for everyone. Be the
            first to explore these trendy items and make a statement with your
            fashion choices.
          </p>
        </div>
        <div>
          <h2>Holiday Closure</h2>
          <p>
            As the holiday season approaches, we would like to express our
            heartfelt gratitude for your continued support. To allow our
            hardworking team some well-deserved rest and quality time with their
            loved ones, we will be closing our doors from Christmas to the 7th
            of January. We apologize for any inconvenience and look forward to
            serving you with renewed energy when we reopen.
          </p>
        </div>
        <div>
          <h2>Shop Now!</h2>
          <p>
            Can&apos;t wait until the holidays are over? Shop online and explore
            our fantastic range of products from the comfort of your home. Make
            this holiday season special with gifts for your loved ones or treat
            yourself to something extraordinary. Shop now and experience the joy
            of giving and receiving.
          </p>
        </div>
        <div>
          <h2>Upcoming Events</h2>
          <p>
            Stay tuned for exciting events and promotions in the coming weeks!
            From exclusive discounts to holiday-themed contests, we have some
            delightful surprises in store for you. Follow us on social media and
            subscribe to our newsletter to be the first to know about our
            upcoming offers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
