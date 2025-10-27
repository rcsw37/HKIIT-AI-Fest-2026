# Google Form 整合設定說明

本網頁支援直接整合 Google Form 來收集參賽報名資料，資料會自動儲存到 Google Sheets。

## 設定步驟

### 1. 建立 Google Form

前往 [Google Forms](https://forms.google.com) 建立新表單，建議包含以下欄位：

#### 必填欄位

1. **參賽組別** (單選題)
   - 小學組
   - 中學組
   - DFS & HD組

2. **隊伍名稱** (簡答)

3. **隊長姓名** (簡答)

4. **聯絡電話** (簡答)

5. **電郵地址** (簡答)
   - 可設定為「電子郵件地址驗證」

6. **學校/機構名稱** (簡答)

7. **比賽主題** (單選題)
   - 數碼科技與娛樂產業
   - 可持續未來 (ESG)
   - 網絡虛擬世界、社交媒體與Web3

8. **作品格式** (單選題)
   - 繪本製作
   - 影片製作
   - 多媒體演示

#### 選填欄位

9. **隊員姓名 1** (簡答，選填)

10. **隊員姓名 2** (簡答，選填)

11. **隊員姓名 3** (簡答，選填)

12. **隊員姓名 4** (簡答，選填)

13. **備註** (段落，選填)

### 2. 取得 Google Form 連結

#### 方法 A：嵌入式表單（推薦）

1. 在 Google Form 編輯頁面，點擊右上角「傳送」按鈕
2. 選擇「<>」（嵌入 HTML）標籤
3. 複製 iframe 中的 `src` 網址，例如：
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSe.../viewform?embedded=true
   ```

#### 方法 B：直接開啟連結

1. 在 Google Form 編輯頁面，點擊右上角「傳送」按鈕
2. 選擇「連結」標籤
3. 點擊「縮短網址」（可選）
4. 複製連結，例如：
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSe.../viewform
   ```

### 3. 更新網頁設定

編輯檔案：`client/src/components/RegistrationForm.tsx`

找到以下設定並更新：

```typescript
// 將此連結替換為您的 Google Form 嵌入連結
const GOOGLE_FORM_EMBED_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true';

// 將此連結替換為您的 Google Form 直接開啟連結
const GOOGLE_FORM_DIRECT_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform';

// 設定為 true 使用嵌入模式，false 使用直接開啟模式
const USE_EMBEDDED_FORM = true;
```

### 4. 設定 Google Sheets 自動收集

Google Form 會自動將提交的資料儲存到關聯的 Google Sheets：

1. 在 Google Form 編輯頁面，點擊「回覆」標籤
2. 點擊右上角的 Google Sheets 圖示
3. 選擇「建立新試算表」或「選取現有試算表」
4. 所有提交的資料會自動同步到 Google Sheets

### 5. 查看提交資料

在 Google Sheets 中，您可以：

- 即時查看所有提交的報名資料
- 匯出為 Excel、CSV 等格式
- 使用篩選、排序功能管理資料
- 設定通知，在有新提交時收到電郵通知

## 顯示模式選擇

### 嵌入模式 (`USE_EMBEDDED_FORM = true`)

**優點：**
- 使用者無需離開網站即可填寫表單
- 提供更流暢的使用體驗
- 保持網站的整體設計風格

**缺點：**
- 需要較大的頁面空間
- 在某些裝置上可能需要滾動

### 直接開啟模式 (`USE_EMBEDDED_FORM = false`)

**優點：**
- 頁面載入更快
- 使用 Google Form 的完整功能
- 適合複雜的表單

**缺點：**
- 使用者需要跳轉到新頁面
- 可能影響使用者體驗的連貫性

## 進階設定

### 自訂表單外觀

在 Google Form 編輯頁面：

1. 點擊右上角的「調色盤」圖示
2. 選擇主題顏色（建議使用藍色系配合網站風格）
3. 選擇背景圖片或顏色
4. 選擇字型樣式

### 設定自動回覆

1. 在 Google Form 編輯頁面，點擊「設定」
2. 選擇「簡報」標籤
3. 勾選「顯示進度列」（如果表單較長）
4. 在「回覆」標籤中，設定「回覆收據」
5. 自訂確認訊息，例如：
   ```
   感謝您報名參加第一屆HKIIT AI數碼媒體節！
   我們已收到您的報名資料，將盡快與您聯繫。
   ```

### 設定電郵通知

1. 在 Google Sheets 中，點擊「工具」→「通知規則」
2. 選擇「使用者提交表單時」
3. 設定通知頻率（立即、每日摘要等）
4. 儲存設定

## 測試

設定完成後，請務必測試：

1. 在網頁上填寫並提交測試資料
2. 檢查 Google Sheets 是否正確收到資料
3. 確認所有欄位都正確對應
4. 測試在不同裝置（桌面、平板、手機）上的顯示效果

## 常見問題

**Q: 如何限制每人只能提交一次？**

A: 在 Google Form 設定中，勾選「限制為 1 次回覆」，需要使用者登入 Google 帳號。

**Q: 如何設定提交截止日期？**

A: 在 Google Form 設定中，勾選「接受回覆」，並設定結束日期和時間。

**Q: 資料安全嗎？**

A: Google Form 和 Google Sheets 都有完善的安全機制，只有表單擁有者可以查看提交的資料。

**Q: 可以匯出資料嗎？**

A: 可以，在 Google Sheets 中選擇「檔案」→「下載」，支援多種格式（Excel、CSV、PDF等）。

## 支援

如有任何問題，請參考：
- [Google Forms 說明中心](https://support.google.com/docs/topic/9054603)
- [Google Sheets 說明中心](https://support.google.com/docs/topic/9054603)

