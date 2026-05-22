import TrusteeSection from "../../components/TrusteeSection";
import DonationSection from "../../components/DonationSection";

export const metadata = {
  title: "Our Trustees | Jinsharnamtirth",
  description: "Meet the trustees of Jinsharnamtirth",
};

export default function OurTrusteesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <TrusteeSection />
      <DonationSection />
    </main>
  );
}