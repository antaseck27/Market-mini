export default function Footer(){
    return (
      <footer className="mt-8 bg-[#0f0f0f] text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-orange text-white font-bold">MM</span>
              <span className="font-semibold text-lg">Mini Marketplace</span>
            </div>
            <p className="text-sm text-white/80">Achetez et vendez localement, simplement et rapidement.</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Catégories populaires</div>
            <ul className="space-y-1 text-sm text-white/80">
              <li>Électronique</li><li>Mode</li><li>Services</li><li>Maison</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Services</div>
            <ul className="space-y-1 text-sm text-white/80">
              <li>À propos</li><li>Conditions</li><li>Confidentialité</li><li>Support</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Contact</div>
            <ul className="space-y-1 text-sm text-white/80">
              <li>WhatsApp : +221 77 000 00 00</li>
              <li>Email : contact@mini-marketplace.dev</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-white/60 flex items-center justify-between">
            <span>© {new Date().getFullYear()} Mini Marketplace</span>
            {/* <span>Made with ❤️ & Tailwind</span> */}
            <div className="">
            <div className="max-w-7xl mx-auto px-4 py-3 text-xs text-white/60 flex justify-between items-center">
    <span> MM</span>
    <a href="/admin" className="hover:text-white/90">
      Accès administrateur
    </a>
  </div>
</div>
            <span>Bakeli</span>
          </div>
        </div>
      </footer>
    );
  }
  