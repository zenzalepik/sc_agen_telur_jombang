export default function Delivery({ kontak }) {
  return (
    <section id="delivery" className="relative min-h-[560px] overflow-hidden bg-brand-green">
      <img
        src="./assets/supra-x-125-pesan-antar.jpg"
        alt="Pesan antar telur area Jombang"
        className="absolute inset-0 h-full w-full object-cover opacity-95"
        onError={(e) => { e.target.style.display = 'none' }}
      />
      <div className="absolute inset-0 delivery-fade"></div>

      <div className="relative z-10 flex min-h-[560px] w-full items-center px-5 py-20 md:px-10 xl:px-16">
        <div className="max-w-2xl text-white">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-goldSoft">Layanan Unggulan Kami</p>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight md:text-6xl">Pesan Antar Area Jombang</h2>
          <p className="mt-6 text-lg leading-8 text-white/82">
            Agen Telur Jombang melayani pesan antar untuk area Jombang dan sekitarnya sesuai jangkauan pengiriman.
          </p>
          <p className="mt-4 text-lg leading-8 text-white/82">
            Layanan ini cocok untuk Anda yang sibuk menjaga toko, memasak, melayani pembeli, atau tidak sempat datang langsung.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.target
              const nama = form.nama.value.trim()
              const jumlah = form.jumlah.value.trim()
              const alamat = form.alamat.value.trim()
              const waktu = form.waktu.value.trim()
              if (!nama || !jumlah || !alamat) return

              const msg = `Halo Agen Telur Jombang, saya mau pesan antar telur.%0A%0ANama: ${encodeURIComponent(nama)}%0APesanan: ${encodeURIComponent(jumlah)}%0AAlamat: ${encodeURIComponent(alamat)}%0AWaktu antar: ${encodeURIComponent(waktu || 'Sesuai kesepakatan')}`
              window.open(`https://wa.me/${kontak.wa}?text=${msg}`, '_blank')
            }}
          >
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <label className="relative">
                <svg className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                <input name="nama" type="text" required placeholder="Nama pemesan" className="w-full rounded-xl bg-white/10 py-4 pl-12 pr-4 ring-1 ring-white/15 text-white placeholder:text-white/50 outline-none transition focus:ring-brand-goldSoft" />
              </label>
              <label className="relative">
                <svg className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                <input name="jumlah" type="text" required placeholder="Jumlah telur" className="w-full rounded-xl bg-white/10 py-4 pl-12 pr-4 ring-1 ring-white/15 text-white placeholder:text-white/50 outline-none transition focus:ring-brand-goldSoft" />
              </label>
              <label className="relative">
                <svg className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                <input name="alamat" type="text" required placeholder="Alamat pengiriman" className="w-full rounded-xl bg-white/10 py-4 pl-12 pr-4 ring-1 ring-white/15 text-white placeholder:text-white/50 outline-none transition focus:ring-brand-goldSoft" />
              </label>
              <label className="relative">
                <svg className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <input name="waktu" type="text" placeholder="Waktu antar (opsional)" className="w-full rounded-xl bg-white/10 py-4 pl-12 pr-4 ring-1 ring-white/15 text-white placeholder:text-white/50 outline-none transition focus:ring-brand-goldSoft" />
              </label>
            </div>

            <button
              type="submit"
              className="mt-9 inline-flex rounded-lg border border-brand-goldSoft/60 bg-brand-gold px-8 py-4 font-black text-brand-dark shadow-premium transition hover:-translate-y-0.5 hover:bg-white"
            >
              Periksa area antar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
