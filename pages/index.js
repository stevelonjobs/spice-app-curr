import Menu from "../components/Menu"
import MobileMenu from "../components/MobileMenu"
import Banner from "../components/Banner"
import DesktopProductsSection from "../components/DesktopProductsSection"
import MobileProductsSection from "../components/MobileProductsSection"
import Sustain from "../components/Sustain"
import MetricsBanner from "../components/MetricsBanner"
import certificatesListArr from "../public/assets/certificatesList.mjs"
import achievementsListArr from "../public/assets/achievementsList.mjs"
import ProductsSection from "../components/ProductsSections"
import Footer from "../components/Footer"
import AwardsGallery from "../components/AwardsGallery"
import CertificatesGallery from "../components/CertificatesGallery"
import AwardsGallery2 from "../components/AwardsGallery2"

export default function Home() {
  return (
    <div>
      {/* Desktop Menu (fixed at the top) */}
      <div
        className="hidden sm:block 
        fixed top-0 left-0
        w-full z-[11] bg-white shadow-md border-b border-gray-200"
      >
        <Menu />
      </div>
      {/* Mobile Menu (fixed at the top) */}
      <div
        className="block sm:hidden 
        fixed top-0 left-0
        w-full z-[11] bg-white shadow-md border-b border-gray-200"
      >
        <MobileMenu />
      </div>

      <div>
        <Banner />
      </div>

      {/* General Products Section */}
      <div>
        <ProductsSection />
      </div>

      {/* Sustain Section */}
      <div className="bg-orange-50 md:py-10">
        <Sustain />
      </div>

      {/* Certificates Section */}
      <div>
        <AwardsGallery certificates={certificatesListArr} />
      </div>

      <div>
        <CertificatesGallery achievements={achievementsListArr} />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

{
  /* Metrics Section */
}
//  <div>
//  <MetricsBanner />
// </div>

{
  /* Desktop Cards Section */
}
{
  /* <div className="hidden sm:block">
        <DesktopProductsSection />
      </div> */
}
{
  /* Mobile Cards Section */
}
{
  /* <div className="block sm:hidden pb-6">
        <MobileProductsSection />
      </div> */
}
