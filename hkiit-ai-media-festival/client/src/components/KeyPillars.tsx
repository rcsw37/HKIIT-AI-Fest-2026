import { Film, Briefcase, Zap, GraduationCap } from 'lucide-react';

const pillars = [
  {
    icon: Film,
    title: '創意敘事',
    description: '通過數碼媒體進行創意敘事，專注於劇本創作、視覺講述和喚起價值，利用AI工具進行創意製作和增強。',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Briefcase,
    title: '職業路徑探索',
    description: '數碼媒體項目必須探索特定的AI增強職業，關注AI如何改變傳統角色，展示各行業的新興機會。',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
  },
  {
    icon: Zap,
    title: '技術創新',
    description: '強調創新使用AI工具量身訂做媒體創作，互動元素吸引觀眾，數碼敘事的實驗性方法。',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: GraduationCap,
    title: '教育發展',
    description: '工作坊和培訓營建立技能，行業專家座談會，參與者的指導機會。',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
  },
];

export default function KeyPillars() {
  return (
    <section id="pillars" className="py-24 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            四大核心支柱
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            「AI數碼媒體節」建立在四個核心支柱上，這些支柱共同創造一個獨特的活動，融合了創意表達和職業探索
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Decorative element */}
                  <div className={`absolute top-0 right-0 w-24 h-24 ${pillar.bgColor} rounded-bl-full opacity-20 -z-10`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

