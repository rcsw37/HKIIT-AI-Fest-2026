import { useState } from 'react';
import { GraduationCap, School, Building2, FileText, Video, ExternalLink, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    id: 'primary',
    icon: GraduationCap,
    title: '小學組',
    subtitle: 'Primary School',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    formats: [
      {
        type: '繪本製作',
        icon: FileText,
        specs: [
          '格式：整合為多頁PDF',
          '長度：不多於 7 頁',
          '必須包含AI生成元素',
        ],
      },
      {
        type: '影片製作',
        icon: Video,
        specs: [
          '格式：MP4',
          '長度：10-15秒',
          '必須包含AI生成元素',
        ],
      },
    ],
    technicalRequirements: [
      '最大檔案大小：500MB（不論類別）',
      '通過Google雲端硬碟或 YouTube連結提交',
      '必須包含創意陳述解釋過程和使用的 AI工具',
      '比賽期間可隨時上傳作品，最後上傳的作品將被視為參賽作品',
    ],
    submissionLink: 'https://shorturl.at/2D960',
    sampleType: 'pdf',
    samplePdf: 'https://drive.google.com/file/d/1p_tltx-196Az61hfXcOU_MBuSJGJMwqd/preview',
    sampleTitle: '小學組參考範例',
  },
  {
    id: 'secondary',
    icon: School,
    title: '中學組',
    subtitle: 'Secondary School',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    formats: [
      {
        type: '繪本製作',
        icon: FileText,
        specs: [
          '格式：整合為多頁PDF',
          '必須包含AI生成元素',
        ],
      },
      {
        type: '影片製作',
        icon: Video,
        specs: [
          '格式：MP4',
          '長度：30-45秒',
          '必須包含AI生成元素',
        ],
      },
      {
        type: '多媒體演示',
        icon: Video,
        specs: [
          '不多於 10 頁的演示材料',
          '數碼雜誌、數據可視化、音頻類體驗',
        ],
      },
    ],
    technicalRequirements: [
      '最大檔案大小：500MB（不論類別）',
      '通過Google雲端硬碟或 YouTube連結提交',
      '必須包含創意陳述解釋過程和使用的 AI工具',
      '比賽期間可隨時上傳作品，最後上傳的作品將被視為參賽作品',
    ],
    submissionLink: 'https://youtu.be/BiTp_8atP8',
    sampleType: 'youtube',
    sampleVideos: [
      {
        title: '介紹廣告及市場策劃師',
        videoId: 'BjITX9ajtP8',
      },
    ],
  },
  {
    id: 'higher',
    icon: Building2,
    title: 'DFS & HD組',
    subtitle: 'HKIIT & IVE (All Department)',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    formats: [
      {
        type: '繪本製作',
        icon: FileText,
        specs: [
          '格式：整合為多頁PDF',
          '必須包含AI生成元素',
        ],
      },
      {
        type: '影片製作',
        icon: Video,
        specs: [
          '格式：MP4',
          '長度：1-10分鐘',
          '必須包含AI生成元素',
        ],
      },
      {
        type: '多媒體演示',
        icon: Video,
        specs: [
          '互動媒體：網頁格式，移動裝置兼容',
          '數碼雜誌、數據可視化、音頻類體驗',
        ],
      },
    ],
    technicalRequirements: [
      '最大檔案大小：1GB（不論類別）',
      '通過Google雲端硬碟或 YouTube連結提交',
      '必須包含創意陳述解釋過程和使用的 AI工具',
      '比賽期間可隨時上傳作品，最後上傳的作品將被視為參賽作品',
    ],
    submissionLink: 'https://youtu.be/GMQJiPBA',
    sampleType: 'youtube',
    sampleVideos: [
      {
        title: '未來職業：數碼博物館策展人',
        videoId: 'OaCMk3nFRZY',
      },
      {
        title: 'Future Frontiers Podcast - AI Climate Analyst',
        videoId: 'a1VxmpAot9Q',
      },
    ],
  },
];

export default function SubmissionFormats() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="formats" className="py-24 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            作品規格與技術要求
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            根據不同參賽組別，我們設定了相應的作品格式和技術規格要求，請仔細閱讀並按要求提交作品
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeTab === index ? 'default' : 'outline'}
                size="lg"
                onClick={() => setActiveTab(index)}
                className="text-base"
              >
                <Icon className="mr-2" size={20} />
                {category.title}
              </Button>
            );
          })}
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className={`transition-all duration-500 ${
                  activeTab === index ? 'block' : 'hidden'
                }`}
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-border">
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${category.color} p-8 text-white`}>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Icon size={32} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold">{category.title}</h3>
                        <p className="text-white/80 text-sm">{category.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-8">
                    {/* Format Options */}
                    <div>
                      <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        作品格式選項
                      </h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        {category.formats.map((format, idx) => {
                          const FormatIcon = format.icon;
                          return (
                            <div
                              key={idx}
                              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-border hover:border-primary transition-colors"
                            >
                              <div className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                                  <FormatIcon className="text-white" size={20} />
                                </div>
                                <h5 className="font-bold text-lg">{format.type}</h5>
                              </div>
                              <ul className="space-y-2">
                                {format.specs.map((spec, specIdx) => (
                                  <li key={specIdx} className="flex items-start gap-2 text-sm text-foreground/70">
                                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></span>
                                    <span>{spec}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Technical Requirements */}
                    <div>
                      <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        技術規格與提交要求
                      </h4>
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                        <ul className="space-y-3">
                          {category.technicalRequirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-foreground/80">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold mt-0.5">
                                {idx + 1}
                              </span>
                              <span className="flex-1">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Submission Link */}
                    <div className={`p-6 rounded-2xl ${category.bgColor} border-2 border-dashed border-current/20`}>
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div>
                          <p className="font-semibold text-foreground mb-1">作品提交連結：</p>
                          <p className="text-sm text-muted-foreground">點擊按鈕前往提交頁面</p>
                        </div>
                        <Button asChild>
                          <a href={category.submissionLink} target="_blank" rel="noopener noreferrer">
                            前往提交
                            <ExternalLink className="ml-2" size={16} />
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Sample Works */}
                    <div>
                      <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Play className="text-accent" size={24} />
                        參考範例
                      </h4>

                      {category.sampleType === 'pdf' && category.samplePdf && (
                        <div className="bg-gray-100 rounded-2xl overflow-hidden border-2 border-border">
                          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 text-white">
                            <h5 className="font-bold text-lg">{category.sampleTitle}</h5>
                          </div>
                          <div className="relative" style={{ height: '600px' }}>
                            <iframe
                              src={category.samplePdf}
                              width="100%"
                              height="100%"
                              className="absolute inset-0"
                              title={category.sampleTitle}
                            />
                          </div>
                        </div>
                      )}

                      {category.sampleType === 'youtube' && category.sampleVideos && (
                        <div className="grid md:grid-cols-2 gap-6">
                          {category.sampleVideos.map((video, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border">
                              <div className={`bg-gradient-to-r ${category.color} p-4 text-white`}>
                                <h5 className="font-bold">{video.title}</h5>
                              </div>
                              <div className="aspect-video">
                                <iframe
                                  width="100%"
                                  height="100%"
                                  src={`https://www.youtube.com/embed/${video.videoId}`}
                                  title={video.title}
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  referrerPolicy="strict-origin-when-cross-origin"
                                  allowFullScreen
                                  className="w-full h-full"
                                ></iframe>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
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

