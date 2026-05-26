import type { Metadata } from "next";
import ContactPageContent from "@/sections/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | Abhijeet — UI/UX Designer & Frontend Developer",
  description:
    "Get in touch for freelance projects, collaborations, and premium digital experiences. UI/UX design and frontend development.",
  openGraph: {
    title: "Contact | Abhijeet",
    description: "Let's create something meaningful together.",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
