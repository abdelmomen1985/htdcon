
import Image from "next/image";

export default function Articles() {
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
              src="/images/articles.png"
              className="w-full  relative top-[75px] max-w-[520px] mx-auto"
              alt=""
            />
          </div>
          <div className="lg:w-[40%] md:w-[60%] w-[80%] mx-auto p-10 ">
            <div className="border-[6px] border-[#066B87] relative rounded-full  p-5 py-10">
              <div className="absolute size-full left-0 block -bottom-5 ">
                <p className="text-[#066B87] font-bold text-[40px] absolute w-full top-0 left-0  py-5   bg-[#D7B13A] rounded-full text-center">
                  المقالات
                </p>
                <p
                  className="text-[#066B87] font-bold text-[40px] absolute -bottom-20 left-1/2 -translate-x-1/2 w-full text-center"
                  dir="rtl"
                >
                  8 مقالات
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
        <div className="w-[90%] mx-auto flex md:justify-between justify-center  flex-wrap">
          <div className="lg:w-[30%] md:w-[40%]">
            <div className="card  text-end shadow-xl p-3 rounded-lg mx-auto">
              <h2 className="text-[#066B87] font-bold text-[30px] border-b-2 border-[#D7B13A] ms-auto w-fit">
                المقالات الشائعة
              </h2>
              <div className="flex flex-wrap justify-between flex-col">
                <div className="flex gap-x-3 justify-end items-center my-3 border-b border-[#61616178] pb-3">
                  <div className="flex flex-col gap-y-3">
                    <p>الانتماء و الولاء.... الوظيفى</p>
                    <p className="text-[#616161]">10 يونيو 2025</p>
                  </div>
                  <img
                    src="/images/users.png"
                    alt=""
                    className="w-[120px] rounded-lg"
                  />
                </div>
                <div className="flex gap-x-3 justify-end items-center my-3 border-b border-[#61616178] pb-3">
                  <div className="flex flex-col gap-y-3">
                    <p>فهم الصحة و النظافة فى كل مكان</p>
                    <p className="text-[#616161]">10 يونيو 2025</p>
                  </div>
                  <img
                    src="/images/users.png"
                    alt=""
                    className="w-[120px] rounded-lg"
                  />
                </div>
                <div className="flex gap-x-3 justify-end items-center my-3 border-b border-[#61616178] pb-3">
                  <div className="flex flex-col gap-y-3">
                    <p>العلاقات العامة</p>
                    <p className="text-[#616161]">10 يونيو 2025</p>
                  </div>
                  <img
                    src="/images/articles-1.jpg"
                    alt=""
                    className="w-[120px] rounded-lg"
                  />
                </div>
                <div className="flex gap-x-3 justify-end items-center my-3">
                  <div className="flex flex-col gap-y-3">
                    <p>مستقبل التعليم عبر الانترنت</p>
                    <p className="text-[#616161]">10 يونيو 2025</p>
                  </div>
                  <img
                    src="/images/Note-3.png"
                    alt=""
                    className="w-[120px] rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="card my-5  text-end shadow-xl p-3 rounded-lg mx-auto">
              <h2 className="text-[#066B87] font-bold text-[25px] ms-auto w-fit">
                تابعنا على السوشيال ميديا
              </h2>
              <div className="links flex justify-between flex-wrap gap-y-3 my-3">
                <a
                  href="#"
                  className="text-white w-[48%] rounded-lg p-2 bg-[#E24578] font-bold"
                >
                  إنستجرام <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-white w-[48%] rounded-lg p-2 bg-[#1877F2] font-bold"
                >
                  فيسبوك <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-white w-[48%] rounded-lg p-2 bg-[#757575] font-bold"
                >
                  إكس <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-white w-[48%] rounded-lg p-2 bg-[#FF0000] font-bold"
                >
                  يوتيوب <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-[66%] md:w-[56%]">
            <div className="cards flex gap-y-5 flex-wrap justify-between  text-end  my-10">
              <div className="card lg:w-[45%] shadow-md shadow-black/30 rounded-lg">
                <div className="relative">
                  <img
                    src="/images/Note-3.png"
                    alt=""
                    className="max-h-[300px] w-full object-cover object-center rounded-t-lg"
                  />
                  <div className="text-white font-bold rounded-lg p-2 absolute right-3 bottom-0 translate-y-1/2 bg-[#D7B13A] w-fit shadow-xl">
                    30 يوليو 2024 <i className="fa-solid fa-calendar-days"></i>
                  </div>
                </div>
                <div className="p-3 pt-7">
                  <p className="text-[25px] font-bold line-clamp-2">
                    كيفية البقاء على تقدير أثناء التعلم عبر الإنترنت
                  </p>
                  <p className="border-b border-[#98A2B3] text-[22px] pb-3 leading-[1.5em] min-h-[4.5em] break-words">
                    تناقش المقالة استراتيجيات الحفاظ على الدافعية والانضباط
                    الذاتي أثناء الدراسة عن بُعد.
                  </p>
                  <p className="pt-3 text-[#98A2B3] text-[30px]">
                    1 <i className="fa-solid fa-message"></i>
                  </p>
                </div>
              </div>
              <div className="card lg:w-[45%] shadow-md shadow-black/30 rounded-lg">
                <div className="relative">
                  <img
                    src="/images/Note-2.png"
                    alt=""
                    className="max-h-[300px] w-full object-cover object-center rounded-t-lg"
                  />
                  <div className="text-white font-bold rounded-lg p-2 absolute right-3 bottom-0 translate-y-1/2 bg-[#D7B13A] w-fit shadow-xl">
                    30 يوليو 2024 <i className="fa-solid fa-calendar-days"></i>
                  </div>
                </div>
                <div className="p-3 pt-7">
                  <p className="text-[25px] font-bold leading-[1.5em] min-h-[3em] break-words">
                    مستقبل التعلم عبر الإنترنت
                  </p>
                  <p className="border-b border-[#98A2B3] text-[22px] pb-3 leading-[1.5em] min-h-[4.5em] break-words">
                    تستعرض الاتجاهات الحديثة في التعليم الإلكتروني وكيفية
                    تأثيرها على أساليب التعلم التقليدية.
                  </p>
                  <p className="pt-3 text-[#98A2B3] text-[30px]">
                    1 <i className="fa-solid fa-message"></i>
                  </p>
                </div>
              </div>
              <div className="card lg:w-[45%] shadow-md shadow-black/30 rounded-lg">
                <div className="relative">
                  <img
                    src="/images/Note-3.png"
                    alt=""
                    className="max-h-[300px] w-full object-cover object-center rounded-t-lg"
                  />
                  <div className="text-white font-bold rounded-lg p-2 absolute right-3 bottom-0 translate-y-1/2 bg-[#D7B13A] w-fit shadow-xl">
                    30 يوليو 2024 <i className="fa-solid fa-calendar-days"></i>
                  </div>
                </div>
                <div className="p-3 pt-7">
                  <p className="text-[25px] font-bold leading-[1.5em] min-h-[3em] break-words">
                    قنيات الدراسة الفعّالة لنجاح التعلم عن بُعد
                  </p>
                  <p className="border-b border-[#98A2B3] text-[22px] pb-3 leading-[1.5em] min-h-[4.5em] break-words">
                    تقدم نصائح حول إدارة الوقت، والتعلم النشط، وخلق بيئة
                    دراسية داعمة.
                  </p>
                  <p className="pt-3 text-[#98A2B3] text-[30px]">
                    1 <i className="fa-solid fa-message"></i>
                  </p>
                </div>
              </div>
              <div className="card lg:w-[45%] shadow-md shadow-black/30 rounded-lg">
                <div className="relative">
                  <img
                    src="/images/Note-3.png"
                    alt=""
                    className="max-h-[300px] w-full object-cover object-center rounded-t-lg"
                  />
                  <div className="text-white font-bold rounded-lg p-2 absolute right-3 bottom-0 translate-y-1/2 bg-[#D7B13A] w-fit shadow-xl">
                    30 يوليو 2024 <i className="fa-solid fa-calendar-days"></i>
                  </div>
                </div>
                <div className="p-3 pt-7">
                  <p className="text-[25px] font-bold line-clamp-2">
                    كيفية البقاء على تقدير أثناء التعلم عبر الإنترنت
                  </p>
                  <p className="border-b border-[#98A2B3] text-[22px] pb-3 leading-[1.5em] min-h-[4.5em] break-words">
                    تناقش المقالة استراتيجيات الحفاظ على الدافعية والانضباط
                    الذاتي أثناء الدراسة عن بُعد.
                  </p>
                  <p className="pt-3 text-[#98A2B3] text-[30px]">
                    1 <i className="fa-solid fa-message"></i>
                  </p>
                </div>
              </div>
              <div className="card lg:w-[45%] shadow-md shadow-black/30 rounded-lg">
                <div className="relative">
                  <img
                    src="/images/Note-2.png"
                    alt=""
                    className="max-h-[300px] w-full object-cover object-center rounded-t-lg"
                  />
                  <div className="text-white font-bold rounded-lg p-2 absolute right-3 bottom-0 translate-y-1/2 bg-[#D7B13A] w-fit shadow-xl">
                    30 يوليو 2024 <i className="fa-solid fa-calendar-days"></i>
                  </div>
                </div>
                <div className="p-3 pt-7">
                  <p className="text-[25px] font-bold leading-[1.5em] min-h-[3em] break-words">
                    مستقبل التعلم عبر الإنترنت
                  </p>
                  <p className="border-b border-[#98A2B3] text-[22px] pb-3 leading-[1.5em] min-h-[4.5em] break-words">
                    تستعرض الاتجاهات الحديثة في التعليم الإلكتروني وكيفية
                    تأثيرها على أساليب التعلم التقليدية.
                  </p>
                  <p className="pt-3 text-[#98A2B3] text-[30px]">
                    1 <i className="fa-solid fa-message"></i>
                  </p>
                </div>
              </div>
              <div className="card lg:w-[45%] shadow-md shadow-black/30 rounded-lg">
                <div className="relative">
                  <img
                    src="/images/Note-3.png"
                    alt=""
                    className="max-h-[300px] w-full object-cover object-center rounded-t-lg"
                  />
                  <div className="text-white font-bold rounded-lg p-2 absolute right-3 bottom-0 translate-y-1/2 bg-[#D7B13A] w-fit shadow-xl">
                    30 يوليو 2024 <i className="fa-solid fa-calendar-days"></i>
                  </div>
                </div>
                <div className="p-3 pt-7">
                  <p className="text-[25px] font-bold leading-[1.5em] min-h-[3em] break-words">
                    قنيات الدراسة الفعّالة لنجاح التعلم عن بُعد
                  </p>
                  <p className="border-b border-[#98A2B3] text-[22px] pb-3 leading-[1.5em] min-h-[4.5em] break-words">
                    تقدم نصائح حول إدارة الوقت، والتعلم النشط، وخلق بيئة
                    دراسية داعمة.
                  </p>
                  <p className="pt-3 text-[#98A2B3] text-[30px]">
                    1 <i className="fa-solid fa-message"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-x-3 w-full">
              <a
                href="#"
                className="bg-[#D7B13A] rounded-full h-[12px] w-[48px]"
              ></a>
              <a href="#" className="bg-black/30 rounded-full size-[12px]"></a>
              <a href="#" className="bg-black/30 rounded-full size-[12px]"></a>
              <a href="#" className="bg-black/30 rounded-full size-[12px]"></a>
              <a href="#" className="bg-black/30 rounded-full size-[12px]"></a>
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
