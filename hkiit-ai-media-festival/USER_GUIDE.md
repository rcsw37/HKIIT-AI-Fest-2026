# 第一屆香港資訊科技學院 AI 數碼媒體節：未來影格 - 網頁使用及修改指引

## 目錄

1. [專案概覽](#專案概覽)
2. [快速開始](#快速開始)
3. [網頁結構說明](#網頁結構說明)
4. [常見修改指引](#常見修改指引)
5. [進階自訂](#進階自訂)
6. [部署與發佈](#部署與發佈)
7. [常見問題](#常見問題)

---

## 專案概覽

本網頁是為「第一屆香港資訊科技學院 AI 數碼媒體節：未來影格」活動設計的官方網站，包含完整的活動資訊展示、比賽細節說明及線上報名功能。

### 技術架構

- **前端框架**: React 19
- **樣式系統**: Tailwind CSS 4
- **UI 組件庫**: shadcn/ui
- **路由**: Wouter
- **開發工具**: Vite

### 主要功能

- 活動資訊展示（願景、核心支柱、比賽主題）
- 作品規格與技術要求說明（含範例預覽）
- 比賽時程時間軸
- AI 培訓營及講座資訊
- 評審標準說明
- Google Form 整合報名系統

---

## 快速開始

### 存取開發環境

1. 點擊專案卡片上的「View」按鈕，開啟預覽面板
2. 在管理介面右側可以即時查看網頁效果
3. 任何程式碼修改都會自動熱更新（Hot Reload）

### 查看程式碼

1. 點擊「Code」按鈕，查看完整檔案結構
2. 可以直接在線上編輯器修改檔案
3. 也可以下載所有檔案到本地進行編輯

### 儲存版本

1. 完成修改後，使用 `webdev_save_checkpoint` 工具儲存檢查點
2. 每個檢查點都會保留完整的專案狀態
3. 可以隨時回滾到先前的版本

---

## 網頁結構說明

### 檔案結構

```
client/
├── public/                          # 靜態資源
│   ├── hkiit-logo.jpg              # HKIIT 標誌
│   ├── index-academy-logo.png      # Index Academy 標誌
│   └── SampleV4.pdf                # 小學組範例 PDF
├── src/
│   ├── components/                  # React 元件
│   │   ├── Navigation.tsx          # 導航列
│   │   ├── Hero.tsx                # 首頁橫幅
│   │   ├── EventVision.tsx         # 活動願景
│   │   ├── KeyPillars.tsx          # 四大核心支柱
│   │   ├── CompetitionCategories.tsx  # 比賽主題
│   │   ├── SubmissionFormats.tsx   # 作品規格與技術要求
│   │   ├── Timeline.tsx            # 比賽時程
│   │   ├── Training.tsx            # 培訓講座
│   │   ├── Evaluation.tsx          # 評審標準
│   │   ├── RegistrationForm.tsx    # 報名表單
│   │   └── Footer.tsx              # 頁腳
│   ├── pages/
│   │   └── Home.tsx                # 主頁面（整合所有元件）
│   ├── App.tsx                     # 應用程式入口
│   ├── index.css                   # 全域樣式
│   └── main.tsx                    # React 入口點
└── index.html                       # HTML 模板
```

### 頁面區塊說明

| 區塊名稱 | 元件檔案 | 功能說明 |
|---------|---------|---------|
| 導航列 | `Navigation.tsx` | 固定頂部導航，包含錨點連結 |
| 首頁橫幅 | `Hero.tsx` | 展示活動標題、主辦單位標誌、統計數據 |
| 活動願景 | `EventVision.tsx` | 說明活動目標與願景 |
| 核心支柱 | `KeyPillars.tsx` | 展示四大核心支柱 |
| 比賽主題 | `CompetitionCategories.tsx` | 三大比賽主題說明 |
| 作品規格 | `SubmissionFormats.tsx` | 各組別作品規格、技術要求及範例 |
| 比賽時程 | `Timeline.tsx` | 時間軸展示活動流程 |
| 培訓講座 | `Training.tsx` | AI 培訓營及講座資訊 |
| 評審標準 | `Evaluation.tsx` | 評分標準說明 |
| 報名表單 | `RegistrationForm.tsx` | Google Form 嵌入式報名表單 |
| 頁腳 | `Footer.tsx` | 聯絡資訊、快速連結、主辦單位 |

---

## 常見修改指引

### 1. 修改活動日期與時程

**檔案位置**: `client/src/components/Timeline.tsx`

找到以下程式碼區塊：

```tsx
const timelineEvents = [
  {
    date: '2025年1月',
    title: '活動啟動',
    description: '正式開放報名，發佈比賽詳情',
    color: 'bg-blue-500',
  },
  // ... 其他時程項目
];
```

修改 `date`、`title`、`description` 欄位即可更新時程內容。

### 2. 更新 Google Form 連結

**檔案位置**: `client/src/components/RegistrationForm.tsx`

找到以下常數定義：

```tsx
const GOOGLE_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/...";
const GOOGLE_FORM_DIRECT_URL = "https://docs.google.com/forms/d/e/...";
```

將您的 Google Form 嵌入連結和直接連結替換即可。

**取得 Google Form 連結步驟**：
1. 開啟您的 Google Form
2. 點擊右上角「傳送」按鈕
3. 選擇「<>」（嵌入 HTML）標籤
4. 複製 `src="..."` 中的網址作為 `GOOGLE_FORM_EMBED_URL`
5. 點擊「縮短網址」取消勾選，複製完整網址作為 `GOOGLE_FORM_DIRECT_URL`

### 3. 修改主辦單位標誌

**檔案位置**: `client/public/`

替換以下檔案：
- `hkiit-logo.jpg` - HKIIT 標誌
- `index-academy-logo.png` - Index Academy 標誌

**注意事項**：
- 保持檔案名稱不變，或同步修改引用該圖片的元件
- 建議使用 PNG 格式（支援透明背景）
- 建議尺寸：寬度 300-500px

### 4. 更新比賽主題

**檔案位置**: `client/src/components/CompetitionCategories.tsx`

找到 `categories` 陣列：

```tsx
const categories = [
  {
    icon: Gamepad2,
    title: '數碼科技與娛樂產業',
    description: '探索AI如何革新遊戲、電影、音樂等娛樂領域...',
    color: 'from-blue-500 to-cyan-500',
    examples: ['AI遊戲設計師', 'AI電影特效師', '虛擬偶像製作人'],
  },
  // ... 其他主題
];
```

修改 `title`、`description`、`examples` 即可更新主題內容。

### 5. 修改參考範例影片

**檔案位置**: `client/src/components/SubmissionFormats.tsx`

找到各組別的範例區塊：

**中學組範例**：
```tsx
<iframe
  src="https://www.youtube.com/embed/BjITX9ajtP8"
  // ... 其他屬性
></iframe>
```

**大專組範例**：
```tsx
<iframe
  src="https://www.youtube.com/embed/OaCMk3nFRZY"
  // ... 其他屬性
></iframe>
```

將 `src` 屬性中的 YouTube 影片 ID 替換為您的影片 ID。

**取得 YouTube 嵌入連結**：
1. 開啟 YouTube 影片
2. 點擊「分享」→「嵌入」
3. 複製 `src="..."` 中的網址

**小學組 PDF 範例**：
```tsx
<iframe
  src="https://drive.google.com/file/d/1p_tltx-196Az61hfXcOU_MBuSJGJMwqd/preview"
  // ... 其他屬性
></iframe>
```

將 Google Drive 檔案 ID 替換為您的 PDF 檔案 ID。

### 6. 修改配色方案

**檔案位置**: `client/src/index.css`

找到 CSS 變數定義區塊：

```css
:root {
  --primary: 217 91% 60%;        /* 藍色 */
  --secondary: 340 82% 52%;      /* 粉紅色 */
  --accent: 280 89% 60%;         /* 紫色 */
  /* ... 其他顏色 */
}
```

這些數值使用 HSL 格式（色相 飽和度% 亮度%），修改即可改變整體配色。

**顏色工具推薦**：
- [Coolors](https://coolors.co/) - 配色方案生成器
- [HSL Color Picker](https://hslpicker.com/) - HSL 顏色選擇器

### 7. 修改文字內容

大部分文字內容都直接寫在各元件中，找到對應的元件檔案後，直接修改 JSX 中的文字即可。

**範例** - 修改活動願景：

**檔案位置**: `client/src/components/EventVision.tsx`

```tsx
<p className="text-lg text-muted-foreground leading-relaxed">
  探索AI如何塑造未來故事與職業...  {/* 修改這裡的文字 */}
</p>
```

### 8. 修改統計數據

**檔案位置**: `client/src/components/Hero.tsx`

找到統計數據區塊：

```tsx
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
```

修改數字和標籤文字即可。

---

## 進階自訂

### 新增區塊

1. 在 `client/src/components/` 建立新元件檔案，例如 `Sponsors.tsx`
2. 撰寫元件內容：

```tsx
export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">贊助單位</h2>
        {/* 您的內容 */}
      </div>
    </section>
  );
}
```

3. 在 `client/src/pages/Home.tsx` 中引入並使用：

```tsx
import Sponsors from '@/components/Sponsors';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ... 其他元件 */}
      <Sponsors />
      {/* ... */}
    </div>
  );
}
```

4. 在導航列加入連結（`client/src/components/Navigation.tsx`）：

```tsx
const navItems = [
  // ... 現有項目
  { label: '贊助單位', href: '#sponsors' },
];
```

### 修改字體

**檔案位置**: `client/index.html`

找到 Google Fonts 引入：

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&family=Montserrat:wght@400;600;700;900&display=swap" rel="stylesheet">
```

替換為您想要的字體，然後在 `client/src/index.css` 中更新字體定義：

```css
:root {
  --font-sans: "Noto Sans TC", "Montserrat", sans-serif;
}
```

### 新增動畫效果

本專案已在 `client/src/index.css` 中定義了多個動畫：

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

您可以在任何元件中使用這些動畫類別，或新增自訂動畫。

### 響應式設計調整

Tailwind CSS 使用斷點前綴來控制響應式樣式：

- `sm:` - 小螢幕（≥640px）
- `md:` - 中等螢幕（≥768px）
- `lg:` - 大螢幕（≥1024px）
- `xl:` - 超大螢幕（≥1280px）

**範例**：

```tsx
<div className="text-base md:text-lg lg:text-xl">
  {/* 小螢幕 16px，中等螢幕 18px，大螢幕 20px */}
</div>
```

---

## 部署與發佈

### 建立檢查點

在發佈前，務必先建立檢查點：

1. 確認所有修改都已完成並測試
2. 使用工具儲存檢查點
3. 填寫清晰的描述說明此版本的變更內容

### 發佈網站

1. 點擊管理介面右上角的「Publish」按鈕
2. 系統會自動部署最新的檢查點版本
3. 部署完成後會獲得一個公開網址（`xxx.manus.space`）

### 自訂網域

1. 點擊「Dashboard」按鈕
2. 進入「Settings」→「Domains」
3. 可以修改子網域前綴或綁定自訂網域

### 版本管理

- 每個檢查點都有唯一的版本 ID
- 可以在「Dashboard」查看所有歷史版本
- 點擊「Rollback」可以回滾到先前的版本

---

## 常見問題

### Q1: 如何修改網頁標題和圖示？

**A**: 編輯 `client/index.html`：

```html
<head>
  <title>第一屆香港資訊科技學院AI數碼媒體節：未來影格</title>
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
</head>
```

將自訂的 favicon 圖片放到 `client/public/` 目錄，然後更新 `href` 路徑。

### Q2: Google Form 無法顯示怎麼辦？

**A**: 檢查以下事項：
1. 確認 Google Form 已設定為「任何人都可以填寫」
2. 檢查嵌入連結是否正確（應包含 `/viewform?embedded=true`）
3. 確認 iframe 的 `src` 屬性使用 HTTPS 協定
4. 檢查瀏覽器是否阻擋了 iframe 載入

### Q3: 如何新增更多參賽組別？

**A**: 修改 `client/src/components/SubmissionFormats.tsx`，在 `formats` 陣列中新增項目：

```tsx
const formats = [
  // ... 現有組別
  {
    id: 'university',
    title: '大學組',
    badge: 'University',
    color: 'from-purple-500 to-pink-500',
    requirements: [
      // ... 要求項目
    ],
    examples: {
      type: 'video',
      videos: [
        {
          title: '範例標題',
          embedUrl: 'https://www.youtube.com/embed/VIDEO_ID',
        },
      ],
    },
  },
];
```

### Q4: 如何修改頁腳的聯絡資訊？

**A**: 編輯 `client/src/components/Footer.tsx`，找到聯絡資訊區塊：

```tsx
<div>
  <h3 className="text-lg font-bold mb-4">聯絡我們</h3>
  <ul className="space-y-2">
    <li className="flex items-center gap-2 text-sm text-white/70">
      <Mail size={16} />
      contact@hkiit.edu.hk  {/* 修改電郵 */}
    </li>
    <li className="flex items-center gap-2 text-sm text-white/70">
      <Phone size={16} />
      +852 1234 5678  {/* 修改電話 */}
    </li>
  </ul>
</div>
```

### Q5: 如何調整區塊的顯示順序？

**A**: 編輯 `client/src/pages/Home.tsx`，調整元件的排列順序：

```tsx
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <EventVision />
      {/* 調整以下元件的順序 */}
      <KeyPillars />
      <CompetitionCategories />
      <SubmissionFormats />
      <Timeline />
      <Training />
      <Evaluation />
      <RegistrationForm />
      <Footer />
    </div>
  );
}
```

### Q6: 如何隱藏某個區塊？

**A**: 在 `client/src/pages/Home.tsx` 中，將不需要的元件行註解掉：

```tsx
{/* <Training /> */}  {/* 這個區塊將不會顯示 */}
```

### Q7: 修改後沒有即時更新怎麼辦？

**A**: 
1. 檢查開發伺服器是否正在運行（查看 Dev Server 狀態）
2. 嘗試重新整理瀏覽器頁面（Ctrl/Cmd + R）
3. 如果仍無效，使用 `webdev_restart_server` 工具重啟開發伺服器
4. 檢查瀏覽器控制台是否有錯誤訊息

### Q8: 如何備份網站資料？

**A**: 
1. 點擊「Code」面板中的「Download All Files」下載完整專案
2. 定期建立檢查點，系統會自動保存版本歷史
3. 重要的圖片、PDF 等資源檔案建議另外備份

### Q9: 如何優化網頁載入速度？

**A**: 
1. 壓縮圖片檔案（建議使用 [TinyPNG](https://tinypng.com/)）
2. 使用適當的圖片格式（照片用 JPG，圖示用 PNG 或 SVG）
3. 避免嵌入過大的影片檔案，使用 YouTube 等外部平台
4. 檢查是否有未使用的元件或樣式

### Q10: 網站在手機上顯示不正常怎麼辦？

**A**: 
1. 使用瀏覽器的開發者工具測試響應式設計（F12 → 切換裝置工具列）
2. 檢查是否有固定寬度的元素（應使用 `max-w-` 而非 `w-[固定值]`）
3. 確認文字大小在小螢幕上是否合適
4. 測試導航選單在手機上是否正常運作

---

## 技術支援

如需進一步協助，請參考：

- **Tailwind CSS 文件**: https://tailwindcss.com/docs
- **React 文件**: https://react.dev/
- **shadcn/ui 元件庫**: https://ui.shadcn.com/

或聯絡技術支援團隊尋求協助。

---

**文件版本**: 1.0  
**最後更新**: 2025年1月  
**專案版本**: fd5c108d

