import WhatsAppButton from './WhatsAppButton'

export default function Hero({ hero, kontak, trust_badges }) {
  const { badge, headline, highlight, description, sub_description } = hero
  return (
    <section id="hero" className="relative min-h-[720px] overflow-hidden premium-texture">
      <div className="absolute right-0 top-0 hidden h-full w-[55%] overflow-hidden lg:block">
        <div className="hero-arc h-full w-full bg-brand-green">
          <img
            src="./assets/telur-hero.jpg"
            alt="Stok telur ayam dalam tray"
            className="h-full w-full object-cover opacity-95"
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>
      </div>

      <div className="relative z-10 flex min-h-[720px] w-full items-center px-5 md:px-10 xl:px-16">
        <div className="max-w-3xl py-20">
          <div className="mb-9 flex max-w-max items-center gap-3 rounded-full border border-brand-gold/30 bg-white/70 px-4 py-2 shadow-soft">
            <span className="h-2 w-2 rounded-full bg-brand-gold"></span>
            <span className="text-sm font-bold tracking-[0.18em] text-brand-green">{badge}</span>
          </div>

          <h1 className="font-display text-[44px] font-black leading-[1.04] tracking-[-0.03em] text-brand-green md:text-[66px] xl:text-[76px]">
            <span>{headline}</span>
            <span className="block text-brand-gold">{highlight}</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-brand-dark/75 md:text-xl">
            {description}
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-brand-muted">
            {sub_description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton
              wa={kontak.wa}
              message="Halo Agen Telur Jombang, saya ingin cek harga telur hari ini."
              className="inline-flex items-center justify-center rounded-lg bg-brand-green px-8 py-4 text-base font-black text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-brand-green2"
            >
              Cek Harga Hari Ini
            </WhatsAppButton>
            <WhatsAppButton
              wa={kontak.wa}
              message="Halo Agen Telur Jombang, saya ingin pesan telur."
              className="inline-flex items-center justify-center rounded-lg border border-brand-green/25 bg-white/80 px-8 py-4 text-base font-black text-brand-green shadow-soft transition hover:-translate-y-0.5 hover:border-brand-gold hover:text-brand-gold"
            >
              Chat WhatsApp
            </WhatsAppButton>
          </div>

          {trust_badges && trust_badges.length > 0 && (
            <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-2 md:grid-cols-4">
              {trust_badges.map((text, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl border border-brand-green/15 bg-white/70 px-4 py-3 shadow-soft">
                  <svg className="h-5 w-5 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-sm font-semibold text-brand-dark/80">{text}</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 grid max-w-3xl gap-3 rounded-2xl border border-brand-dark/10 bg-white/75 p-3 shadow-soft md:grid-cols-4">
            {[
              { title: 'Stok Tersedia', desc: 'Setiap hari', icon: 'package' },
              { title: 'Eceran & Grosir', desc: 'Rumah sampai usaha', icon: 'cart' },
              { title: 'Pesan Antar', desc: 'Area Jombang', icon: 'truck' },
              { title: 'Cek Harga', desc: 'Via WhatsApp', icon: 'price' },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="flex items-center gap-3 border-brand-dark/10 p-3 last:border-0 md:border-r md:last:border-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-green/20 bg-brand-ivory">
                  {icon === 'package' && <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>}
                  {icon === 'cart' && <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>}
                  {icon === 'truck' && <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>}
                  {icon === 'price' && <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                </div>
                <div>
                  <p className="text-sm font-black text-brand-green">{title}</p>
                  <p className="text-xs text-brand-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
