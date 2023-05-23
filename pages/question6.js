import React, { useEffect, useState } from "react";

import Layout from "../components/base";

const Question6 = () => {
  return (
    <Layout>
      <div className="cs-container">
        <h1>سوال ششم</h1>
        <h2>ریداکس و کاربردش چیست توضیح دهید</h2>

        <p>Action و Reducer هر کدام چه کاربردی دارند؟</p>

        <h3>کد های مربوط به این سوال در فایل زیر است:</h3>
        <p
          style={{
            direction: "ltr",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
        >
          pages/question6
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
          <p>ریداکس یک کتابخانه جاواسکریپتی است که برای مدیریت استیت های ما در برنام هااستفاده می شود</p>
          <p>اکشن  یک پارامتر ورودی است که مشخص میکند نسبت به آن باید ما چه عملیاتی را برروی داده ها و استیت خود انجام دهیم</p>
          <p>تابع ردیوسر وظیفه مدیریت استیت های مختلف در برنامه را دارد</p>
          </div>
          }
        </div>
      </div>
    </Layout>
  );
};

export default Question6;
