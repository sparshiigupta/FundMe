import React from "react";
import Header from "./Header";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import Footer from "./Footer";
const Layout = (props) => {
  return (
    <>
      {/* <Container> */}
      <Head>
        <link
          async
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
        />
      </Head>
      <Header />
      <Container>{props.children}</Container>
      <Footer />
      {/* </Container> */}
    </>
  );
};

export default Layout;
