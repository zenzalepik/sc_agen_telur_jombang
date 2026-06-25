export default function SocialProof({ social_proof }) {
  return (
    <section className="bg-brand-green py-14">
      <div className="w-full px-5 text-center md:px-10 xl:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-goldSoft">Bukti Sosial</p>
          <h2 className="mt-4 font-display text-3xl font-black text-white md:text-4xl">{social_proof.tagline}</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-left">
              <div className="flex items-center gap-2 text-brand-goldSoft">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-3 text-white/85">{social_proof.pelanggan}</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-left">
              <div className="flex items-center gap-2 text-brand-goldSoft">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-bold text-white">Terpercaya</span>
              </div>
              <p className="mt-3 text-white/85">{social_proof.pengiriman}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
