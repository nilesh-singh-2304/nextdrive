"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo({blogs}) {
  console.log("hi" , blogs)
  const cards = blogs.map((card, index) => (
    <Card key={card.imageurl} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-2 -translate-y-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans">
        Get our latest blogs here !
      </h2>
      <Carousel items={cards} />
    </div>
  );
}


