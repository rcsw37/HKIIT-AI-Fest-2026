import { Target, Lightbulb, Rocket, Users } from 'lucide-react';

const visionPoints = [
  {
    icon: Target,
    title: '結合資料搜集、劇本創作、視覺效果製作和互動元素設計',
    color: 'text-primary',
  },
  {
    icon: Lightbulb,
    title: '提升個人對於未來職業發展的關注、就業趨勢和技能培養',
    color: 'text-secondary',
  },
  {
    icon: Rocket,
    title: '運用最新 AI Generative Video 技術製作最終作品',
    color: 'text-accent',
  },
  {
    icon: Users,
    title: '為學生提供實踐機會，探索AI如何改變傳統職業和創造新機遇',
    color: 'text-chart-4',
  },
];

export default function EventVision() {
  return (
    <section id="vision" className="py-24 bg-gradient-to-b from-white to-blue-50/50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            活動願景
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            「第一屆香港資訊科技學院 AI數碼媒體節：未來影格」旨在<span className="text-primary font-semibold">融合創意數碼媒體製作與職業探索</span>，
            將 <span className="text-secondary font-semibold">AI定位為創意工具和職業催化劑</span>。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {visionPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${
                    index === 0 ? 'from-primary/20 to-primary/10' :
                    index === 1 ? 'from-secondary/20 to-secondary/10' :
                    index === 2 ? 'from-accent/20 to-accent/10' :
                    'from-chart-4/20 to-chart-4/10'
                  } flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`${point.color}`} size={28} />
                  </div>
                  <p className="text-lg text-foreground/80 leading-relaxed flex-1">
                    {point.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

