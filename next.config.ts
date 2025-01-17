import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images : {
    domains : ['assets.aceternity.com' , 'images.unsplash.com' , "https://assets.aceternity.com" , "m.media-amazon.com"] // <== Domain name
  }
};

export default nextConfig;
