import ApproachSection from "@/components/ApproachSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import HeroSection from "@/components/HeroSection";
import HopeSection from "@/components/HopeSection";
import LegacySection from "@/components/LegacySection";
import Navbar from "@/components/Navbar";
import OfficeSection from "@/components/OfficeSection";
import PeopleSection from "@/components/PeopleSection";
import QuoteBannerSection from "@/components/QuoteBannerSection";
import ScheduleAppointmentSection from "@/components/ScheduleAppointmentSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";

export default function Home() {
    return (
        <main>
            <HeroSection/>
            <HopeSection/>
            <PeopleSection/>
            <QuoteBannerSection/>
            <ExpertiseSection/>
            <ApproachSection/>
            <LegacySection/>
            <SpecialtiesSection/>
            <OfficeSection/>
            <ScheduleAppointmentSection/>
        </main>
    )
}
