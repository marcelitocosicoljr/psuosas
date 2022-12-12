import { Box, Typography } from "@mui/material";
import React from "react";
import Announcement from "../components/Announcement/Announcement";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { PostsDataService } from "lib/services/dataServices";

export async function getStaticProps() {
  const res = await PostsDataService.getAll();

  return {
    props: {
      posts: res,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

const announcements = ({ posts }) => {
  console.log(posts);

  return (
    <div className="container">
      <Header />

      <main className="main">
        <Announcement data={posts} />
      </main>

      <Footer />
    </div>
  );
};

export default announcements;
