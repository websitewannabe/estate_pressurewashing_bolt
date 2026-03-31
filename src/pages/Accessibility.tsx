import React from "react";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";
interface LayoutContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Accessibility() {
  const { darkMode } = useOutletContext<LayoutContext>();

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}
    >
      <Helmet>
        <link
          rel="canonical"
          href="https://www.estatespresswash.com/accessibility"
        />
        <title>Accessibility Statement | Estates Pressure Washing</title>
        <meta
          name="description"
          content="Estates Pressure Washing is committed to digital accessibility and inclusive web experiences. Learn about our WCAG 2.1 AA compliance efforts and accessibility features."
        />
        <meta
          name="keywords"
          content="accessibility statement, website accessibility, WCAG compliance, accessible pressure washing, ADA compliance, inclusive website, Estates Pressure Washing, Bucks County, Montgomery County, Philadelphia"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Estates Pressure Washing",
            url: "https://www.estatespresswash.com/accessibility",
            image: "https://www.estatespresswash.com/AboutHero.jpeg",
            logo: "https://www.estatespresswash.com/logo.png",
            description:
              "Estates Pressure Washing is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability.",
            telephone: "+1-267-685-0530",
            email: "epw@estatesfireplace.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Doylestown",
              addressRegion: "PA",
              postalCode: "18901",
              addressCountry: "US",
            },
            areaServed: {
              "@type": "Place",
              name: [
                "Doylestown",
                "Newtown",
                "Yardley",
                "Blue Bell",
                "King of Prussia",
                "Philadelphia",
              ],
            },
          })}
        </script>
      </Helmet>

      <div className="pt-32"></div>
      <div className="container mx-auto px-6 py-12">
        <article
          className={`prose ${darkMode ? "prose-invert" : ""} max-w-4xl mx-auto [&>ul]:list-disc [&>ul]:list-inside`}
        >
          <h1>Accessibility Statement</h1>
          <p>
            Estates Pressure Washing is committed to ensuring digital
            accessibility for people with disabilities. We are continually
            improving the user experience for everyone and applying the relevant
            accessibility standards.
          </p>

          <h2>Conformance Status</h2>
          <p>
            The Web Content Accessibility Guidelines (WCAG) defines requirements
            for designers and developers to improve accessibility for people with
            disabilities. It defines three levels of conformance: Level A, Level
            AA, and Level AAA. Our website strives to conform to WCAG 2.1 Level
            AA. We are actively working to achieve and maintain this level of
            compliance across all pages.
          </p>

          <h2>Accessibility Features</h2>
          <p>
            Our website includes the following accessibility features:
          </p>
          <ul>
            <li>Keyboard navigation support throughout the site</li>
            <li>Screen reader compatibility with ARIA landmarks and labels</li>
            <li>Sufficient color contrast ratios for text and interactive elements</li>
            <li>Resizable text without loss of content or functionality</li>
            <li>Alternative text for all meaningful images</li>
            <li>Consistent and predictable navigation</li>
            <li>An on-demand accessibility tools panel for font sizing, contrast adjustments, and more</li>
          </ul>

          <h2>Measures to Support Accessibility</h2>
          <p>
            Estates Pressure Washing takes the following measures to ensure
            accessibility:
          </p>
          <ul>
            <li>Include accessibility as a requirement for all web content</li>
            <li>Content must meet WCAG 2.1 AA, and should meet AAA where feasible</li>
            <li>Assign clear accessibility goals and responsibilities</li>
            <li>Ensure content authors have access to accessibility knowledge and skills</li>
            <li>Include accessibility as part of our technology mission</li>
            <li>Conduct periodic reviews to maintain and improve compliance</li>
          </ul>

          <h2>Compatibility with Browsers and Assistive Technology</h2>
          <p>
            Our website is designed to be compatible with the following assistive
            technologies:
          </p>
          <ul>
            <li>Screen readers (including NVDA, JAWS, and VoiceOver)</li>
            <li>Speech recognition software</li>
            <li>Screen magnification tools</li>
            <li>The last two versions of major browsers (Chrome, Firefox, Safari, Edge)</li>
          </ul>

          <h2>Technical Specifications</h2>
          <p>
            Our website relies upon the following technologies for conformance
            with WCAG 2.1:
          </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>WAI-ARIA</li>
            <li>SVG</li>
          </ul>

          <h2>Limitations and Alternatives</h2>
          <p>
            Despite our best efforts to ensure the accessibility of our website,
            there may be some limitations. If you encounter an issue, please
            contact us so we can provide the information through an alternative
            means or improve the accessibility of that content.
          </p>

          <h2>Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of our website. If you
            encounter accessibility barriers or have suggestions for
            improvement, please contact us:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:support@websitewannabe.com">
                support@websitewannabe.com
              </a>
            </li>
          </ul>
          <p>
            We try to respond to accessibility feedback within 2 business days.
          </p>

          <h2>Assessment Approach</h2>
          <ul>
            <li>
              We assess the accessibility of our website through self-evaluation
              and automated testing tools
            </li>
            <li>We conduct periodic reviews to maintain and improve compliance</li>
          </ul>

          <h2>Formal Approval</h2>
          <p>
            This Accessibility Statement is formally approved by Website Wannabe
            for Estates Pressure Washing.
          </p>
          <p className="text-sm mt-8">
            <em>Last updated: March 31, 2026</em>
          </p>
        </article>
      </div>
    </div>
  );
}
