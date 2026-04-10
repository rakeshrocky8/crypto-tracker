# 🚀 Crypto Live Tracker (TypeScript + Redux Toolkit)

A professional, real-time cryptocurrency dashboard built with **React**, **TypeScript**, and **Redux Toolkit**. This project fetches live market data from the CoinGecko API and provides a clean, responsive interface for tracking price changes.

!

## ✨ Key Features
* **Real-time Data:** Fetches live prices, market caps, and 24h price changes.
* **Global State Management:** Uses **Redux Toolkit (RTK)** with `createAsyncThunk` for scalable data handling.
* **Type Safety:** Fully typed with **TypeScript** to ensure robust, bug-free code.
* **Dynamic Search:** Instant filtering of coins by name or symbol using React local state.
* **Clean UI:** Dark-mode dashboard designed with CSS Grid and Flexbox, featuring high-contrast typography.
* **Production Ready:** Includes `.env` configuration and Netlify refresh-fix redirects.

## 🛠️ Tech Stack
* **Frontend:** React 18
* **Language:** TypeScript
* **State Management:** Redux Toolkit
* **API:** Axios (fetching from CoinGecko)
* **Deployment:** Netlify / Vercel

## 🚀 Getting Started

### Prerequisites
* Node.js (v16 or higher)
* npm or yarn

### Installation
1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/rakeshrocky8/crypto-tracker.git](https://github.com/rakeshrocky8/crypto-tracker.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up environment variables:**
    Create a `.env` file in the root and add:
    ```text
    REACT_APP_CRYPTO_API_URL=[https://api.coingecko.com/api/v3](https://api.coingecko.com/api/v3)
    ```
4.  **Run the app:**
    ```bash
    npm start
    ```

## 📂 Project Structure
* `src/app`: Redux store and typed hooks.
* `src/features`: Feature-based logic (Slices & API calls).
* `src/components`: Reusable UI components.
* `src/types`: TypeScript interfaces and definitions.

## 🤝 Contact
**Rakesh** [LinkedIn Profile Link] | [Your Email Address]
