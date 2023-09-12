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
                  Grand Theft Auto enters Web3 via it's mobile gaming giant:
                  Zynga
                </h1>
              </header>
              <p>
                Fun fact: Zynga, one of the premier mobile gaming companies, is
                owned by Take-Two Interactive; this same company owns Rockstar
                Games which produces such highly sought after game franchises as
                Grand Theft Auto V, Red Dead Redemption V and NBA 2K!
                <br />
                <br />
                Now Zynga is making their Web3 debut with an entirely new
                franchise.
                <br />
                <br />
                Zynga, best known for their FarmVille series, recently unveiled
                an offshoot studio called Zynga Web3 (ZW3) and announced
                Sugartown. Sugartown will serve more like an all-encompassing
                gaming platform rather than being limited to videogames alone -
                as evidenced by cute cartoon animals featured in its teaser
                video!
                <br />
                <br />
                Looks like a scene from an upcoming Netflix series; I wouldn't
                be surprised to see a cartoon featuring Sugartown characters!
                <br />
                <br />
                At present, however, all that can be confirmed is that Sugartown
                will launch an NFT collection called Oras and participants in
                future games within its universe will need them in order to take
                part. ZW3 confirmed they are working closely with various
                communities on assigning allowlists for these new NFTs.
                <br />
                <br />
                Stablecoins have quickly become a go-to cryptocurrency among
                traders looking to transfer funds quickly between accounts.
                Major stablecoins make for easier exchange than exchanging
                traditional money like U.S. dollars for bitcoin or another
                crypto.
                <br />
                <br /> If this platform proves itself successful, perhaps some
                of those major titles from that same studio might move over to
                Web3?
              </p>
            </article>
          </div>
        </main>
      </BlogLayout>
    </div>
  );
};

export default Blog;
