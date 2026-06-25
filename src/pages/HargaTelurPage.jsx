import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import WhatsAppButton from '../components/WhatsAppButton'

export default function HargaTelurPage({ data }) {
  const { kontak, harga } = data

  return (
    <MainLayout data={data}>
      <main className="pt-20">
        <section className="bg-brand-ivory py-20">
          <div className="w-full px-5 md:px-10 xl:px-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-gold">Informasi Harga</p>
              <h1 className="mt-4 font-display text-4xl font-black text-brand-green md:text-5xl">{harga.title}</h1>
              <p className="mt-5 text-lg leading-8 text-brand-muted">{harga.description}</p>
            </div>

            <div className="mx-auto mt-12 max-w-2xl">
              <div className="rounded-[30px] border border-brand-dark/10 bg-white p-8 shadow-premium md:p-12">
                <div className="flex items-center gap-4 border-b border-brand-dark/10 pb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gold/20">
                    <svg className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-wider text-brand-gold">Harga Terbaru</p>
                    <p className="font-display text-xl font-black text-brand-green">Cek harga telur hari ini</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl bg-brand-ivory p-5">
                    <p className="text-sm font-black text-brand-green">Estimasi Harga</p>
                    <p className="mt-1 text-brand-muted">{harga.estimasi}</p>
                  </div>

                  <div className="rounded-xl bg-brand-ivory p-5">
                    <p className="text-sm font-black text-brand-green">Informasi Stok</p>
                    <p className="mt-1 text-brand-muted">Hubungi kami untuk info stok telur hari ini.</p>
                  </div>

                  <div className="rounded-xl bg-brand-ivory p-5">
                    <p className="text-sm font-black text-brand-green">Layanan Antar</p>
                    <p className="mt-1 text-brand-muted">Pesan antar tersedia untuk berbagai wilayah di Jombang.</p>
                  </div>
                </div>

                <p className="mt-6 text-sm text-brand-muted italic">{harga.catatan}</p>

                <WhatsAppButton
                  wa={kontak.wa}
                  message="Halo Agen Telur Jombang, saya ingin cek harga telur hari ini."
                  className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-brand-green px-8 py-5 text-base font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-green2"
                >
                  Cek Harga via WhatsApp Sekarang
                </WhatsAppButton>
              </div>

              <div className="mt-8 text-center">
                <Link to="/" className="text-sm font-semibold text-brand-gold hover:text-brand-green transition">
                  ← Kembali ke Beranda
                </Link>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-4xl">
              <h2 className="font-display text-3xl font-black text-center text-brand-green">Mengapa Harga Bisa Berubah?</h2>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {[
                  { title: 'Pasokan Ternak', desc: 'Harga telur dipengaruhi oleh ketersediaan pakan dan populasi ayam petelur.' },
                  { title: 'Permintaan Pasar', desc: 'Menjelang hari besar, permintaan meningkat dan harga bisa naik.' },
                  { title: 'Biaya Distribusi', desc: 'Harga transportasi dan logistik juga mempengaruhi harga di tingkat agen.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-brand-dark/10 bg-white p-6 text-center shadow-soft">
                    <h3 className="font-display text-xl font-black text-brand-green">{item.title}</h3>
                    <p className="mt-3 leading-7 text-brand-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  )
}
