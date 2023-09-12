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
                  Gold-backed cryptocurrencies: the new stablecoin variant
                </h1>
              </header>
              <p>
                Crypto currencies with high risk profiles have outshone wider
                markets that have become incapacitated due to war and inflation.
                <br />
                <br />
                Coins backed by gold are relatively recent innovations of
                "stablecoins", or digital currencies usually pegged to the
                dollar to help curb volatility. Pax Gold (PAXG), one of the
                leading contenders, saw its price surge 7.4% while Tether Gold,
                its main rival, surged 8.5% during 2022. Gold Standard
                Obliterated by Abandonment
                <br />
                <br />
                Bitcoin has declined 13% while Ether is off 20%.
                <br />
                <br />
                Everett Millman, Chief Market Analyst of Gainesville Coins
                stated, "One of the main worries newcomers to crypto may have is
                its unbacked nature; all it seems like a number on a screen." To
                counteract that perception and bring some sense to investing,
                Everett suggested connecting various digital coins or tokens to
                real world commodities in some fashion. "
                <br />
                <br />
                Gold has long been seen as an investment against geopolitical
                instability and inflation; thus its appeal as an asset class
                should come as no surprise. What might surprise people more is
                how quickly demand has grown for gold-backed cryptocurrencies -
                an unconventional form of financial technology with unique
                applications backed by precious metals.
                <br />
                <br />
                Stablecoins have quickly become a go-to cryptocurrency among
                traders looking to transfer funds quickly between accounts.
                Major stablecoins make for easier exchange than exchanging
                traditional money like U.S. dollars for bitcoin or another
                crypto.
                <br />
                <br /> Tether Gold's popularity among larger investors is
                evidenced by "whales", or individuals possessing $1 million or
                more worth of cryptocurrency who use Tether Gold tokens to
                convert part of their holdings to gold, according to Paolo
                Ardoino, Tether's Chief Technology Officer.
                <br />
                <br />
                "Many of our investors had already become invested in
                cryptocurrency but desired diversifying away from crypto assets
                or dollars and towards inflation-resistant assets such as gold,"
                according to him.
                <br />
                <br />
                Gold-backed coins remain an unusual phenomenon on the
                cryptocurrency market at present - PAXG and Tether Gold have
                only just over two years old, offering limited liquidity, with
                uncertain long-term prospects for success.
                <br />
                <br />
                PAXG's market capitalisation nearly quadrupled to $627 million
                during 2017, while Tether Gold saw its value increase 9% to
                surpass $209 million; by comparison, their eight-year old
                sibling, dollar-pegged Tether has amassed an astounding market
                cap of more than $83.1 billion.
                <br />
                <br />
                CoinMarketCap's data indicates that daily PAX gold trading
                volumes ranged between $10 million to $520 million over the past
                month, as opposed to ether volumes which fluctuated between $8.7
                billion and $25 billion; dollar-pegged tether 24-hour volumes
                ranged between $35 billion and $92 billion in April.
                <br />
                <br />
                Critics believe PAXG and Tether Gold's rise has simply followed
                gold prices this year; indeed they've tracked physical gold's
                rise of 8.5% this year while rising 4.5% since Feb 23 (when
                Russia invaded Ukraine). This phenomenon could only happen with
                strong demand and liquidity on exchanges - something PAXG does
                better.
                <br />
                <br />
                SPDR Gold Shares exchange-traded fund managed by State Street
                Global Advisors is up 7.6% year to date.
                <br />
                <br />
                "Crypto gold tokens themselves aren't immutable - they are
                simply IOUs created using blockchain infrastructure," according
                to Alex Thorn, head of firmwide research for Galaxy Digital in
                New York.
                <br />
                <br />
                Investors would need to decide whether they could trust both
                PAXG and its gold ETF as they do one another, according to Mr.
                Regan.
                <br />
                <br />
                "Both products provide synthetic gold exposure backed by gold
                holdings. Perhaps trust is one factor people might use when
                making decisions regarding whether Paxos and State Street can
                coexist."
                <br />
                <br />
                However, proponents of such coins argue they provide the ease
                and simplicity necessary for purchasing gold without the hassle
                of storage issues or minimum margin requirements necessary for
                traditional markets.
                <br />
                <br />
                PAXG requires an investment minimum equal to 0.01 ounce of gold
                - approximately $20. This compares favorably with SPDR Gold
                ETF's higher $184 investment threshold per share.
                <br />
                <br />
                Millman at Gainesville Coins also asserted that gold-backed
                stablecoins provided greater credibility for cryptocurrency
                trading.
                <br />
                <br />
                "Cryptocurrencies have long been criticized for being extremely
                volatile. To address this, one way would be to back a token with
                something tangible that's less risky like gold," according to
                one researcher. He suggested this solution could actually
                increase confidence in cryptos by strengthening trust.
              </p>
            </article>
          </div>
        </main>
      </BlogLayout>
    </div>
  );
};

export default Blog;
