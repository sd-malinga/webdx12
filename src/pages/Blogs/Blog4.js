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
                  OpenSea Reduces Fees and Revamps Creator Royalties Amid Rising
                  Competition
                </h1>
              </header>
              <p>
                NFT marketplace will require only a 0.5% royalty fee from
                projects without on-chain enforcement; sellers have the ability
                to pay more.
                <br />
                <br />
                Quick Take: For reasons related to competition with Blur,
                OpenSea has reduced creator royalty protections and implemented
                a 0.5% mandatory creator royalty fee without on-chain
                enforcement for NFT trades without payment to sellers as does
                OpenSea; in contrast to this policy change from OpenSea; thus
                Blur is gaining users while OpenSea loses them.
                <br />
                <br />
                Blur prohibits secondary OpenSea trades. As a result of Blur's
                and other platforms' actions, OpenSea claims it protected
                creators.
                <br />
                <br />
                OpenSea's Creator Royalty Changes and Blur Rivalry: An Analysis
                <br />
                <br />
                As OpenSea responds to increasing competition from emerging
                rival platform Blur, they have announced they will temporarily
                waive their 2.5% sales fee while simultaneously decreasing
                creator royalty protections on NFT marketplace trades - measures
                which may result in them losing primary sources of revenue; but
                OpenSea hopes to adapt quickly by instituting a mandatory 0.5%
                creator royalty fee only for NFT trades without an on-chain
                enforcement mechanism.
                <br />
                <br />
                Notably, sellers can opt to pay additional amounts. Creator
                royalty fees usually range between 5%-10% of the sale price;
                these enable NFT projects to generate ongoing revenues after
                initial token sale.
                <br />
                <br /> OpenSea's move comes on the heels of an extremely
                successful week for Blur, an upstart marketplace which launched
                back in October. On Tuesday they distributed over 100,000 NFT
                traders with their token, while also suggesting to creators of
                NFT projects to prevent their tokens being traded on OpenSea
                since this platform doesn't charge sales fees like OpenSea does.
                <br />
                <br />
                Blockchain data suggests that Blur has experienced rapid user
                growth while OpenSea's has steadily declined over time.
                Furthermore, OpenSea's enforcement tool had blocked Blur from
                trading as it failed to fully enforce creator royalty settings;
                however, in January it appears they found a way around it,
                helping it attract more users while drawing them away from
                OpenSea in recent weeks.
                <br />
                <br />
                OpenSea has announced that their operator filter tool will no
                longer block marketplaces that adhere to OpenSea's new approach.
                <br />
                <br />
                Blur informed NFT creators on Wednesday that secondary trades on
                OpenSea would no longer be allowed, while only full royalty
                settings on projects that had banned OpenSea would be enforced -
                an apparent response to OpenSea's earlier decisions late last
                year, though OpenSea maintains their intention was simply to
                protect creators in response to Blur and competing platforms'
                actions.
                <br />
                <br />
                OpenSea has noted on-chain data showing that about 80% of NFT
                trading volume takes place without some form of creator royalty,
                noting their aim of finding an arrangement which benefits both
                creators and traders.
              </p>
            </article>
          </div>
        </main>
      </BlogLayout>
    </div>
  );
};

export default Blog;
