import {
  allModules,
  learningTracks,
  sourceDocument,
} from "./stateContent.js";

export const chapters = learningTracks;
export const featuredLesson = allModules[0];
export const microQuiz = featuredLesson.quiz;

export const glossary = [
  {
    id: "socialist-state",
    term: "Nhà nước xã hội chủ nghĩa",
    shortDefinition:
      "Khái niệm được tài liệu dùng cho mô hình nhà nước hướng tới quyền làm chủ và lợi ích của giai cấp công nhân, nhân dân lao động và toàn dân tộc.",
    inContext:
      "Tài liệu đặt Nhà nước xã hội chủ nghĩa Việt Nam dưới sự lãnh đạo của Đảng Cộng sản Việt Nam và quy tụ thông điệp vào ba vế: của Nhân dân, do Nhân dân, vì Nhân dân.",
    commonMistake:
      "Không nên biến phần giới thiệu mang tính lý luận của tài liệu thành một kết luận thực nghiệm không cần dẫn nguồn.",
    relatedConcepts: ["Nhà nước của Nhân dân", "Quyền làm chủ", "Nhà nước pháp quyền"],
    chapterId: "chapter-1",
    sourcePages: "1, 3",
  },
  {
    id: "people-state",
    term: "Nhà nước của Nhân dân, do Nhân dân, vì Nhân dân",
    shortDefinition:
      "Ba vế diễn đạt chủ thể của quyền lực, cách hình thành và tham gia thực hiện quyền lực, cùng mục tiêu phục vụ lợi ích của Nhân dân.",
    inContext:
      "Đây là thông điệp xuyên suốt từ bìa, lời mở đầu đến các phần về chính trị, dân chủ và mục tiêu phát triển.",
    commonMistake:
      "Không học ba vế như khẩu hiệu rời nhau; cần nối mỗi vế với cơ chế tham gia, đại diện, giám sát và phục vụ.",
    relatedConcepts: ["Quyền lực nhà nước", "Dân chủ đại diện", "Phục vụ Nhân dân"],
    chapterId: "chapter-1",
    sourcePages: "1, 3–4",
  },
  {
    id: "socialist-market-economy",
    term: "Kinh tế thị trường định hướng xã hội chủ nghĩa",
    shortDefinition:
      "Mô hình kinh tế được tài liệu mô tả là vận hành theo quy luật thị trường, có sự quản lý của Nhà nước và gắn tăng trưởng với định hướng tiến bộ, công bằng xã hội.",
    inContext:
      "Trang 5 đặt cơ chế thị trường, quản lý nhà nước và lợi ích của Nhân dân trong cùng một cấu trúc.",
    commonMistake:
      "Không đồng nhất với kinh tế kế hoạch hóa hoàn toàn hoặc một thị trường vận hành ngoài pháp luật và quản lý công.",
    relatedConcepts: ["Quản lý vĩ mô", "Công bằng xã hội", "Phát triển bền vững"],
    chapterId: "chapter-1",
    sourcePages: "5",
  },
  {
    id: "social-progress",
    term: "Tiến bộ và công bằng xã hội",
    shortDefinition:
      "Định hướng gắn thành quả tăng trưởng với việc mở rộng cơ hội, nâng cao chất lượng sống và phân bổ lợi ích xã hội theo mục tiêu của tài liệu.",
    inContext:
      "Trang 5 dùng tiến bộ và công bằng như tiêu chí cần đi cùng tăng trưởng kinh tế.",
    commonMistake:
      "Không trình bày định hướng như bằng chứng rằng mọi chênh lệch đã được giải quyết trên thực tế.",
    relatedConcepts: ["Tăng trưởng kinh tế", "Chất lượng cuộc sống", "Phát triển bền vững"],
    chapterId: "chapter-1",
    sourcePages: "5",
  },
  {
    id: "human-centered-development",
    term: "Con người là trung tâm",
    shortDefinition:
      "Quan điểm xem con người đồng thời là mục tiêu được phục vụ và là động lực tạo ra tri thức, sáng tạo cùng nguồn lực phát triển.",
    inContext:
      "Trang 6 kết nối quan điểm này với giáo dục, văn hóa, y tế và an sinh xã hội.",
    commonMistake:
      "Không rút gọn con người thành người thụ hưởng thụ động hoặc chỉ là nguồn lao động.",
    relatedConcepts: ["Phát triển con người", "Giáo dục", "An sinh xã hội"],
    chapterId: "chapter-1",
    sourcePages: "6",
  },
  {
    id: "people-power",
    term: "Quyền lực nhà nước thuộc về Nhân dân",
    shortDefinition:
      "Nguyên tắc mà trang 4 dùng để xác định Nhân dân là chủ thể của quyền lực nhà nước, thực hiện thông qua tham gia trực tiếp và cơ chế đại diện.",
    inContext:
      "Quốc hội và Hội đồng nhân dân các cấp được tài liệu nêu như những cơ quan trọng tâm trong cơ chế đại diện.",
    commonMistake:
      "Không dừng ở tuyên bố nguyên tắc; cần hỏi tiếp quyền được thực hiện, ủy quyền và giám sát bằng cơ chế nào.",
    relatedConcepts: ["Dân chủ trực tiếp", "Dân chủ đại diện", "Giám sát quyền lực"],
    chapterId: "chapter-2",
    sourcePages: "4",
  },
  {
    id: "direct-democracy",
    term: "Dân chủ trực tiếp",
    shortDefinition:
      "Hình thức trong đó Nhân dân trực tiếp tham gia, biểu đạt ý chí hoặc quyết định công việc chung theo các cơ chế pháp luật.",
    inContext:
      "Catalogue minh họa bằng bầu cử, ứng cử, trưng cầu ý dân và tham gia tại cơ sở; cách phân loại này cần được đọc đúng là cách trình bày của tài liệu.",
    commonMistake:
      "Không coi danh sách minh họa trong PDF là hệ phân loại duy nhất cho mọi bối cảnh pháp lý.",
    relatedConcepts: ["Dân chủ đại diện", "Quyền làm chủ", "Trưng cầu ý dân"],
    chapterId: "chapter-2",
    sourcePages: "4",
  },
  {
    id: "representative-democracy",
    term: "Dân chủ đại diện",
    shortDefinition:
      "Hình thức Nhân dân bầu và ủy quyền cho cơ quan đại diện thay mặt mình thực hiện quyền lực nhà nước.",
    inContext:
      "Trang 4 nhấn mạnh Quốc hội và Hội đồng nhân dân các cấp trong cơ chế đại diện.",
    commonMistake:
      "Không hiểu ủy quyền là từ bỏ quyền giám sát hoặc trách nhiệm giải trình của cơ quan đại diện.",
    relatedConcepts: ["Quốc hội", "Hội đồng nhân dân", "Giám sát quyền lực"],
    chapterId: "chapter-2",
    sourcePages: "4",
  },
  {
    id: "socialist-democracy",
    term: "Dân chủ xã hội chủ nghĩa",
    shortDefinition:
      "Theo tài liệu, đây vừa là mục tiêu, vừa là động lực phát triển, gắn với quyền làm chủ trên các lĩnh vực chính trị, kinh tế, văn hóa và xã hội.",
    inContext:
      "Trang 9 mô tả các cách tham gia gồm quản lý nhà nước, quản lý xã hội, góp ý chính sách và giám sát quyền lực.",
    commonMistake:
      "Không trình bày những mục tiêu lý luận như kết quả xã hội đã được đo lường và chứng minh trong PDF.",
    relatedConcepts: ["Quyền làm chủ", "Góp ý chính sách", "Giám sát quyền lực"],
    chapterId: "chapter-2",
    sourcePages: "9",
  },
  {
    id: "socialist-rule-of-law-state",
    term: "Nhà nước pháp quyền xã hội chủ nghĩa",
    shortDefinition:
      "Cách tài liệu gọi mô hình Nhà nước sử dụng pháp luật và thiết chế để tổ chức quyền lực, quản lý xã hội và bảo đảm các quyền dân chủ.",
    inContext:
      "Trang 10 đặt pháp luật làm cầu nối giữa nền tảng dân chủ và hoạt động lập pháp, hành pháp, tư pháp của Nhà nước.",
    commonMistake:
      "Không đồng nhất pháp quyền với việc chỉ ban hành nhiều quy định; trọng tâm còn là tổ chức, thực thi và bảo vệ quyền theo pháp luật.",
    relatedConcepts: ["Thể chế hóa", "Lập pháp", "Hành pháp", "Tư pháp"],
    chapterId: "chapter-2",
    sourcePages: "10",
  },
  {
    id: "domestic-function",
    term: "Chức năng đối nội",
    shortDefinition:
      "Hoạt động quản lý và điều hành đời sống xã hội trong lãnh thổ quốc gia bằng pháp luật cùng các công cụ quản lý vĩ mô.",
    inContext:
      "Trang 7 nêu sáu lĩnh vực trọng tâm: kinh tế, giáo dục, khoa học – công nghệ, y tế, văn hóa và môi trường.",
    commonMistake:
      "Không thu hẹp đối nội vào duy trì trật tự; tài liệu còn nhấn mạnh vai trò xây dựng và phát triển.",
    relatedConcepts: ["Quản lý vĩ mô", "Trật tự và kỷ cương", "Phát triển đất nước"],
    chapterId: "chapter-3",
    sourcePages: "7",
  },
  {
    id: "foreign-function",
    term: "Chức năng đối ngoại",
    shortDefinition:
      "Hoạt động quan hệ với các quốc gia và chủ thể quốc tế nhằm hợp tác, hội nhập, bảo vệ chủ quyền và lợi ích quốc gia – dân tộc.",
    inContext:
      "Trang 8 đặt đối ngoại trên cơ sở luật pháp quốc tế và kết nối với hòa bình, ổn định.",
    commonMistake:
      "Không đồng nhất hội nhập với từ bỏ chủ quyền, hoặc bảo vệ lợi ích với tự tách khỏi hợp tác quốc tế.",
    relatedConcepts: ["Hội nhập quốc tế", "Chủ quyền lãnh thổ", "Luật pháp quốc tế"],
    chapterId: "chapter-3",
    sourcePages: "8",
  },
  {
    id: "sustainable-development",
    term: "Phát triển bền vững",
    shortDefinition:
      "Định hướng phát triển dài hạn, xem xét đồng thời kinh tế, xã hội, văn hóa, môi trường và khả năng đáp ứng nhu cầu của con người.",
    inContext:
      "Trang 5 coi bền vững là một giá trị cốt lõi; trang 12 dùng nó để tổng kết định hướng xây dựng đất nước.",
    commonMistake:
      "Không rút gọn bền vững thành tăng trưởng kinh tế kéo dài mà bỏ qua các hệ quả xã hội và môi trường.",
    relatedConcepts: ["Công bằng xã hội", "Môi trường", "Chất lượng cuộc sống"],
    chapterId: "chapter-3",
    sourcePages: "5, 12",
  },
];

export const podcasts = learningTracks.map((track, index) => ({
  id: `podcast-${index + 1}`,
  episode: `TẬP 0${index + 1}`,
  chapterId: track.id,
  title: [
    "Ba lớp bản chất của Nhà nước xã hội chủ nghĩa Việt Nam",
    "Quyền lực Nhân dân đi vào thiết chế như thế nào?",
    "Từ chức năng nhà nước đến mục tiêu phát triển",
  ][index],
  description: [
    "Nghe lại mạch khái quát, kinh tế và văn hóa – xã hội với điểm quy chiếu là lợi ích và sự phát triển của con người.",
    "Một bài nghe nối dân chủ trực tiếp, dân chủ đại diện, quyền làm chủ và vai trò bảo đảm của Nhà nước bằng pháp luật.",
    "Phân biệt đối nội với đối ngoại, rồi quy tụ hai nhóm hoạt động về mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
  ][index],
  duration: "≈ 06 phút",
  format: "Tóm lược có nguồn",
  level: "Nhập môn",
  sourcePages: track.sourcePages,
  status: "ready",
  coverTone: ["brick", "mustard", "navy"][index],
}));

export const games = [
  {
    id: "knowledge-quiz",
    chapterId: "chapter-1",
    chapter: "TOÀN BỘ 3 TUYẾN",
    title: "Trắc nghiệm kiến thức",
    subtitle: "Chọn tuyến, trả lời và xem giải thích ngay",
    description:
      "Bộ câu hỏi ngắn lấy trực tiếp từ 27 câu tự kiểm tra của chín bài học, không yêu cầu đăng nhập và không lưu dữ liệu cá nhân.",
    mission: "Hoàn thành một lượt 5 câu và đọc phần giải thích cho mỗi đáp án.",
    mechanics: ["Chọn đáp án", "Phản hồi tức thì", "Làm lại tự do"],
    skills: ["Nhớ đúng khái niệm", "Đọc quan hệ", "Đối chiếu nguồn"],
    duration: "4–6 phút",
    difficulty: "Tự chọn tuyến",
    sourcePages: "3–10, 12",
    accent: "brick",
    icon: "quiz",
  },
  {
    id: "relation-builder",
    chapterId: "chapter-2",
    chapter: "TUYẾN 02",
    title: "Nối quan hệ dân chủ – Nhà nước",
    subtitle: "Ghép chủ thể, cơ chế và thiết chế",
    description:
      "Nhận diện quan hệ giữa Nhân dân, dân chủ trực tiếp, dân chủ đại diện, pháp luật và hoạt động của Nhà nước.",
    mission: "Nối đúng các mắt xích để hoàn thành sơ đồ quyền làm chủ.",
    mechanics: ["Ghép quan hệ", "Giải thích lựa chọn", "Mở bài liên quan"],
    skills: ["Tư duy hệ thống", "Phân biệt cơ chế", "Giải thích quan hệ"],
    duration: "5–7 phút",
    difficulty: "Trung bình",
    sourcePages: "4, 9–10",
    accent: "mustard",
    icon: "network",
  },
  {
    id: "function-sort",
    chapterId: "chapter-3",
    chapter: "TUYẾN 03",
    title: "Phân loại chức năng",
    subtitle: "Đối nội, đối ngoại hay mục tiêu chung?",
    description:
      "Đặt mỗi hoạt động vào đúng nhóm chức năng và nhận ra những nội dung thuộc đích phát triển chung.",
    mission: "Phân loại chính xác 12 thẻ nội dung và giải thích ít nhất một lựa chọn.",
    mechanics: ["Phân loại thẻ", "Nhận phản hồi", "Xem nguồn PDF"],
    skills: ["Phân loại", "Khái quát", "Đọc có căn cứ"],
    duration: "5–7 phút",
    difficulty: "Trung bình",
    sourcePages: "7–8, 12",
    accent: "cyan",
    icon: "layers",
  },
];

export const learningContent = {
  chapters,
  featuredLesson,
  glossary,
  microQuiz,
  podcasts,
  games,
  sourceDocument,
};

export default learningContent;
