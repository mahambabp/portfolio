
import Head from "next/head";
import Navbar from "./Navbar";

//website layout
const Layout = (props) => (
  <div>
    <Head>
      <title>Bafanarelated</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/darkly/bootstrap.min.css"
      />
    </Head>
    <div>
      <Navbar />
      {props.children}
    </div>
  </div>
);

export default Layout;
