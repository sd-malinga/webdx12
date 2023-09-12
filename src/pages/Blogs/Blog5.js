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
                  How Gold-backed Crypto is Reshaping our View on Finance
                </h1>
              </header>
              <p>
                Gold as a precious metal requires little introduction. Since
                ancient Roman and Greek empires used gold as payment along the
                Silk Road, and as modern banking emerged with paper money backed
                by it known as the "gold standard." After 1971 we abandoned that
                concept; since then gold has only ever served as an insurance
                policy against financial volatility; but in today's global
                economic turmoil gold-backed cryptocurrencies (e.g. PAXG) may
                provide renewed relevance.
                <br />
                <br />
                Gold-backed cryptocurrency offers both protection from
                inflationary fiat currencies as well as an effective platform to
                bridge those in transitioning out of fiat markets into digital
                assets.
                <br />
                <br />
                Why would someone want to own gold?
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
