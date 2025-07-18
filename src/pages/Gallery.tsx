import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { beforeAfterImages, categories } from "../config/beforeAfterConfig";
import { Helmet } from "react-helmet-async";
import OptimizedImage from "../components/OptimizedImage";
interface LayoutContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Gallery() {
  const { darkMode } = useOutletContext<LayoutContext>();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredImages =
    selectedCategory === "all"
      ? beforeAfterImages
      : beforeAfterImages.filter(
          (image) => image.category === selectedCategory,
        );

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}
    >
      <Helmet>
        <link rel="canonical" href="https://www.estatespresswash.com/gallery" />
        <title>
          Gallery | Estates Pressure Washing | Before & After Transformations
        </title>
        <meta
          name="description"
          content="Explore the Estates Pressure Washing gallery showcasing stunning before-and-after results of our residential, commercial, and specialty cleaning services across Bucks, Montgomery, and Philadelphia Counties."
        />
        <meta
          name="keywords"
          content="pressure washing gallery, before and after cleaning, exterior cleaning transformations, Estates Pressure Washing, Bucks County, Montgomery County, Philadelphia"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Estates Pressure Washing",
            url: "https://www.estatespresswash.com/gallery",
            image: "https://www.estatespresswash.com/AboutHero.jpeg",
            logo: "https://www.estatespresswash.com/logo.png",
            description:
              "View our gallery of before-and-after photos showing the power of professional pressure washing for homes, businesses, and specialty projects.",
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

      <div className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Work Gallery
          </h1>
          <p className="text-xl">
            See the transformative power of professional cleaning
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedCategory === "all"
                ? "bg-blue-600 text-white"
                : darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full capitalize transition-all ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : darkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div key={image.id} className="space-y-3">
                <div className="relative">
                  <OptimizedImage
                    src={image.before.src}
                    alt={image.before.alt}
                    width={400}
                    height={160}
                    quality={85}
                    className="w-full h-40 object-cover rounded-lg shadow-md"
                    fit="cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <OptimizedImage
                    src={image.after.src}
                    alt={image.after.alt}
                    width={400}
                    height={160}
                    quality={85}
                    className="w-full h-40 object-cover rounded-lg shadow-md"
                    fit="cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    After
                  </div>
                </div>
                {image.description && (
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                    {image.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
