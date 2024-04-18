import Features from "@/components/sections/about-sections/AboutFeatures";
import Home from "@/components/sections/about-sections/Home";
import Story from "@/components/sections/about-sections/Story";
import Team from "@/components/sections/about-sections/Team";
import Location from "@/components/sections/about-sections/Location";

export default function About() {
  return (
    <>
      <Home />
      <Story />
      <Team />
      <Features />
      <Location />
    </>
  );
}
