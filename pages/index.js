import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("All");

  //Specify filter here
  let filter =
    value == "All"
      ? {}
      : {
          "shipping-source.country": value,
        };

  // This is to render all countries in the chart

  // This is to render country specific dashboard with the use of filters
  let conn_charts =
    "https://charts.mongodb.com/charts-eugene-wbjar/embed/charts?id=624c1cab-b920-4b80-8a3f-716b757c44ba&filter=" +
    JSON.stringify(filter) +
    "&maxDataAge=100&theme=light&autoRefresh=true";

  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Deliveries Analytics Dashboard</h1>
        <p className={styles.description}>
          Total number of deliveries per country
        </p>
        {/* <iframe
          width="1000"
          height="600"
          src="https://charts.mongodb.com/charts-eugene-wbjar/embed/dashboards?id=ed21e9b8-d95c-49dc-a179-699fbf8cc7b5&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=true&scalingWidth=scale&scalingHeight=scale"
        ></iframe> */}
        <iframe width="640" height="480" src={conn_charts}></iframe>
        <p className={styles.description}>
          Choose from the dropdown below to interact with your data
        </p>
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
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.mongodb.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/mongodb.png"
              alt="MongoDB logo"
              width={72}
              height={19}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
