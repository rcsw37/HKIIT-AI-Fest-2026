import { useState } from 'react';
import { Palette, Leaf, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    id: 'digital-tech',
    icon: Palette,
    title: '數碼科技與娛樂產業',
    description: '創建探索 AI如何保存和重新詮釋文化的數碼媒體',
    color: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-50 to-blue-100',
    careers: [
      '數碼博物館策展人',
      '音樂聲效製作人',
      '虛擬場景設計師',
      'Content Creator',
      '動畫設計師',
      '攝影師',
      '設計師',
    ],
  },
  {
    id: 'esg',
    icon: Leaf,
    title: '可持續未來 (ESG)',
    description: '製作關於 ESG焦點職業的數碼媒體',
    color: 'from-green-500 to-green-600',
    bgGradient: 'from-green-50 to-green-100',
    careers: [
      '氣候分析師',
      '可持續供應鏈設計師',
      '碳足跡審計師',
      '智能環境監測工程師',
      'ESG風險評估專家',
      '永續環境發展顧問',
    ],
  },
  {
    id: 'web3',
    icon: Globe,
    title: '網絡虛擬世界、社交媒體與Web3',
    description: '設計探索虛擬世界和 Web3職業的數碼媒體',
    color: 'from-purple-500 to-purple-600',
    bgGradient: 'from-purple-50 to-purple-100',
    careers: [
      '元宇宙場景設計師',
      '數位資產分析師',
      '廣告及市場策劃師',
      '遊戲體驗架構師',
      '網頁或手機軟件開發',
      '零售護證明系統工程師',
    ],
  },
];

export default function CompetitionCategories() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="categories" className="py-24 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            比賽主題
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            我們將職業主題與創意媒體製作相結合作為比賽主題，讓參賽者可以探索 AI如何塑造未來的故事和職業
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === index ? 'default' : 'outline'}
                size="lg"
                onClick={() => setActiveCategory(index)}
                className="text-base"
              >
                <Icon className="mr-2" size={20} />
                {category.title}
              </Button>
            );
          })}
        </div>

        {/* Active category content */}
        <div className="max-w-5xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className={`transition-all duration-500 ${
                  activeCategory === index ? 'block' : 'hidden'
                }`}
              >
                <div className={`bg-gradient-to-br ${category.bgGradient} rounded-3xl p-8 lg:p-12`}>
                  <div className="flex items-start gap-6 mb-8">
                    <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="text-white" size={40} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-3 text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-lg text-foreground/70">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-4 text-foreground">相關職業探索：</h4>
                    <div className="flex flex-wrap gap-3">
                      {category.careers.map((career, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm text-sm font-medium text-foreground hover:shadow-md transition-shadow"
                        >
                          {career}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

