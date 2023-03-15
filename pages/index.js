import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  // console.log("allPostsData (log from index.js): ", allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <html lang="en"></html>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Welcome to my website! I'm a full stack developer based in Israel,
          specializing in Javascript, React and Next.js. I'm passionate about
          creating beautiful and functional websites and applications that solve
          real-world problems.
        </p>
        <p>
          When I'm not coding, you can find me exploring the great outdoors,
          hiking and taking in the scenery. I also love to cook and host dinners
          for friends and family, creating delicious meals and sharing great
          conversations. And when I'm in the mood for some downtime, I enjoy
          playing and listening to music, discovering new artists and genres.
        </p>
        <p>
          I believe that technology has the power to change lives, and I'm
          excited to be a part of that change. Let's connect and build something
          amazing together!
        </p>
        {/* <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// export default function Home({allPostsData}) {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>
//           Welcome to my website! I'm a full stack developer based in Israel,
//           specializing in Javascript, React and Next.js. I'm passionate about
//           creating beautiful and functional websites and applications that solve
//           real-world problems.
//         </p>
//         <p>
//           When I'm not coding, you can find me exploring the great outdoors,
//           hiking and taking in the scenery. I also love to cook and host dinners
//           for friends and family, creating delicious meals and sharing great
//           conversations. And when I'm in the mood for some downtime, I enjoy
//           playing and listening to music, discovering new artists and genres.
//         </p>
//         <p>
//           I believe that technology has the power to change lives, and I'm
//           excited to be a part of that change. Let's connect and build something
//           amazing together!
//         </p>
//         <p>
//           (This is a sample website - you’ll be building a site like this on{" "}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>
//     </Layout>
//   );
// }
