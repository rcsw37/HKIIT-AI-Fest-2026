import { useState } from 'react';
import { GraduationCap, School, Building2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const requirements = [
  {
    id: 'primary',
    icon: GraduationCap,
    title: '小學組',
    subtitle: 'Primary School',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    specs: [
      '最大檔案大小：500MB（不論類別）',
      '影片：10-15秒長度 / 平面漫畫本，不多於 7頁',
    ],
    submission: [
      '通過Google雲端硬碟或 YouTube連結提交',
      '必須包含創意陳述解釋過程和使用的 AI工具',
      '比賽期間可隨時上傳作品，最後上傳的作品將被視為參賽作品',
    ],
    link: 'https://shorturl.at/2D960',
  },
  {
    id: 'secondary',
    icon: School,
    title: '中學組',
    subtitle: 'Secondary School',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    specs: [
      '最大檔案大小：500MB（不論類別）',
      '影片：MP4格式，30-45秒長度',
    ],
    submission: [
      '通過Google雲端硬碟或 YouTube連結提交',
      '必須包含創意陳述解釋過程和使用的 AI工具',
      '比賽期間可隨時上傳作品，最後上傳的作品將被視為參賽作品',
    ],
    link: 'https://youtu.be/BiTp_8atP8',
  },
  {
    id: 'higher',
    icon: Building2,
    title: 'DFS & HD組',
    subtitle: 'HKIIT & IVE (All Department)',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    specs: [
      '最大檔案大小：1GB（不論類別）',
      '影片：MP4格式，1-10分鐘長度',
      '互動媒體：網頁格式，移動裝置兼容',
    ],
    submission: [
      '通過Google雲端硬碟或 YouTube連結提交',
      '必須包含創意陳述解釋過程和使用的 AI工具',
      '比賽期間可隨時上傳作品，最後上傳的作品將被視為參賽作品',
    ],
    samples: [
      { label: 'Sample 1', url: 'https://youtu.be/GMQJiPBA' },
      { label: 'Sample 2', url: 'https://youtu.be/AIVCmtcAn9Q' },
    ],
  },
];

export default function TechnicalRequirements() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="requirements" className="py-24 bg-gradient-to-b from-white to-blue-50/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            技術要求
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            根據不同參賽組別，我們設定了相應的技術規格要求，請仔細閱讀並按要求提交作品
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {requirements.map((req, index) => {
            const Icon = req.icon;
            return (
              <Button
                key={req.id}
                variant={activeTab === index ? 'default' : 'outline'}
                size="lg"
                onClick={() => setActiveTab(index)}
                className="text-base"
              >
                <Icon className="mr-2" size={20} />
                {req.title}
              </Button>
            );
          })}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {requirements.map((req, index) => {
            const Icon = req.icon;
            return (
              <div
                key={req.id}
                className={`transition-all duration-500 ${
                  activeTab === index ? 'block' : 'hidden'
                }`}
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${req.color} p-8 text-white`}>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Icon size={32} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold">{req.title}</h3>
                        <p className="text-white/80 text-sm">{req.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-8">
                    {/* File Specifications */}
                    <div>
                      <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        檔案規格
                      </h4>
                      <ul className="space-y-3">
                        {req.specs.map((spec, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-foreground/70">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="flex-1">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Submission Methods */}
                    <div>
                      <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        提交方式
                      </h4>
                      <ul className="space-y-3">
                        {req.submission.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-foreground/70">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-xs font-bold mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Submission Link */}
                    <div className={`p-6 rounded-2xl ${req.bgColor} border-2 border-dashed border-current/20`}>
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div>
                          <p className="font-semibold text-foreground mb-1">提交連結：</p>
                          <p className="text-sm text-muted-foreground">點擊按鈕前往提交頁面</p>
                        </div>
                        <Button asChild>
                          <a href={req.link} target="_blank" rel="noopener noreferrer">
                            前往提交
                            <ExternalLink className="ml-2" size={16} />
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Samples (if available) */}
                    {req.samples && (
                      <div>
                        <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-accent"></span>
                          參考範例
                        </h4>
                        <div className="flex gap-4">
                          {req.samples.map((sample, idx) => (
                            <Button key={idx} variant="outline" asChild>
                              <a href={sample.url} target="_blank" rel="noopener noreferrer">
                                {sample.label}
                                <ExternalLink className="ml-2" size={16} />
                              </a>
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
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

