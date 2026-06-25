export default function PriceCheck({ kontak }) {
  return (
    <div id="price-check" className="rounded-[30px] border border-brand-dark/10 bg-white p-8 shadow-soft md:p-10">
      <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-gold">Informasi harga</p>
      <h2 className="mt-4 font-display text-4xl font-black text-brand-green">Cek Harga dan Stok Sebelum Pesan</h2>
      <p className="mt-5 text-lg leading-8 text-brand-muted">
        Harga telur bisa berubah mengikuti kondisi pasar. Karena itu, informasi harga paling aman adalah dengan menghubungi kami langsung.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          const f = e.target
          const nama = f.nama.value.trim()
          const jumlah = f.jumlah.value.trim()
          const area = f.area.value.trim()
          const catatan = f.catatan.value.trim()
          if (!nama || !jumlah || !area) return

          const msg = `Halo Agen Telur Jombang, saya mau cek harga dan stok telur.%0A%0ANama: ${encodeURIComponent(nama)}%0AJumlah: ${encodeURIComponent(jumlah)}%0ALokasi: ${encodeURIComponent(area)}%0ACatatan: ${encodeURIComponent(catatan || '-')}`
          window.open(`https://wa.me/${kontak.wa}?text=${msg}`, '_blank')
        }}
      >
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <label className="relative">
            <svg className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-muted/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
            <input name="nama" type="text" required placeholder="Nama Anda" className="w-full rounded-xl border border-brand-dark/15 bg-brand-ivory/50 py-4 pl-12 pr-4 text-brand-dark placeholder:text-brand-muted/60 outline-none transition focus:border-brand-gold focus:bg-white" />
          </label>
          <label className="relative">
            <svg className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-muted/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
            <input name="jumlah" type="text" required placeholder="Jumlah telur" className="w-full rounded-xl border border-brand-dark/15 bg-brand-ivory/50 py-4 pl-12 pr-4 text-brand-dark placeholder:text-brand-muted/60 outline-none transition focus:border-brand-gold focus:bg-white" />
          </label>
          <label className="relative">
            <svg className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-muted/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
            <input name="area" type="text" required placeholder="Lokasi Anda" className="w-full rounded-xl border border-brand-dark/15 bg-brand-ivory/50 py-4 pl-12 pr-4 text-brand-dark placeholder:text-brand-muted/60 outline-none transition focus:border-brand-gold focus:bg-white" />
          </label>
          <label className="relative">
            <svg className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-muted/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
            <input name="catatan" type="text" placeholder="Catatan (opsional)" className="w-full rounded-xl border border-brand-dark/15 bg-brand-ivory/50 py-4 pl-12 pr-4 text-brand-dark placeholder:text-brand-muted/60 outline-none transition focus:border-brand-gold focus:bg-white" />
          </label>
        </div>

        <button
          type="submit"
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-8 py-4 font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-green2"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Cek via WhatsApp
        </button>
      </form>
    </div>
  )
}
