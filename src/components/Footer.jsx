import { Link } from 'react-router-dom'
import { kecamatanList } from '../data/kecamatan'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer({ data }) {
  const { kontak, deskripsi_footer, copyright, nama_singkat, kota } = data

  return (
    <footer id="footer" className="bg-brand-dark py-14 text-white">
      <div className="grid w-full gap-10 px-5 md:grid-cols-4 md:px-10 xl:px-16">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-7 rounded-[50%] bg-gradient-to-br from-brand-goldSoft to-brand-gold"></div>
            <div className="leading-none">
              <p className="font-display text-[15px] font-bold tracking-wide text-white/85">{nama_singkat}</p>
              <p className="font-display text-[26px] font-black leading-5 tracking-[0.04em] text-white">{kota}</p>
            </div>
          </div>
          <p className="mt-5 leading-7 text-white/65">{deskripsi_footer}</p>
        </div>

        <div>
          <h3 className="font-black text-white">Navigasi</h3>
          <div className="mt-4 grid gap-2 text-white/65">
            <button onClick={() => scrollTo('hero')} className="block w-full cursor-pointer text-left hover:text-brand-goldSoft">Beranda</button>
            <button onClick={() => scrollTo('services')} className="block w-full cursor-pointer text-left hover:text-brand-goldSoft">Layanan</button>
            <button onClick={() => scrollTo('delivery')} className="block w-full cursor-pointer text-left hover:text-brand-goldSoft">Area Antar</button>
            <button onClick={() => scrollTo('how-to-order')} className="block w-full cursor-pointer text-left hover:text-brand-goldSoft">Cara Pesan</button>
            <button onClick={() => scrollTo('other-products')} className="block w-full cursor-pointer text-left hover:text-brand-goldSoft">Produk Lain</button>
            <Link to="/harga-telur-jombang" className="hover:text-brand-goldSoft transition">Cek Harga Telur</Link>
          </div>
        </div>

        <div>
          <h3 className="font-black text-white">Area Layanan</h3>
          <div className="mt-4 grid gap-2 text-white/65">
            {kecamatanList.slice(0, 6).map((k) => (
              <span key={k.slug} className="block">{k.name}</span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black text-white">Info Kontak</h3>
          <div className="mt-4 space-y-2 text-white/65">
            <p className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0 text-brand-goldSoft" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {kontak.wa_display}
            </p>
            <p className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0 text-brand-goldSoft" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              {kontak.email}
            </p>
            <p className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0 text-brand-goldSoft" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              {kontak.alamat}
            </p>
            <p className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0 text-brand-goldSoft" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {kontak.jam_layanan}
            </p>
            <div className="flex gap-4 pt-2">
              {kontak.instagram && (
                <a href={kontak.instagram} target="_blank" rel="noopener" className="hover:text-brand-goldSoft transition">Instagram</a>
              )}
              {kontak.facebook && (
                <a href={kontak.facebook} target="_blank" rel="noopener" className="hover:text-brand-goldSoft transition">Facebook</a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 px-5 pt-6 text-center text-sm text-white/45 md:px-10 xl:px-16">
        {copyright}
      </div>
    </footer>
  )
}
