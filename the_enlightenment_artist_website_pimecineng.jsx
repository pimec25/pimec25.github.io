export default function EnlightenmentSite() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* SEO & Structured Data (for reference if exported) */}
      <head>
        <title>The Enlightenment — Official Site | pimecineng.com</title>
        <meta name="description" content="The Enlightenment — music, videos, tour, and booking. Stream the new album 'Legacy In Motion'." />
        <link rel="canonical" href="https://pimecineng.com/" />
        <meta property="og:title" content="The Enlightenment — Legacy In Motion" />
        <meta property="og:description" content="Stream the new album, join the fan club, and book shows." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pimecineng.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MusicGroup',
              name: 'The Enlightenment',
              url: 'https://pimecineng.com',
              genre: ['Pop', 'Country', 'Gospel'],
              album: [{
                '@type': 'MusicAlbum',
                name: 'Legacy In Motion',
                url: 'https://pimecineng.com#album',
                sameAs: [
                  'https://open.spotify.com/album/1mvJdCbPKawZE53BsepGHm',
                  'https://music.apple.com/us/album/legacy-in-motion/1845637309'
                ]
              }],
              sameAs: [
                'https://www.instagram.com/enlightenment819/',
                'https://www.tiktok.com/@enlightenment819'
              ]
            })
          }}
        />
      </head>

      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 ring-2 ring-white/10 group-hover:scale-110 transition" />
            <span className="text-lg font-semibold tracking-wide">The Enlightenment</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#music" className="hover:text-white/90 text-white/70">Music</a>
            <a href="#video" className="hover:text-white/90 text-white/70">Videos</a>
            <a href="#tour" className="hover:text-white/90 text-white/70">Tour</a>
            <a href="#epk" className="hover:text-white/90 text-white/70">EPK</a>
            <a href="#booking" className="hover:text-white/90 text-white/70">Booking</a>
            <a href="#fanclub" className="hover:text-white/90 text-white/70">Fan Club</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#stream"
              className="px-4 py-2 rounded-xl bg-white text-neutral-900 font-medium hover:bg-white/90 transition"
            >
              Stream
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,165,0,0.25),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest text-xs text-white/60">New Album Out Now</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-2">
              LEGACY <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">IN MOTION</span>
            </h1>
            <p className="mt-4 text-white/80 max-w-xl">
              Music for the soul and the grind. Stream the new album, watch the visuals, and book The Enlightenment for your next stage.
            </p>
            <div className="mt-6 flex flex-wrap gap-3" id="stream">
              <a
                href="https://open.spotify.com/album/1mvJdCbPKawZE53BsepGHm?si=jgtYhieOQ9ecF_YKsS3JLA"
                target="_blank"
                className="px-4 py-2 rounded-xl bg-green-500/90 hover:bg-green-500 font-semibold text-neutral-900"
              >
                Listen on Spotify
              </a>
              <a
                href="https://music.apple.com/us/album/legacy-in-motion/1845637309"
                target="_blank"
                className="px-4 py-2 rounded-xl bg-white text-neutral-900 font-semibold hover:bg-white/90"
              >
                Apple Music
              </a>
              <a
                href="#booking"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 font-semibold text-neutral-900"
              >
                Book Now
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-white/70">
              <a href="https://www.instagram.com/enlightenment819/" target="_blank" className="hover:text-white">Instagram</a>
              <span>•</span>
              <a href="https://www.tiktok.com/@enlightenment819" target="_blank" className="hover:text-white">TikTok</a>
              <span>•</span>
              <a href="#fanclub" className="hover:text-white">Join Fan Club</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 shadow-2xl p-2">
              <div className="h-full w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <div className="rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur p-4 shadow-xl">
                <p className="text-xs uppercase tracking-widest text-white/60">Now Streaming</p>
                <p className="font-semibold">Legacy In Motion</p>
                <p className="text-sm text-white/70">Pop • Country • Gospel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music / Player */}
      <section id="music" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">Music</h2>
            <a href="#stream" className="text-sm text-orange-300 hover:text-orange-200">Stream the full album →</a>
          </div>
          <p className="mt-2 text-white/70 max-w-2xl">Preview a few tracks from <em>Legacy In Motion</em>. For the full experience, stream on your favorite platform.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Feel the Sunshine', src: '' },
              { title: 'Legacy in Motion', src: '' },
              { title: 'Forever in His Love', src: '' }
            ].map((t, i) => (
              <div key={i} className="rounded-2xl border border-white/10 p-5 bg-neutral-900/40">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-white/60">Track {i + 1}</p>
                    <h3 className="text-lg font-semibold">{t.title}</h3>
                  </div>
                  <span className="text-xs text-white/50">3:0{i + 2}</span>
                </div>
                <audio controls className="w-full mt-4">
                  {/* Replace src with your hosted MP3 file URLs */}
                  <source src={t.src || undefined} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section id="video" className="border-t border-white/10 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Videos</h2>
          <p className="mt-2 text-white/70">Official visuals and live moments.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
              {/* Replace the YouTube ID with your video */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="The Enlightenment — Official Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
              {/* TikTok embed placeholder via YouTube or second video */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/5qap5aO4i9A"
                title="Live Session"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tour */}
      <section id="tour" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Tour</h2>
          <p className="mt-2 text-white/70">Catch The Enlightenment live. More dates coming soon.</p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-white/5">
                <tr>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">City</th>
                  <th className="py-3 px-4">Venue</th>
                  <th className="py-3 px-4">Tickets</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { date: 'Nov 15, 2025', city: 'Oklahoma City, OK', venue: 'The Factory', link: '#' },
                  { date: 'Dec 2, 2025', city: 'Dallas, TX', venue: 'Deep Ellum Hall', link: '#' },
                  { date: 'Jan 20, 2026', city: 'Nashville, TN', venue: 'Riverfront Stage', link: '#' }
                ].map((g, idx) => (
                  <tr key={idx} className="border-t border-white/10 hover:bg-white/5">
                    <td className="py-3 px-4 whitespace-nowrap">{g.date}</td>
                    <td className="py-3 px-4">{g.city}</td>
                    <td className="py-3 px-4">{g.venue}</td>
                    <td className="py-3 px-4">
                      <a href={g.link} className="text-orange-300 hover:text-orange-200">Get Tickets →</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* EPK */}
      <section id="epk" className="border-t border-white/10 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold">EPK — Electronic Press Kit</h2>
            <p className="mt-3 text-white/70">
              One-sheet for promoters and media. Download hi-res photos, stage plot, and tech rider.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <a href="#" className="rounded-xl border border-white/10 p-4 hover:bg-white/5 transition">Artist Bio (PDF)</a>
              <a href="#" className="rounded-xl border border-white/10 p-4 hover:bg-white/5 transition">Press Photos (ZIP)</a>
              <a href="#" className="rounded-xl border border-white/10 p-4 hover:bg-white/5 transition">Stage Plot (PDF)</a>
              <a href="#" className="rounded-xl border border-white/10 p-4 hover:bg-white/5 transition">Tech Rider (PDF)</a>
            </div>
          </div>
          <aside className="space-y-4">
            <div className="rounded-2xl border border-white/10 p-4 bg-neutral-900/50">
              <p className="text-sm uppercase tracking-widest text-white/60">Genres</p>
              <p className="font-semibold">Pop • Country • Gospel</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-4 bg-neutral-900/50">
              <p className="text-sm uppercase tracking-widest text-white/60">For Bookings</p>
              <p className="font-semibold"><a href="mailto:bookings@pimecineng.com" className="hover:underline">bookings@pimecineng.com</a></p>
            </div>
            <div className="rounded-2xl border border-white/10 p-4 bg-neutral-900/50">
              <p className="text-sm uppercase tracking-widest text-white/60">Management</p>
              <p className="font-semibold"><a href="mailto:management@pimecineng.com" className="hover:underline">management@pimecineng.com</a></p>
            </div>
          </aside>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Booking</h2>
            <p className="mt-2 text-white/70">Tell us about your event and we’ll get back within 24–48 hours.</p>
            <form className="mt-6 space-y-4 rounded-2xl border border-white/10 p-6 bg-neutral-900/40" action="mailto:bookings@pimecineng.com" method="post">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-white/70">Name</label>
                  <input required className="mt-1 w-full rounded-xl bg-neutral-800 border border-white/10 p-3" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm text-white/70">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-xl bg-neutral-800 border border-white/10 p-3" placeholder="you@example.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-white/70">Event Date</label>
                  <input type="date" className="mt-1 w-full rounded-xl bg-neutral-800 border border-white/10 p-3" />
                </div>
                <div>
                  <label className="text-sm text-white/70">City</label>
                  <input className="mt-1 w-full rounded-xl bg-neutral-800 border border-white/10 p-3" placeholder="City, State" />
                </div>
              </div>
              <div>
                <label className="text-sm text-white/70">Details</label>
                <textarea rows={4} className="mt-1 w-full rounded-xl bg-neutral-800 border border-white/10 p-3" placeholder="Venue, set length, budget, audience size, etc." />
              </div>
              <button type="submit" className="px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-neutral-900 font-semibold">
                Submit Request
              </button>
            </form>
          </div>

          {/* Fan Club */}
          <div id="fanclub">
            <h2 className="text-2xl md:text-3xl font-bold">Fan Club</h2>
            <p className="mt-2 text-white/70">Exclusive drops, first-access tickets, giveaways.</p>
            <form className="mt-6 space-y-4 rounded-2xl border border-white/10 p-6 bg-neutral-900/40" action="https://formspree.io/f/{your-id}" method="POST">
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" required name="email" className="mt-1 w-full rounded-xl bg-neutral-800 border border-white/10 p-3" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-white/70">First Name (optional)</label>
                <input name="first_name" className="mt-1 w-full rounded-xl bg-neutral-800 border border-white/10 p-3" placeholder="First name" />
              </div>
              <button type="submit" className="px-5 py-3 rounded-xl bg-white text-neutral-900 font-semibold">
                Join the List
              </button>
              <p className="text-xs text-white/50">We respect your privacy. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 items-start">
          <div>
            <p className="font-semibold">The Enlightenment</p>
            <p className="text-white/70 text-sm mt-2">© {new Date().getFullYear()} The Enlightenment. All rights reserved.</p>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <ul className="text-white/70 text-sm mt-2 space-y-1">
              <li><a className="hover:text-white" href="mailto:info@pimecineng.com">info@pimecineng.com</a></li>
              <li><a className="hover:text-white" href="mailto:bookings@pimecineng.com">bookings@pimecineng.com</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Follow</p>
            <ul className="text-white/70 text-sm mt-2 space-y-1">
              <li><a className="hover:text-white" href="https://www.instagram.com/enlightenment819/" target="_blank">Instagram</a></li>
              <li><a className="hover:text-white" href="https://www.tiktok.com/@enlightenment819" target="_blank">TikTok</a></li>
              <li><a className="hover:text-white" href="https://open.spotify.com/album/1mvJdCbPKawZE53BsepGHm" target="_blank">Spotify</a></li>
              <li><a className="hover:text-white" href="https://music.apple.com/us/album/legacy-in-motion/1845637309" target="_blank">Apple Music</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-white/40 pb-8">
          Built for <span className="font-semibold">pimecineng.com</span> • Designed by your AI web partner
        </div>
      </footer>
    </div>
  );
}
