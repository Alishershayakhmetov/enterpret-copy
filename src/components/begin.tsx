import "../assets/styles.scss";
import canva_small_new from "../assets/canva_small_new.svg";
import descript from "../assets/descript_small.svg";
import apollo from "../assets/apollo_small.svg";
import strava from "../assets/strava_smaller.svg";
import okx from "../assets/OKX_small.svg";
import atlassian from "../assets/atlassian_small.svg";
import arc from "../assets/Arc_small.svg";
import coda from "../assets/coda_small.svg";
import notion from "../assets/notion_small.svg";
import ironclad from "../assets/ironclad_small.svg";

import "@aarsteinmedia/dotlottie-player";

export default function Begin() {
  return (
    <>
      <div className="gradient-bg-home">
        <div className="grey-layer"></div>
        <div className="padding-global">
          <div className="hero-theme" style={{ margin: "3rem 0" }}>
            <h1 className="h1-center center is-h1">
              Transform customer feedback into{" "}
              <span className="text-gradient">product growth with AI</span>
            </h1>
            <div className="center top-margin-30 homepage-hero-subtext">
              All customer feedback unified automatically and categorized
              accurately to empower product orgs to prioritize and build what
              matters.
            </div>
            <div className="button-wrapper top-margin-30">
              <a className="button">
                <div className="button-text">Book a Demo</div>
              </a>
              <a className="button">
                <div className="button-text">Take Product Tour ▶</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-global">
        <div className="container-large">
          <div
            className="padding-for-logo-section section"
            style={{ borderTop: "1px solid var(--divider)" }}
          >
            <div className="logo-outer-wrapper">
              <div className="text-medium-16 centre">
                Trusted by customer-led product companies
              </div>
              <div className="logo-wrapper">
                <img src={canva_small_new} className="brand-logo" />
                <img src={descript} className="brand-logo" />
                <img src={apollo} className="brand-logo" />
                <img src={strava} className="brand-logo" />
                <img src={okx} className="brand-logo" />
                <img src={atlassian} className="brand-logo" />
                <img src={arc} className="brand-logo" />
                <img src={coda} className="brand-logo" />
                <img src={notion} className="brand-logo" />
                <img src={ironclad} className="brand-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-global cta-block">
        <div className="container-large">
          <div className="padding-for-logo-section section">
            <div
              style={{
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
            >
              <dotlottie-player
                class="your-class-name"
                src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/6523f62b062f504545a79ef6_lnivztg5.lottie"
                autoplay=""
                loop=""
                style={{
                  width: "auto",
                  height: "300px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="padding-global">
        <div className="container-large section">
          <div className="extra-padding">
            <div className="center cta-card">
              <div className="cta-card-left"></div>
              <div className="cta-card-right">
                <div className="blue-text">The Enterpret Advantage</div>
                <div className="white-text-for-cta-card top-margin-10">
                  Enterpret automatically unifies your customer feedback across
                  all data types and builds adaptive AI models tailored to your
                  feedback architecture, delivering precise and granular
                  insights.{" "}
                </div>
                <a
                  href="/enterpret-in-action"
                  className="button-wrapper-learn-more is-blue top-margin-10 w-inline-block"
                >
                  <div className="get-started-text">Get Started</div>
                  <img
                    src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/6505a300ef3d3e0c85905059_Group%201801758.webp"
                    loading="lazy"
                    alt=""
                    width="16"
                    className="image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-global section">
        <div className="container-large">
          <div className="extra-padding">
            <h2 className="homepage-h2">
              Leading customer feedback intelligence for product development
              teams
            </h2>
            <div className="feature-wrapper top-margin-60">
              <div className="feature">
                <div className="feature-left">
                  <div className="blue-text">Centralize</div>
                  <div className="features-title top-margin-20">
                    Consolidate and organize customer feedback in hours not days
                  </div>
                  <div className="feature-left-bottom-wrapper top-margin-20">
                    <section className="section-tag">
                      <div className="div-block-9">
                        <div className="text-block">
                          “Enterpret connected millions of feedback records
                          immediately. Connecting all sources of feedback made
                          it possible for us to see what users were asking for
                          and make it accessible to all our teams.”
                        </div>
                        <div className="div-block-11">
                          <div>
                            <img
                              src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/66794554c9175a374ea902ff_image%20(4).png"
                              width={70}
                              className="image-4"
                            />
                          </div>
                          <div className="div-block-12">
                            <div className="text-block-8">
                              Jesse Walker
                              <br />
                              Head of Insights and User Advocacy
                            </div>
                            <div>
                              <img
                                src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/658c0797f3efd1f4a4ce5fb5_canva_small.svg"
                                className="img-3"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <a
                    href="https://www.enterpret.com/blog/how-canva-leverages-enterpret-to-build-products-that-delight-over-170-million-users"
                    className="button top-margin-40 w-inline-block"
                  >
                    <div className="button-text">
                      Read the Canva customer story
                    </div>
                  </a>
                </div>
                <div className="feature-right">
                  <div className="big-images-on-homepage">
                    <img
                      src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651bf8aa70c2e1c507e33463_taxonomy-min.webp"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 91vw, (max-width: 991px) 84vw, 53vw"
                      alt=""
                      srcSet="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651bf8aa70c2e1c507e33463_taxonomy-min-p-500.webp 500w, https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651bf8aa70c2e1c507e33463_taxonomy-min.webp 733w"
                      className="big-images-on-homepage img"
                      width="651"
                    />
                  </div>
                </div>
              </div>
              <div className="feature">
                <div className="feature-left">
                  <div className="blue-text">Discover</div>
                  <div className="features-title top-margin-20">
                    Surface the insights that matter
                  </div>
                  <div className="feature-left-bottom-wrapper top-margin-20">
                    <section className="section-tag">
                      <div className="div-block-9">
                        <div className="text-block">
                          “Enterpret helps us have a holistic view. We can
                          actually understand: “What are the broader sentiments?
                          What are our users saying?”
                        </div>
                        <div className="div-block-11">
                          <div>
                            <img
                              src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/667942afe68099a0dcd15ab2_emma.jpeg"
                              width={70}
                              className="image-4"
                            />
                          </div>
                          <div className="div-block-12">
                            <div className="text-block-8">
                              Emma Auscher,
                              <br />
                              Global VP of Customer Experience
                            </div>
                            <div>
                              <img
                                src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/658c094aa7939e4251762e79_notion_small.svg"
                                className="img-3"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <a
                    href="https://www.enterpret.com/blog/how-notion-is-supercharging-its-product-feedback-loop-using-enterpret"
                    className="button top-margin-40 w-inline-block"
                  >
                    <div className="button-text">
                      Read the Notion customer story
                    </div>
                  </a>
                </div>
                <div className="feature-right flip">
                  <div className="big-images-on-homepage">
                    <img
                      src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651bf8b39902136d71fcd57e_anom-min.png"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 91vw, (max-width: 991px) 84vw, 53vw"
                      alt=""
                      srcSet="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651bf8b39902136d71fcd57e_anom-min-p-500.webp 500w, https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651bf8b39902136d71fcd57e_anom-min.png 685w"
                      className="big-images-on-homepage img"
                      width="655.5"
                    />
                  </div>
                </div>
              </div>
              <div className="feature">
                <div className="feature-left">
                  <div className="blue-text">Act</div>
                  <div className="features-title top-margin-20">
                    Confidently drive product strategy with actionable insights
                  </div>
                  <div className="feature-left-bottom-wrapper top-margin-20">
                    <section className="section-tag">
                      <div className="div-block-9">
                        <div className="text-block">
                          “Enterpret helps us focus on the 20% that causes the
                          impact. It is like finding the needle in a haystack,
                          especially when you have issues coming from all over
                          the place.”
                        </div>
                        <div className="div-block-11">
                          <div>
                            <img
                              src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/667942af178f5d06ff0cf181_abhishek.jpeg"
                              width={70}
                              className="image-4"
                            />
                          </div>
                          <div className="div-block-12">
                            <div className="text-block-8">
                              Abishek Viswanthan,
                              <br />
                              Chief Product Officer
                            </div>
                            <div>
                              <img
                                src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/664f450d9f9311db47898ab7_apollo_small.svg"
                                className="img-3"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <a
                    href="https://www.enterpret.com/blog/how-apollo-uses-voice-of-customer-to-turn-customer-feedback-into-revenue"
                    className="button top-margin-40 w-inline-block"
                  >
                    <div className="button-text">
                      Read the Apollo customer story
                    </div>
                  </a>
                </div>
                <div className="feature-right">
                  <div className="big-images-on-homepage">
                    <img
                      src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651bf8ba5416c9d4b6e8e98b_growth-min.webp"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 91vw, (max-width: 991px) 84vw, 53vw"
                      alt=""
                      srcSet="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651bf8ba5416c9d4b6e8e98b_growth-min-p-500.webp 500w, https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651bf8ba5416c9d4b6e8e98b_growth-min.webp 681w"
                      className="big-images-on-homepage img"
                      width="637.5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
