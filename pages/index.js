import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { MenuItem, Select } from "@material-ui/core";
import { useState } from "react";
import { Grid } from "@material-ui/core";
import ThemeToggle from "../components/ThemeToggle";
import Example1 from "../components/navbar";

export default function Home() {
  const [value, setValue] = useState("All");

  //Specify filter here
  let filter =
    value == "All"
      ? {}
      : {
          "shipping-source.country": value,
        };

  // This is to render country specific dashboard with the use of filters
  let conn_charts =
    "https://charts.mongodb.com/charts-eugene-wbjar/embed/charts?id=624c1cab-b920-4b80-8a3f-716b757c44ba&filter=" +
    JSON.stringify(filter) +
    "&maxDataAge=100&theme=light&autoRefresh=true";

  console.log(conn_charts);
  return (
    <div className={styles.container}>
      <Example1 />

      {/* <Grid container spacing={2}>
        <Grid item xs={1}>
          <a
            href="https://github.com/eugenetan01/ChartsDemo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/mongodb_logo.png"
              alt="MongoDB logo"
              width={"35%"}
              height={"85%"}
            />
          </a>
        </Grid> */}
      {/* <Grid item xs={10}>
          <h1 className={styles.title}>Deliveries Analytics Dashboard</h1>
        </Grid>
      </Grid> */}

      <main className={styles.main}>
        {/*         <p className={styles.description}>
          Total number of deliveries per country
        </p> */}

        <Grid container spacing={2} style={{ paddingLeft: "38%" }}>
          <Grid
            item
            style={{
              paddingLeft: "8%",
              alignSelf: "center",
            }}
          >
            <p className={styles.description}>
              <b>Select Country:</b>
            </p>
          </Grid>
          <Grid item>
            <Select
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            >
              <MenuItem value="All">All Countries</MenuItem>
              <MenuItem value="GB">United Kingdom</MenuItem>
              <MenuItem value="US">United States of America</MenuItem>
              <MenuItem value="SG">Singapore</MenuItem>
            </Select>
          </Grid>
          {/* <Grid item xs={1}>
            <ThemeToggle />
          </Grid> */}
        </Grid>

        <br />

        <iframe
          width="50%"
          height="600"
          frameBorder={"none"}
          src={conn_charts}
        ></iframe>
        {/*         <p className={styles.description}>
          Choose from the dropdown below to interact with your data
        </p> */}
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.mongodb.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            Powered by &nbsp;
            <Image
              src="/Mongodb-footer.png"
              alt="MongoDB logo"
              width={"100%"}
              height={"30%"}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
