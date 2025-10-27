import { Wrench, Users, PenTool, Film, MousePointer, Briefcase, MessageSquare } from 'lucide-react';

const workshops = [
  {
    icon: PenTool,
    title: 'AI輔助劇本創作',
    description: '學習如何使用AI工具增強故事創作，開發角色和情節，同時保持創意控制。',
  },
  {
    icon: Film,
    title: 'AI視覺效果製作',
    description: '探索如何將AI生成的視覺元素整合到傳統影片製作中，創造令人驚嘆的特效。',
  },
  {
    icon: MousePointer,
    title: '互動故事設計',
    description: '學習如何創建引人入勝的互動式數碼體驗，結合AI元素提升用戶參與度。',
  },
];

const lectures = [
  {
    icon: Briefcase,
    title: 'AI時代的數碼媒體職業',
    description: '行業專家分享AI如何改變媒體行業的工作角色，以及未來的職業機會。',
  },
  {
    icon: MessageSquare,
    title: '專業人士座談會',
    description: '與在文化保育、ESG和Web3領域工作的專業人士進行小組討論，了解實際應用。',
  },
];

export default function Training() {
  return (
    <section id="training" className="py-24 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            AI培訓營及講座
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            我們為參賽者提供全面的培訓支持，包括創意技能工作坊和職業探索講座，幫助您掌握AI工具並了解行業趨勢
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Creative Skills Workshops */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Wrench className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-foreground">創意技能工作坊</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {workshops.map((workshop, index) => {
                const Icon = workshop.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-foreground">{workshop.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{workshop.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Career Exploration Lectures */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-foreground">職業探索講座</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {lectures.map((lecture, index) => {
                const Icon = lecture.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-foreground">{lecture.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{lecture.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

