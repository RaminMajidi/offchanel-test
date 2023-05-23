import React, { useEffect, useState } from "react";

import Layout from "../components/base";

const Question7 = () => {
  return (
    <Layout>
      <div className="cs-container">
        <h1>سوال هفتم</h1>
        <h2>ورژن کنترل چیست توضیح دهید؟</h2>

        <h3>کد های مربوط به این سوال در فایل زیر است:</h3>
        <p
          style={{
            direction: "ltr",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
        >
          pages/question7
        </p>

        <div
          style={{
            fontWeight: "bold",
            textAlign: "left",
            direction: "rtl",
            padding: "50px 0 20px 0",
          }}
        >
          {/* جواب خود را در اینجا بنویسید */
          <div style={{direction:"rtl",textAlign:"right"}}>
           <p>ورژن کنترل همانطوری که از اسمش مشخصه وظیفه کنترل کدهای ما در زمانهای مختلف رو داره ، درواقع ورژن کنترل ها به ما کمک میکنند که مدیریت و فایل بندی کدها و پروژه را در بازه های زمانی راحتر انجام بدهیم</p>
           <p>و این قابلیت رو به ما میدن که چندین نفر همزمان بتونن برروی یک پروژه کارکنند</p>
          </div>
          }
        </div>
      </div>
    </Layout>
  );
};

export default Question7;
