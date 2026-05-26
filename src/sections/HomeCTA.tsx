import CTASection from "@/components/CTASection";

export default function HomeCTA() {
  return (
    <CTASection
      id="cta"
      label="Let's collaborate"
      heading="Let's Build Something"
      headingAccent="Extraordinary Together"
      subheading="I craft immersive digital experiences with premium UI, motion, and frontend development."
      primaryCta={{ label: "Start a Project", href: "/contact" }}
      secondaryCta={{ label: "View Portfolio", href: "/portfolio" }}
    />
  );
}
