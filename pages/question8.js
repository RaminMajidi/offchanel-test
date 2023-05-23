import React, { useEffect, useState } from "react";

import Layout from "../components/base";

const Question8 = () => {
  return (
    <Layout>
      <div className="cs-container">
        <h1>سوال هشتم</h1>

        <h3>به سوالات مربوط به گیت در این قسمت پاسخ دهید</h3>
        <p
          style={{
            direction: "ltr",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
        >
          pages/question8
        </p>

        <div
          style={{
            fontWeight: "bold",
            textAlign: "right",
            direction: "rtl",
            padding: "50px 0 20px 0",
          }}
        >
          <p>گیت چیست و تفاوت آن با گیت هاب چیست؟</p>
          {/* جواب خود را در اینجا بنویسید */
          <div style={{direction:"rtl",textAlign:"right"}}>
            <p>گیت یک سیستم کترل ورژن است درحالی که گیت هاب یک مخزن یا هاست برای إخیره دیتاها و کدهابی پروژه ما است</p>
          </div>
          }
        </div>

        <div
          style={{
            fontWeight: "bold",
            textAlign: "right",
            direction: "rtl",
            padding: "50px 0 20px 0",
          }}
        >
          <p>چند دستور مهم گیت را بنویسید با ذکر مثال</p>
          {/* جواب خود را در اینجا بنویسید */
          <div style={{direction:"rtl",textAlign:"right"}}>
            <p>git init   git clone   git status git add -A   git commit -m"message"  git push git pull </p>
          </div>
          }
        </div>

        <div
          style={{
            fontWeight: "bold",
            textAlign: "right",
            direction: "rtl",
            padding: "50px 0 20px 0",
          }}
        >
          <p>به غیر از گیت هاب چند سایت مشابه نام ببرید</p>
          {/* جواب خود را در اینجا بنویسید */
          <p>git lab</p>
          }
        </div>
      </div>
    </Layout>
  );
};

export default Question8;
