'use client';

import { useState } from 'react';
import { Star, ChevronRight, MapPin, Phone, Clock } from 'lucide-react';

const menuItems: any[] = [];
const categories: any[] = [];

export default function Home() {
  const [tab, setTab] = useState('all');
  const filtered = tab === 'all' ? menuItems : menuItems.filter((i: any) => i.cat === tab);
  const [formSent, setFormSent] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0d0d2b] to-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
            Café
          </h1>
          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            {['Menu', 'About', 'Reviews', 'Visit'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-purple-500 transition-colors duration-200">{link}</a>
            ))}
          </div>
          <a href="#visit" className="bg-gradient-to-r from-purple-500 to-pink-600 px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all text-white">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/15 via-transparent to-transparent" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 text-purple-500 text-sm mb-6 animate-pulse">
              <Star className="w-4 h-4 fill-current" /> Authentic Experience
            </div>
            <h2 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight mb-6">
              Where
              <span className="block bg-gradient-to-r from-purple-500 via-pink-600 to-purple-500 bg-clip-text text-transparent">
                Quality Meets Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-xl mb-8 leading-relaxed">
              A premium experience crafted with passion and attention to every detail.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#menu" className="group bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-3.5 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2 text-white">
                Explore Menu <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#visit" className="border border-gray-700 px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-white/5 transition-all">
                Find Us
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-4 gap-8 max-w-lg">
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500">10+</div>
              <div className="text-xs text-gray-500 mt-1">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500">50k+</div>
              <div className="text-xs text-gray-500 mt-1">Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500">4.9</div>
              <div className="text-xs text-gray-500 mt-1">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500">24/7</div>
              <div className="text-xs text-gray-500 mt-1">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold mb-2">Our Menu</h3>
          <p className="text-gray-500 mb-8">Crafted with love, served with passion</p>
          <div className="flex gap-3 mb-10 flex-wrap">
            {categories.map((c: any) => (
              <button key={c.key} onClick={() => setTab(c.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${tab === c.key ? 'bg-purple-500 text-black shadow-lg shadow-purple-500/25' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                {c.label}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((item: any, i: number) => (
              <div key={i} className="group bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.06] hover:border-purple-500/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold group-hover:text-purple-500 transition-colors">{item.name}</h4>
                  <span className="text-purple-500 font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Why Choose Us</h3>
          <div className="grid md:grid-cols-3 gap-8">
            
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:border-purple-500/30 hover:scale-[1.02] transition-all duration-300">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="text-xl font-bold mb-3">Premium Quality</h4>
                <p className="text-gray-500 leading-relaxed">Every detail crafted to perfection.</p>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:border-purple-500/30 hover:scale-[1.02] transition-all duration-300">
                <div className="text-4xl mb-4">🏆</div>
                <h4 className="text-xl font-bold mb-3">Expert Team</h4>
                <p className="text-gray-500 leading-relaxed">Passionate professionals at your service.</p>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:border-purple-500/30 hover:scale-[1.02] transition-all duration-300">
                <div className="text-4xl mb-4">💎</div>
                <h4 className="text-xl font-bold mb-3">Customer First</h4>
                <p className="text-gray-500 leading-relaxed">Your satisfaction is our priority.</p>
              </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold mb-3">What Our Guests Say</h3>
          <p className="text-gray-500 mb-12">Join thousands of happy customers</p>
          <div className="grid md:grid-cols-3 gap-6">
            
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-purple-500/20 transition-all duration-300">
                <div className="flex gap-1 mb-3"><Star key={0} className="w-4 h-4 fill-purple-500 text-purple-500" /><Star key={1} className="w-4 h-4 fill-purple-500 text-purple-500" /><Star key={2} className="w-4 h-4 fill-purple-500 text-purple-500" /><Star key={3} className="w-4 h-4 fill-purple-500 text-purple-500" /><Star key={4} className="w-4 h-4 fill-purple-500 text-purple-500" /></div>
                <p className="text-gray-300 mb-4 italic text-sm leading-relaxed">&ldquo;Absolutely incredible experience. Will definitely come back!&rdquo;</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👨‍💼</span>
                  <span className="text-sm text-purple-500 font-semibold">Alex M.</span>
                </div>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-purple-500/20 transition-all duration-300">
                <div className="flex gap-1 mb-3"><Star key={0} className="w-4 h-4 fill-purple-500 text-purple-500" /><Star key={1} className="w-4 h-4 fill-purple-500 text-purple-500" /><Star key={2} className="w-4 h-4 fill-purple-500 text-purple-500" /><Star key={3} className="w-4 h-4 fill-purple-500 text-purple-500" /><Star key={4} className="w-4 h-4 fill-purple-500 text-purple-500" /></div>
                <p className="text-gray-300 mb-4 italic text-sm leading-relaxed">&ldquo;The best in the city. Highly recommended to everyone.&rdquo;</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👩‍💻</span>
                  <span className="text-sm text-purple-500 font-semibold">Sarah K.</span>
                </div>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-purple-500/20 transition-all duration-300">
                <div className="flex gap-1 mb-3"><Star key={0} className="w-4 h-4 fill-purple-500 text-purple-500" /><Star key={1} className="w-4 h-4 fill-purple-500 text-purple-500" /><Star key={2} className="w-4 h-4 fill-purple-500 text-purple-500" /><Star key={3} className="w-4 h-4 fill-purple-500 text-purple-500" /><Star key={4} className="w-4 h-4 fill-purple-500 text-purple-500" /></div>
                <p className="text-gray-300 mb-4 italic text-sm leading-relaxed">&ldquo;Outstanding quality and service. 10/10!&rdquo;</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🧑‍🍳</span>
                  <span className="text-sm text-purple-500 font-semibold">David R.</span>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="visit" className="py-24 px-6 bg-gradient-to-t from-purple-500/10 to-transparent">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-4xl font-bold mb-8">Visit Us</h3>
            <div className="space-y-4 text-gray-400 mb-8">
              <p className="flex items-center gap-3"><MapPin className="w-5 h-5 text-purple-500 shrink-0" /> 123 Main Street, City Center</p>
              <p className="flex items-center gap-3"><Phone className="w-5 h-5 text-purple-500 shrink-0" /> (555) 123-4567</p>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
              <h4 className="font-bold mb-4 flex items-center gap-2"><Clock className="w-5 h-5 text-purple-500" /> Opening Hours</h4>
              
                <div className="flex justify-between py-2 border-b border-white/[0.04] last:border-0">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-purple-500 font-medium">9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.04] last:border-0">
                  <span className="text-gray-400">Saturday - Sunday</span>
                  <span className="text-purple-500 font-medium">10:00 AM - 10:00 PM</span>
                </div>
            </div>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
            <h4 className="text-xl font-bold mb-6">Get In Touch</h4>
            {formSent ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🚀</div>
                <h5 className="text-xl font-bold text-purple-500 mb-2">Message sent! We'll get back to you soon.</h5>
                <button onClick={() => setFormSent(false)} className="mt-4 text-sm text-purple-500 underline">Make another</button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={e => { e.preventDefault(); setFormSent(true); }}>
                <input type="text" placeholder="Your Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all" />
                <input type="email" placeholder="Email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all" />
                <div className="grid grid-cols-2 gap-3">
                  <input type="date" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-all" />
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-400 focus:border-purple-500 focus:outline-none transition-all">
                    <option>2 Guests</option><option>4 Guests</option><option>6 Guests</option><option>8+ Guests</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-600 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-[1.01] text-white">
                  Get Started ✨
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-bold text-lg bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">Café</span>
          <div className="flex gap-8 text-sm text-gray-500">
            {['Menu', 'About', 'Reviews', 'Visit'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-purple-500 transition-colors">{l}</a>
            ))}
          </div>
          <p className="text-gray-600 text-sm">© 2025 Café. Built with <span className="text-purple-500">Heaven AI</span></p>
        </div>
      </footer>
    </main>
  );
}
