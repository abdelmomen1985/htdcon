
import Image from "next/image";

export default function Courses() {
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
      <div className="section-1 w-[90%] mx-auto lg:h-screen relative ">
        <div className="flex justify-between p-10  items-center mx-auto">
          <div className="w-[60%] lg:block hidden">
            <img
              src="/images/courses.png"
              className="w-full  relative top-[75px]"
              alt=""
            />
          </div>
          <div className="lg:w-[40%] md:w-[60%] w-[90%] mx-auto p-10 ">
            <div className="border-[6px] border-[#066B87] relative rounded-full  p-5 py-10">
              <div className="absolute size-full left-0 block -bottom-5 ">
                <p className="text-[#066B87] font-bold text-[28px] xl:text-[40px] absolute w-full top-0 left-0  py-5   bg-[#D7B13A] rounded-full text-center">
                  افضل الدورات
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

      <div className="section-2 w-[90%] mx-auto mt-20 ">
        <div className="flex justify-between gap-y-6 flex-row-reverse  w-full mx-auto flex-wrap items-center ">
          <div className=" card-1 lg:w-[32%] bg-gradient-to-t to-[#D7B13A87]  from-[#066B8799] h-[400px] flex items-center  md:w-[48%] w-full relative rounded-xl">
            <div className="mx-auto w-[90%] z-30 h-[30%] p-1 text-center ">
              <img
                src="/images/101.png"
                className="mx-auto size-24  object-contain"
                alt=""
              />
              <p className="font-[600] text-[40px] text-white md:text-[30px] items-center ">
                ريادة الاعمال{" "}
              </p>
              <p
                dir="rtl"
                className="font-[600] text-[40px] text-white md:text-[30px] items-center "
              >
                9 دورات
              </p>
            </div>
          </div>
          <div className=" card-2 lg:w-[32%]  bg-gradient-to-t to-[#D7B13A87]  from-[#066B8799] h-[400px] flex items-center md:w-[48%] w-full relative rounded-xl">
            <div className="mx-auto w-[90%] z-30 h-[30%] p-1 text-center ">
              <img
                src="/images/102.png"
                className="mx-auto size-24  object-contain"
                alt=""
              />
              <p className="font-[600] text-[40px] text-white md:text-[30px] w-full items-center ">
                المالية و اسواق المال
              </p>
            </div>
          </div>
          <div className=" card-3 lg:w-[32%] bg-gradient-to-t to-[#D7B13A87]  from-[#066B8799] h-[400px] flex items-center md:w-[48%] w-full relative rounded-xl">
            <div className="mx-auto w-[90%] z-30 h-[30%] p-1 text-center ">
              <img
                src="/images/103.png"
                className="mx-auto size-24  object-contain"
                alt=""
              />
              <p className="font-[600] text-[40px] text-white md:text-[30px] w-full items-center ">
                الاعلام
              </p>
            </div>
          </div>
          <div className=" card-4 lg:w-[32%] bg-gradient-to-t to-[#D7B13A87]  from-[#066B8799] h-[400px] flex items-center md:w-[48%] w-full relative rounded-xl">
            <div className="mx-auto w-[90%] z-30 h-[30%] p-1 text-center ">
              <img
                src="/images/104.png"
                className="mx-auto size-24  object-contain"
                alt=""
              />
              <p className="font-[600] text-[40px] text-white md:text-[30px] w-full items-center ">
                القيادة و الادارة
              </p>
              <p
                dir="rtl"
                className="font-[600] text-[40px] text-white md:text-[30px] items-center "
              >
                66 دورة
              </p>
            </div>
          </div>
          <div className=" card-5 lg:w-[32%] bg-gradient-to-t to-[#D7B13A87]  from-[#066B8799] h-[400px] flex items-center md:w-[48%] w-full relative rounded-xl">
            <div className="mx-auto w-[90%] z-30 h-[30%] p-1 text-center ">
              <img
                src="/images/105.png"
                className="mx-auto size-24  object-contain"
                alt=""
              />
              <p className="font-[600] text-[40px] text-white md:text-[30px] w-full items-center ">
                قانون و حقوق
              </p>
              <p
                dir="rtl"
                className="font-[600] text-[40px] text-white md:text-[30px] items-center "
              >
                10 دورات{" "}
              </p>
            </div>
          </div>
          <div className=" card-6 lg:w-[32%] bg-gradient-to-t to-[#D7B13A87]  from-[#066B8799] h-[400px] flex items-center md:w-[48%] w-full relative rounded-xl">
            <div className="mx-auto w-[90%] z-30 h-[30%] p-1 text-center ">
              <img
                src="/images/106.png"
                className="mx-auto size-24  object-contain"
                alt=""
              />
              <p className="font-[600] text-[40px] text-white md:text-[30px] w-full items-center ">
                تكنولوجيا المعلومات
              </p>
              <p
                dir="rtl"
                className="font-[600] text-[40px] text-white md:text-[30px] items-center "
              >
                55 دورة
              </p>
            </div>
          </div>
          <div className=" card-7 lg:w-[32%] bg-gradient-to-t to-[#D7B13A87]  from-[#066B8799] h-[400px] flex items-center md:w-[48%] w-full relative rounded-xl">
            <div className="mx-auto w-[90%] z-30 h-[30%] p-1 text-center ">
              <img
                src="/images/107.png"
                className="mx-auto size-24  object-contain"
                alt=""
              />
              <p className="font-[600] text-[40px] text-white md:text-[30px] w-full items-center ">
                التعليم
              </p>
            </div>
          </div>
          <div className=" card-8 lg:w-[32%] bg-gradient-to-t to-[#D7B13A87]  from-[#066B8799] h-[400px] flex items-center md:w-[48%] w-full relative rounded-xl">
            <div className="mx-auto w-[90%] z-30 h-[30%] p-1 text-center ">
              <img
                src="/images/108.png"
                className="mx-auto size-24  object-contain"
                alt=""
              />
              <p className="font-[600] text-[40px] text-white md:text-[30px] w-full items-center ">
                العلاقات العامة و البرتوكول
              </p>
            </div>
          </div>
          <div className=" card-9 lg:w-[32%] bg-gradient-to-t to-[#D7B13A87]  from-[#066B8799] h-[400px] flex items-center md:w-[48%] w-full relative rounded-xl">
            <div className="mx-auto w-[90%] z-30 h-[30%] p-1 text-center ">
              <img
                src="/images/109.png"
                className="mx-auto size-24  object-contain"
                alt=""
              />
              <p className="font-[600] text-[40px] text-white md:text-[30px] w-full items-center ">
                إدارة الجودة والسلامة
              </p>
            </div>
          </div>
          <div className=" card-10 lg:w-[32%] bg-gradient-to-t to-[#D7B13A87]  from-[#066B8799] h-[400px] flex items-center md:w-[48%] w-full relative rounded-xl">
            <div className="mx-auto w-[90%] z-30 h-[30%] p-1 text-center ">
              <img
                src="/images/110.png"
                className="mx-auto size-24  object-contain"
                alt=""
              />
              <p className="font-[600] text-[40px] text-white md:text-[30px] w-full items-center ">
                التسويق
              </p>
            </div>
          </div>
          <div className=" card-11 lg:w-[32%] bg-gradient-to-t to-[#D7B13A87]  from-[#066B8799] h-[400px] flex items-center md:w-[48%] w-full relative rounded-xl">
            <div className="mx-auto w-[90%] z-30 h-[30%] p-1 text-center ">
              <img
                src="/images/111.png"
                className="mx-auto size-24  object-contain"
                alt=""
              />
              <p className="font-[600] text-[40px] text-white md:text-[30px] w-full items-center ">
                تطوير المجتمع
              </p>
            </div>
          </div>
          <div className=" card-12 lg:w-[32%] bg-gradient-to-t to-[#D7B13A87]  from-[#066B8799] h-[400px] flex items-center md:w-[48%] w-full relative rounded-xl">
            <div className="mx-auto w-[90%] z-30 h-[30%] p-1 text-center ">
              <img
                src="/images/112.png"
                className="mx-auto size-24  object-contain"
                alt=""
              />
              <p className="font-[600] text-[40px] text-white md:text-[30px] w-full items-center ">
                برامج لغة الاشارة
              </p>
            </div>
          </div>
          <div className=" card-13 lg:w-[32%] bg-gradient-to-t to-[#D7B13A87]  from-[#066B8799] h-[400px] flex items-center md:w-[48%] w-full relative rounded-xl">
            <div className="mx-auto w-[90%] z-30 h-[30%] p-1 text-center ">
              <img
                src="/images/113.png"
                className="mx-auto size-24  object-contain"
                alt=""
              />
              <p className="font-[600] text-[40px] text-white md:text-[30px] w-full items-center ">
                تطوير الاسرة
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3 my-5 py-5">
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between items-center">
            <button className="px-5 py-2 rounded-2xl md:text-[40px] text-[25px] text-[#066B87] border-2 border-[#066B87] w-fit">
              <a href="#"> عرض الكل</a>
            </button>
            <p className="md:text-[40px] text-[25px] font-bold text-[#066B87]">
              أحدث الدورات{" "}
            </p>
          </div>
          <div className="cards my-10 flex justify-between flex-wrap gap-y-10">
            <div className="card lg:w-[30%] md:w-[45%] w-full  rounded-2xl shadow-lg shadow-black/50 relative">
              <div className="relative">
                <img
                  src="/images/course4.png"
                  alt=""
                  className="rounded-t-lg max-h-[300px] object-cover w-full"
                />
                <img
                  src="/images/Frame 450.png"
                  alt=""
                  className="absolute left-5 bottom-0 translate-y-1/2 z-40"
                />
                <div className="bottom-2 right-5 absolute flex gap-x-3 items-center z-40">
                  <p className="text-white font-bold text-[22px]">
                    أوس وليد ابراهيم
                  </p>
                  <img
                    src="/images/Instractor-6.png"
                    alt=""
                    className="w-[50px] rounded-full"
                  />
                </div>
                <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 right-0 w-full h-1/2 z-30"></div>
              </div>
              <div className="bg-white p-3 py-10  rounded-b-lg">
                <p className="text-[#066B87] text-[25px] text-end font-bold">
                  تحليل البيانات
                </p>
                <p className="opacity-60 text-[20px] font-bold">
                  <i className="fa-solid fa-clock"></i> 1:00 ساعه
                </p>
              </div>
            </div>
            <div className="card lg:w-[30%] md:w-[45%] w-full  rounded-2xl shadow-lg shadow-black/50 relative">
              <div className="relative">
                <img
                  src="/images/course5.png"
                  alt=""
                  className="rounded-t-lg max-h-[300px] object-cover w-full"
                />
                <img
                  src="/images/Frame 450.png"
                  alt=""
                  className="absolute left-5 bottom-0 translate-y-1/2 z-40"
                />
                <div className="bottom-2 right-5 absolute flex gap-x-3 items-center z-40">
                  <p className="text-white font-bold text-[22px]">
                    يوسف دوارة
                  </p>
                  <img
                    src="/images/Instractor-7.png"
                    alt=""
                    className="w-[50px] rounded-full"
                  />
                </div>
                <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 right-0 w-full h-1/2 z-30"></div>
              </div>
              <div className="bg-white p-3 py-10  rounded-b-lg">
                <p className="text-[#066B87] text-[25px] text-end font-bold">
                  جودة الحياة-بالعربى
                </p>
                <p className="opacity-60 text-[20px] font-bold">
                  <i className="fa-solid fa-clock"></i> 1:00 ساعه
                </p>
              </div>
            </div>
            <div className="card lg:w-[30%] md:w-[45%] w-full  rounded-2xl shadow-lg shadow-black/50 relative">
              <div className="relative">
                <img
                  src="/images/course6.png"
                  alt=""
                  className="rounded-t-lg max-h-[300px] object-cover w-full"
                />
                <img
                  src="/images/Frame 450.png"
                  alt=""
                  className="absolute left-5 bottom-0 translate-y-1/2 z-40"
                />
                <div className="bottom-2 right-5 absolute flex gap-x-3 items-center z-40">
                  <p className="text-white font-bold text-[22px]">
                    مروان حيدر
                  </p>
                  <img
                    src="/images/Instractor-8.png"
                    alt=""
                    className="w-[50px] rounded-full"
                  />
                </div>
                <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 right-0 w-full h-1/2 z-30"></div>
              </div>
              <div className="bg-white p-3 py-10  rounded-b-lg">
                <p className="text-[#066B87] text-[25px] text-end font-bold">
                  الإعلام المعاصر
                </p>
                <p className="opacity-60 text-[20px] font-bold">
                  <i className="fa-solid fa-clock"></i> 1:00 ساعه
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button className="px-5 py-2 rounded-2xl md:text-[40px] text-[25px] text-[#066B87] border-2 border-[#066B87] w-fit">
              <a href="#"> عرض الكل</a>
            </button>
            <p className="md:text-[40px] text-[25px] font-bold text-[#066B87]">
              أعلى تقييمات الدورات
            </p>
          </div>
          <div className="cards my-10 flex justify-between flex-wrap gap-y-10">
            <div className="card lg:w-[30%] md:w-[45%] w-full  rounded-2xl shadow-lg shadow-black/50 relative">
              <div className="relative">
                <img
                  src="/images/course7.png"
                  alt=""
                  className="rounded-t-lg max-h-[300px] object-cover w-full"
                />
                <img
                  src="/images/Frame 450.png"
                  alt=""
                  className="absolute left-5 bottom-0 translate-y-1/2 z-40"
                />
                <div className="bottom-2 right-5 absolute flex gap-x-3 items-center z-40">
                  <p className="text-white font-bold text-[22px]">
                    منصور عبد اللطيف
                  </p>
                  <img
                    src="/images/Instractor-6.png"
                    alt=""
                    className="w-[50px] rounded-full"
                  />
                </div>
                <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 right-0 w-full h-1/2 z-30"></div>
              </div>
              <div className="bg-white p-3 py-10  rounded-b-lg">
                <p className="text-[#066B87] text-[25px] text-end font-bold">
                  إدارة الازمات و الطوارى
                </p>
                <p className="opacity-60 text-[20px] font-bold">
                  <i className="fa-solid fa-clock"></i> 1:00 ساعه
                </p>
              </div>
            </div>
            <div className="card lg:w-[30%] md:w-[45%] w-full  rounded-2xl shadow-lg shadow-black/50 relative">
              <div className="relative">
                <img
                  src="/images/course2.jpg"
                  alt=""
                  className="rounded-t-lg max-h-[300px] object-cover w-full"
                />
                <img
                  src="/images/Frame 450.png"
                  alt=""
                  className="absolute left-5 bottom-0 translate-y-1/2 z-40"
                />
                <div className="bottom-2 right-5 absolute flex gap-x-3 items-center z-40">
                  <p className="text-white font-bold text-[22px]">
                    طارق البيطار
                  </p>
                  <img
                    src="/images/Instractor-3.png"
                    alt=""
                    className="w-[50px] rounded-full"
                  />
                </div>
                <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 right-0 w-full h-1/2 z-30"></div>
              </div>
              <div className="bg-white p-3 py-10  rounded-b-lg">
                <p className="text-[#066B87] text-[25px] text-end font-bold">
                  الابداع و الابتكار فى العمل الاتصالى
                </p>
                <p className="opacity-60 text-[20px] font-bold">
                  <i className="fa-solid fa-clock"></i> 1:00 ساعه
                </p>
              </div>
            </div>
            <div className="card lg:w-[30%] md:w-[45%] w-full  rounded-2xl shadow-lg shadow-black/50 relative">
              <div className="relative">
                <img
                  src="/images/course5.png"
                  alt=""
                  className="rounded-t-lg max-h-[300px] object-cover w-full"
                />
                <img
                  src="/images/Frame 450.png"
                  alt=""
                  className="absolute left-5 bottom-0 translate-y-1/2 z-40"
                />
                <div className="bottom-2 right-5 absolute flex gap-x-3 items-center z-40">
                  <p className="text-white font-bold text-[22px]">
                    يوسف دوارة
                  </p>
                  <img
                    src="/images/Instractor-7.png"
                    alt=""
                    className="w-[50px] rounded-full"
                  />
                </div>
                <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 right-0 w-full h-1/2 z-30"></div>
              </div>
              <div className="bg-white p-3 py-10  rounded-b-lg">
                <p className="text-[#066B87] text-[25px] text-end font-bold">
                  جودة الحياة-بالعربى
                </p>
                <p className="opacity-60 text-[20px] font-bold">
                  <i className="fa-solid fa-clock"></i> 1:00 ساعه
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button className="px-5 py-2 rounded-2xl md:text-[40px] text-[25px] text-[#066B87] border-2 border-[#066B87] w-fit">
              <a href="#"> عرض الكل</a>
            </button>
            <p className="md:text-[40px] text-[25px] font-bold text-[#066B87]">
              الدورات المجانيه
            </p>
          </div>
          <div className="cards my-10 flex justify-between flex-wrap gap-y-10">
            <div className="card lg:w-[30%] md:w-[45%] w-full  rounded-2xl shadow-lg shadow-black/50 relative">
              <div className="relative">
                <img
                  src="/images/course4.png"
                  alt=""
                  className="rounded-t-lg max-h-[300px] object-cover w-full"
                />
                <img
                  src="/images/Frame 450.png"
                  alt=""
                  className="absolute left-5 bottom-0 translate-y-1/2 z-40"
                />
                <div className="bottom-2 right-5 absolute flex gap-x-3 items-center z-40">
                  <p className="text-white font-bold text-[22px]">
                    أوس وليد ابراهيم
                  </p>
                  <img
                    src="/images/Instractor-6.png"
                    alt=""
                    className="w-[50px] rounded-full"
                  />
                </div>
                <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 right-0 w-full h-1/2 z-30"></div>
              </div>
              <div className="bg-white p-3 py-10  rounded-b-lg">
                <p className="text-[#066B87] text-[25px] text-end font-bold">
                  تحليل البيانات
                </p>
                <p className="opacity-60 text-[20px] font-bold">
                  <i className="fa-solid fa-clock"></i> 1:00 ساعه
                </p>
              </div>
            </div>
            <div className="card lg:w-[30%] md:w-[45%] w-full  rounded-2xl shadow-lg shadow-black/50 relative">
              <div className="relative">
                <img
                  src="/images/course5.png"
                  alt=""
                  className="rounded-t-lg max-h-[300px] object-cover w-full"
                />
                <img
                  src="/images/Frame 450.png"
                  alt=""
                  className="absolute left-5 bottom-0 translate-y-1/2 z-40"
                />
                <div className="bottom-2 right-5 absolute flex gap-x-3 items-center z-40">
                  <p className="text-white font-bold text-[22px]">
                    يوسف دوارة
                  </p>
                  <img
                    src="/images/Instractor-7.png"
                    alt=""
                    className="w-[50px] rounded-full"
                  />
                </div>
                <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 right-0 w-full h-1/2 z-30"></div>
              </div>
              <div className="bg-white p-3 py-10  rounded-b-lg">
                <p className="text-[#066B87] text-[25px] text-end font-bold">
                  جودة الحياة-بالعربى
                </p>
                <p className="opacity-60 text-[20px] font-bold">
                  <i className="fa-solid fa-clock"></i> 1:00 ساعه
                </p>
              </div>
            </div>
            <div className="card lg:w-[30%] md:w-[45%] w-full  rounded-2xl shadow-lg shadow-black/50 relative">
              <div className="relative">
                <img
                  src="/images/course6.png"
                  alt=""
                  className="rounded-t-lg max-h-[300px] object-cover w-full"
                />
                <img
                  src="/images/Frame 450.png"
                  alt=""
                  className="absolute left-5 bottom-0 translate-y-1/2 z-40"
                />
                <div className="bottom-2 right-5 absolute flex gap-x-3 items-center z-40">
                  <p className="text-white font-bold text-[22px]">
                    مروان حيدر
                  </p>
                  <img
                    src="/images/Instractor-8.png"
                    alt=""
                    className="w-[50px] rounded-full"
                  />
                </div>
                <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 right-0 w-full h-1/2 z-30"></div>
              </div>
              <div className="bg-white p-3 py-10  rounded-b-lg">
                <p className="text-[#066B87] text-[25px] text-end font-bold">
                  الإعلام المعاصر
                </p>
                <p className="opacity-60 text-[20px] font-bold">
                  <i className="fa-solid fa-clock"></i> 1:00 ساعه
                </p>
              </div>
            </div>
          </div>
          <button className="px-5 py-2 mx-auto block rounded-2xl md:text-[40px] text-[25px] text-[#066B87] border-2 border-[#066B87] w-fit">
            <a href="#"> عرض الكل</a>
          </button>
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
