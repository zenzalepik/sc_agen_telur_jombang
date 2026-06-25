import { useParams, Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Delivery from '../components/Delivery'
import WhyUs from '../components/WhyUs'
import BusinessStock from '../components/BusinessStock'
import HowToOrder from '../components/HowToOrder'
import PriceCheck from '../components/PriceCheck'
import FinalCTA from '../components/FinalCTA'
import OtherProducts from '../components/OtherProducts'
import TargetSegments from '../components/TargetSegments'
import SocialProof from '../components/SocialProof'
import CustomerForm from '../components/CustomerForm'
import { kecamatanList } from '../data/kecamatan'

export default function LocalPage({ data }) {
  const { kecamatan } = useParams()
  const kecData = kecamatanList.find((k) => k.slug === kecamatan)
  const { hero, kontak, list_produk_lainnya, trust_badges, target_segments, social_proof } = data

  const pageHero = kecData
    ? {
        ...hero,
        badge: kecData.badge,
        headline: kecData.headline,
        highlight: kecData.highlight,
        sub_description: kecData.sub,
      }
    : hero

  return (
    <MainLayout data={data}>
      <main className="pt-20">
        <Hero hero={pageHero} kontak={kontak} trust_badges={trust_badges} />

        {kecData && (
          <div className="bg-brand-gold/10 py-4 text-center">
            <p className="text-sm font-bold text-brand-green">
              Anda berada di halaman: <span className="text-brand-gold">{kecData.name}</span> —{' '}
              <Link to="/" className="underline hover:text-brand-gold">Kembali ke Beranda</Link>
            </p>
          </div>
        )}

        <TargetSegments segments={target_segments} kontak={kontak} />
        <SocialProof social_proof={social_proof} />
        <Services />
        <Delivery kontak={kontak} />
        <section className="bg-brand-paper py-20">
          <div className="grid w-full gap-8 px-5 md:px-10 lg:grid-cols-[0.82fr_1.18fr] xl:px-16">
            <WhyUs />
            <BusinessStock kontak={kontak} />
          </div>
        </section>
        <section id="how-to-order" className="bg-brand-ivory py-20">
          <div className="grid w-full gap-6 px-5 md:px-10 lg:grid-cols-2 xl:px-16">
            <HowToOrder />
            <PriceCheck kontak={kontak} />
          </div>
        </section>
        <FinalCTA kontak={kontak} />
        <OtherProducts products={list_produk_lainnya} kontak={kontak} />
        <CustomerForm kontak={kontak} />
      </main>
    </MainLayout>
  )
}
