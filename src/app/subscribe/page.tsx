
import Image from "next/image";

export default function Subscribe() {
  return (
    <body>
      <nav className="justify-between p-5 items-center flex">
        <div className="flex items-center gap-x-3">
          <i className="fa-solid fa-bars text-[#066B87] text-3xl"></i>
          <p className="bg-[#565555] rounded-full p-[7px] hidden lg:block px-[16px] text-[20px] font-bold text-white">
            ع
          </p>
          <button className="bg-[#D7B13A] px-[20px] py-[10px] hidden lg:block w-[171px] rounded-[20px] text-white font-bold">
            <a href="#">تسجيل الدخول</a>
          </button>
          <button className="bg-[#066B87] px-[20px] py-[10px] hidden lg:block w-[171px] rounded-[20px] text-white font-bold">
            <a href="#">أشترك الأن</a>
          </button>
        </div>
        <div className="flex gap-x-3">
          <div className="bg-[#2A99B8FC] hidden lg:flex rounded-[15px] py-[10px] px-[15px] justify-between text-white font-bold items-center w-[230px]">
            <i className="fa-solid fa-magnifying-glass"></i>
            <p className="">ابحث ماذا تتعلم؟</p>
          </div>
          <img
            src="/images/HDTCon.png"
            alt=""
            className="w-[200px] h-[40px]"
          />
        </div>
      </nav>
      <div className="home w-[90%] mx-auto lg:h-screen relative ">
        <div className="flex justify-between p-10 w-full items-center ">
          <div className="w-[60%] lg:block hidden">
            <img
              src="/images/subcribe.png"
              className="w-full  relative  mx-auto"
              alt=""
            />
          </div>
          <div className="lg:w-[40%] md:w-[60%] w-[80%] mx-auto p-10 ">
            <div className="border-[6px] border-[#066B87] relative rounded-full  p-5 py-10">
              <div className="absolute size-full left-0 block -bottom-5 ">
                <p className="text-[#066B87] font-bold text-[40px] absolute w-full top-0 left-0  py-5   bg-[#D7B13A] rounded-full text-center">
                  اشترك الان
                </p>
                <p
                  className="text-[#066B87] font-bold xl:text-[30px] lg:text-[23px] text-[18px] absolute md:-bottom-20 -bottom-16 left-1/2 -translate-x-1/2 w-full text-center"
                  dir="rtl"
                >
                  اختار الاشتراك الافضل لك{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:grid hidden  grid-cols-4 grid-rows-3 gap-3.5 absolute lg:top-96 top-20 right-10 w-[80px] h-[56px]  ">
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
        </div>
        <div className="lg:grid hidden grid-cols-4 grid-rows-3 gap-3.5 absolute top-1/2 left-10 w-[80px] h-[56px]  ">
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
          <div className="w-[10px] h-[10px] bg-[#FA851F] rounded-full place-self-center"></div>
        </div>
        <img
          src="/images/shape.png"
          className="absolute lg:top-12 -top-10 right-60 w-[150px] h-[97px] hidden md:block"
          alt=""
        />
        <img
          src="/images/shape.png"
          className="absolute top-20 left-20 size-[55px] hidden lg:block"
          alt=""
        />
        <img
          src="/images/shape blue.png"
          className="absolute bottom-10  bg-blend-color hidden md:block  left-10"
          alt=""
        />
        <img
          src="/images/shape blue.png"
          className="absolute bottom-10  bg-blend-color hidden lg:block  right-44 "
          alt=""
        />
      </div>

      <div className="section-1 my-5 py-5">
        <div className="w-[90%] mx-auto">
          <div className="bg-[#D7B13A] text-[#066B87] font-bold text-[25px] p-7 rounded-xl flex items-center">
            <p className="text-center">
              اختر خطة واستمتع بوصول غير محدود إلى أفضل المحتويات التعليمية في
              العالم العربي بأفضل سعر.
            </p>
            <i className="fa-solid fa-exclamation border-4 border-[#066B87] rounded-full p-1 px-3"></i>
          </div>
          <div className="cards flex justify-between items-center flex-wrap">
            <div
              className="card shadow-xl rounded-lg p-3 md:w-[32%] w-full "
              dir="rtl"
            >
              <h2 className="text-[#066B87] my-7 mt-10 md:text-[25px] text-[20px] font-bold ">
                الباقة الشهرية
              </h2>
              <p className="font-bold my-3 text-[#D7B13A]">
                200جنيه <span className="font-normal">/شهر</span>
              </p>
              <p className=" text-[#D7B13A]">
                <span className="font-bold">200</span> جنيه يتم الدفع كل شهر
              </p>
              <button className="bg-[#D7B13A] text-white font-bold rounded-full text-center py-2 my-3 px-5 w-full">
                اشترك الأن
              </button>
            </div>
            <div
              className="card shadow-xl rounded-lg p-3 md:w-[32%] w-full  relative"
              dir="rtl"
            >
              <h2 className="text-[#066B87] my-7 mt-10 md:text-[25px] text-[20px] font-bold ">
                الباقة الربع سنوية
              </h2>
              <p className="text-[#066B87] absolute md:top-[90px] top-[90px] text-sm">
                احصل على 3 أشهر بسعر 2{" "}
              </p>
              <p style={{ fontWeight: "bold", color: "goldenrod" }}>
                <del className="font-normal">300 جنيه</del> 200&nbsp;
                <span className="font-bold">جنيه</span>/شهر
              </p>
              <p className=" text-[#D7B13A]">
                <span className="font-bold">600</span> جنيه يتم الدفع كل 3 شهور
              </p>
              <button className="bg-[#D7B13A] text-white font-bold rounded-full text-center py-2 my-3 px-5 w-full">
                اشترك الأن
              </button>
            </div>
            <div
              className="card shadow-xl rounded-lg p-3 md:w-[32%] w-full  relative"
              dir="rtl"
            >
              <h2 className="text-[#066B87] my-7 mt-10 md:text-[25px] text-[20px] font-bold ">
                الباقة السنوية
              </h2>
              <p className="text-[#066B87] absolute md:top-[90px] top-[90px] text-sm">
                احصل على 12 أشهر بسعر 6{" "}
              </p>
              <p style={{ fontWeight: "bold", color: "goldenrod" }}>
                <del className="font-normal">500 جنيه</del> 200&nbsp;
                <span className="font-bold">جنيه</span>/شهر
              </p>
              <p className=" text-[#D7B13A]">
                <span className="font-bold">1200</span> جنيه يتم الدفع سنويا
              </p>
              <button className="bg-[#066B87] text-white font-bold rounded-full text-center py-2 my-3 px-5 w-full">
                اشترك الأن
              </button>
              <div className="bg-[#D7B13A] p-1 text-white absolute top-5 left-5 rounded-full">
                وفر 50%
              </div>
            </div>
          </div>
          <div className="w-[60%] lg:w-[40%] mx-auto my-10">
            <p className="text-[#066B87] text-[30px] text-center">
              ادفع بطرق متنوعة - يمكنك الإلغاء في أي وقت.
            </p>
            <div className="flex flex-wrap gap-5 justify-center my-5">
              <img src="/images/fawry.png" alt="" />
              <img src="/images/mezza.png" alt="" />
              <img src="/images/Clip path group.png" alt="" />
              <img src="/images/visa.png" alt="" />
              <img src="/images/valu.png" alt="" className="w-[70px]" />
              <img src="/images/we-pay.png" alt="" />
              <img src="/images/orange-cash.png" alt="" />
              <img
                src="/images/eat-cash.png"
                alt=""
                className="w-[40px] object-cover"
              />
              <img
                src="/images/vod-cash.png"
                alt=""
                className="w-[40px] object-contain"
              />
            </div>
          </div>
          <div>
            <h2 className="text-[#066B87] text-center my-5 font-bold text-[30px]">
              ما الذي تحصل عليه مع كل خطة
            </h2>
            <div className="cards flex justify-center gap-5 flex-wrap">
              <div
                className="card bg-[#066B87] text-white p-3 rounded-xl w-full md:w-[45%] lg:w-[31%]"
                dir="rtl"
              >
                <i className="fa-solid fa-check text-2xl"></i>
                <p className="text-[25px] mb-7">الوصول عبر أجهزة متعددة</p>
                <p>
                  تعلم على أي جهاز. تعمل منصتنا بسلاسة عبر أجهزة الكمبيوتر
                  المحمولة، والأجهزة اللوحية، والهواتف الذكية.
                </p>
              </div>
              <div
                className="card bg-[#066B87] text-white p-3 rounded-xl w-full md:w-[45%] lg:w-[31%]"
                dir="rtl"
              >
                <i className="fa-solid fa-check text-2xl"></i>
                <p className="text-[25px] mb-7">تجربة تعلم خالية من الإعلانات</p>
                <p>
                  ركز على دراستك دون انقطاع. منصتنا خالية تمامًا من الإعلانات
                  لتوفير تجربة سلسة.
                </p>
              </div>
              <div
                className="card bg-[#066B87] text-white p-3 rounded-xl w-full md:w-[45%] lg:w-[31%]"
                dir="rtl"
              >
                <i className="fa-solid fa-check text-2xl"></i>
                <p className="text-[25px] mb-7">
                  وصول غير محدود إلى جميع الدورات
                </p>
                <p>
                  استمتع بالوصول غير المحدود إلى جميع دوراتنا. تعلم بالطريقة
                  التي تناسبك واستكشف مواضيع جديدة في أي وقت.
                </p>
              </div>
              <div
                className="card bg-[#066B87] text-white p-3 rounded-xl w-full md:w-[45%] lg:w-[31%]"
                dir="rtl"
              >
                <i className="fa-solid fa-check text-2xl"></i>
                <p className="text-[25px] mb-7">تنزيل للمشاهدة بدون انترنت</p>
                <p>
                  قم بتنزيل الدورات للمشاهدة بدون اتصال بالإنترنت. تعلم أينما
                  كنت، حتى بدون اتصال بالإنترنت.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between items-center my-3">
            <p className="w-[60%] text-[#6F6C90]">
              منصة HDTC-ON هي أول منصة تدريب واستشارات احترافية في الوطن
              العربي، تضم فريق عمل من المحترفين المعتمدين في مركز HDTC في
              العديد من مجالات التدريب والتعليم والحياة
            </p>
            <img src="/images/HDTCon.png" alt="" />
          </div>
          <div className="w-[110%] bg-[#6F6C90]/30 h-[2px] my-5 -translate-x-[5%]"></div>
          <div className="flex  flex-wrap justify-between text-end my-5 gap-y-7">
            <div className=" w-[45%] md:w-[22%] flex flex-col gap-y-3">
              <h2 className="text-[20px] font-bold text-[#170F49]">تحميل</h2>
              <img
                src="/images/app-2.png"
                alt=""
                className="w-[150px] ms-auto"
              />
              <img
                src="/images/app-1.png"
                alt=""
                className="w-[150px] ms-auto"
              />
            </div>
            <div className=" w-[45%] md:w-[22%]  flex flex-col gap-y-3">
              <h2 className="text-[20px] font-bold text-[#170F49]">
                روابط إضافية
              </h2>
              <a href="#" className="text-[#6F6C90] text-[18px] font-semibold">
                معلومات عنا
              </a>
              <a href="#" className="text-[#6F6C90] text-[18px] font-semibold">
                تواصل معنا
              </a>
              <a href="#" className="text-[#6F6C90] text-[18px] font-semibold">
                التحقق من الشهادة
              </a>
              <a href="#" className="text-[#6F6C90] text-[18px] font-semibold">
                الأسئلة الشائعة
              </a>
              <a href="#" className="text-[#6F6C90] text-[18px] font-semibold">
                كن مدرساً
              </a>
              <a href="#" className="text-[#6F6C90] text-[18px] font-semibold">
                المقالات
              </a>
              <a href="#" className="text-[#6F6C90] text-[18px] font-semibold">
                سياسة الشروط والأحكام
              </a>
              <a href="#" className="text-[#6F6C90] text-[18px] font-semibold">
                سياسة الخصوصية
              </a>
            </div>
            <div className=" w-[45%] md:w-[22%]  flex flex-col gap-y-3">
              <h2 className="text-[20px] font-bold text-[#170F49]">
                تواصل معنا
              </h2>
              <a href="#" className="text-[#6F6C90]">
                info@hdtc-on.com <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="#" className="text-[#6F6C90]">
                +971 52 937 6837 <i className="fa-solid fa-phone"></i>
              </a>
              <a href="#" className="text-[#6F6C90]">
                إنستجرام <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-[#6F6C90]">
                فيسبوك <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="text-[#6F6C90]">
                إكس <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className="text-[#6F6C90]">
                سناب <i className="fa-brands fa-snapchat"></i>
              </a>
              <a href="#" className="text-[#6F6C90]">
                تك توك <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="#" className="text-[#6F6C90]">
                لينكدان <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <div className=" w-[45%] md:w-[22%]  flex flex-col gap-y-3">
              <h2 className="text-[20px] font-bold text-[#170F49]">
                انضم الينا
              </h2>
              <p className="text-[#6F6C90]">ابقى على الاطلاع بكل جديد</p>
              <input
                type="text"
                placeholder="ادخل البريد الالكترونى"
                className="bg-white p-2  rounded-full outline-none border border-[#D9DBE9] text-end  placeholder:text-[#6F6C90] w-fit ms-auto"
              />
              <button className="bg-[#D7B13A] w-fit font-bold text-white rounded-full p-2 px-3 ms-auto">
                انضم
              </button>
            </div>
          </div>
          <div className="w-[110%] bg-[#6F6C90]/30 h-[2px] my-5 -translate-x-[5%]"></div>
          <div className="flex justify-between items-center text-[#6F6C90] py-5">
            <p>Copyright © 2022 BRIX Templates | All Rights Reserved </p>
            <div className="flex gap-x-3">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
}
