export default function TopNav() {
    return (
      <div className="w-full bg-orange-500  text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <span className="font-medium">Achetez & vendez localement – Sénégal</span>
          <div className="flex items-center gap-4">
            <a href="/help" className="hover:underline">Aide</a>
            <a href="/help/contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>
    );
  }
  