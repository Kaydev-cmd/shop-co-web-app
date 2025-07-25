import React from "react";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import {
  COMPANY_LINKS,
  FAQ_LINKS,
  HELP_LINKS,
  PAYMENT_GATEWAYS,
  RESOURCES_LINKS,
} from "@/constants";

const Footer = () => {
  return (
    <footer className="container">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="uppercase font-extrabold text-2xl">Shop.Co</h1>
          <p className="text-[#666666] text-lg">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <Link
            className="border border-gray-300 rounded-full"
            style={{ padding: "12px" }}
            href="https://x.com/"
          >
            <FaTwitter size={24} />
          </Link>
          <Link
            className="border border-gray-300 rounded-full"
            style={{ padding: "12px" }}
            href="https://web.facebook.com/"
          >
            <FaFacebookF size={24} />
          </Link>
          <Link
            className="border border-gray-300 rounded-full"
            style={{ padding: "12px" }}
            href="https://www.instagram.com/"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            className="border border-gray-300 rounded-full"
            style={{ padding: "12px" }}
            href="https://github.com/"
          >
            <FaGithub size={24} />
          </Link>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl uppercase">Company</h3>
            <ul className="flex flex-col gap-3">
              {COMPANY_LINKS.map((company) => (
                <Link
                  key={company.link}
                  href={company.href}
                  className="text-[#666666]"
                >
                  {company.link}
                </Link>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl uppercase">Help</h3>
            <ul className="flex flex-col gap-3">
              {HELP_LINKS.map((helpLink) => (
                <Link
                  key={helpLink.link}
                  href={helpLink.href}
                  className="text-[#666666]"
                >
                  {helpLink.link}
                </Link>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl">FAQ</h3>
            <ul className="flex flex-col gap-3">
              {FAQ_LINKS.map((faqLink) => (
                <Link
                  key={faqLink.link}
                  href={faqLink.href}
                  className="text-[#666666]"
                >
                  {faqLink.link}
                </Link>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl uppercase">Resources</h3>
            <ul className="flex flex-col gap-3">
              {RESOURCES_LINKS.map((resourcesLink) => (
                <Link
                  key={resourcesLink.link}
                  href={resourcesLink.href}
                  className="text-[#666666]"
                >
                  {resourcesLink.link}
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div className="border border-gray-500"></div>

        <p className="text-center text-[#666666]">
          Shop.co &copy; 2000-2025. All Rights Reserved
        </p>

        {/* Payment Gateways */}
        <div className="flex justify-around">
          {PAYMENT_GATEWAYS.map((gateway) => (
            <div
              key={gateway.name}
              className="bg-white flex items-center rounded-md"
              style={{ padding: "8px" }}
            >
              <img src={gateway.image} alt={gateway.alt} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
