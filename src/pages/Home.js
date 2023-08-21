import { Link } from "react-router-dom";
// import Wheather from "./Weather";
// import WheaterData from "./Weather-data";
// import { useEffect } from "react";

export default function Home() {
  // useEffect(()=>{
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //         console.log(position.coords.latitude, position.coords.longitude);
  //       })

  // },[])

  return (
    <main className="max-w-[80ch] mx-auto px-4">
      <section className="py-24 intro-animation relative">
        <Link to="/weather" className="opacity-80 underline">
         Today's  Weather
        </Link>

        <div className=" ">
          <h1 className="text-4xl mb-4 font-bold">
            {" "}
            👋 Hello, my name is Alex.
          </h1>

          <h2 className="font-serif italic text-2xl">
            I'm a software engingeer from NYC!
            <br />I recently graduated from{" "}
            <a
              className="opacity-80 underline"
              href="https://perscholas.org/about-per-scholas/?utm_source=google&utm_medium=ad_grant&utm_campaign=branded&utm_term=per%20scholas&utm_campaign=Per+Scholas:+Awareness&utm_source=adwords&utm_medium=ppc&hsa_acc=7812736465&hsa_cam=16560851475&hsa_grp=132888643605&hsa_ad=607349033489&hsa_src=g&hsa_tgt=kwd-342525298009&hsa_kw=per%20scholas&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwrfymBhCTARIsADXTablHpgSY675IKzTiORecW1FaL90UfJyFqK5TLBp4CCXlKfjFl5sTRkcaAtXGEALw_wcB"
            >
              PerScholas
            </a>{" "}
            bootcamp!
          </h2>
        </div>
      </section>
      <br />

      <section className="fade-in pb-12 ">
        <h3 className="uppercase text-2xl mb-12 font-bold text-accent">
          {" "}
          Articles
        </h3>

        <li className="block mb-12">
          <time className="font-serif italic font-medium text-grey2 text-md mb-2">
            8/18/2023
          </time>
          <a href="https://medium.com/alan/5-articles-every-software-engineer-should-read-56b0d9de2c43">
            <h3 className="text-3xl font-bold">
              Every Software Engineer Should Read
            </h3>
          </a>
        </li>

        <li className="block mb-12">
          <time className="font-serif italic font-medium text-grey2 text-md mb-2">
            8/18/2023
          </time>
          <a href="https://www.theforage.com/blog/careers/day-in-life-software-engineer">
            <h3 className="text-3xl font-bold">
              Day in the life of a software Engineer
            </h3>
          </a>
        </li>
      </section>

      <a href="/articles" className="more-link">
        More <span className="arrow">→</span>
      </a>
      <br></br>

      <section className="fade-in pt-12">
        <h3 className="uppercase text-2xl mb-12 font-bold text-accent">
          Current News
        </h3>
      </section>
    </main>
  );
}
