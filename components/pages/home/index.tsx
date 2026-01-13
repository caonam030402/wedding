"use client";

import HeroBanner from "./HeroBanner";
import InvitationCard from "./InvitationCard";
import WeddingRsvpForm from "./WeddingRsvpForm";
import SaveTheDate from "./SaveTheDate";
import WeddingCalendar from "./WeddingCalendar";
import Thankyou from "./Thankyou";
import Timeline from "./Timeline";
import { useEffect } from "react";
import MyImageGallery from "./MyImageGallery";
import RomanticHeroSection from "./RomanticHeroSection";
import OurStory from "./Ourstory";
import MusicPlayer from "./MusicPlayer";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative">
      <MusicPlayer />

      <div className="space-y-15">
        <HeroBanner />
        <SaveTheDate />
        {/* <Image
        src="https://w.ladicdn.com/s750x400/6322a62f2dad980013bb5005/_0004_22-20251020191638-92wfz.png"
        alt="Map"
        width={750}
        height={400}
      /> */}

        <InvitationCard />
        <RomanticHeroSection />
        <OurStory />
        <WeddingCalendar />
        <Timeline />
        <MyImageGallery />
        <WeddingRsvpForm />
        <Thankyou />
      </div>
    </div>
  );
}
