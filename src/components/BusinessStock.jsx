import WhatsAppButton from './WhatsAppButton'

export default function BusinessStock({ kontak }) {
  return (
    <div id="business-stock" className="relative overflow-hidden rounded-[34px] border border-brand-dark/10 bg-brand-ivory shadow-premium">
      <div className="flex aspect-square w-full items-center justify-center bg-brand-green/5">
        <svg className="h-24 w-24 text-brand-green/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      </div>
      <div className="p-8 md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-gold">Untuk pelanggan usaha</p>
        <h2 className="mt-4 font-display text-4xl font-black leading-tight text-brand-green md:text-5xl">Untuk Warung dan UMKM, Stok Telur Jangan Sampai Kosong</h2>
        <p className="mt-6 text-lg leading-8 text-brand-muted">
          Bagi pemilik warung makan, toko, katering, dan usaha kuliner, stok telur yang tersedia dapat membantu aktivitas usaha berjalan lebih tenang.
        </p>
        <p className="mt-4 text-lg leading-8 text-brand-muted">
          Dengan Agen Telur Jombang, Anda bisa lebih mudah mengatur pembelian telur sesuai kebutuhan. Tinggal hubungi kami saat stok mulai menipis, lalu kami bantu siapkan pesanan Anda.
        </p>
        <WhatsAppButton
          wa={kontak.wa}
          message="Halo Agen Telur Jombang, saya ingin atur kebutuhan stok telur."
          className="mt-9 inline-flex rounded-lg bg-brand-green px-8 py-4 font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-green2"
        >
          Pesan Sekarang via WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  )
}
