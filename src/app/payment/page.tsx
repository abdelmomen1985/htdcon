
import Image from "next/image";

export default function Payment() {
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
              src="/images/payment-details.png"
              className="w-full  relative  mx-auto"
              alt=""
            />
          </div>
          <div className="lg:w-[40%] md:w-[60%] w-[80%] mx-auto p-10 ">
            <div className="border-[6px] border-[#066B87] relative rounded-full  p-5 py-10">
              <div className="absolute size-full left-0 block -bottom-5 ">
                <p className="text-[#066B87] font-bold text-[30px] absolute w-full top-0 left-0  py-5   bg-[#D7B13A] rounded-full text-center">
                  تفاصيل الدفع
                </p>
                <p
                  className="text-[#066B87] font-bold xl:text-[30px] lg:text-[23px] text-[18px] absolute md:-bottom-20 -bottom-16 left-1/2 -translate-x-1/2 w-full text-center"
                  dir="rtl"
                >
                  اختار الطريقة الافضل لك{" "}
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
        <div className="w-[90%] mx-auto flex flex-wrap justify-between">
          <div
            className="md:w-[50%] w-full bg-white shadow-xl rounded-xl p-4"
            dir="rtl"
          >
            <div className="bg-[#D7B13A99] p-2 rounded-xl">
              <div className="flex justify-between items-center">
                <h2 className="text-[#066B87] md:text-[25px] text-[20px] font-bold ">
                  الباقة الربع سنوية
                </h2>
                <button className="text-[#066B87]">تغير الاشتراك</button>
              </div>
              <p className="text-[#066B87] mt-3">احصل على 3 أشهر بسعر 2 </p>
            </div>
            <p className="text-[#066B87] text-[25px] font-bold my-3">
              ملخص الطلب
            </p>
            <p className="text-[#066B87] text-[25px] font-bold my-3 flex gap-x-5 w-[80%]">
              <span className="text-[#066B87] text-[20px] font-bold">
                الخطة الشهرية(x3)
              </span>
              <span className="text-[#066B87] text-[20px] font-bold">
                600 جنيه
              </span>
            </p>
            <div className="text-[#066B87] text-[25px] font-bold my-3 flex flex-wrap gap-x-7 items-center">
              <p className="inline-block">
                <span className="text-[#066B87] text-[20px] font-bold">
                  الباقة الربع السنوية
                </span>
                <span className="text-[#D7B13A] text-[20px] font-bold">
                  بخصم %33
                </span>
              </p>
              <span className="text-[#066B87] text-[20px] font-bold">
                200 جنيه
              </span>
            </div>
            <div className="bg-[#D7B13A99] p-2 rounded-xl w-fit">
              <h2 className="text-[#066B87] text-[20px] font-bold ">
                الباقة الربع سنوية
              </h2>
            </div>
            <p className="text-[#066B87] text-[25px] font-bold my-3 flex gap-x-5 w-[80%]">
              <span className="text-[#066B87] text-[20px] font-bold">
                إجمالى المستحق
              </span>
              <span className="text-[#066B87] text-[20px] font-bold">
                600 جنيه
              </span>
            </p>
            <p className="text-[#066B87]">
              التجديد التلقائي في ١٨ سبتمبر ٢٠٢٥. يمكنك الإلغاء في أي وقت.
            </p>
            <button className="bg-[#D7B13A] text-white font-bold rounded-full text-center py-2 my-3 px-5 w-full">
              متابعة الدفع
            </button>
          </div>
          <div className="md:w-[45%] w-full">
            <h2
              className="text-[#066B87] font-bold text-[30px] my-3 text-center"
              dir="rtl"
            >
              اشترك فى HDTCON
            </h2>
            <div className="space-y-4 max-w-md mx-auto">
              <div
                className="flex items-center justify-between border-2 border-gray-200 rounded-xl p-4 shadow cursor-pointer"
                dir="rtl"
              >
                <p className="text-[#066B87]">
                  أنت مسجل الدخول بالبريد الإلكتروني <br /> name@gmail.com
                </p>
                <button className="text-[#D7B13A]">تغيير</button>
              </div>
              <div>
                <label className="flex items-center justify-between border-2 border-gray-200 rounded-xl p-4 shadow cursor-pointer">
                  <div className="flex items-center">
                    <img
                      src="/images/visa&master.png"
                      alt="Visa & Mastercard"
                      className="w-10 h-auto"
                    />
                  </div>
                  <span className="text-lg text-cyan-900">
                    بطاقة ائتمان/خصم مباشر
                  </span>
                  <input
                    type="radio"
                    name="payment"
                    className="form-radio text-[#066B87] w-5 h-5"
                  />
                </label>
                <div className="bg-[#066B8712] p-5 rounded-b-lg">
                  <div className="bg-[#066B871A] p-3 border-2 border-[#066B87] border-dotted flex justify-end gap-x-3 rounded-lg">
                    <p className="text-[#066B87] font-bold" dir="rtl">
                      +بطاقة ائتمان /خصم{" "}
                    </p>
                    <input type="radio" className="form-radio  w-5 h-5 " />
                  </div>
                </div>
              </div>
              <div>
                <label className="flex items-center justify-between border-2 border-gray-200 rounded-xl p-4 shadow cursor-pointer">
                  <div className="flex items-center">
                    <img
                      src="/images/fawry.png"
                      alt="Fawry"
                      className="w-10 h-auto"
                    />
                  </div>
                  <span className="text-lg text-cyan-900">
                    ادفع نقدا مع فوري
                  </span>
                  <input
                    type="radio"
                    name="payment"
                    checked
                    className="form-radio text-[#066B87] w-5 h-5"
                  />
                </label>
                <div className="bg-[#066B8712] p-5 rounded-b-lg">
                  <div className="bg-[#066B871A] p-3 border-2 border-[#066B87] border-dotted rounded-lg">
                    <p className="text-[#066B87] font-bold" dir="rtl">
                      من خلال فورى، يمكنك الدفع نقدا فى اى من متاجر فورى..
                      يرجى الدفع فى غضون الوقت لمحدد و المذكور فى الإيصال كى
                      لا يتم إلغاء الحجز تلقائيا{" "}
                    </p>
                    <div className="flex flex-col gap-y-1" dir="rtl">
                      <label htmlFor="phone" className="text-[#066B87]">
                        الهاتف المحمول
                      </label>
                      <input
                        type="text"
                        id="phone"
                        placeholder="01-xxx-xxxx"
                        className="border border-[#066B87] placeholder:text-[#066B87] p-1 rounded-lg outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label className="flex items-center justify-between border-2 border-gray-200 rounded-xl p-4 shadow cursor-pointer">
                  <div className="flex items-center">
                    <img
                      src="/images/mobile-wallet.png"
                      alt="Wallet"
                      className="w-10 h-auto"
                    />
                  </div>
                  <span className="text-lg text-cyan-900">
                    ادفع بأي محفظة الكترونية
                  </span>
                  <input
                    type="radio"
                    name="payment"
                    className="form-radio text-[#066B87] w-5 h-5"
                  />
                </label>
                <div className="bg-[#066B8712] p-5 rounded-b-lg">
                  <div className="bg-[#066B871A] p-3 border-2 border-[#066B87] border-dotted rounded-lg">
                    <div className="flex flex-col gap-y-1" dir="rtl">
                      <label htmlFor="phone" className="text-[#066B87]">
                        الهاتف المحمول
                      </label>
                      <input
                        type="text"
                        id="phone"
                        placeholder="01-xxx-xxxx"
                        className="border border-[#066B87] placeholder:text-[#066B87] p-1 rounded-lg outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label className="flex items-center justify-between border-2 border-gray-200 rounded-xl p-4 shadow cursor-pointer">
                  <div className="flex items-center">
                    <img
                      src="/images/valu.png"
                      alt="ValU"
                      className="w-10 h-auto"
                    />
                  </div>
                  <span className="text-lg text-cyan-900">
                    الدفع باستخدام فاليو
                  </span>
                  <input
                    type="radio"
                    name="payment"
                    className="form-radio text-[#066B87] w-5 h-5"
                  />
                </label>
                <div className="bg-[#066B8712] p-5 rounded-b-lg">
                  <div className="bg-[#066B871A] p-3 border-2 border-[#066B87] border-dotted rounded-lg">
                    <div className="flex flex-col gap-y-1" dir="rtl">
                      <label htmlFor="phone" className="text-[#066B87]">
                        الهاتف المحمول
                      </label>
                      <input
                        type="text"
                        id="phone"
                        placeholder="01-xxx-xxxx"
                        className="border border-[#066B87] placeholder:text-[#066B87] p-1 rounded-lg outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-1 my-5 py-5">
        <div className="w-[90%] mx-auto">
          <h2 className="text-[30px] text-[#066B87] font-bold text-center my-5">
            Payment Information
          </h2>
          <div className="border-4 rounded-lg p-3 flex justify-between items-center">
            <div className="w-[48%]">
              <img src="/images/credit card.png" alt="" className="w-full" />
            </div>
            <div className="space-y-3 w-[48%]">
              <input
                type="text"
                id="phone"
                placeholder="Card Number"
                className="border w-full border-[#066B87] placeholder:text-[#066B87] p-1 rounded-lg outline-none bg-transparent"
              />
              <input
                type="text"
                id="phone"
                placeholder="Card Holder Name"
                className="border w-full border-[#066B87] placeholder:text-[#066B87] p-1 rounded-lg outline-none bg-transparent"
              />
              <div className="flex justify-between">
                <input
                  type="text"
                  id="phone"
                  placeholder="MM/YY"
                  className="border w-[49%]  border-[#066B87] placeholder:text-[#066B87] p-1 rounded-lg outline-none bg-transparent"
                />
                <input
                  type="text"
                  id="phone"
                  placeholder="CVV"
                  className="border w-[49%]  border-[#066B87] placeholder:text-[#066B87] p-1 rounded-lg outline-none bg-transparent"
                />
              </div>
              <p className="text-[15px] text-[#066B87] text-center font-semibold">
                Saved Card
              </p>
              <button className="text-white bg-[#066B87] font-bold py-1 w-full rounded-lg my-3">
                متابعة الدفع
              </button>
              <p className="text-[15px] text-[#066B87] text-center font-semibold">
                <i className="fa-solid fa-lock"></i> Secured by Paymob
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-3 my-10">
            <img src="/images/paymob_new.png" alt="" />
            <div className="flex gap-x-7">
              <img src="/images/cib.png" alt="" className="w-[100px]" />
              <img src="/images/ma4rk.png" alt="" className="w-[100px]" />
              <img src="/images/ahly.png" alt="" className="w-[100px]" />
              <img src="/images/misr.png" alt="" className="w-[100px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="section-1 my-5 py-5">
        <div className="lg:w-[40%] w-[80%] mx-auto text-[#066B87] text-center space-y-3 border-4 p-5 rounded-lg">
          <i className="fa-solid fa-hourglass-end text-3xl"></i>
          <h2 className="font-bold text-[30px]">
            في انتظار الدفع عن طريق فوري
          </h2>
          <p>من فضلك قم بزيارة أقرب منفذ فوري لدفع المصاريف المطلوبة</p>
          <p className="text-[20px] font-bold">الرقم المتسلسل</p>
          <p>من فضلك استخدم هذا الرقم في الدفع.</p>
          <p className="bg-[#066B8780] w-fit mx-auto rounded-lg px-3 py-1 font-bold">
            9483696622
          </p>
          <button className="border border-[#066B87] font-bold text-[25px] rounded-lg px-3 py-1">
            الذهاب للصفحة الرئيسية
          </button>
        </div>
      </div>

      <div className="section-1 my-5 py-5">
        <div className="lg:w-[40%] w-[80%] mx-auto text-[#066B87] text-center space-y-3 border-4 p-5 rounded-lg">
          <i className="fa-solid fa-hourglass-end text-3xl"></i>
          <h2 className="font-bold text-[30px]">في انتظار الدفع </h2>
          <p>عملية الدفع الخاصة بك قيد التنفيذ</p>
          <button className="border border-[#066B87] font-bold text-[25px] rounded-lg px-3 py-1">
            الذهاب للصفحة الرئيسية
          </button>
        </div>
      </div>

      <div className="section-1 my-5 py-5">
        <div className="lg:w-[40%] w-[80%] mx-auto text-[#066B87] space-y-3 border-4 p-5 rounded-lg">
          <img src="/images/valu2.png" alt="" className="mx-auto" />
          <div className="flex flex-col gap-y-1">
            <label htmlFor="phone" className="text-[#066B87]">
              Mobile Number
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Card Holder Name"
              className="border border-[#066B87] placeholder:text-[#066B87] p-1 rounded-lg outline-none bg-transparent"
            />
            <p className="font-semibold text-[20px] placeholder:opacity-80 text-center text-[#066B87]">
              Product Amount
            </p>
            <p className="font-semibold text-[20px] placeholder:opacity-80 text-center text-[#066B87]">
              2399
            </p>
            <p className="text-[#066B87]">
              <span className="font-semibold"> Down Payment </span>
               (maximum down payment amount is 80% of the product price)
            </p>
            <input
              type="text"
              id="phone"
              placeholder="0"
              className="border border-[#066B87] placeholder:text-[#066B87] p-1 rounded-lg outline-none bg-transparent"
            />
            <p className="font-semibold text-[20px] placeholder:opacity-80 text-center text-[#066B87]">
              Financed Amount
            </p>
            <p className="font-semibold text-[20px] placeholder:opacity-80 text-center text-[#066B87]">
              2399
            </p>
            <p className="font-semibold text-[20px] placeholder:opacity-80 text-center text-[#066B87]">
              Purchase Fees
            </p>
            <p className="font-semibold text-[20px] placeholder:opacity-80 text-center text-[#066B87]">
              -
            </p>
            <p className="font-semibold text-[20px] placeholder:opacity-80 text-center text-[#066B87]">
              {" "}
              Installment Plan{" "}
              <span className="text-[15px] font-medium">
                 (May slightly vary)
              </span>
            </p>
            <div className="flex justify-between w-[50%] mx-auto text-center flex-wrap gap-y-5">
              <div className="border border-[#066B87] p-3 px-6  rounded-xl w-[45%]">
                <p className="text-[#066B87]">1 Month</p>
                <p className="text-[#066B87CC]">2399</p>
              </div>
              <div className="border border-[#066B87] p-3 px-6 rounded-xl w-[45%]">
                <p className="text-[#066B87]">3 Month</p>
                <p className="text-[#066B87CC]">906</p>
              </div>
              <div className="border border-[#066B87] p-3 px-6 rounded-xl w-[45%]">
                <p className="text-[#066B87]">6 Month</p>
                <p className="text-[#066B87CC]">495</p>
              </div>
              <div className="border border-[#066B87] p-3 px-6 rounded-xl w-[45%]">
                <p className="text-[#066B87]">9 Month</p>
                <p className="text-[#066B87CC]">360</p>
              </div>
              <div className="border border-[#066B87] p-3 px-6 rounded-xl w-[45%]">
                <p className="text-[#066B87]">12 Month</p>
                <p className="text-[#066B87CC]">294</p>
              </div>
              <div className="border border-[#066B87] p-3 px-6 rounded-xl w-[45%]">
                <p className="text-[#066B87]">15 Month</p>
                <p className="text-[#066B87CC]">255</p>
              </div>
              <div className="border border-[#066B87] p-3 px-6 rounded-xl w-[45%]">
                <p className="text-[#066B87]">18 Month</p>
                <p className="text-[#066B87CC]">255</p>
              </div>
              <div className="border border-[#066B87] p-3 px-6 rounded-xl w-[45%]">
                <p className="text-[#066B87]">21 Month</p>
                <p className="text-[#066B87CC]">212</p>
              </div>
              <div className="border border-[#066B87] p-3 px-6 rounded-xl w-[45%]">
                <p className="text-[#066B87]">24 Month</p>
                <p className="text-[#066B87CC]">188</p>
              </div>
              <div className="border border-[#066B87] p-3 px-6 rounded-xl w-[45%]">
                <p className="text-[#066B87]">27 Month</p>
                <p className="text-[#066B87CC]">178</p>
              </div>
              <div className="border border-[#066B87] p-3 px-6 rounded-xl w-[45%]">
                <p className="text-[#066B87]">30 Month</p>
                <p className="text-[#066B87CC]">171</p>
              </div>
              <div className="border border-[#066B87] p-3 px-6 rounded-xl w-[45%]">
                <p className="text-[#066B87]">33 Month</p>
                <p className="text-[#066B87CC]">165</p>
              </div>
              <div className="border border-[#066B87] p-3 px-6 rounded-xl w-[45%]">
                <p className="text-[#066B87]">36 Month</p>
                <p className="text-[#066B87CC]">160</p>
              </div>
              <div className="border border-[#066B87] p-3 px-6 rounded-xl w-[45%]">
                <p className="text-[#066B87]">39 Month</p>
                <p className="text-[#066B87CC]">156</p>
              </div>
              <div className="border border-[#066B87] p-3 px-6 rounded-xl w-[45%]">
                <p className="text-[#066B87]">42 Month</p>
                <p className="text-[#066B87CC]">153</p>
              </div>
              <div className="border border-[#066B87] p-3 px-6 rounded-xl w-[45%]">
                <p className="text-[#066B87]">45 Month</p>
                <p className="text-[#066B87CC]">151</p>
              </div>
              <div className="border border-[#066B87] p-3 px-6 rounded-xl w-[45%]">
                <p className="text-[#066B87]">48 Month</p>
                <p className="text-[#066B87CC]">149</p>
              </div>
              <div className="border border-[#066B87] p-3 px-6 rounded-xl w-[45%]">
                <p className="text-[#066B87]">51 Month</p>
                <p className="text-[#066B87CC]">147</p>
              </div>
              <div className="border border-[#066B87] p-3 px-6 rounded-xl w-[45%]">
                <p className="text-[#066B87]">54 Month</p>
                <p className="text-[#066B87CC]">146</p>
              </div>
              <div className="border border-[#066B87] p-3 px-6 rounded-xl w-[45%]">
                <p className="text-[#066B87]">57 Month</p>
                <p className="text-[#066B87CC]">145</p>
              </div>
              <div className="border border-[#066B87] p-3 px-6 rounded-xl w-[45%]">
                <p className="text-[#066B87]">60 Month</p>
                <p className="text-[#066B87CC]">144</p>
              </div>
            </div>
            <p className="font-semibold text-[20px] placeholder:opacity-80 text-center text-[#066B87]">
              * After confirmation of your mobile number , an SMS will be sent to
              you with a one-time pin to proceed with the payment.
            </p>
            <button className="text-white bg-[#066B87] font-bold py-1 w-full rounded-lg my-3">
              Confirm
            </button>
            <p className="font-bold text-[30px] text-[#066B87] text-center">
              Powered by
            </p>
            <img
              src="/images/paymob_new.png"
              alt=""
              className="w-[150px] mx-auto"
            />
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
