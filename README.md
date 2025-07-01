# 📈 CryptoTradeX – Real-Time Paper Trading App

### 🔗 Project Type: Frontend Web Application  
### 🌐 Market Focus: Cryptocurrency  
### 🛠️ Tech Stack: React + Vite + Tailwind + CoinGecko + Binance WebSocket  
### 📦 APIs: CoinGecko, exchangerate.host, Binance WebSocket

---

## 📌 Overview

**CryptoTradeX** is a responsive, real-time **paper trading platform** designed for crypto enthusiasts. It allows users to simulate trading using real market data — with no risk — while offering features like **portfolio tracking**, **price alerts**, **real-time updates**, **multi-currency**, and **multi-language support**.

The application is built with performance and UX in mind, making it ideal for developers, learners, and hobbyist traders.

---

## 🎯 Project Objectives

- Simulate real-world crypto trading
- Provide real-time price updates using WebSockets
- Visualize portfolio performance over time
- Support dark mode, mobile UI, and multilingual content

---

## 🧰 Tech Stack

| Layer         | Tool / Library                     |
|---------------|-------------------------------------|
| Frontend      | React + Vite                       |
| Styling       | Tailwind CSS (dark mode enabled)   |
| State Mgmt    | React Context API         |
| Charting      | Chart.js / Recharts / TradingView  |
| Real-time     | Binance WebSocket / setInterval    |
| API Data      | CoinGecko, exchangerate.host       |
| Storage (MVP) | localStorage                       |
| i18n          | react-i18next                      |

---

## 🔧 Features & Frameworks Used

### 🌙 Theme & Appearance

#### 1. Dark Mode / Theme Toggle  
- 🛠️ Tailwind CSS with `dark:` variants  
- Toggle using Context or system preference  

#### 2. Mobile Responsive Design  
- 🛠️ TailwindCSS responsive utilities (`sm:`, `md:`, `lg:`)  
- Flexbox/Grid + media queries  

---

### 💱 Currency & Localization

#### 3. Currency Switcher  
- 🛠️ CoinGecko or [exchangerate.host](https://exchangerate.host) API  
- Supports INR, USD, EUR, etc.

#### 4. Multi-Language Support  
- 🛠️ `react-i18next` for i18n  
- English & Hindi (can expand later)

---

### 🔄 Real-Time Functionality

#### 5. Real-Time Price Updates  
- 🛠️ Binance WebSocket (`wss://stream.binance.com/ws/...`)  
- Fallback: CoinGecko + `setInterval()` polling

#### 6. Price Alerts  
- 🛠️ Custom logic (stored in localStorage or backend)  
- Triggered using `setInterval()` + condition match

---

### 🔍 Smart UX Features

#### 7. Live Search + Autocomplete  
- 🛠️ CoinGecko `/coins/list` API  
- Input debouncing with `useEffect` & `setTimeout`

#### 8. Asset Details Page  
- 🛠️ CoinGecko `/coins/{id}`  
- Chart.js / TradingView for historical prices  
- Includes chart, stats, and buy/sell panel

---

### 📊 Portfolio Insights

#### 9. Performance Graph  
- 🛠️ `react-chartjs-2` or `recharts`  
- Data: CoinGecko `/coins/{id}/market_chart?days=30`  
- Time filters: 1D, 7D, 1M, etc.

---

## 📡 APIs Used

| Purpose                  | API                          | Auth | Free |
|--------------------------|-------------------------------|------|------|
| Market Data (Crypto)     | CoinGecko                     | ❌    | ✅   |
| Real-time Price Updates  | Binance WebSocket             | ❌    | ✅   |
| Currency Conversion      | exchangerate.host             | ❌    | ✅   |
| Charts Embed (Optional)  | TradingView Widget            | ❌    | ✅   |

---

## 🗂️ Project Structure

