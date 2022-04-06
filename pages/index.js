import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("All");

  //Specify filter here
  let filter = {
    "shipping-source.country": value,
  };

  // This is to render all countries in the chart
  let conn_charts =
    "https://charts.mongodb.com/charts-eugene-wbjar/embed/charts?id=624c1cab-b920-4b80-8a3f-716b757c44ba&maxDataAge=100&theme=light&autoRefresh=true";

  // This is to render country specific dashboard with the use of filters
  if (value != "All") {
    console.log(value);
    conn_charts =
      "https://charts.mongodb.com/charts-eugene-wbjar/embed/charts?id=624c1cab-b920-4b80-8a3f-716b757c44ba&filter=" +
      JSON.stringify(filter) +
      "&maxDataAge=100&theme=light&autoRefresh=true";
  }

  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>UPS Analytics Dashboard</h1>
        {/* <iframe
          width="1000"
          height="600"
          src="https://charts.mongodb.com/charts-eugene-wbjar/embed/dashboards?id=ed21e9b8-d95c-49dc-a179-699fbf8cc7b5&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=true&scalingWidth=scale&scalingHeight=scale"
        ></iframe> */}
        <iframe width="640" height="480" src={conn_charts}></iframe>
        <p className={styles.description}>
          <select
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          >
            <option value="All">All countries</option>
            <option value="GB">United Kingdom</option>
            <option value="US">United States</option>
            <option value="SG">Singapore</option>
          </select>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
