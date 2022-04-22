import Head from "next/head";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { AppContext } from "../Context";
import Footer from "./Footer";
import Modal from "./Modal";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Head>
        <title>janjibDEV's Personal Portfolio</title>
        <link rel="icon" href="./janjibDEVlogo.png" />
        <meta
          name="description"
          content="Welcome to janjibDEV's Personal Portfolio."
        ></meta>
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="personal portfolio" />

        <meta property="og:title" content="janjibDEV's Personal Portfolio" />

        <meta
          property="og:description"
          content="Welcome to janjibDEV's Personal Portfolio."
        />

        {/* <meta property="og:image" content="LINK TO THE IMAGE FILE" /> */}

        {/* <meta property="og:url" content="PERMALINK" /> */}

        <meta property="og:site_name" content="SITE NAME" />
      </Head>
      <Container fluid>
        <AppContext.Provider value={{ menuOpen, setMenuOpen }}>
          <Navbar />
          {menuOpen && <Modal />}
        </AppContext.Provider>
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
