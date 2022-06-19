require("file-loader?name=[name].[ext]!./index.html");
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./custom.scss";
import store from "./redux/store/store";
import { Provider, useDispatch } from "react-redux";
import { data } from "./assets/data";
import { all_post } from "./redux/features/postSlice";

// RenderData fonksiyonunu her sayfa yenilendiğinde datayı çekmesi için tanımladım
//localStorage i burada database gibi kullanmaya çalıştım. Veri bir kere data klasöründen çekildikten sonra
// localStorage a istenen bilgileri kaydediyorum. güncellemem gereken durumlarda local storage i güncelleyerek dinamik 
// akışı sağlıyporum. Buradaki if sorgusu o yüzden. 

const RenderData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("postData")) {
      dispatch(all_post(JSON.parse(localStorage.getItem("postData"))));
    } else {
      dispatch(all_post(data));
    }
  }, [data]);
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <Provider store={store}>
    <RenderData />
    <App />
  </Provider>
);
