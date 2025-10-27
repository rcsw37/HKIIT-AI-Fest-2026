import { Flag, FileCheck, Presentation, Upload, Award } from 'lucide-react';

const timelineEvents = [
  {
    icon: Flag,
    date: '2025年12月',
    title: '簡介會開放報名',
    description: '活動啟動，介紹比賽主題和規則，開始接受參賽隊伍報名',
    color: 'from-cyan-500 to-cyan-600',
    position: 'left',
  },
  {
    icon: FileCheck,
    date: '2026年1月',
    title: '截止報名',
    description: '參賽隊伍報名截止，確認參賽資格和類別',
    color: 'from-blue-500 to-blue-600',
    position: 'right',
  },
  {
    icon: Presentation,
    date: '2026年1月-2026年3月',
    title: 'AI培訓營及講座',
    description: '提供AI工具培訓、數碼媒體製作和職業探索工作坊',
    color: 'from-green-500 to-green-600',
    position: 'left',
  },
  {
    icon: Upload,
    date: '2026年5月中旬',
    title: '作品提交截止',
    description: '所有參賽作品必須在此日期前提交，包括創意說明文件',
    color: 'from-yellow-500 to-yellow-600',
    position: 'right',
  },
  {
    icon: Award,
    date: '2026年6月-7月',
    title: '成果發布與頒獎典禮',
    description: '展示優秀作品，頒發獎項，慶祝參與者的成就',
    color: 'from-orange-500 to-orange-600',
    position: 'left',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold">
            比賽時程
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            「AI數碼媒體節」將按照原定時間表進行，從2025年11月到2026年7月，為參與者提供充分的時間發展創意和技術技能
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 via-green-500 via-yellow-500 to-orange-500 -translate-x-1/2"></div>

            {/* Events */}
            <div className="space-y-16">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                const isLeft = event.position === 'left';
                
                return (
                  <div key={index} className="relative">
                    {/* Center dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary z-10"></div>

                    {/* Content */}
                    <div className={`flex items-center ${isLeft ? 'justify-end' : 'justify-start'}`}>
                      <div className={`w-5/12 ${isLeft ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
                          <div className={`flex items-start gap-4 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
                            <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center`}>
                              <Icon className="text-white" size={24} />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-primary mb-1">{event.date}</div>
                              <h3 className="text-xl font-bold mb-2 text-foreground">{event.title}</h3>
                              <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              
              return (
                <div key={index} className="relative pl-12">
                  {/* Line */}
                  {index < timelineEvents.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary -translate-x-1/2"></div>
                  )}

                  {/* Dot */}
                  <div className="absolute left-0 top-6 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <Icon className="text-white" size={20} />
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-border">
                    <div className="text-sm font-semibold text-primary mb-1">{event.date}</div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{event.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

