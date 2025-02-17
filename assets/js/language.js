// ภาษาเริ่มต้น (อาจโหลดจาก Cookie หรือ Session)
let currentLanguage = localStorage.getItem("language") || "en";

// อัปเดตข้อความใน Navbar และ Carousel ตามภาษาที่เลือก
function updateLanguageContent(language) {
    const translations = {
        en: {
            navHome: "Home",
            navAbout: "About Us",
            navClasses: "Classes",
            navpages: "Pages",
            navFacility: "School Facilities",
            navTeam: "Popular Teachers",
            navAppointment: "Make Appointment",
            navTestimonial: "Testimonial",
            navContact: "Contact Us",
            navError: "404 Error",
            navlanguage: "Language",

            facilities1: "School Facilities",

        },
        la: {
            navHome: "ຫນ້າຫຼັກ",
            navAbout: "ກ່ຽວກັບພວກເຮົາ",
            navClasses: "ສາຂາຮຽນ", 
            navpages: "ໜ້າຕ່າງໆ",
            navFacility: "ສິ່ງອໍານວຍຄວາມສະດວກໃນໂຮງຮຽນ",
            navTeam: "ອາຈານ",
            navAppointment: "ການນັດໝາຍ",
            navTestimonial: "ຄຳຮັບຮອງ",
            navContact: "ຕິດຕໍ່ພວກເຮົາ",
            navError: "ຜິດພາດ 404",
            navlanguage: "ພາສາ",

            facilities1: "ສິ່ງອໍານວຍຄວາມສະດວກໃນໂຮງຮຽນ",

        },

        la: {
            navHome: "",
            navAbout: "ກ່ຽວກັບພວກເຮົາ",
            navClasses: "ສາຂາຮຽນ", 
            navpages: "ໜ້າຕ່າງໆ",
            navFacility: "ສິ່ງອໍານວຍຄວາມສະດວກໃນໂຮງຮຽນ",
            navTeam: "ອາຈານ",
            navAppointment: "ການນັດໝາຍ",
            navTestimonial: "ຄຳຮັບຮອງ",
            navContact: "ຕິດຕໍ່ພວກເຮົາ",
            navError: "ຜິດພາດ 404",
            navlanguage: "ພາສາ",

            facilities1: "ສິ່ງອໍານວຍຄວາມສະດວກໃນໂຮງຮຽນ",

        },

        ja: {
            navHome: "",
            navAbout: "私たちについて",
            navClasses: "学科",
            navpages: "ページ",
            navFacility: "学校の施設",
            navTeam: "教師陣",
            navAppointment: "予約",
            navTestimonial: "推薦の言葉",
            navContact: "お問い合わせ",
            navError: "エラー 404",
            navlanguage: "言語",
        
            facilities1: "学校の施設",
        },
        
    };

    // อัปเดตข้อความใน Navbar
    document.getElementById("nav-home").textContent = translations[language].navHome;
    document.getElementById("nav-about").textContent = translations[language].navAbout;
    document.getElementById("nav-classes").textContent = translations[language].navClasses;
    document.getElementById("nav-pages").textContent = translations[language].navpages;
    document.getElementById("nav-facility").textContent = translations[language].navFacility;
    document.getElementById("nav-team").textContent = translations[language].navTeam;
    document.getElementById("nav-appointment").textContent = translations[language].navAppointment;
    document.getElementById("nav-testimonial").textContent = translations[language].navTestimonial;
    document.getElementById("nav-contact").textContent = translations[language].navContact;
    document.getElementById("nav-error").textContent = translations[language].navError;
    document.getElementById("nav-language").textContent = translations[language].navlanguage;

    // อัปเดตข้อความใน facilities
    document.getElementById("facilities-1").textContent = translations[language].facilities1;

}

// เรียกใช้งานเมื่อโหลดหน้า
updateLanguageContent(currentLanguage);

// ฟังก์ชันเพื่อสลับภาษาภายในหน้าจอ
function switchLanguage(language) {
    currentLanguage = language;
    localStorage.setItem("language", language); // เก็บค่าไว้ใน localStorage
    updateLanguageContent(language);
}
