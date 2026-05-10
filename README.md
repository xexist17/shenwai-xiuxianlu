# 神外修仙錄

用修仙遊戲方式精通神經外科原文書（Youmans、Greenberg…）。

PWA 應用，可從 GitHub Pages URL「加到主畫面」變成 iPhone/Android app。

## 功能

- 🏯 修仙化進度系統（築基→金丹→元嬰→渡劫→飛升）
- 📖 多種題型（選擇 / 看圖 / 排序）+ 詳細解說 + 出處
- 🔥 連勝、靈力、靈石、丹藥背包
- 🎴 機緣事件（高人指點、天降異象等隨機 buff/debuff）
- ⚔️ 試煉塔（5 題限時 boss 戰）
- 📜 補天閣（錯題自動收集，可專門複習）
- 🌿 採藥小遊戲

## 題庫格式

`library/manifest.json` 列出所有書，`library/<id>.json` 是題目。

支援題型：
- `choice` — 選擇題
- `image` — 含 SVG 圖（看 CT/MRI 辨症）
- `order` — 排序題

## 開發

純靜態 HTML + CSS + JS，無建置流程。

```bash
python -m http.server 8080
```
