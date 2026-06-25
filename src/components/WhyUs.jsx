const reasons = [
  {
    title: 'Fokus Melayani Area Jombang',
    desc: 'Komunikasi, pemesanan, dan pengiriman lebih mudah dijangkau.',
    icon: <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
  },
  {
    title: 'Bisa Eceran dan Grosir',
    desc: 'Butuh sedikit untuk rumah bisa. Butuh lebih banyak untuk stok usaha juga bisa.',
    icon: <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" /></svg>,
  },
  {
    title: 'Harga Bisa Dicek Harian',
    desc: 'Harga telur dapat berubah mengikuti kondisi pasar, jadi pembeli bisa cek langsung sebelum pesan.',
    icon: <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: 'Disiapkan dengan Hati-Hati',
    desc: 'Pesanan telur akan disiapkan dan ditata dengan hati-hati agar lebih aman saat dibawa atau dikirim.',
    icon: <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-brand-paper py-20">
      <div className="grid w-full gap-8 px-5 md:px-10 lg:grid-cols-[0.82fr_1.18fr] xl:px-16">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-gold">Nilai Layanan</p>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight text-brand-green md:text-5xl">Kenapa Pesan di Agen Telur Jombang?</h2>
          <div className="mt-9 space-y-5">
            {reasons.map(({ title, desc, icon }) => (
              <div key={title} className="flex gap-4">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-green/20 bg-brand-ivory">
                  {icon}
                </span>
                <div>
                  <h3 className="font-black text-brand-green">{title}</h3>
                  <p className="mt-1 leading-7 text-brand-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
