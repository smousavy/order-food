import FooterMap from "./FooterMap";

function Footer() {
  return (
    <footer className="h-18  mt-auto  bg-theme-400 ">
      <div className=" container mx-auto flex justify-between gap-8 py-6">
        <div className="mb-5 w-6/12 text-theme-900">
          <h6 className=" mb-4 border-r-8 border-theme-700 pr-3 text-xl font-semibold text-theme-800">
            درباره ما
          </h6>
          <p className="border-b-2 border-theme-500 pb-6 text-base/8">
            شادروان محمد علی احمدی بنیان گذار تهیه غذای یادگار در سال 1374 در
            سایه الطاف الهی پذیرایی مجالس شادی شما را به عهده گرفت در سال 1384
            فعالیت خود را در تالارداری و خدمات مجالس شروع کرد و با توجه به رضایت
            و استقبال روز افزون مشتریان عزیز توانست روز به روز بر کیفیت کار خود
            بیفزاید. و در طی این سالها، انتقادات و پیشنهادهای سازنده مشتریان را
            سرلوحه کار خود قرار دادیم
          </p>
          <h6 className="mb-4 mt-8 border-r-8 border-theme-700 pr-3 text-xl font-semibold text-theme-800">
            تلاش ما برای بهترین تجربه
          </h6>
          <ul className="flex list-disc flex-wrap gap-x-10 gap-y-4 text-base">
            <li> تازگی و اصالت فراورده های غذایی</li>
            <li>پاکیزگی محیط </li>
            <li>قیمت منصفانه</li>
            <li>شعب مختلف</li>
            <li>سطح قیمتی رقابتی</li>
            <li>بسته بندی مناسب</li>
            <li>نیروی متخصص</li>
          </ul>
        </div>
        <div className="mb-5 block w-6/12 text-theme-900">
          <h6 className="mb-4 border-r-8 border-theme-700 pr-3 text-xl font-semibold text-theme-800">
            دفتر مرکزی
          </h6>
          <FooterMap />
          <p className="mt-4 text-base">
            تهران ، صادقیه ، اشرفی اصفهانی شمال، نبش کوچه بهار ، پلاک 21، واحد3
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
