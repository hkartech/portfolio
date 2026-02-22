import Hero from '@/components/ui/hero';
import RibbonBar from '@/components/ui/ribbon-bar';
import Technologies from '@/components/ui/technologies';
import Footer from '@/components/ui/footer';
import WhatIDo from '@/components/ui/whatido';
import MetrixStatics from '@/components/ui/metrixstatics'
import ContactSection from '@/components/ui/ContactSection';
import RecentProjects from '@/components/ui/RecentProjects';

export default function Home() {
    return (    
        <main>
            <RibbonBar />
            <Hero />
            <Technologies />    
            <MetrixStatics/>
            <RecentProjects/>
            <WhatIDo />
            <ContactSection/>
            <Footer />
        </main>
    );
}
