import React from "react";
import { useParams } from "react-router-dom";
import Detail from "../pages/Detail";
import NotFound from "./NotFound";

//Bu fonksiyonu tanımlamamdaki amaç routing yaparken kullanıcının yanlışlıkla tanımlı olmayan bir id 
//girdiğinde gerekli yere yönlendirilmesini sağlamak

export const GuardWrapper = () => {
    const { id } = useParams();
  
    return ["1","2","3","4"].some(val => val === id)
      ? <Detail />
      : <NotFound/>;
  };