import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Logos */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="px-5 py-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-md">
                <img src="/hkiit-logo.jpg" alt="HKIIT" className="h-10 object-contain" />
              </div>
              <span className="text-muted-foreground font-bold text-xl">×</span>
              <div className="px-5 py-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-md">
                <img src="/index-academy-logo.png" alt="Index Academy" className="h-8 object-contain" />
              </div>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Sparkles size={16} />
                第一屆 AI 數碼媒體節
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  未來影格
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground/80">
                第一屆香港資訊科技學院<br />
                AI數碼媒體節
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground font-medium italic">
                Where AI Shapes Tomorrow's Stories and Careers
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-foreground/70 max-w-xl">
              探索AI如何塑造未來故事與職業。融合創意數碼媒體製作與職業探索，將AI定位為創意工具和職業催化劑，開啟數碼媒體新篇章。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => handleScrollTo('#registration')}
              >
                立即報名
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
                onClick={() => handleScrollTo('#vision')}
              >
                了解更多
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">比賽主題</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">3</div>
                <div className="text-sm text-muted-foreground">參賽組別</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">6</div>
                <div className="text-sm text-muted-foreground">個月活動期</div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Geometric shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl rotate-12 animate-float"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl -rotate-12 animate-float delay-500"></div>
              </div>
              
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl shadow-2xl flex items-center justify-center animate-pulse-slow">
                  <div className="text-white text-6xl font-black">AI</div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-primary/30 rounded-lg rotate-45 animate-float-slow"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-secondary/30 rounded-lg -rotate-12 animate-float delay-1000"></div>
              <div className="absolute top-1/2 right-0 w-12 h-12 bg-accent/30 rounded-full animate-bounce-slow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-30px) rotate(45deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .delay-500 { animation-delay: 500ms; }
        .delay-1000 { animation-delay: 1000ms; }
      `}</style>
    </section>
  );
}

