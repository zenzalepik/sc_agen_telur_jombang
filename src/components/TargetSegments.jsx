import WhatsAppButton from './WhatsAppButton'

const icons = {
  house: (
    <svg className="h-10 w-10 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
    </svg>
  ),
  store: (
    <svg className="h-10 w-10 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
    </svg>
  ),
  umkm: (
    <svg className="h-10 w-10 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
}

export default function TargetSegments({ segments, kontak }) {
  return (
    <section id="target-segments" className="bg-brand-ivory py-20">
      <div className="w-full px-5 md:px-10 xl:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-gold">Siapa yang Cocok</p>
          <h2 className="mt-4 font-display text-4xl font-black text-brand-green md:text-5xl">Layanan yang Tepat untuk Kebutuhan Anda</h2>
          <p className="mt-5 text-lg leading-8 text-brand-muted">
            Kami melayani berbagai segmen pelanggan di Jombang, dari rumah tangga hingga usaha kuliner.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {segments.map((s) => (
            <div key={s.title} className="group rounded-[28px] border border-brand-dark/10 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-premium">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-brand-green/20 bg-brand-ivory">
                {icons[s.icon] || icons.house}
              </div>
              <h3 className="font-display text-2xl font-black text-brand-green">{s.title}</h3>
              <p className="mt-4 font-semibold text-brand-gold">{s.problem}</p>
              <p className="mt-2 leading-7 text-brand-muted">{s.solution}</p>
              <WhatsAppButton
                wa={kontak.wa}
                message={`Halo Agen Telur Jombang, saya ${s.title.toLowerCase()}, ingin pesan telur.`}
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-brand-green/20 bg-brand-ivory px-6 py-3 text-sm font-black text-brand-green transition hover:bg-brand-green hover:text-white"
              >
                Pesan via WhatsApp
              </WhatsAppButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
