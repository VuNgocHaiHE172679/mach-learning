import { allModules } from "./stateContent.js";

export const lessonCoreContent = Object.fromEntries(
  allModules.map((module) => [
    module.id,
    {
      lead: module.thesisDetail,
      sections: module.coreSections,
    },
  ]),
);

export const chapterHistoryFeatures = {
  "chapter-1": {
    image: "/images/state/phat-trien-ben-vung.webp",
    alt: "Đường chân trời Thành phố Hồ Chí Minh nhìn từ phía sông Sài Gòn.",
    focalPoint: "50% 48%",
    year: "VIỆT NAM ĐƯƠNG ĐẠI",
    title: "Phát triển kinh tế cần được đọc cùng chất lượng sống",
    caption:
      "Hình ảnh đô thị minh họa năng lực phát triển vật chất. Trong mạch tài liệu, tăng trưởng còn phải gắn với tiến bộ, công bằng xã hội và phát triển bền vững.",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Ho_Chi_Minh_City_Skyline.jpg",
    credit: "Ảnh: Pimnl / Wikimedia Commons · CC0 1.0",
  },
  "chapter-2": {
    image: "/images/state/quyen-luc-nhan-dan.svg",
    alt: "Sơ đồ Nhân dân ở trung tâm của các hình thức tham gia và giám sát quyền lực.",
    focalPoint: "50% 50%",
    year: "SƠ ĐỒ QUAN HỆ",
    title: "Quyền làm chủ cần cơ chế để đi vào đời sống",
    caption:
      "Sơ đồ hệ thống hóa các quan hệ được tài liệu nêu: tham gia trực tiếp, cơ chế đại diện, góp ý chính sách và giám sát quyền lực.",
    sourceUrl:
      "/documents/nha-nuoc-xa-hoi-chu-nghia-viet-nam.pdf#page=4",
    credit: "Đồ họa Group 2 · diễn giải từ tài liệu trang 4 và 9",
  },
  "chapter-3": {
    image: "/images/state/muc-tieu-phat-trien.svg",
    alt: "Sơ đồ mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
    focalPoint: "50% 50%",
    year: "ĐÍCH HƯỚNG TỚI",
    title: "Năm mục tiêu là một hệ thống liên kết",
    caption:
      "Phục vụ Nhân dân, phát huy quyền làm chủ và phát triển bền vững là ba hướng giúp kết nối bản chất, dân chủ và chức năng của Nhà nước với mục tiêu chung.",
    sourceUrl:
      "/documents/nha-nuoc-xa-hoi-chu-nghia-viet-nam.pdf#page=12",
    credit: "Đồ họa Group 2 · diễn giải từ tài liệu trang 12",
  },
};

const assemblyVisual = {
  image: "/images/state/quoc-hoi-viet-nam.webp",
  alt: "Mặt tiền Tòa nhà Quốc hội Việt Nam tại Hà Nội; Quốc huy và Quốc kỳ được giữ nguyên trong toàn cảnh.",
  focalPoint: "50% 50%",
  fit: "contain",
  caption:
    "Tòa nhà Quốc hội tại Hà Nội minh họa một thiết chế đại diện được tài liệu nhắc tới trong cơ chế thực hiện quyền lực của Nhân dân.",
  sourceUrl:
    "https://commons.wikimedia.org/wiki/File:National_Assembly_of_Vietnam.JPG",
  credit: "Ảnh: Grayswoodsurrey / Wikimedia Commons · CC BY-SA 4.0",
};

export const lessonVisuals = {
  "chapter-1-module-1": assemblyVisual,
  "chapter-1-module-2": {
    image: "/images/state/phat-trien-ben-vung.webp",
    alt: "Đường chân trời Thành phố Hồ Chí Minh nhìn từ phía sông Sài Gòn.",
    focalPoint: "50% 48%",
    caption:
      "Hình ảnh phát triển đô thị chỉ minh họa năng lực kinh tế; bài học yêu cầu đọc tăng trưởng cùng tiến bộ, công bằng và chất lượng sống.",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Ho_Chi_Minh_City_Skyline.jpg",
    credit: "Ảnh: Pimnl / Wikimedia Commons · CC0 1.0",
  },
  "chapter-1-module-3": {
    image: "/images/state/con-nguoi-trung-tam.webp",
    alt: "Hai sinh viên học tập tại Trường Đại học Kiến trúc Thành phố Hồ Chí Minh.",
    focalPoint: "50% 42%",
    caption:
      "Giáo dục góp phần mở rộng năng lực và cơ hội phát triển của con người – một trong bốn lĩnh vực xã hội được trang 6 nhấn mạnh.",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:HCMC_Two_students_studying.JPG",
    credit: "Ảnh: Dragfyre / Wikimedia Commons · CC BY-SA 3.0",
  },
  "chapter-2-module-1": assemblyVisual,
  "chapter-2-module-2": {
    image: "/images/state/quyen-luc-nhan-dan.svg",
    alt: "Sơ đồ Nhân dân ở trung tâm của các hình thức tham gia và giám sát quyền lực.",
    focalPoint: "50% 50%",
    caption:
      "Sơ đồ do Group 2 dựng lại từ trang 4 và 9 để làm rõ các kênh tham gia; đây không phải sơ đồ nguyên bản của PDF.",
    sourceUrl:
      "/documents/nha-nuoc-xa-hoi-chu-nghia-viet-nam.pdf#page=9",
    credit: "Đồ họa Group 2 · diễn giải từ tài liệu trang 4 và 9",
  },
  "chapter-2-module-3": {
    image: "/images/state/quyen-luc-nhan-dan.svg",
    alt: "Sơ đồ Nhân dân, cơ chế tham gia và giám sát quyền lực.",
    focalPoint: "50% 50%",
    caption:
      "Từ nền tảng dân chủ đến thiết chế nhà nước, các mắt xích cần được đọc như một quan hệ hai chiều.",
    sourceUrl:
      "/documents/nha-nuoc-xa-hoi-chu-nghia-viet-nam.pdf#page=10",
    credit: "Đồ họa Group 2 · diễn giải từ tài liệu trang 10",
  },
  "chapter-3-module-1": {
    image: "/images/state/chuc-nang-doi-noi.webp",
    alt: "Tàu đường sắt đô thị Cát Linh – Hà Đông đi vào ga Vành Đai 3 tại Hà Nội.",
    focalPoint: "50% 54%",
    caption:
      "Hạ tầng giao thông đô thị minh họa hoạt động xây dựng và quản lý trong nước; ảnh không được dùng như bằng chứng cho toàn bộ chức năng đối nội.",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Hanoi_Metro_train_entering_Vanh_Dai_3_station.jpg",
    credit: "Ảnh: Louis Anderson / Wikimedia Commons · CC BY-SA 4.0",
  },
  "chapter-3-module-2": {
    image: "/images/state/chuc-nang-doi-ngoai.webp",
    alt: "Các nhà lãnh đạo tham dự Hội nghị các nhà lãnh đạo kinh tế APEC tại Việt Nam năm 2017.",
    focalPoint: "50% 50%",
    caption:
      "Ảnh tập thể APEC 2017 tại Việt Nam minh họa một bối cảnh hợp tác đa phương và hội nhập quốc tế.",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:2017_APEC_Vietnam_Leaders_Group_Photo.jpg",
    credit: "Ảnh: Kremlin.ru / Wikimedia Commons · CC BY 4.0",
  },
  "chapter-3-module-3": {
    image: "/images/state/muc-tieu-phat-trien.svg",
    alt: "Sơ đồ mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
    focalPoint: "50% 50%",
    caption:
      "Sơ đồ do Group 2 dựng lại từ trang 12 để cho thấy năm mục tiêu cùng thuộc một hệ thống.",
    sourceUrl:
      "/documents/nha-nuoc-xa-hoi-chu-nghia-viet-nam.pdf#page=12",
    credit: "Đồ họa Group 2 · diễn giải từ tài liệu trang 12",
  },
};

export default lessonCoreContent;
