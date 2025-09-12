import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ExperienceCircle from '../components/ExperienceCircle';
import ContentSection from '../components/ContentSection';
import SocialLinks from '../components/SocialLinks';
import AccentSection from '../components/AccentSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ExperienceCircle />
      <ContentSection />
      <SocialLinks />
      <AccentSection />
    </main>
  );
}