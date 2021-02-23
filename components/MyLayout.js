
import Head from "next/head";
import Navbar from "./Navbar";

//website layout
const Layout = (props) => (
  <div>
    <Head>
      <title>Bafanarelated</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/lux/bootstrap.min.css"
      />
    </Head>
    <div>
      <Navbar />
      <main>
      {props.children}
      </main>
    </div>
  </div>
);

export default Layout;
