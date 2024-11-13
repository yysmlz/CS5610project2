//入口你根据你的调试相应设置，下面的不一定对

import React from 'react';
import ReactDOM from 'react-dom/client'; // 这里确保你用 `react-dom/client` 作为 Vite 的默认配置
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // 可选，根据需要引入样式

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
