# 短網址功能簡介 - Introduction

一個簡單的短網址功能，可以貼上你的網址進行縮址。
![image](https://github.com/chuchushooes/Shortener/blob/main/img/success.png)
![image](https://github.com/chuchushooes/Shortener/blob/main/img/Oops.png)
![image](https://github.com/chuchushooes/Shortener/blob/main/img/haveurl.png)
![image](https://github.com/chuchushooes/Shortener/blob/main/img/error.png)

## 功能列表 - Features

- 使用者可藉由輸入網址得到縮址，並利用縮址回到原網址
- 使用者可點擊 copy url 複製短網址連結

## 環境建立與需求 - Set up environment

- [Node.js](https://nodejs.org/en/)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [express 版本號@4.16.4](https://www.npmjs.com/package/express)
- [express handlebars 版本號@6.0.6](https://www.npmjs.com/package/express-handlebars)
- [mongoose 版本號@6.6.5](https://mongoosejs.com/)

## 安裝步驟 - Install step

1. 開啟終端機(terminal) clone 此專案

```
git clone https://github.com/chuchushooes/Shortener.git
```

2. 移動到此專案資料夾

```
cd shorturl
```

3. 安裝 express 4.16.4 版本 - 為 node.js 網路框架

```
npm i express@4.16.4
```

4. 安裝 express-handlebars 6.0.6 版本 - 為樣板引擎

```
npm i express-handlebars@6.0.6
```

5. 安裝 nodemon - 可自動偵測重啟伺服器

```
npm install -g nodemon
```

6. 執行專案，輸入`nodemon app.js`至終端成功後就會如下顯示

```
localhost:3000 has been active
```

7. 至瀏覽器打上`http://localhost:3000/`畫面即可顯示
