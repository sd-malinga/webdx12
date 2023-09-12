import BlogLayout from "../../components/BlogLayout";
import logor from "../../assets/logo-round.webp";
const Blog = () => {
  return (
    <div>
      <BlogLayout>
        <main className="mt-[15%] lg:mt-[8%] relative bg-white  antialiased">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue ">
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 ">
                    <img
                      className="mr-4 w-16 h-16 rounded-full"
                      src={logor}
                      alt="Jese Leos"
                    />
                    <div>
                      <a
                        href="#"
                        rel="author"
                        className="text-xl font-bold text-gray-900 "
                      >
                        Nick Davenport
                      </a>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        Founder - Brit.Gold
                      </p>
                      {/*     <p className="text-base text-gray-500 dark:text-gray-400">
                      <time
                        pubdate
                        dateTime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        Feb. 8, 2022
                      </time>
                    </p> */}
                    </div>
                  </div>
                </address>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">
                  Starter’s Guide to Gold Backed Crypto Assets
                </h1>
              </header>
              <p>
                Gold-backed crypto currencies offer investors new strategies for
                diversification and portfolio diversification in today's
                volatile environment, such as fast transactions with inflation
                protection features built right in. Beginner investors and
                veteran traders alike are turning more and more toward these
                precious coins for diversifying and growing their investment
                portfolios.
                <br />
                <br />
                What Are Gold-Backed Cryptocurrencies & Are They an Ideal
                Investment Option for Me?" You might be asking, what exactly are
                gold-backed cryptocurrencies, and are they suitable investments
                for my portfolio.
                <br />
                <br />
                Learn About Gold's crypto experts offer this beginner's guide
                for modern investments - gold IRAs. Read through and apply what
                is outlined, then partner with an IRA broker to plan for the
                future of your financial goals.
                <br />
                <br />
                Peter Schiff is an American stockbroker and financial
                commentator known as an outspoken opponent of cryptocurrency
                such as Bitcoin. A popular Twitter meme shows this fact by
                showing Bitcoin has seen massive price appreciation from $1 to
                nearly $9,000. Nonetheless, his sentiment on gold price
                stability echoed this claim perfectly; proof positive of it
                staying stable over the same timeframe.
                <br />
                <br />
                Simply stated, gold is among the safest assets to own in terms
                of long-term stability, making it a fantastic place to keep
                savings safe over the coming years. Currency debasement and
                large scale financial collapse have occurred time after time in
                history; therefore it would be prudent for people in such times
                to protect their savings in gold instead of fiat money bank
                accounts.
                <br />
                <br />
                Gold-backed cryptocurrency: the perfect combination of physical
                assets and digital investments
                <br />
                <br /> Blockchain technology makes owning gold easier than ever
                with digital tokens like Pax Gold (PAXG), offering legal titles
                to real gold securely embedded within digital tokens that anyone
                who purchases one receives the following:
                <br />
                <br />
                1) Quick and cost-effective gold transactions across borders
                <br /> 2) Direct Access to Real Gold Prices <br /> 3) Access and
                cost efficiency of traditional financial assets.
                <br />
                <br />
                At one time, the difficulties associated with buying,
                transporting and storing physical gold deterred many from
                exploring this option - effectively missing out on its many
                advantages as an investor. Now with stablecoins such as PAXG
                available to them however, investors gain all these advantages
                without incurring unnecessary effort in their ownership of
                precious metals.
                <br />
                <br />
                Gold provides an incredible opportunity for digital asset
                enthusiasts and traders alike. If you would like to open up a
                PAXG savings account and start earning digital gold today,
                please visit us at YouHodler.com right now.
              </p>
            </article>
          </div>
        </main>
      </BlogLayout>
    </div>
  );
};

export default Blog;
