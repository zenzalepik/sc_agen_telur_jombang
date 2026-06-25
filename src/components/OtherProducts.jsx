import WhatsAppButton from './WhatsAppButton'

export default function OtherProducts({ products, kontak }) {
  return (
    <section id="other-products" className="bg-brand-paper py-20">
      <div className="w-full px-5 md:px-10 xl:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-gold">Produk Dapur Lainnya</p>
          <h2 className="mt-4 font-display text-4xl font-black text-brand-green md:text-5xl">Cari Produk Lain?</h2>
          <p className="mt-5 text-lg leading-8 text-brand-muted">
            Selain telur ayam, kami juga melayani kebutuhan dapur lainnya untuk rumah tangga, warung, dan usaha kuliner di area Jombang.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {(products || []).map((p) => (
            <article key={p.nama} className="overflow-hidden rounded-[28px] border border-brand-dark/10 bg-white shadow-soft">
              <div className="h-44 bg-brand-cream">
                <img src={p.gambar} alt={p.alt || p.nama} className="h-full w-full object-cover" onError={(e) => { e.target.style.display = 'none' }} />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-2xl font-black text-brand-green">{p.nama}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <WhatsAppButton
            wa={kontak.wa}
            message="Halo Agen Telur Jombang, saya ingin tanya produk lain."
            className="inline-flex rounded-lg bg-brand-green px-8 py-4 font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-green2"
          >
            Tanya Produk Lain via WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
