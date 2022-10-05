import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { MenuItem, Select } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Navbar from "../components/navbar";

export default function Home() {
  let [darkTheme, setDarkTheme] = useState("light");
  const [value, setValue] = useState("All");

  //Specify filter here
  let filter =
    value == "All"
      ? {}
      : {
          "shipping-source.country": value,
        };

  let conn_charts =
    "https://charts.mongodb.com/charts-eugene-wbjar/embed/charts?id=624c1cab-b920-4b80-8a3f-716b757c44ba&filter=" +
    JSON.stringify(filter) +
    "&maxDataAge=100&theme=" +
    darkTheme +
    "&autoRefresh=true";

  // This is to render country specific dashboard with the use of filters

  return (
    <div className={styles.container}>
      <Navbar onChange={(value) => setDarkTheme(value)} />
      <main className={styles.main}>
        <Grid container spacing={2} style={{ paddingLeft: "38%" }}>
          <Grid
            item
            style={{
              paddingLeft: "8%",
              alignSelf: "center",
            }}
          >
            <p className={styles.description}>
              <b>Select Country: </b>
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
        </Grid>

        <br />

        <iframe
          width="50%"
          height="600"
          frameBorder={"none"}
          src={conn_charts}
        ></iframe>
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
              src={
                darkTheme === "light"
                  ? "/Mongodb-footer.png"
                  : "/mongoDB-dark-theme.png"
              }
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
