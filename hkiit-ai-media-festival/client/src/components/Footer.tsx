import { Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <div>
                <div className="text-sm font-bold">HKIIT AI 數碼媒體節</div>
                <div className="text-xs text-white/60">Future Frames</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              探索AI如何塑造未來故事與職業，融合創意與科技，開啟數碼媒體新篇章。
            </p>
            
            {/* Organization Logos */}
            <div className="space-y-3">
              <p className="text-xs text-white/50 font-semibold">主辦單位：</p>
              <div className="flex flex-col gap-3">
                <img src="/hkiit-logo.jpg" alt="HKIIT" className="h-12 object-contain object-left brightness-0 invert opacity-80" />
                <img src="/index-academy-logo.png" alt="Index Academy" className="h-10 object-contain object-left brightness-0 invert opacity-80" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">快速連結</h3>
            <ul className="space-y-2">
              {[
                { label: '活動願景', href: '#vision' },
                { label: '核心支柱', href: '#pillars' },
                { label: '比賽主題', href: '#categories' },
                { label: '比賽時程', href: '#timeline' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">參賽資訊</h3>
            <ul className="space-y-2">
              {[
                { label: '作品規格', href: '#formats' },
                { label: '培訓講座', href: '#training' },
                { label: '評審標準', href: '#evaluation' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">聯絡我們</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Mail className="flex-shrink-0 text-white/60 mt-0.5" size={16} />
                <div>
                  <p className="text-sm text-white/70">電郵查詢</p>
                  <a href="mailto:info@hkiit.edu.hk" className="text-sm text-white hover:text-primary transition-colors">
                    info@hkiit.edu.hk
                  </a>
                </div>
              </div>
              <div className="pt-4">
                <a
                  href="https://www.hkiit.edu.hk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  HKIIT 官方網站
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {currentYear} 香港資訊科技學院 (HKIIT) × Index Academy. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                私隱政策
              </a>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                使用條款
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

