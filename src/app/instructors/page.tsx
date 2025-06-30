
import Image from "next/image";

export default function Instructors() {
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
              src="/images/home3.png.jpg"
              className="w-full  relative top-[75px]"
              alt=""
            />
          </div>
          <div className="lg:w-[40%] md:w-[60%] w-[90%] mx-auto p-10 ">
            <div className="border-[6px] border-[#066B87] relative rounded-full  p-5 py-10">
              <div className="absolute size-full left-0 block -bottom-5 ">
                <p className="text-[#066B87] font-bold text-[28px] xl:text-[40px] absolute w-full top-0 left-0  py-5   bg-[#D7B13A] rounded-full text-center">
                  افضل المدربيين
                </p>
                <p
                  className="text-[#066B87] absolute -bottom-16 md:text-[35px] text-[30px] left-1/2 -translate-x-1/2  font-bold"
                  dir="rtl"
                >
                  72 مدرب
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
      <div className="section-2 my-5 py-5">
        <div className="w-[90%] mx-auto">
          <div className="cards my-10 flex flex-wrap justify-between gap-y-5">
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center lg:w-[22%] md:w-[45%] w-full">
              <div className="relative">
                <img src="/images/instructor-1.png" alt="" />
                <img
                  src="/images/true.png"
                  alt=""
                  className="absolute bottom-5 right-5"
                />
              </div>
              <a
                href="instructors/instructors-1.html"
                className="font-bold text-[20px] xl:text-[30px]"
              >
                عامر عاشور{" "}
              </a>
              <p className="rounded-full px-5 py-2 text-white font-bold bg-[#D7B13A] xl:text-[30px] text-[20px] my-3">
                الملف الشخصي
              </p>
              <div className="stars">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
            </div>
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center lg:w-[22%] md:w-[45%] w-full">
              <div className="relative">
                <img src="/images/Instructor-2.png" alt="" />
                <img
                  src="/images/true.png"
                  alt=""
                  className="absolute bottom-5 right-5"
                />
              </div>
              <a
                href="instructors/instructor-1.html"
                className="font-bold text-[20px] xl:text-[30px]"
              >
                دانى شختورة
              </a>
              <p className="rounded-full px-5 py-2 text-white font-bold bg-[#D7B13A] xl:text-[30px] text-[20px] my-3">
                الملف الشخصي
              </p>
              <div className="stars">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
            </div>
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center lg:w-[22%] md:w-[45%] w-full">
              <div className="relative">
                <img src="/images/Instructor-3.png" alt="" />
                <img
                  src="/images/true.png"
                  alt=""
                  className="absolute bottom-5 right-5"
                />
              </div>
              <a
                href="instructors/instructor-1.html"
                className="font-bold text-[20px] xl:text-[30px]"
              >
                طارق البيطار
              </a>
              <p className="rounded-full px-5 py-2 text-white font-bold bg-[#D7B13A] xl:text-[30px] text-[20px] my-3">
                الملف الشخصي
              </p>
              <div className="stars">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
            </div>
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center lg:w-[22%] md:w-[45%] w-full">
              <div className="relative">
                <img src="/images/Instructor-4.png" alt="" />
                <img
                  src="/images/true.png"
                  alt=""
                  className="absolute bottom-5 right-5"
                />
              </div>
              <a
                href="instructors/instructor-1.html"
                className="font-bold text-[20px] xl:text-[30px]"
              >
                احمد العثمان
              </a>
              <p className="rounded-full px-5 py-2 text-white font-bold bg-[#D7B13A] xl:text-[30px] text-[20px] my-3">
                الملف الشخصي
              </p>
              <div className="stars">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
            </div>
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center lg:w-[22%] md:w-[45%] w-full">
              <div className="relative">
                <img src="/images/instructor-11.png" alt="" />
              </div>
              <a
                href="instructors/instructor-1.html"
                className="font-bold text-[20px] xl:text-[30px]"
              >
                احمد السعدى
              </a>
              <p className="rounded-full px-5 py-2 text-white font-bold bg-[#D7B13A] xl:text-[30px] text-[20px] my-3">
                الملف الشخصي
              </p>
              <div className="stars">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
            </div>
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center lg:w-[22%] md:w-[45%] w-full">
              <div className="relative">
                <img src="/images/instructor-10.png" alt="" />
              </div>
              <a
                href="instructors/instructor-1.html"
                className="font-bold text-[20px] xl:text-[30px]"
              >
                مهند السيرينى
              </a>
              <p className="rounded-full px-5 py-2 text-white font-bold bg-[#D7B13A] xl:text-[30px] text-[20px] my-3">
                الملف الشخصي
              </p>
              <div className="stars">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
            </div>
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center lg:w-[22%] md:w-[45%] w-full">
              <div className="relative">
                <img src="/images/instructor-12.png" alt="" />
              </div>
              <a
                href="instructors/instructor-1.html"
                className="font-bold text-[20px] xl:text-[30px]"
              >
                احمد محمد
              </a>
              <p className="rounded-full px-5 py-2 text-white font-bold bg-[#D7B13A] xl:text-[30px] text-[20px] my-3">
                الملف الشخصي
              </p>
              <div className="stars">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
            </div>
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center lg:w-[22%] md:w-[45%] w-full">
              <div className="relative">
                <img src="/images/Person.png" alt="" className="w-[200px]" />
                <img
                  src="/images/true.png"
                  alt=""
                  className="absolute bottom-5 right-5"
                />
              </div>
              <a
                href="instructors/instructor-1.html"
                className="font-bold text-[20px] xl:text-[30px]"
              >
                رفيدة الحبش
              </a>
              <p className="rounded-full px-5 py-2 text-white font-bold bg-[#D7B13A] xl:text-[30px] text-[20px] my-3">
                الملف الشخصي
              </p>
              <div className="stars">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
            </div>
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center lg:w-[22%] md:w-[45%] w-full">
              <div className="relative">
                <img
                  src="/images/instructor-13.jpg"
                  alt=""
                  className="rounded-full w-[200px]"
                />
                <img
                  src="/images/true.png"
                  alt=""
                  className="absolute bottom-5 right-5"
                />
              </div>
              <a
                href="instructors/instructor-1.html"
                className="font-bold text-[20px] xl:text-[30px]"
              >
                فراس كمال خورى
              </a>
              <p className="rounded-full px-5 py-2 text-white font-bold bg-[#D7B13A] xl:text-[30px] text-[20px] my-3">
                الملف الشخصي
              </p>
              <div className="stars">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
            </div>
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center lg:w-[22%] md:w-[45%] w-full">
              <div className="relative">
                <img
                  src="/images/instructor-14.png"
                  alt=""
                  className="rounded-full  w-[210px]"
                />
                <img
                  src="/images/true.png"
                  alt=""
                  className="absolute bottom-5 right-5"
                />
              </div>
              <a
                href="instructors/instructor-1.html"
                className="font-bold text-[20px] xl:text-[30px]"
              >
                أوس وليد ابراهيم
              </a>
              <p className="rounded-full px-5 py-2 text-white font-bold bg-[#D7B13A] xl:text-[30px] text-[20px] my-3">
                الملف الشخصي
              </p>
              <div className="stars">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
            </div>
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center lg:w-[22%] md:w-[45%] w-full">
              <div className="relative">
                <img
                  src="/images/Person.png"
                  alt=""
                  className="rounded-full  w-[200px]"
                />
                <img
                  src="/images/true.png"
                  alt=""
                  className="absolute bottom-5 right-5"
                />
              </div>
              <a
                href="instructors/instructor-1.html"
                className="font-bold text-[20px] xl:text-[30px]"
              >
                جمانة فقية
              </a>
              <p className="rounded-full px-5 py-2 text-white font-bold bg-[#D7B13A] xl:text-[30px] text-[20px] my-3">
                الملف الشخصي
              </p>
              <div className="stars">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
            </div>
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center lg:w-[22%] md:w-[45%] w-full">
              <div className="relative">
                <img
                  src="/images/instructor-15.jpg"
                  alt=""
                  className="rounded-full  w-[200px]"
                />
                <img
                  src="/images/true.png"
                  alt=""
                  className="absolute bottom-5 right-5"
                />
              </div>
              <a
                href="instructors/instructor-1.html"
                className="font-bold text-[20px] xl:text-[30px]"
              >
                ثائر رحال
              </a>
              <p className="rounded-full px-5 py-2 text-white font-bold bg-[#D7B13A] xl:text-[30px] text-[20px] my-3">
                الملف الشخصي
              </p>
              <div className="stars">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
            </div>
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center lg:w-[22%] md:w-[45%] w-full">
              <div className="relative">
                <img
                  src="/images/Person.png"
                  alt=""
                  className="rounded-full  w-[200px]"
                />
                <img
                  src="/images/true.png"
                  alt=""
                  className="absolute bottom-5 right-5"
                />
              </div>
              <a
                href="instructors/instructor-1.html"
                className="font-bold text-[20px] xl:text-[30px]"
              >
                رشا تدمرى
              </a>
              <p className="rounded-full px-5 py-2 text-white font-bold bg-[#D7B13A] xl:text-[30px] text-[20px] my-3">
                الملف الشخصي
              </p>
              <div className="stars">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
            </div>
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center lg:w-[22%] md:w-[45%] w-full">
              <div className="relative">
                <img
                  src="/images/Person.png"
                  alt=""
                  className="rounded-full  w-[200px]"
                />
                <img
                  src="/images/true.png"
                  alt=""
                  className="absolute bottom-5 right-5"
                />
              </div>
              <a
                href="instructors/instructor-1.html"
                className="font-bold text-[20px] xl:text-[30px]"
              >
                د. نرمين سليم
              </a>
              <p className="rounded-full px-5 py-2 text-white font-bold bg-[#D7B13A] xl:text-[30px] text-[20px] my-3">
                الملف الشخصي
              </p>
              <div className="stars">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
            </div>
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center lg:w-[22%] md:w-[45%] w-full">
              <div className="relative">
                <img
                  src="/images/instructor-16.jpg"
                  alt=""
                  className="rounded-full  w-[200px]"
                />
                <img
                  src="/images/true.png"
                  alt=""
                  className="absolute bottom-5 right-5"
                />
              </div>
              <a
                href="instructors/instructor-1.html"
                className="font-bold text-[20px] xl:text-[30px]"
              >
                سالم موسى
              </a>
              <p className="rounded-full px-5 py-2 text-white font-bold bg-[#D7B13A] xl:text-[30px] text-[20px] my-3">
                الملف الشخصي
              </p>
              <div className="stars">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
            </div>
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center lg:w-[22%] md:w-[45%] w-full">
              <div className="relative">
                <img
                  src="/images/instructor-17.png"
                  alt=""
                  className="rounded-full  w-[200px]"
                />
                <img
                  src="/images/true.png"
                  alt=""
                  className="absolute bottom-5 right-5"
                />
              </div>
              <a
                href="instructors/instructor-1.html"
                className="font-bold text-[20px] xl:text-[30px]"
              >
                رغيد اللحام
              </a>
              <p className="rounded-full px-5 py-2 text-white font-bold bg-[#D7B13A] xl:text-[30px] text-[20px] my-3">
                الملف الشخصي
              </p>
              <div className="stars">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
            </div>
          </div>
          <button className="p-5 py-2 border-2 border-[#066B87] text-[#066B87] rounded-lg font-bold mx-auto block text-[30px] transition-all duration-300 hover:text-white hover:bg-[#066B87]">
            المزيد
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
