import { Lightbulb, Search, Zap, Users } from 'lucide-react';

const criteria = [
  {
    icon: Lightbulb,
    title: '創意敘事',
    weight: '30-40%',
    description: '評估作品的故事性、原創性和娛樂價值，以及AI工具如何增強而非取代創意表達。',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Search,
    title: '職業探索深度',
    weight: '20-30%',
    description: '評估作品對所選職業領域的研究深度、對AI如何改變該職業的洞察，以及對未來趨勢的前瞻性分析。',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
  },
  {
    icon: Zap,
    title: '技術執行',
    weight: '20-30%',
    description: '評估AI工具的創新使用、技術整合的無縫性，以及作品的整體製作質量和專業水準。',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Users,
    title: '互動視覺元素',
    weight: '10-20%',
    description: '評估作品如何吸引觀眾參與、提供沉浸式體驗，以及創造有意義的互動機會。',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
  },
];

export default function Evaluation() {
  return (
    <section id="evaluation" className="py-24 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            評審標準
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            評審將根據以下四個標準對參賽作品進行評估，這些標準平衡了創意表達和職業探索的雙重目標
          </p>
          <p className="text-sm text-muted-foreground italic">
            （按不同參賽組別會有所調整）
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {criteria.map((criterion, index) => {
            const Icon = criterion.icon;
            
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                {/* Header with gradient */}
                <div className={`relative bg-gradient-to-br ${criterion.color} p-6`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Icon className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {criterion.title}
                        </h3>
                        <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                          <span className="text-sm font-semibold text-white">{criterion.weight}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-foreground/70 leading-relaxed">
                    {criterion.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className={`h-2 bg-gradient-to-r ${criterion.color}`}></div>
              </div>
            );
          })}
        </div>

        {/* Additional note */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-dashed border-primary/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-foreground">評審重點</h4>
                <p className="text-foreground/70 leading-relaxed">
                  評審團將特別關注參賽者如何巧妙地將AI技術融入創作過程，同時保持作品的原創性和創意表達。
                  我們鼓勵參賽者在作品中展現對未來職業發展的深入思考，以及如何運用AI工具來實現創意願景。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

