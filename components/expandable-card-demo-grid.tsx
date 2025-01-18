"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg "
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col bg-black text-white hover:text-black border border-gray-800 hover:border-yellow-400  hover:bg-gradient-to-t hover:from-black hover:via-yellow-500 hover:to-black transition ease-in-out rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-bold text-center text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className=" text-center mt-4 text-xs"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Designing responsive, scalable, and innovative websites",
    title: "Web Development",
    src: "https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          At NextDrive, we specialize in crafting responsive, scalable, and innovative websites tailored to meet the unique needs of our clients. Our approach combines creative design with the latest web technologies to deliver websites that not only look stunning but also function seamlessly across devices. Whether it’s building a dynamic e-commerce platform, a corporate website, or a custom web application, our team ensures that every project is optimized for performance, security, and usability. We prioritize user experience, ensuring that your visitors enjoy a smooth, engaging journey every time they interact with your site. From concept to launch, our development process is collaborative, ensuring that we bring your vision to life while providing technical expertise to drive business growth.
        </p>
      );
    },
  },
  {
    description: "Building high-performance mobile applications for Android and iOS platforms",
    title: "App Development",
    src: "https://api.reliasoftware.com/uploads/the_complete_guide_to_mobile_app_development_2021_ded2abd1b1.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Our app development services focus on building high-performance mobile applications for both Android and iOS platforms. We understand the increasing demand for seamless mobile experiences, and we deliver robust, user-friendly apps that provide real-time functionality and intuitive design. Our team works with the latest tools and technologies to create apps that meet industry standards, ensuring fast loading times, smooth navigation, and high-level security. Whether you are creating a mobile solution for a startup or enhancing an existing app, we offer end-to-end development services—from ideation and prototyping to coding, testing, and maintenance. We take a user-centric approach to ensure that your app not only looks great but also delivers an exceptional experience, ensuring that it stands out in a competitive marketplace.
        </p>
      );
    },
  },

  {
    description: "Creating seamless, visually captivating user experiences and interfaces.",
    title: "UI/UX Design",
    src: "https://techamdavad.com/web/image/product.template/50/image_1920?unique=82609a7",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Our UI/UX design services are driven by the goal of creating seamless, visually captivating user experiences that delight users and meet business objectives. We believe that great design goes beyond aesthetics—it’s about creating intuitive, easy-to-use interfaces that engage users and enhance their interactions. Our team of experienced designers works closely with you to understand your target audience, business goals, and brand identity, crafting custom designs that resonate with users. From wireframes and prototypes to high-fidelity designs, we ensure that every design element is aligned with your vision and user needs. By focusing on both usability and visual appeal, we create interfaces that not only look beautiful but also ensure effortless navigation, driving higher engagement and conversions for your website or app.
        </p>
      );
    },
  },
  {
    description: "Optimizing websites to achieve superior search engine rankings.",
    title: "Search Engine Optimization (SEO)",
    src: "https://www.flatworldsolutions.com/featured-images/search-engine-optimization-services.jpg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Our comprehensive SEO services are designed to help your website rank higher in search engine results and attract targeted organic traffic. We employ a combination of on-page, off-page, and technical SEO strategies to optimize every aspect of your website, ensuring it meets the latest search engine algorithms and best practices. From keyword research and content optimization to improving page load speeds and enhancing mobile usability, we take a holistic approach to SEO. We also focus on building high-quality backlinks, enhancing your site’s authority, and improving its credibility. Our SEO specialists track the performance of your website and refine strategies to adapt to changing search engine trends, ensuring that your site consistently performs well. By improving your search engine rankings, we help increase visibility, drive traffic, and ultimately, improve conversions, helping your business grow in the digital landscape.
        </p>
      );
    },
  },
  {
    description: "Crafting and executing impactful online marketing strategies.",
    title: "Digital Marketing",
    src: "https://img.freepik.com/premium-vector/digital-marketing-technology-concept_31543-191.jpg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          At NextDrive, we offer end-to-end digital marketing services designed to connect your business with the right audience through targeted online campaigns. Our strategies include social media marketing, content marketing, search engine advertising (Google Ads), email campaigns, and more, all customized to align with your goals and objectives. We leverage the power of data analytics to track the performance of each campaign, adjusting strategies to maximize results and return on investment. Our team of marketing experts works closely with you to craft compelling messaging, creative assets, and marketing funnels that engage and convert your audience. Whether you are looking to increase brand awareness, drive sales, or build customer loyalty, our digital marketing services ensure that you are not just reaching the right people but also creating meaningful interactions that drive growth for your business. We combine creativity with measurable results, making sure every campaign is aligned with your unique business needs and goals.
        </p>
      );
    },
  },
];
