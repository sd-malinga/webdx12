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
                  Gold-Backed Cryptocurrency: Is This the Future Gold Standard?
                </h1>
              </header>
              <p>
                Cryptocurrency has long held promise of revolutionizing payments
                and banking globally; yet its adoption remains limited due to
                various obstacles from institutional opposition, to tech
                challenges like scaling, decentralization and maintaining
                decentralization. Another key impediment to adopting
                cryptocurrency lies within its fluctuating prices; these
                fluctuations cause many potential users to hesitate before
                accepting cryptocurrency as part of their portfolios. Many users
                in and out of the crypto space see cryptocurrency assets as
                vulnerable to market forces driven by whales and market makers
                -- something many stablecoins such as USDS, USDT and USDC aim to
                resolve by backing their tokens with fiat currency like the
                United States dollar - yet their potential only just begins
                there.
                <br />
                <br />
                Gold Standard Obliterated by Abandonment
                <br />
                <br /> Looking back through currency history can give us
                inspiration on how best to approach digital currency issues.
                Historically, paper money was backed by gold reserves so the
                holder of each note had access to redeem it in exchange for
                equivalent gold reserves. Before 1933, the United States dollar
                was pegged to gold as its backing currency; though you can argue
                over its advantages and disadvantages of that decision, leaving
                this backing ultimately resulted in something being lost when
                leaving it: its anti-inflationary properties which ensure
                reliable mode of exchange were no longer guaranteed backed by
                gold backing; though many cryptocurrency enthusiasts have
                experimented with similar solutions such as backing with modern
                crypto assets that may or may not offer as stable foundations as
                gold backing alone.
                <br />
                <br /> Legend holds that in Roman times, one ounce of gold could
                buy an elegant toga; today this would translate to approximately
                USD1500; making this currency and backing solution quite
                appealing if coupled with blockchain's inherent borderless
                properties of being fast, cheap and transparent. Our article
                here takes an in-depth look at gold's timeless value over time -
                an eye-opener. So why not directly back cryptocurrency with
                reserves instead of fiat? Our article here shows an insightful
                historical perspective.
              </p>
            </article>
          </div>
        </main>
      </BlogLayout>
    </div>
  );
};

export default Blog;
