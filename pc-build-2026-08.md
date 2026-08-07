# 裝機菜單 2026-08｜AI + 遊戲 + 24/7 家用伺服器

> 用途：取代 7 年 GTX 1060 筆電。Local AI（Ollama/CUDA）、1440p 遊戲、24 小時開機，
> 從 MacBook Air 經 Tailscale 遠端使用。
> 行情基準日：2026-08-07。**記憶體、SSD、顯卡價格每週在變，下單前一律以原價屋線上估價單當天價格為準。**

---

## 主力方案 B（約 7.2–7.6 萬）— 建議直接組這台

| 零件 | 指定型號（首選） | 行情估計 |
|---|---|---:|
| CPU | AMD Ryzen 7 7700（8C/16T、65W） | 7,190 |
| 主機板 | ASUS TUF GAMING B850M-PLUS WIFI 或 ASRock B850M Pro RS WiFi | 5,500–6,500 |
| 記憶體 | DDR5-6000 CL30 **32GB（16G×2）**：金士頓 Fury Beast / Acer HT200 / UMAX | 10,900–12,700 |
| 顯示卡 | **RTX 5070 Ti 16GB**：MSI VENTUS 3X OC / 技嘉 WINDFORCE / 華碩 PRIME（挑最便宜的雙/三風扇入門版即可） | 32,000–35,000 |
| SSD | WD Black SN850X 2TB（無散熱片版，主板自帶散熱片） | 7,500–9,500 |
| 電源 | 850W 金牌、ATX 3.1、原生 12V-2x6：MSI MAG A850GL PCIE5 / 全漢 / Corsair RM850e | 2,900–3,300 |
| 機殼 | Montech AIR 903 MAX（原廠附 3 顆 140mm 風扇，前面板濾網） | 1,900–2,200 |
| 散熱器 | 利民 Thermalright Phantom Spirit 120 EVO | 1,100–1,300 |
| UPS | CyberPower CP800AVR 或同級 650–800VA 在線互動式 | 2,000–2,800 |
| **合計** | | **≈ 71,000–76,500** |

## 備用方案 A（約 5.8–6.2 萬）— 預算卡死 6 萬才選

只改三項，其餘同上：

| 零件 | 改成 | 行情估計 |
|---|---|---:|
| 顯示卡 | RTX 5060 Ti **16GB**（勿買 8GB 版！） | 19,500–21,000 |
| 主機板 | ASRock B650M Pro RS WiFi / 華碩 TUF B650M-E WIFI | 4,300–5,000 |
| 電源 | 750W 金牌 ATX 3.1 | 2,400–2,800 |
| **合計** | | **≈ 57,000–61,500** |

### 為什麼是 32GB 不是 64GB（2026-08 的特殊判斷）

記憶體正處 AI 缺貨潮高點：32GB 套條從 2025/10 的 ~2,500 漲到現在 ~11,000+，64GB 要 2.2 萬以上。
- 64GB→32GB 省下的 ~1.1 萬 ≈ 5060 Ti→5070 Ti 的差價，而 5070 Ti 的 VRAM 頻寬是兩倍（896 vs 448 GB/s）＝ LLM 生成速度近兩倍、遊戲快五成以上。
- 主機板 4 槽只插 2 條，**留 2 空槽**。等行情回落（32GB 套條回到 ≤6,000）再補一組 16G×2 湊 64GB。
- RTX 50 Super（24GB 版）已無限期延期（3GB GDDR7 顆粒缺貨），傳聞最快 CES 2027——不用等。

---

## 怎麼下單（不用自己組）

1. 開 [原價屋線上估價](https://www.coolpc.com.tw/evaluate.php)，照上表逐項點選（每一項都有替代型號，見下節）。
2. 結帳時選「**代客組裝**」——原價屋免費組裝＋燒機測試，宅配到府或門市自取。欣亞、AUTOBUY 也有同樣服務。
3. 下單前檢查兩個雷：
   - 5070 Ti 若當天最低價 **> 36,000** 或缺貨 → 先不追價，改下方案 A，或隔幾天再看（價格波動大）。
   - 記憶體認明 **DDR5-6000 CL30（或 CL32）16G×2**，不要買成 8G×4 或單條。
4. 另外要買（不在店家估價單內）：**Windows 11 Pro** 授權（研究資料建議 Pro 版，可開 BitLocker＋內建遠端桌面）。螢幕鍵鼠本菜單未含。

### 替代型號（首選缺貨時，同級可換）

- **CPU**：7700 缺貨 → 7700X（記得仍配塔散）；預算多 5 千再考慮 9700X（現價 ~12,490，此用途不必要）。
- **主機板**：任一 B850M/B650M、有 WiFi、≥2 個 M.2、2.5G LAN 即可。配 9700X 選 B850 免刷 BIOS。
- **記憶體**：金士頓 Fury Beast 6000 / Acer HT200 / UMAX / 威剛 XPG Lancer，比價買最便宜的 6000 CL30。
- **SSD**：SN850X 缺 → Kioxia Exceria Plus G4 / Crucial T500 / Kingston KC3000（都是 2TB Gen4 TLC 帶 DRAM）。
- **散熱器**：Phantom Spirit 缺 → Peerless Assassin 120 SE（更便宜，一樣夠用）。
- **機殼**：AIR 903 MAX 缺 → Fractal Pop Air / 聯力 LANCOOL 207。條件：前面板網孔進風＋濾網、能裝 140mm 風扇。

---

## 到貨後設定清單（照順序做）

**BIOS（第一次開機按 Del）**
- [ ] 更新到最新版 BIOS
- [ ] 開 **EXPO**（讓記憶體跑 6000，預設只有 4800）
- [ ] `Restore AC Power Loss → Power On`（停電來電後自動開機，24/7 伺服器必開）
- [ ] 風扇曲線調安靜（60°C 以下 ≤40%）

**Windows**
- [ ] 裝 Windows 11 Pro，開 BitLocker
- [ ] 電源計畫：關閉睡眠、關閉硬碟休眠；顯示器可自動關
- [ ] NVIDIA 驅動 + MSI Afterburner（確認低負載時 GPU 風扇停轉 fan stop）

**AI 環境**
- [ ] WSL2 + Ubuntu；建 `C:\Users\<你>\.wslconfig` 限制 `memory=16GB`（32GB 機器的合理上限）
- [ ] Docker Desktop（WSL2 backend）
- [ ] Ollama（先跑 `qwen3:14b` 和 `gpt-oss:20b` 測速）＋ Open WebUI
- [ ] Claude Code

**遠端（在醫院用 MacBook Air 連回家）**
- [ ] 主機與 MBA 都裝 Tailscale，登同一帳號
- [ ] 主機開 SSH（或 Tailscale SSH）；遊戲串流可加裝 Sunshine，MBA 端裝 Moonlight
- [ ] 從外網實測：SSH 進得去、Open WebUI 打得開才算完成

**收尾**
- [ ] UPS 的 USB 線接主機，裝 PowerPanel，設「斷電 5 分鐘後自動安全關機」
- [ ] OCCT 或 FurMark + Cinebench 燒機 30 分鐘，HWiNFO 確認 CPU <85°C、GPU <75°C、噪音可接受
- [ ] 舊筆電資料搬遷，功成身退

---

## 之後的升級路線

| 時機 | 動作 |
|---|---|
| 記憶體行情回落（32GB 套條 ≤6,000） | 補 16G×2 → 64GB |
| SSD 不夠用 | 第二個 M.2 槽直接加一條 2TB |
| 3–5 年後 AI 需求變大 | 只換顯卡（電源 850W 已預留），AM5 平台其餘全留用 |

## 行情查證來源（2026-08-07）

- 原價屋 5060 Ti 上市價 15,590 起（現已漲至 ~19,500）：coolpc.com.tw
- 5070 Ti 台灣通路 31k–37k、中國已漲破 MSRP 38%：videocardz.com、xfastest
- DDR5 32GB 套條 8 月實售 10,899–13,799：momo / Yahoo 購物 / 蝦皮
- RTX 50 Super 無限期延期：tweaktown.com
- 記憶體現貨出現 30% 跳水修正訊號：koc.com.tw（電腦王阿達）
