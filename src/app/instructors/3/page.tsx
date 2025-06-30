
import Image from "next/image";

export default function InstructorProfile() {
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
      <div className="section-1 container lg:h-screen relative ">
        <div className="flex justify-between p-10 w-full items-center ">
          <div className="w-[60%] lg:block hidden">
            <img
              src="/images/profile.png"
              className="w-full  relative top-[75px]"
              alt=""
            />
          </div>
          <div className="lg:w-[40%] md:w-[60%] w-[80%] mx-auto p-10 ">
            <div className="border-[6px] border-[#066B87] relative rounded-full  p-5 py-10">
              <div className="absolute size-full left-0 block -bottom-5 ">
                <p className="text-[#066B87] font-bold text-[40px] absolute w-full top-0 left-0  py-5   bg-[#D7B13A] rounded-full text-center">
                  دانى شختورة
                </p>
                <p className="text-[#066B87] font-bold text-[40px] absolute -bottom-20 left-1/2 -translate-x-1/2 w-full text-center">
                  ???????
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:grid hidden grid-cols-4 grid-rows-3 gap-3.5 absolute top-[583px] right-10 w-[80px] h-[56px]  ">
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
          className="absolute top-10 right-44 w-[150px] h-[97px] hidden lg:block"
          alt=""
        />
        <img
          src="/images/shape.png"
          className="absolute top-20 left-20 size-[55px] hidden lg:block"
          alt=""
        />
        <img
          src="/images/shape blue.png"
          className="absolute bottom-10  bg-blend-color hidden lg:block  left-20"
          alt=""
        />
        <img
          src="/images/shape blue.png"
          className="absolute bottom-10  bg-blend-color hidden lg:block  right-44 "
          alt=""
        />
      </div>

      <div className="home flex-wrap mt-24 w-[90%] mx-auto flex justify-between items-center my-10 gap-y-5">
        <div className="flex gap-x-3 items-center w-full md:w-fit">
          <div className="shadow-xl rounded-full">
            <img
              src="/images/Instructor-2.png"
              alt=""
              className="rounded-full w-[80px]"
            />
          </div>
          <div>
            <p className="font-bold text-[#093633] text-xl">دانى شختورة</p>
            <p className="text-[#093633] font-semibold">???????</p>
          </div>
        </div>
        <div className="text-[#093633] font-semibold bg-white shadow-sm shadow-black/50 p-5 rounded-lg flex flex-col gap-y-3 w-[50%] md:w-[30%]">
          <div className="flex justify-between">
            <p>
              <i className="fa-solid fa-eye"></i>&nbsp; views
            </p>
            <p> 5.235</p>
          </div>
          <div className="flex justify-between">
            <p>
              <i className="fa-solid fa-user-graduate"></i>&nbsp; Courses
            </p>
            <p>8</p>
          </div>
          <div className="flex justify-between">
            <p>
              <i className="fa-solid fa-video"></i>&nbsp; Learners
            </p>
            <p>2.650</p>
          </div>
        </div>
        <div className="bg-[#D7B13A] font-semibold w-full p-5 my-3 rounded-lg flex justify-between items-center">
          <button className="bg-[#066B87] text-white font border-l p-3 py-1 rounded-lg">
            Subscribe Now
          </button>
          <p className="text-[#066B87]" dir="rtl">
            فقط ب199 جنية/شهريا! احصل على استفادة غير محددة من جميع الدورات
            عند اشتراكك فى HDTCON
          </p>
        </div>
        <div className="text-end">
          <h2 className="text-xl text-[#066B87] font-bold">عن الخبير</h2>

          <p className="font-semibold text-[#066B87] my-3">
            زينب رضا مطورة واجهات أمامية ومدربة تقنية، بخبرة في نظم المعلومات
            من مصر. انتقلت إلى عالم التكنولوجيا من خلال التعلم الذاتي، ومنذ
            ذلك الحين دربت عشرات الطلاب على لغة HTML، وسهولة الوصول، وتصميم
            واجهات المستخدم. بتركيزها على البناء من الصفر والتفكير كمطور، تجعل
            زينب التعلم التقني في متناول الجميع، وخاصةً للمبتدئين في عالم
            البرمجة.
          </p>
          <button className="text-[#066B87] font-bold">
            اقرأ المزيد &nbsp;<i className="fa-solid fa-sort-down"></i>
          </button>
        </div>
        <h2 className="text-xl text-[#066B87] font-bold w-full text-end">
          الدورات التدريبية
        </h2>
        <div className="w-[40%] lg:w-[25%] shadow-md shadow-black/50 rounded-lg my-5 ms-auto text-end">
          <div className="relative">
            <div className="rounded-t-lg">
              <img
                src="/images/Instructor-2.png"
                alt=""
                className="object-cover w-full rounded-t-lg"
              />
            </div>
            <p className="text-white bg-[#066B87] w-fit px-3 py-1 rounded-lg font-bold absolute top-3 right-3">
              جديد
            </p>
          </div>
          <div className="text-[#066B87] font-bold p-2">
            <p className="my-2">???????</p>
            <p className="flex justify-between w-full items-center font-semibold">
              <i className="fa-solid fa-bookmark bg-[#9cafad] p-3 px-[14px] rounded-full"></i>
              دانى شختورة
            </p>
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
