'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { menuData, MenuCategory } from './lib/MenuData';
import { Phone, Star, Clock, ChevronDown, Search, X } from 'lucide-react';

const TAG_STYLES: Record<string, string> = {
  'Chef Special': 'bg-purple-950/70 text-purple-300 border border-purple-700/40',
  'Popular':      'bg-amber-950/70  text-amber-300  border border-amber-700/40',
  'New':          'bg-emerald-950/70 text-emerald-300 border border-emerald-700/40',
};

/* ── Single menu item card ─────────────────────────────────────────── */
function MenuItemCard({ item }: { item: MenuCategory['items'][0] }) {
  return (
    <div className="
      flex items-start justify-between gap-3 p-4 rounded-2xl
      bg-neutral-900 border border-neutral-800
      transition-all duration-300 ease-out
      hover:-translate-y-0.5 hover:border-amber-500/40 hover:shadow-[0_12px_40px_rgba(240,165,0,0.07)]
    ">
      {/* Left */}
      <div className="flex items-start gap-3 flex-1 min-w-0">
        <div className="veg-dot mt-1" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-white text-sm font-semibold leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
              {item.name}
            </span>
            {item.tag && (
              <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold tracking-wider uppercase ${TAG_STYLES[item.tag]}`}>
                {item.tag}
              </span>
            )}
          </div>
          {item.description && (
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{item.description}</p>
          )}
        </div>
      </div>

      {/* Price */}
      <div className="
        flex-shrink-0 px-3 py-1.5 rounded-xl text-sm font-bold text-amber-400 whitespace-nowrap
        bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/25
      " style={{ fontFamily: "'Cinzel', serif" }}>
        {item.price}
      </div>
    </div>
  );
}

/* ── Category section ──────────────────────────────────────────────── */
function CategorySection({ category }: { category: MenuCategory }) {
  return (
    <div id={`cat-${category.id}`} className="mb-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 bg-amber-500/10 border border-amber-500/25">
          {category.emoji}
        </div>
        <div>
          <h2 className="text-lg text-white font-extrabold" style={{ fontFamily: "'Playfair Display', serif" }}>
            {category.title}
          </h2>
          {category.subtitle && (
            <p className="text-[9px] tracking-[0.3em] uppercase text-amber-500 mt-0.5" style={{ fontFamily: "'Cinzel', serif" }}>
              {category.subtitle}
            </p>
          )}
        </div>
        <div className="flex-1 gold-line-left ml-1" />
      </div>

      {/* Items grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {category.items.map((item, i) => <MenuItemCard key={i} item={item} />)}
      </div>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────────────── */
export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery]       = useState('');
  const [scrolled, setScrolled]             = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  /* Filter logic */
  const filteredCategories = menuData
    .filter(cat => {
      const matchCat    = activeCategory === 'All' || cat.title === activeCategory;
      const q           = searchQuery.toLowerCase();
      const matchSearch = q === '' || cat.title.toLowerCase().includes(q) ||
        cat.items.some(i => i.name.toLowerCase().includes(q));
      return matchCat && matchSearch;
    })
    .map(cat => {
      if (searchQuery === '') return cat;
      const q = searchQuery.toLowerCase();
      return {
        ...cat,
        items: cat.items.filter(i =>
          i.name.toLowerCase().includes(q) || cat.title.toLowerCase().includes(q)
        ),
      };
    })
    .filter(cat => cat.items.length > 0);

  const scrollTo = (id: string) =>
    document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const categories = ['All', ...menuData.map(c => c.title)];

  return (
    <main className="min-h-screen bg-[#0a0a0a] scale-bg text-neutral-100 overflow-x-hidden">

      {/* ── NAVBAR ─────────────────────────────────────────────────── */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 px-4
        ${scrolled
          ? 'py-2 bg-black/85 backdrop-blur-xl border-b border-amber-500/15'
          : 'py-4 bg-transparent'
        }`}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/Logo.jpeg" alt="Gorkha Kitchen" width={20} height={20}
              className="rounded-full border-2 border-amber-500/50 object-cover" />
            <div>
              <p className="text-amber-400 text-[13px] font-semibold tracking-widest"
                style={{ fontFamily: "'Cinzel', serif" }}>GORKHA KITCHEN</p>
              <p className="text-[9px] text-neutral-600 tracking-[0.3em] uppercase">Indian · Nepalese</p>
            </div>
          </div>
          <a href="tel:9286318361"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-amber-400
              bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-colors">
            <Phone size={12} />
            <span className="hidden sm:inline">9286318361</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
        {/* Radial glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[700px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(240,165,0,0.09) 0%, transparent 65%)' }} />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-7">
            <div className="w-36 h-36 rounded-full p-1 bg-neutral-900 border-2 border-amber-500/60 pulse-gold overflow-hidden">
              <Image src="/Logo.jpeg" alt="Gorkha Kitchen" width={128} height={128}
                className="w-full h-full object-cover rounded-full" />
            </div>
          </div>

          <p className="text-[9px] tracking-[0.45em] uppercase text-amber-500 mb-3"
            style={{ fontFamily: "'Cinzel', serif" }}>Indian · Nepalese Cuisine</p>

          <h1 className="shimmer-text mb-3 leading-tight"
            style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 6vw, 3.2rem)' }}>
            GORKHA KITCHEN
          </h1>

          <div className="gold-line max-w-xs mx-auto mb-5" />

          <p className="text-sm text-neutral-500 max-w-md mx-auto leading-relaxed font-light">
            Authentic flavours from the Himalayas to your table.<br />
            Crafted with tradition, served with pride.
          </p>

          {/* Info pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { icon: <Star size={11} fill="currentColor" />, label: 'Free Delivery above ₹299' },
              { icon: <Phone size={11} />,                    label: '9286318361' },
              { icon: <Clock size={11} />,                    label: 'Open Daily' },
            ].map((p, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-full
                bg-amber-500/7 border border-amber-500/18 text-neutral-400">
                <span className="text-amber-400">{p.icon}</span>
                {p.label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex justify-center animate-bounce">
            <ChevronDown size={20} className="text-amber-500/40" />
          </div>
        </div>
      </section>

      {/* ── STICKY FILTER BAR ──────────────────────────────────────── */}
      <div className="sticky top-[60px] z-40 bg-black/90 backdrop-blur-xl border-b border-amber-500/12 py-3 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Search */}
          <div className="relative mb-3">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600" />
            <input
              type="text"
              placeholder="Search momos, pizza, burgers..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-sm rounded-xl bg-neutral-900 border border-neutral-800
                text-neutral-100 placeholder-neutral-700 outline-none
                focus:border-amber-500/40 transition-colors"
              style={{ fontFamily: "'Jost', sans-serif" }}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-neutral-400">
                <X size={12} />
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto pb-0.5" style={{ scrollbarWidth: 'none' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSearchQuery('');
                  const found = menuData.find(c => c.title === cat);
                  if (found) setTimeout(() => scrollTo(found.id), 80);
                }}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200
                  ${activeCategory === cat
                    ? 'bg-amber-400 border-amber-400 text-black font-bold'
                    : 'bg-transparent border-neutral-800 text-neutral-500 hover:border-amber-500/50 hover:text-amber-400 hover:bg-amber-500/8'
                  }`}
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MENU ───────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-5xl mb-4">🍽️</div>
            <p className="text-neutral-600 text-sm">No dishes found matching &ldquo;{searchQuery}&rdquo;</p>
          </div>
        ) : (
          filteredCategories.map(cat => <CategorySection key={cat.id} category={cat} />)
        )}
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="border-t border-neutral-900 mt-6 py-12 px-4 text-center">
        <Image src="/Logo.jpeg" alt="Logo" width={52} height={52}
          className="mx-auto rounded-full object-cover opacity-50 mb-4" />
        <p className="text-amber-400 text-[11px] font-semibold tracking-[0.2em]"
          style={{ fontFamily: "'Cinzel', serif" }}>GORKHA KITCHEN</p>
        <p className="text-xs text-neutral-700 mt-1 mb-4">Indian · Nepalese Cuisine</p>
        <div className="gold-line max-w-[200px] mx-auto mb-4" />
        <p className="text-xs text-neutral-700">
          📞 9286318361 &nbsp;·&nbsp; 🚚 Free Delivery above ₹299
        </p>
        <p className="text-xs text-neutral-900 mt-3">© 2025 Gorkha Kitchen. All rights reserved.</p>
      </footer>
    </main>
  );
}