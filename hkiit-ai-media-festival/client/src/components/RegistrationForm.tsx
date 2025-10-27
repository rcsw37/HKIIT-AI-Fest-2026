import { ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Google Form 嵌入連結設定
// 請將此連結替換為您的 Google Form 嵌入連結
// 取得方式：在 Google Form 編輯頁面 > 點擊「傳送」> 選擇「<>」嵌入 HTML > 複製 src 網址
const GOOGLE_FORM_EMBED_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfrOMGE0c4_UIQ7lQpOiXn4S-RFJkH3oO19Vsq-cec9OLH_aw/viewform?embedded=true';

// 或者使用直接開啟 Google Form 的連結
const GOOGLE_FORM_DIRECT_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfrOMGE0c4_UIQ7lQpOiXn4S-RFJkH3oO19Vsq-cec9OLH_aw/viewform';

// 設定為 true 使用嵌入模式，false 使用直接開啟模式
const USE_EMBEDDED_FORM = true;

export default function RegistrationForm() {
  return (
    <section id="registration" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            立即報名
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            填寫以下表單即可報名參加第一屆HKIIT AI數碼媒體節，開啟您的創意之旅
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {USE_EMBEDDED_FORM ? (
            // 嵌入式 Google Form
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-border">
              <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText size={28} />
                    <div>
                      <h3 className="text-2xl font-bold">參賽報名表</h3>
                      <p className="text-white/80 text-sm">Competition Registration Form</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-white/20 border-white/40 text-white hover:bg-white/30"
                    asChild
                  >
                    <a href={GOOGLE_FORM_DIRECT_URL} target="_blank" rel="noopener noreferrer">
                      在新視窗開啟
                      <ExternalLink className="ml-2" size={16} />
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="relative" style={{ height: '1636px' }}>
                <iframe
                  src={GOOGLE_FORM_EMBED_URL}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="absolute inset-0"
                >
                  載入中…
                </iframe>
              </div>
            </div>
          ) : (
            // 直接開啟 Google Form 的按鈕
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-border text-center">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto">
                  <FileText className="text-white" size={40} />
                </div>
                
                <h3 className="text-3xl font-bold text-foreground">
                  填寫報名表單
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  點擊下方按鈕前往 Google Form 填寫報名資料。表單包含所有必要欄位，提交後我們將盡快與您聯繫。
                </p>

                <div className="bg-blue-50 rounded-2xl p-6 text-left">
                  <h4 className="font-semibold text-foreground mb-3">表單內容包括：</h4>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></span>
                      <span>參賽組別（小學組 / 中學組 / DFS & HD組）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></span>
                      <span>隊伍名稱及隊長資料</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></span>
                      <span>聯絡方式（電話、電郵）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></span>
                      <span>學校/機構名稱</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></span>
                      <span>隊員資料（最多4人）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></span>
                      <span>比賽主題及作品格式選擇</span>
                    </li>
                  </ul>
                </div>

                <Button 
                  size="lg" 
                  className="text-lg px-8"
                  asChild
                >
                  <a href={GOOGLE_FORM_DIRECT_URL} target="_blank" rel="noopener noreferrer">
                    前往填寫報名表
                    <ExternalLink className="ml-2" size={20} />
                  </a>
                </Button>

                <p className="text-sm text-muted-foreground">
                  提交報名表示您同意遵守比賽規則和條款
                </p>
              </div>
            </div>
          )}
        </div>


      </div>
    </section>
  );
}

