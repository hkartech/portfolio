import React from 'react';
import Hero from '@/components/ui/hero';
import RibbonBar from '@/components/ui/ribbon-bar';
import MySkills from '@/components/ui/my-skills';
import Footer from '@/components/ui/footer';
import WhatIDo from '@/components/ui/whatido';
import RecentProjects from '@/components/ui/RecentProjects';
import ContactSection2 from '@/components/ui/ContactSection2';

export default function Home() {
    return (
        <main>
            <RibbonBar />
            <Hero />
            <MySkills />
            <WhatIDo />
            <RecentProjects />
            <ContactSection2 />
            <Footer />
        </main>
    );
}
