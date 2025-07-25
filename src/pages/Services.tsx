import React, { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Calculator,
  Image,
} from "lucide-react";
import OptimizedImage from "../components/OptimizedImage";

interface LayoutContext {
  darkMode: boolean;
}

export default function Services() {
  const { darkMode } = useOutletContext<LayoutContext>();
  const [activeTab, setActiveTab] = useState("residential");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div
      id="services"
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}
    >
      <Helmet>
        <link
          rel="canonical"
          href="https://www.estatespresswash.com/services"
        />
        <title>
          Estates Pressure Washing Services | Residential, Commercial &
          Specialty Cleaning
        </title>
        <meta
          name="description"
          content="Discover Estates Pressure Washing's full range of eco-friendly services: house washing, roof cleaning, paver sealing, gutter cleaning, graffiti removal, and more across Bucks, Montgomery, and Philadelphia Counties."
        />
        <meta
          name="keywords"
          content="pressure washing services, house washing, roof cleaning, commercial cleaning, paver sealing, gutter services, graffiti removal, residential pressure washing, commercial pressure washing, Bucks County, Montgomery County, Philadelphia"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Estates Pressure Washing",
            url: "https://www.estatespresswash.com/services",
            image: "https://www.estatespresswash.com/after10.jpg",
            logo: "https://www.estatespresswash.com/logo.png",
            description:
              "Estates Pressure Washing provides professional, eco-friendly cleaning services including residential house washing, commercial roof cleaning, paver sealing, and more across Pennsylvania counties.",
            telephone: "+1-267-685-0530",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Doylestown",
              addressRegion: "PA",
              postalCode: "18901",
              addressCountry: "US",
            },
            openingHours: "Mo-Sa 08:00-18:00",
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
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Estates Pressure Washing Service Menu",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Residential Services",
                    description:
                      "House washing, roof cleaning, decks, patios, fences, pool areas.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Commercial Services",
                    description:
                      "Commercial roof cleaning, entrances, walkways, graffiti removal, warehouse cleaning.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Specialty Services",
                    description:
                      "Paver cleaning & sealing, gutter cleaning, surface prep for painting and staining.",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/after10.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Exterior Cleaning Services
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            From houses to driveways, we deliver exceptional results with our
            comprehensive cleaning solutions
          </p>
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              sessionStorage.setItem("scrollToQuote", "true");
              window.location.href = "/";
            }}
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Get a Free Quote
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-12">
            <div
              className={`inline-flex rounded-lg p-1 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
            >
              {["Residential", "Commercial", "Specialty"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.toLowerCase()
                      ? "bg-blue-600 text-white"
                      : `${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === "residential" &&
              [
                {
                  title: "House Washing",
                  description:
                    "Restore your home's exterior to its original beauty with our gentle yet effective house washing service.",
                  features: [
                    "Removes dirt, mold, and mildew",
                    "Safe for all siding types",
                    "Improves curb appeal",
                  ],
                  image: "/service_cards/houseCard.jpg",
                },
                {
                  title: "Roof Cleaning",
                  description:
                    "Protect and extend your roof's life while improving your home's appearance.",
                  features: [
                    "Removes black streaks and algae",
                    "Extends roof lifespan",
                    "Improves energy efficiency",
                  ],
                  image: "/service_cards/roofCard.jpg",
                },
                {
                  title: "Walkways & Driveways",
                  description:
                    "Transform your outdoor surfaces with our professional pressure washing services.",
                  features: [
                    "Removes tough stains",
                    "Prevents weed growth",
                    "Enhances safety",
                  ],
                  image: "/after13.jpg",
                },
                {
                  title: "Decks & Patios",
                  description:
                    "Restore and protect your outdoor living spaces.",
                  features: [
                    "Deep cleaning",
                    "Restore natural appearance",
                    "Prolong lifespan",
                  ],
                  image: "/service_cards/patioCard.jpg",
                },
                {
                  title: "Pool Areas",
                  description: "Keep your pool area clean and safe.",
                  features: [
                    "Rejuvenate surface material",
                    "Algae removal to maintain slip free surface",
                    "Brighten & improve your summer getaway",
                  ],
                  image: "/after17.jpg",
                },
                {
                  title: "Fence Cleaning",
                  description: "Restore and protect your fencing investment.",
                  features: [
                    "Improved Fence Longevity",
                    "Removes harmful substances like mold, algae, and dirt",
                    "Preserve the fence's structure",
                  ],
                  image: "/service_cards/fenceCard.jpg",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className={`${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } rounded-lg shadow-lg overflow-hidden`}
                >
                  <div className="h-48 relative overflow-hidden">
                    <OptimizedImage
                      src={service.image}
                      alt={`${service.title} service`}
                      className="w-full h-full object-cover"
                      width={400}
                      height={192}
                      quality={85}
                      fit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p
                      className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}
                    >
                      {service.description}
                    </p>
                    <ul className="mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center mb-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700"
                    >
                      Request Service <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            {activeTab === "commercial" &&
              [
                {
                  title: "Commercial Roof Cleaning",
                  description:
                    "Professional roof cleaning for commercial buildings.",
                  features: [
                    "Prevents damage & extends roofs lifespan",
                    "Improve Energy Efficiency",
                    "Maintain property value & appearance ",
                  ],
                  image: "/residential.jpeg",
                },
                {
                  title: "Commercial Entrances and Walkways",
                  description:
                    "Keep your business property clean and professional.",
                  features: [
                    "Maintain high-traffic areas",
                    "Clean & professional first impression",
                    "Extend lifespan & reduce maintenance costs",
                  ],
                  image: "/driveways.jpeg",
                },
                {
                  title: "Commercial Building Cleaning",
                  description: "Maintain your business's building.",
                  features: [
                    "Enchance curb appeal",
                    "Promote health & safety",
                    "Large-scale capabilities",
                  ],
                  image: "/commercial.jpeg",
                },
                {
                  title: "Graffiti Removal",
                  description: "Quick and effective graffiti removal services.",
                  features: [
                    "Surface-safe solutions",
                    "Complete removal",
                    "Protective coating",
                  ],
                  image: "/newGraffiti.jpeg",
                },
                {
                  title: "Warehouse Cleaning",
                  description: "Comprehensive warehouse cleaning solutions.",
                  features: [
                    "Large area cleaning ( Interior & Exterior )",
                    "Grease & Oil Stains",
                    "Maintain clean working environment",
                  ],
                  image: "/warehouse.jpg",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg overflow-hidden`}
                >
                  <div className="h-48 relative overflow-hidden">
                    <OptimizedImage
                      src={service.image}
                      alt={`${service.title} service`}
                      className="w-full h-full object-cover"
                      width={400}
                      height={192}
                      quality={85}
                      fit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p
                      className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}
                    >
                      {service.description}
                    </p>
                    <ul className="mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center mb-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700"
                    >
                      Request Service <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            {activeTab === "specialty" &&
              [
                {
                  title: "Paver Cleaning & Sealing",
                  description: "Remove dirt, stains, and algae",
                  features: [
                    "Remove dirt, stains, moss, weeds, and algae from pavers and joints",
                    "Full removal of old joint sand before applying fresh polymer sand",
                    "Install high quality polymeric sand with vibrating compactor",
                    "Stabilize pavers to prevent shifting and cracking",
                    "Prevent weed growth and insect infestation",
                    "Protect from weather damage and moisture penetration",
                    "Enhance color and reduce fading",
                    "Expert restoration of your expensive hardscape investment",
                    "Long-term maintenance for lasting beauty and functionality",
                  ],
                  image: "/paver2.jpg",
                },
                {
                  title: "Gutter Services",
                  description:
                    "Complete gutter maintenance and cleaning solutions.",
                  features: [
                    "Gutter clean out & flush",
                    "Debris removal",
                    "Gutter Brightening",
                    "Removal of black streaks caused by oxidation",
                  ],
                  image: "/newGutter.jpeg",
                },
                {
                  title: "Preparation for Painting/Staining",
                  description:
                    "A clean surface is crucial for material adhesion",
                  features: [
                    "Removes dirt, grime, and old coatings",
                    "Prepare surfaces for a fresh coat of paint or stain",
                    "Ensure better adhesion and a longer-lasting finish",
                  ],
                  image: "/painting.jpg",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg overflow-hidden`}
                >
                  <div className="h-48 relative overflow-hidden">
                    <OptimizedImage
                      src={service.image}
                      alt={`${service.title} service`}
                      className="w-full h-full object-cover"
                      width={400}
                      height={192}
                      quality={85}
                      fit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p
                      className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}
                    >
                      {service.description}
                    </p>
                    <ul className="mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center mb-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700"
                    >
                      Request Service <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Gallery CTA */}
      <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">View Our Complete Gallery</h2>
          <p
            className={`text-lg mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Explore our full collection of before and after transformations in
            our dedicated gallery section.
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-md"
          >
            <Image className="w-5 h-5 mr-2" />
            View Gallery
          </Link>
        </div>
      </section>

      {/* Service Area Section */}
      <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Service Area
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p
              className={`text-lg mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              We proudly serve residential and commercial properties throughout:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className={`${darkMode ? "bg-gray-900" : "bg-white"} p-6 rounded-lg shadow-lg`}
              >
                <h3 className="text-xl font-semibold mb-3">Bucks County</h3>
                <p
                  className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  Including Doylestown, Newtown, Yardley, and surrounding areas
                </p>
              </div>
              <div
                className={`${darkMode ? "bg-gray-900" : "bg-white"} p-6 rounded-lg shadow-lg`}
              >
                <h3 className="text-xl font-semibold mb-3">
                  Montgomery County
                </h3>
                <p
                  className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  Including Blue Bell, King of Prussia, Lansdale, and
                  surrounding areas
                </p>
              </div>
              <div
                className={`${darkMode ? "bg-gray-900" : "bg-white"} p-6 rounded-lg shadow-lg`}
              >
                <h3 className="text-xl font-semibold mb-3">
                  Philadelphia County
                </h3>
                <p
                  className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  Serving all neighborhoods within Philadelphia proper
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div
              className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-lg`}
            >
              <h3 className="text-xl font-semibold mb-3">
                Do you only Pressure Wash?
              </h3>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                We employ both soft wash and pressure wash processes for each
                job, depending on the material being cleaned.
              </p>
            </div>
            <div
              className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-lg`}
            >
              <h3 className="text-xl font-semibold mb-3">
                How soon will I see the results from the cleaning?
              </h3>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Results are typically visible the same day. Depending on the
                color of your shingles, you may notice a slight "soap-like" film
                from our detergents. This film will rinse away with the first
                rain.
              </p>
            </div>
            <div
              className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-lg`}
            >
              <h3 className="text-xl font-semibold mb-3">
                How long do the cleaning results last?
              </h3>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Generally, roofing results can last anywhere from 5 to 7 years.
                However, results may vary depending upon landscaping and
                surrounding trees.
              </p>
            </div>
            <div
              className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-lg`}
            >
              <h3 className="text-xl font-semibold mb-3">
                Is soft wash better than a power wash?
              </h3>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Soft wash surfaces utilize no pressure, preventing damage to
                your home or building. Soft washing is similar to using a garden
                hose. However, some surfaces require pressure to be properly
                cleaned, which is why we employ both methods when necessary.
              </p>
            </div>
            <div
              className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-lg`}
            >
              <h3 className="text-xl font-semibold mb-3">
                Do I need to be home during the cleaning?
              </h3>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                It is entirely up to you. We only ask that there be access to an
                outside water source and that all windows and doors are closed
                and locked.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}