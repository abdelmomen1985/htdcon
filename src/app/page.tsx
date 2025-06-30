import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <header>
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
        <div className="w-[90%] mx-auto my-10 mt-20 lg:flex justify-between items-center">
          <div className="relative lg:w-[45%] my-10">
            <div className="w-fit relative mx-auto">
              <img
                src="/images/img-home-removebg.png"
                alt=""
                className="bg-[#D7B13A] rounded-full p-5 relative z-40"
              />
              <img
                src="/images/placeholder.png"
                alt=""
                className="absolute -top-10 left-0 size-full"
              />
              <div className="border border-[#066B87] rounded-xl animate-upDown p-5 w-fit flex flex-col items-center gap-y-3 shadow-2xl absolute top-0 -left-5 z-40 bg-[#F5F5F4]">
                <img src="/images/Ring.png" alt="" className="w-[80px]" />
                <h2 className="font-bold text-3xl">5k+</h2>
                <p className="opacity-50">Online Courses</p>
              </div>
              <div className="border border-[#066B87] rounded-xl animate-rightLeft p-3 w-fit flex items-center gap-y-3 shadow-2xl absolute top-1/2 -translate-y-1/2 md:-right-20 -right-5  z-40 bg-[#F5F5F4] gap-x-3">
                <div>
                  <img src="/images/icon (1).png" alt="" className="w-[30px]" />
                </div>
                <div>
                  <h2 className="font-bold text-2xl">2k+</h2>
                  <p className="opacity-50">Video Courses</p>
                </div>
              </div>
              <div className="border border-[#066B87] rounded-xl p-3 w-fit animate-upDown flex items-center gap-y-3 shadow-2xl absolute bottom-10 -left-5 z-40 bg-[#F5F5F4] gap-x-3">
                <div>
                  <img src="/images/icon.png" className="w-[35px]" />
                </div>
                <div>
                  <p className="opacity-50">Tutors</p>
                  <h2 className="font-bold text-2xl">250+</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="text-end lg:w-[45%]">
            <div className="relative">
              <h1 className="text-[#066B87] text-6xl font-bold">
                نمِّي مهاراتك... واصنع بصماتك
              </h1>
              <img
                src="/images/Group 458.png"
                alt=""
                className="absolute -top-2/3 left-1/2"
              />
              <img
                src="/images/Ellipse 2.png"
                alt=""
                className="absolute -top-1/2 left-1/2"
              />
            </div>
            <p className="text-lg font-bold my-5">
              انطلق في رحلة تعلم استثنائية مع منصتنا التعليمية الرائدة نوفر
              لك أكثر من 2000 دورة تدريبية في مختلف المجالات، بجودة عالية وتحت
              إشراف أفضل الخبراء والمتخصصين.
            </p>
            <p className="text-[#066B87] text-3xl font-semibold">
              التميز يبدأ بخطوة... فلماذا لا تكون خطوتك اليوم
            </p>
            <button className="bg-[#F4D77E] text-[#D7B13A] rounded-lg p-2 px-5 font-bold m-5 me-0">
              احصل علي نجربه مجانيه
            </button>
            <button className="bg-[#D7B13A] rounded-lg p-2 px-5 text-white font-bold m-5 me-0">
              ابدأ الأن
            </button>
          </div>
        </div>
      </header>

      <div className="section-1 my-5 py-5">
        <div className="w-[90%] mx-auto flex flex-wrap justify-between items-center">
          <div className="lg:w-[45%]">
            <div className="relative">
              <img
                src="/images/Rectangle 12.png"
                alt=""
                className="mx-auto rounded-lg"
              />
              <img
                src="/images/Rectangle 13.png"
                alt=""
                className="absolute -top-5 -left-5"
              />
              <img
                src="/images/Rectangle 14.png"
                alt=""
                className="absolute -bottom-5 -right-5"
              />
            </div>
          </div>
          <div className="lg:w-[45%] text-start" dir="rtl">
            <h2 className="text-[64px] font-bold text-[#D7B13A]">من نحن</h2>
            <p className="text-[40px] font-bold">
              <span>تقدم</span>
              <span>
                <span className="text-[#066B87]">HTDC</span>
                <span className="text-[#D7B13A]">ON</span>
              </span>
              <span>أفضل الفرص للطلاب حول العالم</span>
            </p>
            <p className="text-[22px] font-semibold">
              منصة HDTC-ON هي منصة تدريب إلكترونية متخصصة، تقدم مجموعة متميزة من
              الدورات التدريبية في مجالات متعددة مثل القيادة، الإدارة، التسويق،
              الإعلام، القانون، وتكنولوجيا المعلومات. نسعى إلى تمكين الأفراد من
              تطوير مهاراتهم وصقل خبراتهم من خلال محتوى تدريبي عالي الجودة،
              يقدمه نخبة من المدربين المعتمدين.
              <br />
              نوفّر تجربة تعليمية مرنة وسهلة الوصول، تُمكِّن المتعلّمين من
              الدراسة في أي وقت ومن أي مكان، مع شهادات معتمدة تعزز فرصهم
              المهنية. رؤيتنا هي دعم التعلم المستمر وتقديم فرص حقيقية للنمو
              والتطور في سوق العمل.
            </p>
            <button className="bg-[#066B87] rounded-full px-5 py-2 font-bold text-white my-3">
              <a href="#">
                انضم إلينا <i className="fa-solid fa-arrow-left"></i>
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#F4D77E] p-10 md:flex-row flex flex-col gap-y-7 justify-around">
        <div className="card flex flex-col items-center">
          <img
            src="/images/mdi_virtual-meeting.png"
            alt=""
            className="size-[100px]"
          />
          <h2 className="text-[50px] text-[#066B87] font-bold">+500</h2>
          <p className="text-[25px] font-bold text-[#646464]">دورة تدريبيه</p>
        </div>
        <div className="card flex flex-col items-center">
          <img
            src="/images/mdi_graduation-cap.png"
            alt=""
            className="size-[100px]"
          />
          <h2 className="text-[50px] text-[#066B87] font-bold ">+200.000</h2>
          <p className="text-[25px] font-bold text-[#646464]"> زائر شهريا</p>
        </div>
        <div className="card flex flex-col items-center">
          <img src="/images/mdi_teacher.png" alt="" className="size-[100px]" />
          <h2 className="text-[50px] text-[#066B87] font-bold">+150</h2>
          <p className="text-[25px] font-bold text-[#646464]">مدرب معتمد</p>
        </div>
      </div>

      <div className="section-2 my-5 py-5">
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between items-center">
            <p className="px-5 py-2 font-bold rounded-lg md:text-[40px] text-[25px] text-[#066B87] border-2 border-[#066B87] w-fit">
              اكتشف المزيد
            </p>
            <p className="md:text-[40px] text-[25px] font-bold text-[#066B87]">
              البرامج التعليمية
            </p>
          </div>
          <div
            className="cards my-10 flex justify-between flex-wrap gap-y-10 text-center"
            dir="rtl"
          >
            <div
              className="card md:w-[45%] lg:w-[30%] w-full px-5 py-8 bg-gradient-to-t to-[#D7B13A87]  from-[#066B8799] rounded-lg   flex flex-col items-center"
              dir=""
            >
              <img
                src="/images/material-symbols_media-link.png"
                alt=""
                className="size-[100px]"
              />
              <p className="text-[40px] text-white font-bold my-5">الاعلام</p>
              <p className="text-[40px] text-white font-bold">24 دورة</p>
            </div>
            <div
              className="card md:w-[45%] lg:w-[30%] w-full px-5 py-8 bg-gradient-to-t to-[#D7B13A87]  from-[#066B8799] rounded-lg   flex flex-col items-center"
              dir=""
            >
              <img src="/images/Vector.png" alt="" className="size-[100px]" />
              <p className="text-[40px] text-white font-bold my-5">تسويق</p>
              <p className="text-[40px] text-white font-bold">7 دورات</p>
            </div>
            <div
              className="card md:w-[45%] lg:w-[30%] w-full px-5 py-8 bg-gradient-to-t to-[#D7B13A87]  from-[#066B8799] rounded-lg   flex flex-col items-center"
              dir=""
            >
              <img
                src="/images/fa-solid_hands-helping.png"
                alt=""
                className="size-[100px]"
              />
              <p className="text-[40px] text-white font-bold my-5">
                ريادة الاعمال{" "}
              </p>
              <p className="text-[40px] text-white font-bold">9 دورات</p>
            </div>
            <div
              className="card md:w-[45%] lg:w-[30%] w-full px-5 py-8 bg-gradient-to-t to-[#D7B13A87]  from-[#066B8799] rounded-lg   flex flex-col items-center"
              dir=""
            >
              <img
                src="/images/streamline_ai-technology-spark-solid.png"
                alt=""
                className="size-[100px]"
              />
              <p className="text-[35px] text-white font-bold my-5">
                تكنولوجيا المعلومات
              </p>
              <p className="text-[40px] text-white font-bold">55 دورات</p>
            </div>
            <div
              className="card md:w-[45%] lg:w-[30%] w-full px-5 py-8 bg-gradient-to-t to-[#D7B13A87]  from-[#066B8799] rounded-lg   flex flex-col items-center"
              dir=""
            >
              <img
                src="/images/game-icons_scales.png"
                alt=""
                className="size-[100px]"
              />
              <p className="text-[40px] text-white font-bold my-5">
                قانون و حقوق
              </p>
              <p className="text-[40px] text-white font-bold">10 دورات</p>
            </div>
            <div
              className="card md:w-[45%] lg:w-[30%] w-full px-5 py-8 bg-gradient-to-t to-[#D7B13A87]  from-[#066B8799] rounded-lg   flex flex-col items-center"
              dir=""
            >
              <img
                src="/images/fluent_presenter-20-filled.png"
                alt=""
                className="size-[100px]"
              />
              <p className="text-[40px] text-white font-bold my-5">
                القيادة و الادارة
              </p>
              <p className="text-[40px] text-white font-bold">66 دورات</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-3 py-5">
        <div className="w-[90%] mx-auto relative">
          <div className="w-[90%] mx-auto my-10 mt-20 lg:flex justify-between relative">
            <div className="relative lg:w-[45%] mx-auto">
              <div className=" relative">
                <img
                  src="/images/be-trainer.png"
                  alt=""
                  className="bg-[#066B87] rounded-full p-5 relative z-40 mx-auto"
                />
                <img
                  src="/images/placeholder.png"
                  alt=""
                  className="absolute top-1/2 hidden lg:block -translate-y-1/2 -right-3 h-[110%] w-[110%]"
                />
                <img
                  src="/images/Ellipse 2.png"
                  alt=""
                  className="absolute bottom-0 right-20"
                />
              </div>
            </div>
            <div className="text-end lg:w-[45%]">
              <div className="relative my-10">
                <h1 className="text-[#066B87] text-[50px] font-bold">
                  كن مدربا
                </h1>
                <img
                  src="/images/Group 458.png"
                  alt=""
                  className="absolute -top-2/3 left-1/2"
                />
              </div>
              <p className="text-lg font-bold my-5 text-[30px]">
                هل ترغب في الانضمام إلى فريقنا كمدرب؟ كن جزءًا من مجتمعنا وسجل
                الآن لتصبح مدربًا معنا.
              </p>
            </div>
          </div>
          <img
            src="/images/Group 517.png"
            alt=""
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
          />
        </div>
      </div>

      <div className="section-4 my-5 py-5">
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between items-center">
            <p className="px-5 py-2 rounded-2xl md:text-[40px] text-[25px] text-[#066B87] border-2 border-[#066B87] w-fit">
              {" "}
              عرض الكل
            </p>
            <p className="md:text-[40px] text-[25px] font-bold text-[#066B87]">
              الدورات الاكثر مشاهدة
            </p>
          </div>
          <div className="cards my-10 flex justify-between flex-wrap gap-y-10">
            <div className="card lg:w-[30%] md:w-[45%] w-full  rounded-2xl shadow-lg shadow-black/50 relative">
              <div className="relative">
                <img
                  src="/images/course1.webp"
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
                    رفيدة الحبش
                  </p>
                  <img
                    src="/images/img-home.jpg"
                    alt=""
                    className="w-[50px] rounded-full"
                  />
                </div>
                <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 right-0 w-full h-1/2 z-30"></div>
              </div>
              <div className="bg-white p-3 py-10  rounded-b-lg">
                <p className="text-[#066B87] text-[25px] text-end font-bold">
                  التخطيط الاسرى
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
                    src="/images/Instractor-5.png"
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
                  src="/images/course3.jpg"
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
                    د.نرمين سليم
                  </p>
                  <img
                    src="/images/img-home.jpg"
                    alt=""
                    className="w-[50px] rounded-full"
                  />
                </div>
                <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 right-0 w-full h-1/2 z-30"></div>
              </div>
              <div className="bg-white p-3 py-10  rounded-b-lg">
                <p className="text-[#066B87] text-[25px] text-end font-bold">
                  دور الملكية الفكرية فى تطوير العمل
                </p>
                <p className="opacity-60 text-[20px] font-bold">
                  <i className="fa-solid fa-clock"></i> 1:00 ساعه
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-x-3 w-full">
              <a
                href="#"
                className="bg-[#D7B13A] rounded-full h-[12px] w-[48px]"
              ></a>
              <a href="#" className="bg-black/30 rounded-full size-[12px]"></a>
              <a href="#" className="bg-black/30 rounded-full size-[12px]"></a>
            </div>
          </div>
        </div>
      </div>

      <div className="section-5 my-5 py-5">
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between items-center">
            <p className="px-5 py-2 rounded-2xl md:text-[40px] text-[25px] text-[#066B87] border-2 border-[#066B87] w-fit">
              {" "}
              جميع المدربين
            </p>
            <p className="md:text-[40px] text-[25px] font-bold text-[#066B87]">
              المدربين
            </p>
          </div>
          <div className="cards my-10 flex flex-wrap justify-between gap-y-5">
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center  lg:w-[22%] md:w-[45%] w-full">
              <img src="/images/Instructor-1.png" alt="" />
              <p className="font-bold text-[30px]">عامر عاشور </p>
              <div className="stars">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
              </div>
            </div>
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center  lg:w-[22%] md:w-[45%] w-full">
              <img src="/images/Instructor-2.png" alt="" />
              <p className="font-bold text-[30px]">دانى شختورة</p>
              <div className="stars">
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
            </div>
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center  lg:w-[22%] md:w-[45%] w-full">
              <img src="/images/Instructor-3.png" alt="" />
              <p className="font-bold text-[30px]">طارق البيطار</p>
              <div className="stars">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
            </div>
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center  lg:w-[22%] md:w-[45%] w-full">
              <img src="/images/Instructor-4.png" alt="" />
              <p className="font-bold text-[30px]">احمد العثمان</p>
              <div className="stars">
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
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

      <div className="section-6 my-5 py-5">
        <div className="w-[90%] mx-auto relative">
          <div className="flex justify-between items-center">
            <p className="px-5 py-2 rounded-2xl md:text-[40px] text-[25px] text-[#066B87] border-2 border-[#066B87] w-fit">
              {" "}
              جميع المستشارين
            </p>
            <p className="md:text-[40px] text-[25px] font-bold text-[#066B87]">
              الإستشارات
            </p>
          </div>
          <div className="cards my-10 flex flex-wrap justify-between gap-y-5">
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center lg:w-[22%] md:w-[45%] w-full">
              <img src="/images/Instructor-1.png" alt="" />
              <p className="font-bold text-[30px]">عامر عاشور </p>
              <p className="rounded-full px-5 py-2 text-white font-bold bg-[#D7B13A] xl:text-[30px] text-[20px] my-3">
                الملف الشخصي
              </p>
              <div className="stars">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
              </div>
            </div>
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center lg:w-[22%] md:w-[45%] w-full">
              <img src="/images/Instructor-2.png" alt="" />
              <p className="font-bold text-[30px]">دانى شختورة</p>
              <p className="rounded-full px-5 py-2 text-white font-bold bg-[#D7B13A] xl:text-[30px] text-[20px] my-3">
                الملف الشخصي
              </p>
              <div className="stars">
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
            </div>
            <div className="card rounded-xl shadow-lg shadow-black/50 p-4 flex flex-col gap-y-3 items-center justify-center lg:w-[22%] md:w-[45%] w-full">
              <img src="/images/Instructor-3.png" alt="" />
              <p className="font-bold text-[30px]">طارق البيطار</p>
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
              <img src="/images/Instructor-4.png" alt="" />
              <p className="font-bold text-[30px]">احمد العثمان</p>
              <p className="rounded-full px-5 py-2 text-white font-bold bg-[#D7B13A] xl:text-[30px] text-[20px] my-3">
                الملف الشخصي
              </p>
              <div className="stars">
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
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

      <div className="section-7 my-5 py-5">
        <div className="w-[90%] mx-auto relative">
          <p className="text-[40px] font-bold text-[#066B87] text-end">
            آراء المتدربين
          </p>
          <div className="cards my-10 mt-96 flex flex-wrap justify-between gap-y-24">
            <div className="card shadow-lg bg-white lg:w-[30%] md:w-[45%] w-full rounded-xl p-5 pt-20 flex flex-col gap-y-3 items-center justify-center shadow-black relative z-40">
              <img
                src="/images/Trainer-1.png"
                alt=""
                className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
              />
              <p className="text-[40px] font-bold text-[#066B87]">احمد محمد</p>
              <p className="text-[#98A2B3] text-[30px]">مهندس كومبيوتر</p>
              <div className="stars my-5">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
              <p className="font-bold" dir="rtl">
                منصة HDTC-On فعلاً مختلفة! استفدت كتير من الدورات، خصوصًا في
                مجال الإدارة. المحتوى واضح، والمدربين شرحهم ممتاز. أنصح أي حد
                حابب يطور نفسه يسجل فورًا.
              </p>
            </div>
            <div className="card shadow-lg bg-white lg:w-[30%] md:w-[45%] w-full rounded-xl p-5 pt-20 flex flex-col gap-y-3 items-center justify-center shadow-black relative z-40">
              <img
                src="/images/Trainer-2.png"
                alt=""
                className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
              />
              <p className="text-[40px] font-bold text-[#066B87]"> هبة</p>
              <p className="text-[#98A2B3] text-[30px]"> معلمة</p>
              <div className="stars my-5">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
              <p className="font-bold" dir="rtl">
                تابعت دورة في التسويق الرقمي وكانت فوق التوقعات. الفيديوهات
                منظمة، والأسئلة بعد كل وحدة ساعدتني أفهم كويس. كمان الشهادة كانت
                معتمدة واستفدت منها في شغلي.
              </p>
            </div>
            <div className="card shadow-lg bg-white lg:w-[30%] md:w-[45%] w-full rounded-xl p-5 pt-20 flex flex-col gap-y-3 items-center justify-center shadow-black relative z-40">
              <img
                src="/images/Trainer-2.png"
                alt=""
                className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
              />
              <p className="text-[40px] font-bold text-[#066B87]"> عمر</p>
              <p className="text-[#98A2B3] text-[30px]"> محامى</p>
              <div className="stars my-5">
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-solid fa-star text-[#FCD53F] text-[25px]"></i>
                <i className="fa-regular fa-star text-black/30 text-[25px]"></i>
              </div>
              <p className="font-bold" dir="rtl">
                تابعت دورة في التسويق الرقمي وكانت فوق التوقعات. الفيديوهات
                منظمة، والأسئلة بعد كل وحدة ساعدتني أفهم كويس. كمان الشهادة كانت
                معتمدة واستفدت منها في شغلي.
              </p>
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
          <img
            src="/images/Group 1698.png"
            alt=""
            className="absolute top-0 left-10 z-30"
          />
          <img
            src="/images/Group 1699.png"
            alt=""
            className="absolute top-0 right-10 z-30"
          />
        </div>
      </div>

      <div className="section-8 my-5 py-5">
        <div className="w-[90%] mx-auto">
          <div className="bg-[url(/images/Frame-474.png)] bg-cover flex md:flex-row flex-col items-center p-5 rounded-lg gap-y-5 gap-x-5">
            <img
              src="/images/Frame 475.png"
              alt=""
              className="md:w-[49%] object-cover"
            />
            <img
              src="/images/Frame 476.png"
              alt=""
              className="md:w-[49%] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="section-9 my-5 py-5">
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between items-center">
            <p className="px-5 py-2 rounded-2xl md:text-[40px] text-[25px] text-[#066B87] border-2 border-[#066B87] w-fit">
              اكتشف المزيد
            </p>
            <p className="md:text-[40px] text-[25px] font-bold text-[#066B87]">
              المدونة
            </p>
          </div>
          <div className="cards flex gap-y-5 flex-wrap justify-between  text-end  my-10">
            <div className="card md:w-[45%] lg:w-[32%] shadow-md shadow-black/30 rounded-lg">
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
                  تناقش المقالة استراتيجيات الحفاظ على الدافعية والانضباط الذاتي
                  أثناء الدراسة عن بُعد.
                </p>
                <p className="pt-3 text-[#98A2B3] text-[30px]">
                  1 <i className="fa-solid fa-message"></i>
                </p>
              </div>
            </div>
            <div className="card md:w_-[45%] lg:w-[32%] shadow-md shadow-black/30 rounded-lg">
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
                  تستعرض الاتجاهات الحديثة في التعليم الإلكتروني وكيفية تأثيرها
                  على أساليب التعلم التقليدية.
                </p>
                <p className="pt-3 text-[#98A2B3] text-[30px]">
                  1 <i className="fa-solid fa-message"></i>
                </p>
              </div>
            </div>
            <div className="card md:w-[45%] lg:w-[32%] shadow-md shadow-black/30 rounded-lg">
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
                  تقدم نصائح حول إدارة الوقت، والتعلم النشط، وخلق بيئة دراسية
                  داعمة.
                </p>
                <p className="pt-3 text-[#98A2B3] text-[30px]">
                  1 <i className="fa-solid fa-message"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-10 my-5 py-5">
        <div className="w-[90%] mx-auto">
          <h2 className="font-bold text-[30px] text-center">
            كيف يمكننا مساعدتك؟
          </h2>
          <p className="text-[22px] text-center my-3 mb-10">
            تحقق مما إذا كانت أسئلتنا الشائعة تساعدك في معرفة المزيد حول خدمتنا
          </p>
          <div className="cards flex justify-between items-center gap-y-5 flex-wrap">
            <div className="card md:w-[45%] lg:w-[32%] bg-[#F7FDF9] p-[20px]">
              <p className="text-[#066B87] font-bold text-[34px] relative">
                01
                <img
                  src="/images/bg-num.png"
                  alt=""
                  className="absolute top-0 left-0"
                />
              </p>
              <p className="font-bold text-[24px] my-3">
                كيف يمكنني التسجيل في الدورات؟
              </p>
              <p>
                يمكن التسجيل من خلال الموقع الإلكتروني عبر إنشاء حساب واختيار
                الدورة المناسبة، ثم إتمام عملية الدفع.
              </p>
            </div>
            <div className="card md:w-[45%] lg:w-[32%] bg-[#F7FDF9] p-[20px]">
              <p className="text-[#066B87] font-bold text-[34px] relative">
                02
                <img
                  src="/images/bg-num.png"
                  alt=""
                  className="absolute top-0 left-0"
                />
              </p>
              <p className="font-bold text-[24px] my-3">
                هل أحصل على شهادة بعد إتمام الدورة؟
              </p>
              <p>
                نعم، تحصل على شهادة إلكترونية معتمدة من مركز HDTC بعد اجتياز
                متطلبات الدورة.
              </p>
            </div>
            <div className="card md:w-[45%] lg:w-[32%] bg-[#F7FDF9] p-[20px]">
              <p className="text-[#066B87] font-bold text-[34px] relative">
                03
                <img
                  src="/images/bg-num.png"
                  alt=""
                  className="absolute top-0 left-0"
                />
              </p>
              <p className="font-bold text-[24px] my-3">هل الشهادات معتمدة؟</p>
              <p>
                جميع الشهادات صادرة من مركز HDTC، وهو مركز تدريب واستشارات
                معتمد.
              </p>
            </div>
            <div className="card md:w-[45%] lg:w-[32%] bg-[#F7FDF9] p-[20px]">
              <p className="text-[#066B87] font-bold text-[34px] relative">
                04
                <img
                  src="/images/bg-num.png"
                  alt=""
                  className="absolute top-0 left-0"
                />
              </p>
              <p className="font-bold text-[24px] my-3">
                هل أستطيع الوصول للدورات في أي وقت؟
              </p>
              <p>
                نعم، جميع الدورات متاحة بنظام التعلم الذاتي، ويمكنك مشاهدتها في
                أي وقت ومن أي مكان.
              </p>
            </div>
            <div className="card md:w-[45%] lg:w-[32%] bg-[#F7FDF9] p-[20px]">
              <p className="text-[#066B87] font-bold text-[34px] relative">
                05
                <img
                  src="/images/bg-num.png"
                  alt=""
                  className="absolute top-0 left-0"
                />
              </p>
              <p className="font-bold text-[24px] my-3">
                هل هناك دعم فني في حال واجهت مشكلة؟
              </p>
              <p>
                بالتأكيد، يمكنك التواصل مع فريق الدعم الفني عبر صفحة "تواصل
                معنا" أو عبر البريد الإلكتروني.
              </p>
            </div>
            <div className="card md:w-[45%] lg:w-[32%] bg-[#F7FDF9] p-[20px]">
              <p className="text-[#066B87] font-bold text-[34px] relative">
                06
                <img
                  src="/images/bg-num.png"
                  alt=""
                  className="absolute top-0 left-0"
                />
              </p>
              <p className="font-bold text-[24px] my-3">
                هل أستطيع الدفع عبر التحويل البنكي؟
              </p>
              <p>
                نعم، يوجد خيار للدفع عبر التحويل البنكي داخل السعودية، ويتم
                تفعيل الدورة بعد تأكيد التحويل.
              </p>
            </div>
            <button className="text-[30px] mx-auto font-bold rounded-xl px-[25px] py-2 border border-[#066B87] text-[#066B87]">
              <a href="#">عرض الكل</a>
            </button>
          </div>
        </div>
      </div>

      <footer>
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between items-center my-3">
            <p className="w-[60%] text-[#6F6C90]">
              منصة HDTC-ON هي أول منصة تدريب واستشارات احترافية في الوطن العربي،
              تضم فريق عمل من المحترفين المعتمدين في مركز HDTC في العديد من
              مجالات التدريب والتعليم والحياة
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
    </main>
  );
}
