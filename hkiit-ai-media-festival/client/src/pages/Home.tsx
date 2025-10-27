import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import EventVision from '@/components/EventVision';
import KeyPillars from '@/components/KeyPillars';
import CompetitionCategories from '@/components/CompetitionCategories';
import SubmissionFormats from '@/components/SubmissionFormats';

import Timeline from '@/components/Timeline';
import Training from '@/components/Training';
import Evaluation from '@/components/Evaluation';
import RegistrationForm from '@/components/RegistrationForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <EventVision />
      <KeyPillars />
      <CompetitionCategories />
      <SubmissionFormats />
      <Timeline />
      <Training />
      <Evaluation />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

