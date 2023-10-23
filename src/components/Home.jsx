import { Link } from "react-router-dom";

const Home = () => {
  console.log("rendering Home component");
  const img1 = new URL("../images/image1.jpg", import.meta.url).href;
  const img2 = new URL("../images/image2.jpg", import.meta.url).href;
  const img3 = new URL("../images/image3.jpg", import.meta.url).href;

  return (
    <div className="flex-1 p-5 max-w-screen-xl m-auto">
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-4xl">Welcome to our shop!</h1>
        <p className="text-center text-xl">
          We are dedicated to making your shopping experience memorable. Thank
          you for choosing us as your go-to destination for all your fashion
          needs. Wishing you a joyful fall, holiday season and a stylish year ahead!
        </p>
        <button className="max-w-sm bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded shadow">
          <Link to={`/shop`}>Shop now</Link>
        </button>
      </div>

      <div className="flex gap-3 justify-around py-3">
        <img src={img1} alt="" className="w-1/3 p-3 rounded-bl-full" />
        <img src={img2} alt="" className="w-1/3 p-3 " />
        <img src={img3} alt="" className="w-1/3 p-3 rounded-tr-full" />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <div className="w-1/2">
            <h2 className="text-2xl">New Arrivals</h2>
            <p>
              Discover the latest additions to our collection! Fall in love with
              our new arrivals, handpicked to elevate your style. From cozy
              sweaters to chic accessories, we have something for everyone. Be
              the first to explore these trendy items and make a statement with
              your fashion choices.
            </p>
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl">Holiday Closure</h2>
            <p>
              As the holiday season approaches, we would like to express our
              heartfelt gratitude for your continued support. To allow our
              hardworking team some well-deserved rest and quality time with
              their loved ones, we will be closing our doors from Christmas to
              the 7th of January. We apologize for any inconvenience and look
              forward to serving you with renewed energy when we reopen.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="w-1/2">
            <h2 className="text-2xl">Shop Now!</h2>
            <p>
              Can&apos;t wait until the holidays are over? Shop online and
              explore our fantastic range of products from the comfort of your
              home. Make this holiday season special with gifts for your loved
              ones or treat yourself to something extraordinary. Shop now and
              experience the joy of giving and receiving.
            </p>
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl">Upcoming Events</h2>
            <p>
              Stay tuned for exciting events and promotions in the coming weeks!
              From exclusive discounts to holiday-themed contests, we have some
              delightful surprises in store for you. Follow us on social media
              and subscribe to our newsletter to be the first to know about our
              upcoming offers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
