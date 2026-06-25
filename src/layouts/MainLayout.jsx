import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Delivery from '../components/Delivery'
import WhyUs from '../components/WhyUs'
import BusinessStock from '../components/BusinessStock'
import HowToOrder from '../components/HowToOrder'
import PriceCheck from '../components/PriceCheck'
import FinalCTA from '../components/FinalCTA'
import OtherProducts from '../components/OtherProducts'
import Footer from '../components/Footer'

export default function MainLayout({ data, children }) {
  return (
    <>
      <Header data={data} />
      {children}
      <Footer data={data} />
    </>
  )
}
