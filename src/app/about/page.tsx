import AboutMe from '@/components/ui/AboutMe';
import Education from '@/components/ui/Education';
import Experience from '@/components/ui/Experience';
import Footer from '@/components/ui/footer';
import RecentProjects from '@/components/ui/RecentProjects';


const AboutPage = () => {
  return (
    <>
      <AboutMe />
      <RecentProjects/>
      <Experience />
      <Education />
      <Footer />
    </>
  );
};

export default AboutPage;

