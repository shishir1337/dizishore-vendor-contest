"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle,
  Calendar,
  Trophy,
  Star,
  Globe,
  DollarSign,
  Award,
  ArrowRight,
  ChevronDown,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Header } from "@/components/header";

export default function CampaignPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6E6E6] to-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-[#053d80] text-white py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white">
                Join the contest for a chance to{" "}
                <span className="text-white">Win £1,000</span>
              </h1>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8">
                Join DiziShore's Digital Vendors Contest 1.0 and showcase your
                digital products to a global audience. Compete for the grand
                prize while reaching countless buyers worldwide!
              </p>
            </div>
            <div className="lg:w-1/2 relative aspect-[3/2] w-full max-w-2xl mx-auto mt-8 lg:mt-0">
              <Image
                src="/Dizishore_Landing-Page-Hero-Image.png"
                alt="Sell on DiziShore"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg object-contain"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-[#0274be] text-white p-3 sm:p-4 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <p className="font-bold text-xl sm:text-2xl">£1,000</p>
                <p className="text-xs sm:text-sm">Grand Prize</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Highlights */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Contest Highlights
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              { icon: Trophy, title: "Grand Prize", content: "£1,000" },
              {
                icon: Calendar,
                title: "Contest Participation Deadline",
                content: "March 31st, 2025",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 border-t-4 border-[#0274be] group"
              >
                <item.icon className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 sm:mb-6 text-[#0274be] group-hover:text-[#053d80] transition-colors duration-300" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-lg sm:text-xl font-bold text-[#0274be] group-hover:text-[#053d80] transition-colors duration-300">
                  {item.content}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 bg-[#E6E6E6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Why Sell on DiziShore?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Globe,
                title: "Global Reach",
                content:
                  "Showcase your digital products to a vast global audience of buyers.",
              },
              {
                icon: DollarSign,
                title: "Lucrative Income",
                content: "Earn through product sales.",
              },
              {
                icon: Award,
                title: "Build Your Brand",
                content:
                  "Establish yourself as a leading creator in your niche and grow your online presence.",
              },
              {
                icon: Lightbulb,
                title: "Turn Ideas into Business",
                content:
                  "Transform your idea into a business by monetizing your skills for free.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 bg-white group"
              >
                <item.icon className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 sm:mb-6 text-[#0274be] group-hover:text-[#053d80] transition-colors duration-300" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg">{item.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            How to Participate
          </h2>
          <div className="max-w-4xl mx-auto">
            <ol className="space-y-6 sm:space-y-8">
              {[
                {
                  title: "Sign Up",
                  description: "Register as a seller on DiziShore for free.",
                },
                {
                  title: "Register for Contest from the Vendor Dashboard.",
                  description:
                    "Select Digital Vendors Contest 1.0 from the vendor dashboard to participate.",
                },
                {
                  title: "Publish Products",
                  description:
                    "Publish at least 5 high-quality digital products.",
                },
                {
                  title: "Ensure Quality",
                  description:
                    "Follow DiziShore's content guidelines for originality and compliance.",
                },
                {
                  title: "Win Big",
                  description:
                    "The top seller wins £1,000 and ongoing opportunities!",
                },
              ].map((step, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-[#E6E6E6] p-6 sm:p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-[#f0f0f0]"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#0274be] text-white rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl mb-4 sm:mb-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-700">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Eligibility & Evaluation */}
      <section className="py-16 sm:py-20 bg-[#E6E6E6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Eligibility & Evaluation
          </h2>
          <div className="max-w-4xl mx-auto grid gap-6 sm:gap-8 lg:grid-cols-2">
            <Card className="p-6 sm:p-8 border-t-4 border-[#0274be] bg-white hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
                <CheckCircle className="text-[#0274be] h-6 w-6 sm:h-8 sm:w-8" />
                Eligibility Criteria
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Publish a minimum of 5 original digital products (e.g., eBooks, music, games, software, NFTs etc.).",
                  "Ensure compliance with DiziShore's quality and originality standards.",
                  "Provide clear descriptions, accurate details, and appealing visuals for your products.",
                  "Register with a valid email address before the deadline.",
                  "Vendor profiles must be verified.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#0274be] mt-1 flex-shrink-0" />
                    <span className="text-base sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6 sm:p-8 border-t-4 border-[#0274be] bg-white hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
                <Star className="text-[#0274be] h-6 w-6 sm:h-8 sm:w-8" />
                Evaluation Criteria
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Product Quality (40%)",
                  "Originality (30%)",
                  "Sales Performance (20%)",
                  "Overall Impact (10%)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="h-5 w-5 sm:h-6 sm:w-6 text-[#0274be] mt-1 flex-shrink-0" />
                    <span className="text-base sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600">
                Our expert panel will evaluate submissions based on these
                criteria to determine the winner.
              </p>
            </Card>
            <div className="col-span-2 text-center mt-8">
              <Link href="https://dizishore.com/sell-with-dizishore/" passHref>
                <Button
                  size="lg"
                  className={cn(
                    "w-full sm:w-auto bg-[#0274be] text-white",
                    "text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-full",
                    "transition-all duration-300 transform hover:scale-105 group"
                  )}
                >
                  Participate Now
                  <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  q: "Who can participate in this contest?  ",
                  a: "Anyone with a valid & verified DiziShore seller account is eligible to join. New sellers are welcome to sign up and participate.  ",
                },
                {
                  q: "What types of products are accepted?  ",
                  a: "Any kind of digital product can be submitted, including categories available on DiziShore such as eBooks, music, games, software, NFTs, Photographs and more. All submissions must meet DiziShore's quality standards and be original or properly licensed.  ",
                },
                {
                  q: "How will the winner be chosen?",
                  a: "Our expert panel will evaluate eligible products based on quality, originality, sales performance, and overall impact. The seller with the highest-scoring products will win the grand prize.",
                },
                {
                  q: "What support does DiziShore provide to sellers? ",
                  a: (
                    <>
                      In DiziShore you can publish and manage your digital
                      products and orders for free. Our support team is always
                      available to assist with any questions or concerns. For
                      help, visit our{" "}
                      <Link
                        href="https://support.dizishore.com"
                        className="text-blue-600 hover:underline"
                      >
                        support portal
                      </Link>
                      .
                    </>
                  ),
                },
                {
                  q: "How can my store and products get more visibility? ",
                  a: (
                    <>
                      You can optimize your store and products for SEO to
                      improve visibility both on Google and DiziShore. Check out
                      this tutorial to learn how:{" "}
                      <Link
                        href="https://support.dizishore.com/support/solutions/articles/101000540584-how-to-optimise-your-dizishore-store-and-product-listings-for-seo"
                        className="text-blue-600 hover:underline"
                      >
                        Optimise Store & Products for SEO
                      </Link>
                      .
                    </>
                  ),
                },
                {
                  q: "What if my product category isn’t available on DiziShore?  ",
                  a: "If your product is digital, we’ve got you covered! Simply email us at support@dizishore.com, and we’ll work on adding your desired category. ",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-all duration-300"
                >
                  <button
                    className="w-full p-4 sm:p-6 text-left focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg sm:text-xl font-semibold">
                        {item.q}
                      </h3>
                      <ChevronDown
                        className={`h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 ${
                          openFaqIndex === index ? "transform rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>
                  {openFaqIndex === index && (
                    <div className="p-4 sm:p-6 pt-0">
                      <p className="text-base sm:text-lg text-gray-700">
                        {item.a}
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-16 sm:py-20 bg-[#E6E6E6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Contest Terms and Conditions
          </h2>
          <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Please read these terms carefully before participating:
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
              <li>
                Participation in DiziShore's Digital Vendors Contest 1.0 is
                subject to these specific terms & conditions and our general{" "}
                <Link
                  href="https://support.dizishore.com/support/solutions/101000250918"
                  className="text-blue-600 hover:underline"
                >
                  Terms & Conditions
                </Link>
                .
              </li>
              <li>
                The contest runs from January 1st, 2025, to March 31st, 2025.
                Products must be published before the deadline to qualify. Any
                products published after the deadline will not qualify for this
                competition.
              </li>
              <li>
                Participants must be at least 18 years old and eligible to
                receive payments in their country of residence. Additionally, if
                participating as a company, the company must be registered in a
                country eligible for payments.
              </li>
              <li>
                Participants must keep their address and payment information up
                to date. DiziShore Ltd. is not liable for any payments sent to
                incorrect recipients due to inaccurate or outdated information
                provided by the participant.
              </li>
              <li>
                Vendor profile must be verified before registering for the
                contest.
              </li>
              <li>
                A minimum of 5 products must be uploaded to qualify for the
                contest.
              </li>
              <li>
                Sellers can publish more than 5 products, and all published
                products will be considered for evaluation.
              </li>
              <li>
                The £1,000 grand prize is non-transferable and will be awarded
                to the individual seller account or company.
              </li>
              <li>
                Winning seller may be required to participate in promotional
                activities or interviews related to the contest.
              </li>
              <li>
                Product content must be original or properly licensed.
                Plagiarism or copyright infringement will result in immediate
                disqualification.
              </li>
              <li>
                DiziShore reserves the right to use parts of submitted products
                (e.g., descriptions, visuals) for promotional purposes related
                to the contest.
              </li>
              <li>
                Tax implications of winning the prize are the sole
                responsibility of the winner.
              </li>
              <li>
                DiziShore reserves the right to disqualify any participant found
                engaging in fraudulent or unethical practices.
              </li>
              <li>
                In the event of any dispute, DiziShore's judging panel's
                decision will be final.
              </li>
              <li>
                If there are any fees associated with the transaction, these
                transaction fees must be paid by the winner.
              </li>
              <li>
                The time required for the transaction to be completed will vary
                based on the international banking system.
              </li>
              <li>
                The winning prize can be transferred via PayPal, bank transfer,
                or cheque. If the winner is unable to receive the prize due to
                legal issues in their country of residence or restrictions
                imposed by their central bank, DiziShore is not responsible.
              </li>
              <li>
                DiziShore employees, as well as their friends and family
                members, are not eligible to participate in this contest.
              </li>
              <li>
                DiziShore reserves the right to postpone or cancel the contest
                without prior notice.
              </li>
            </ul>
            <p className="mt-6 text-sm text-gray-600">
              By participating in the DiziShore's Digital Vendors Contest 1.0,
              you acknowledge that you have read, understood, and agreed to
              these terms and conditions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-[#053d80] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8">
            Ready to Start Your Selling Journey?
          </h2>
          <p className="text-xl sm:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto">
            Join DiziShore today, showcase your digital creations, and compete
            for the £1,000 grand prize!
          </p>
          <div>
            <Link href="https://dizishore.com/sell-with-dizishore/" passHref>
              <Button
                size="lg"
                className={cn(
                  "w-full sm:w-auto bg-[#0274be] text-white",
                  "text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-full",
                  "transition-all duration-300 transform hover:scale-105 group"
                )}
              >
                Participate Now
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <p className="mt-6 sm:mt-8 text-xs sm:text-sm opacity-80 max-w-2xl mx-auto">
              Join DiziShore today, showcase your digital products, and compete
              for the £1,000 grand prize!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
