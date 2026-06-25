export default function CustomerForm({ kontak }) {
  return (
    <section className="bg-brand-paper py-20">
      <div className="w-full px-5 md:px-10 xl:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-gold">Database Pelanggan</p>
          <h2 className="mt-4 font-display text-4xl font-black text-brand-green md:text-5xl">Dapatkan Update Harga Telur</h2>
          <p className="mt-5 text-lg leading-8 text-brand-muted">
            Daftarkan diri Anda untuk mendapatkan info harga telur terbaru dan promo setiap minggu.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-[30px] border border-brand-dark/10 bg-white p-8 shadow-soft md:p-10">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.target
              const nama = form.nama.value
              const wa = form.wa.value
              const usaha = form.usaha.value
              const msg = `Halo Agen Telur Jombang, saya ingin daftar update harga.%0A%0ANama: ${encodeURIComponent(nama)}%0ANO. WA: ${encodeURIComponent(wa)}%0AJenis Usaha: ${encodeURIComponent(usaha)}`
              window.open(`https://wa.me/${kontak.wa}?text=${msg}`, '_blank')
            }}
          >
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-black text-brand-green">Nama</label>
                <div className="relative">
                  <svg className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-muted/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                  <input name="nama" type="text" required placeholder="Masukkan nama Anda" className="w-full rounded-xl border border-brand-dark/15 bg-brand-ivory/50 py-4 pl-12 pr-4 text-brand-dark placeholder:text-brand-muted/60 outline-none transition focus:border-brand-gold focus:bg-white" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-black text-brand-green">Nomor WhatsApp</label>
                <div className="relative">
                  <svg className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-muted/60" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <input name="wa" type="tel" required placeholder="08xx-xxxx-xxxx" className="w-full rounded-xl border border-brand-dark/15 bg-brand-ivory/50 py-4 pl-12 pr-4 text-brand-dark placeholder:text-brand-muted/60 outline-none transition focus:border-brand-gold focus:bg-white" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-black text-brand-green">Jenis Usaha</label>
                <div className="relative">
                  <svg className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-muted/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>
                  <select name="usaha" required className="w-full rounded-xl border border-brand-dark/15 bg-brand-ivory/50 py-4 pl-12 pr-4 text-brand-dark outline-none transition focus:border-brand-gold focus:bg-white appearance-none">
                    <option value="">Pilih jenis usaha</option>
                    <option value="Rumah Tangga">Rumah Tangga</option>
                    <option value="Warung / Toko">Warung / Toko</option>
                    <option value="UMKM Kuliner">UMKM Kuliner</option>
                    <option value="Katering">Katering</option>
                    <option value="Grosir">Grosir</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-8 py-4 font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-green2"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Daftar via WhatsApp
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-brand-muted">
            Data Anda aman. Kami hanya menggunakan WhatsApp untuk mengirim info harga.
          </p>
        </div>
      </div>
    </section>
  )
}
