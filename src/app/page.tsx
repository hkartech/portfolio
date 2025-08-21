import React from 'react';
import Hero from '@/components/ui/hero';
import RibbonBar from '@/components/ui/ribbon-bar';
import Technologies from '@/components/ui/technologies';
import Footer from '@/components/ui/footer';
import WhatIDo from '@/components/ui/whatido';
import ContactSection2 from '@/components/ui/ContactSection2';
import Vision from '@/components/ui/vision';
import MetrixStatics from '@/components/ui/metrixstatics'
import BannerCTA from '@/components/ui/bannercta';

export default function Home() {
    return (
        <main>
            <RibbonBar />
            <Hero />
            <MetrixStatics/>
            <Technologies />
            <WhatIDo />
            <Vision/>
            <BannerCTA/>
            <ContactSection2/>
            <Footer />
        </main>
    );
}
