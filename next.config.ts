import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images : {
    domains : ['assets.aceternity.com' , "plus.unsplash.com" , 'images.unsplash.com' , "img.freepik.com" , "techamdavad.com" , "https://assets.aceternity.com" , "www.flatworldsolutions.com" , "www.creative-tim.com" , "api.reliasoftware.com" , "m.media-amazon.com"] // <== Domain name
  }
};

export default nextConfig; 
