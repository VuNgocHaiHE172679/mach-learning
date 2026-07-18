const SOURCE_TITLE = "Nhà nước xã hội chủ nghĩa Việt Nam";

const makeQuestion = (id, prompt, labels, correctIndex, explanation) => ({
  id,
  prompt,
  options: labels.map((label, index) => ({
    id: String.fromCharCode(97 + index),
    label,
  })),
  correctOptionId: String.fromCharCode(97 + correctIndex),
  explanation,
});

export const learningTracks = [
  {
    id: "chapter-1",
    number: "01",
    slug: "nhan-dien-va-ban-chat",
    shortTitle: "Nhận diện và bản chất",
    kicker: "NỀN TẢNG PHÁT TRIỂN",
    title: "Nhận diện và bản chất của Nhà nước xã hội chủ nghĩa Việt Nam",
    eyebrow: "Từ định hướng chung đến kinh tế, văn hóa và xã hội",
    guidingQuestion:
      "Tài liệu lý giải Nhà nước xã hội chủ nghĩa Việt Nam từ những nền tảng và định hướng phát triển nào?",
    description:
      "Tuyến đầu tiên đọc ba lớp nội dung: khái quát mô hình nhà nước, bản chất kinh tế hướng tới lợi ích Nhân dân và bản chất văn hóa – xã hội lấy con người làm trung tâm.",
    sourcePages: "1, 3, 5–6",
    estimatedMinutes: 39,
    totalModules: 3,
    accent: "brick",
    illustration: {
      src: "/images/state/con-nguoi-trung-tam.webp",
      alt: "Hai sinh viên học tập tại Trường Đại học Kiến trúc Thành phố Hồ Chí Minh.",
      caption:
        "Giáo dục và cơ hội phát triển con người là một phần của định hướng văn hóa – xã hội được tài liệu nhấn mạnh.",
      focalPoint: "50% 42%",
      credit: "Ảnh: Dragfyre / Wikimedia Commons · CC BY-SA 3.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:HCMC_Two_students_studying.JPG",
    },
    keyConcepts: [
      "Nhà nước xã hội chủ nghĩa",
      "Kinh tế thị trường định hướng xã hội chủ nghĩa",
      "Phát triển con người",
      "Công bằng xã hội",
    ],
    modules: [
      {
        id: "chapter-1-module-1",
        number: "1.1",
        title: "Khái quát Nhà nước xã hội chủ nghĩa Việt Nam",
        subtitle: "Đọc đúng chủ thể, định hướng và thông điệp xuyên suốt",
        summary:
          "Theo cách trình bày của tài liệu, Nhà nước xã hội chủ nghĩa Việt Nam gắn với thành quả đấu tranh của giai cấp công nhân và nhân dân lao động, được đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam và hướng tới phục vụ Nhân dân.",
        sourcePages: "1, 3",
        estimatedMinutes: 12,
        primaryFormat: "read",
        visualType: "foundation-map",
        learningOutcomes: [
          "Nhận diện chủ thể và bối cảnh mà tài liệu dùng để giới thiệu Nhà nước xã hội chủ nghĩa.",
          "Tóm tắt được ba vế: của Nhân dân, do Nhân dân và vì Nhân dân.",
          "Phân biệt một luận điểm lý luận trong tài liệu với một kết luận đã được kiểm chứng bằng dữ liệu.",
        ],
        keyConcepts: [
          "Nhà nước xã hội chủ nghĩa",
          "Nhân dân lao động",
          "Sự lãnh đạo của Đảng",
          "Nhà nước của Nhân dân",
        ],
        thesis:
          "Thông điệp trung tâm của tài liệu là xây dựng một Nhà nước của Nhân dân, do Nhân dân và vì Nhân dân.",
        thesisDetail:
          "Lời mở đầu đặt mô hình nhà nước này trong một mạch lý luận về nguồn gốc, vai trò lãnh đạo và mục tiêu phục vụ. Website giữ rõ chủ thể phát ngôn bằng các cụm “theo tài liệu” hoặc “tài liệu xác định”.",
        sectionEyebrow: "Cách tài liệu đặt vấn đề",
        sectionTitle: "Ba lớp để nhận diện một mô hình nhà nước",
        contextParagraphs: [
          "Trang mở đầu giới thiệu Nhà nước xã hội chủ nghĩa như một kết quả lịch sử gắn với cuộc đấu tranh của giai cấp công nhân và nhân dân lao động. Đây là cách lý giải mang tính lý luận của tài liệu, không phải một dòng niên biểu độc lập.",
          "Khi chuyển sang Việt Nam, tài liệu nhấn mạnh vai trò lãnh đạo của Đảng Cộng sản Việt Nam và quy tụ mục tiêu vào quyền làm chủ, lợi ích và đời sống của Nhân dân.",
        ],
        blocks: [
          {
            title: "Nguồn gốc theo tài liệu",
            text: "Nhà nước được đặt trong thành quả đấu tranh của giai cấp công nhân và nhân dân lao động.",
          },
          {
            title: "Đặc điểm ở Việt Nam",
            text: "Quá trình xác lập và hoàn thiện được tài liệu đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.",
          },
          {
            title: "Định hướng phục vụ",
            text: "Quyền lực, hoạt động và mục tiêu của Nhà nước được quy chiếu về Nhân dân.",
          },
        ],
        relationTitle: "Từ nguồn gốc lý luận đến định hướng phục vụ",
        relationIntro:
          "Ba lớp không phải ba khẩu hiệu rời nhau: nguồn gốc giải thích chủ thể lịch sử, vai trò lãnh đạo chỉ ra cơ chế chính trị được tài liệu nhấn mạnh, còn định hướng phục vụ xác lập đích đến.",
        lenses: [
          { code: "NG", label: "Nguồn gốc", title: "Giai cấp công nhân và nhân dân lao động" },
          { code: "LĐ", label: "Lãnh đạo", title: "Vai trò của Đảng Cộng sản Việt Nam" },
          { code: "ND", label: "Đích đến", title: "Của Nhân dân, do Nhân dân, vì Nhân dân" },
        ],
        caution:
          "Các cụm như “tiến bộ nhất” hoặc “mục tiêu tối thượng” trong PDF là nhận định của tài liệu. Khi diễn giải, cần giữ rõ đây là quan điểm được trình bày, không biến thành kết luận thực nghiệm.",
        coreSections: [
          {
            title: "Điểm xuất phát lý luận",
            summary:
              "Tài liệu liên hệ sự ra đời của Nhà nước xã hội chủ nghĩa với cuộc đấu tranh của giai cấp công nhân và nhân dân lao động nhằm hướng tới một trật tự xã hội mới.",
            points: [
              "Chủ thể được nhắc tới là giai cấp công nhân và đông đảo nhân dân lao động.",
              "Mục tiêu được mô tả theo hướng giảm áp bức, bất công và mở rộng quyền làm chủ.",
              "Đây là phần định vị lý luận, không phải bảng chứng cứ lịch sử chi tiết.",
            ],
          },
          {
            title: "Cách đặt vấn đề ở Việt Nam",
            summary:
              "Tài liệu trình bày quá trình xây dựng Nhà nước ở Việt Nam trong mối liên hệ với sự lãnh đạo của Đảng Cộng sản Việt Nam.",
            points: [
              "Vai trò lãnh đạo được xem là yếu tố định hướng chính trị.",
              "Nhà nước được liên hệ với lợi ích của giai cấp công nhân, nhân dân lao động và toàn dân tộc.",
              "Việc hoàn thiện bộ máy được đặt trong một quá trình lâu dài, không phải trạng thái bất biến.",
            ],
          },
          {
            title: "Thông điệp xuyên suốt",
            summary:
              "Ba vế “của Nhân dân – do Nhân dân – vì Nhân dân” giúp đọc thống nhất các phần tiếp theo về bản chất, dân chủ, chức năng và mục tiêu.",
            points: [
              "“Của Nhân dân” nhấn mạnh chủ thể của quyền lực.",
              "“Do Nhân dân” hướng tới sự tham gia và ủy quyền của Nhân dân.",
              "“Vì Nhân dân” đặt hoạt động của Nhà nước trong mục tiêu phục vụ lợi ích chung.",
            ],
          },
        ],
        quiz: [
          makeQuestion(
            "m1-q1",
            "Theo lời mở đầu, Nhà nước xã hội chủ nghĩa được gắn với thành quả đấu tranh của lực lượng nào?",
            ["Giới chủ doanh nghiệp", "Giai cấp công nhân và nhân dân lao động", "Các tổ chức quốc tế", "Bộ máy hành chính"],
            1,
            "Trang 3 đặt sự ra đời của Nhà nước xã hội chủ nghĩa trong thành quả đấu tranh của giai cấp công nhân và nhân dân lao động.",
          ),
          makeQuestion(
            "m1-q2",
            "Tại Việt Nam, tài liệu đặt quá trình hoàn thiện Nhà nước dưới sự lãnh đạo của tổ chức nào?",
            ["Quốc hội", "Mặt trận Tổ quốc", "Đảng Cộng sản Việt Nam", "Hội đồng nhân dân"],
            2,
            "Tài liệu xác định vai trò lãnh đạo của Đảng Cộng sản Việt Nam trong quá trình xây dựng và hoàn thiện Nhà nước.",
          ),
          makeQuestion(
            "m1-q3",
            "Thông điệp chính trên bìa tài liệu là gì?",
            ["Nhà nước quản lý bằng kinh tế", "Nhà nước của Nhân dân, do Nhân dân và vì Nhân dân", "Hội nhập là mục tiêu duy nhất", "Phát triển khoa học là nền tảng duy nhất"],
            1,
            "Bìa tài liệu đặt ba vế “của Nhân dân, do Nhân dân, vì Nhân dân” làm thông điệp dẫn đường.",
          ),
        ],
      },
      {
        id: "chapter-1-module-2",
        number: "1.2",
        title: "Bản chất kinh tế: phát triển vì lợi ích Nhân dân",
        subtitle: "Kết nối thị trường, quản lý nhà nước và công bằng xã hội",
        summary:
          "Tài liệu xác định nền tảng là kinh tế thị trường định hướng xã hội chủ nghĩa: vận hành theo quy luật thị trường, có sự quản lý của Nhà nước và gắn tăng trưởng với tiến bộ, công bằng xã hội.",
        sourcePages: "5",
        estimatedMinutes: 14,
        primaryFormat: "listen",
        visualType: "economic-balance",
        learningOutcomes: [
          "Nêu được nền tảng kinh tế mà tài liệu xác định.",
          "Giải thích quan hệ giữa cơ chế thị trường, quản lý nhà nước và định hướng xã hội.",
          "Nhận diện bốn giá trị cốt lõi được trang 5 nêu ra.",
        ],
        keyConcepts: [
          "Kinh tế thị trường định hướng xã hội chủ nghĩa",
          "Quản lý nhà nước",
          "Tiến bộ xã hội",
          "Công bằng xã hội",
        ],
        thesis:
          "Tăng trưởng kinh tế chỉ nằm trong mạch của bài khi được kết nối với tiến bộ, công bằng và chất lượng sống của Nhân dân.",
        thesisDetail:
          "Trang 5 không phủ nhận quy luật thị trường; tài liệu đặt thị trường trong khuôn khổ quản lý của Nhà nước pháp quyền xã hội chủ nghĩa và một hệ mục tiêu phát triển hướng tới con người.",
        sectionEyebrow: "Bản chất kinh tế",
        sectionTitle: "Ba thành tố cần đọc cùng nhau",
        contextParagraphs: [
          "Mô hình được tài liệu nêu là kinh tế thị trường định hướng xã hội chủ nghĩa. Vì vậy, không thể rút gọn thành kinh tế kế hoạch hóa hoàn toàn, cũng không thể hiểu là thị trường tự vận hành ngoài pháp luật và quản lý nhà nước.",
          "Định hướng xã hội được thể hiện qua yêu cầu gắn tăng trưởng với tiến bộ, công bằng, chất lượng cuộc sống và phát triển bền vững.",
        ],
        blocks: [
          { title: "Quy luật thị trường", text: "Thị trường tham gia phân bổ nguồn lực và tạo động lực cho hoạt động kinh tế." },
          { title: "Quản lý của Nhà nước", text: "Pháp luật và công cụ quản lý định hướng, điều tiết và xử lý những vấn đề chung." },
          { title: "Lợi ích của Nhân dân", text: "Thành quả phát triển được đặt trong quan hệ với tiến bộ, công bằng và chất lượng sống." },
        ],
        relationTitle: "Thị trường – Nhà nước – định hướng xã hội",
        relationIntro:
          "Ba thành tố có chức năng khác nhau nhưng phải được đọc trong cùng mô hình: thị trường tạo cơ chế vận hành, Nhà nước thực hiện quản lý và định hướng xã hội xác lập tiêu chí đánh giá phát triển.",
        lenses: [
          { code: "TT", label: "Cơ chế", title: "Vận hành theo quy luật thị trường" },
          { code: "NN", label: "Điều tiết", title: "Quản lý bằng pháp luật và chính sách" },
          { code: "XH", label: "Định hướng", title: "Tăng trưởng gắn tiến bộ và công bằng" },
        ],
        caution:
          "Các mục tiêu kinh tế trong PDF là nguyên tắc và định hướng. Không nên trình bày chúng như bằng chứng rằng mọi kết quả mong muốn đã tự động đạt được.",
        coreSections: [
          {
            title: "Nền tảng kinh tế",
            summary:
              "Tài liệu gọi tên mô hình là kinh tế thị trường định hướng xã hội chủ nghĩa, kết hợp cơ chế thị trường với định hướng và quản lý công.",
            points: [
              "Hoạt động kinh tế tuân theo các quy luật của thị trường.",
              "Nhà nước sử dụng pháp luật và công cụ quản lý để điều tiết ở tầm vĩ mô.",
              "Sự lãnh đạo của Đảng được tài liệu đặt trong cấu trúc định hướng chung.",
            ],
          },
          {
            title: "Tiêu chí của phát triển",
            summary:
              "Tăng trưởng không được xem là đích duy nhất mà cần đặt cạnh tiến bộ xã hội, công bằng và đời sống của người dân.",
            points: [
              "Phát triển bền vững thay cho chạy theo lợi ích ngắn hạn.",
              "Công bằng xã hội là tiêu chí đi cùng hiệu quả kinh tế.",
              "Nâng cao chất lượng cuộc sống là thước đo hướng tới con người.",
            ],
          },
          {
            title: "Mở cửa và hội nhập",
            summary:
              "Hội nhập quốc tế được đặt bên cạnh phát triển trong nước, cho thấy nền kinh tế không được mô tả như một hệ thống khép kín.",
            points: [
              "Hội nhập mở rộng khả năng hợp tác và tiếp cận nguồn lực.",
              "Quản lý nhà nước vẫn cần bảo vệ lợi ích chung và xử lý rủi ro.",
              "Bền vững, công bằng, chất lượng sống và hội nhập tạo thành bốn giá trị được trang 5 nhấn mạnh.",
            ],
          },
        ],
        quiz: [
          makeQuestion("m2-q1", "Nền tảng kinh tế được tài liệu xác định là gì?", ["Kinh tế kế hoạch hóa hoàn toàn", "Kinh tế thị trường tự do tuyệt đối", "Kinh tế thị trường định hướng xã hội chủ nghĩa", "Kinh tế chỉ dựa vào xuất khẩu"], 2, "Trang 5 gọi tên rõ nền tảng là kinh tế thị trường định hướng xã hội chủ nghĩa."),
          makeQuestion("m2-q2", "Mô hình kinh tế này được mô tả vận hành như thế nào?", ["Không theo quy luật thị trường", "Theo quy luật thị trường, có sự quản lý của Nhà nước", "Chỉ do doanh nghiệp nước ngoài quản lý", "Không có vai trò của pháp luật"], 1, "Tài liệu kết nối quy luật thị trường với sự quản lý của Nhà nước pháp quyền xã hội chủ nghĩa."),
          makeQuestion("m2-q3", "Tăng trưởng kinh tế cần đi đôi với điều gì?", ["Độc quyền và tối đa hóa lợi nhuận", "Tiến bộ và công bằng xã hội", "Giảm đầu tư giáo dục", "Thu hẹp hội nhập quốc tế"], 1, "Trang 5 nhấn mạnh yêu cầu gắn tăng trưởng với tiến bộ và công bằng xã hội."),
        ],
      },
      {
        id: "chapter-1-module-3",
        number: "1.3",
        title: "Bản chất văn hóa – xã hội: con người là trung tâm",
        subtitle: "Từ phát triển con người đến cơ hội tiếp cận các dịch vụ xã hội",
        summary:
          "Tài liệu đặt con người vừa là mục tiêu, vừa là động lực phát triển; đồng thời nhấn mạnh văn hóa, giáo dục, y tế và an sinh xã hội như những lĩnh vực tạo điều kiện phát triển toàn diện.",
        sourcePages: "6",
        estimatedMinutes: 13,
        primaryFormat: "read",
        visualType: "human-development",
        learningOutcomes: [
          "Giải thích được hai vai trò của con người trong phát triển.",
          "Nhận diện định hướng văn hóa tiên tiến, đậm đà bản sắc dân tộc.",
          "Liên kết bốn lĩnh vực xã hội với cơ hội phát triển của mỗi cá nhân.",
        ],
        keyConcepts: ["Con người là trung tâm", "Phát triển con người", "Bản sắc dân tộc", "An sinh xã hội"],
        thesis:
          "Một mô hình phát triển hướng tới con người phải đồng thời mở rộng năng lực, cơ hội và điều kiện sống của con người.",
        thesisDetail:
          "Trang 6 kết nối văn hóa – xã hội với giáo dục, y tế và an sinh. Những cách diễn đạt tuyệt đối trong PDF được website chuyển thành ngôn ngữ mục tiêu: “hướng tới tạo cơ hội” và “hướng tới bảo đảm”.",
        sectionEyebrow: "Bản chất văn hóa – xã hội",
        sectionTitle: "Con người vừa là đích đến, vừa là nguồn lực",
        contextParagraphs: [
          "Khi con người là mục tiêu, chính sách phát triển cần được xem xét qua khả năng cải thiện đời sống và mở rộng cơ hội. Khi con người là động lực, giáo dục, sức khỏe, năng lực sáng tạo và tham gia xã hội trở thành nguồn lực của phát triển.",
          "Tài liệu đồng thời nhấn mạnh xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc để hiện đại hóa không đồng nghĩa với xóa mờ ký ức và giá trị văn hóa Việt Nam.",
        ],
        blocks: [
          { title: "Mục tiêu phát triển", text: "Đời sống, phẩm giá và khả năng phát triển toàn diện của con người là đích hướng tới." },
          { title: "Động lực phát triển", text: "Tri thức, sức khỏe, sáng tạo và sự tham gia của con người tạo nguồn lực cho xã hội." },
          { title: "Hệ điều kiện xã hội", text: "Giáo dục, văn hóa, y tế và an sinh góp phần mở rộng cơ hội phát triển." },
        ],
        relationTitle: "Năng lực con người – cơ hội xã hội – phát triển đất nước",
        relationIntro:
          "Bốn lĩnh vực không phải những ô dịch vụ tách rời. Chúng cùng tác động tới năng lực học tập, lao động, sáng tạo và tham gia đời sống chung.",
        lenses: [
          { code: "GD", label: "Năng lực", title: "Giáo dục mở rộng tri thức và cơ hội" },
          { code: "VH", label: "Bản sắc", title: "Văn hóa kết nối hiện đại với dân tộc" },
          { code: "AS", label: "Bảo đảm", title: "Y tế và an sinh hỗ trợ đời sống" },
        ],
        caution:
          "Các câu “mọi cá nhân đều có cơ hội bình đẳng” hoặc “mọi người đều được chăm sóc toàn diện” cần đọc như mục tiêu hướng tới, không phải mô tả đã được PDF đo lường.",
        coreSections: [
          {
            title: "Con người ở vị trí trung tâm",
            summary:
              "Tài liệu không xem con người chỉ là người thụ hưởng hay chỉ là lao động đầu vào, mà là cả mục tiêu và động lực của phát triển.",
            points: [
              "Mục tiêu: nâng cao chất lượng sống và khả năng phát triển toàn diện.",
              "Động lực: phát huy tri thức, sáng tạo, sức khỏe và trách nhiệm xã hội.",
              "Chính sách cần nối kết lợi ích trước mắt với năng lực phát triển lâu dài.",
            ],
          },
          {
            title: "Văn hóa và bản sắc",
            summary:
              "Định hướng được nêu là xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc trong quá trình phát triển và hội nhập.",
            points: [
              "“Tiên tiến” gợi mở khả năng tiếp thu giá trị và thành tựu mới.",
              "“Bản sắc dân tộc” nhấn mạnh sự kế thừa và phát huy giá trị Việt Nam.",
              "Hai vế cần được đọc trong quan hệ bổ sung, không phải loại trừ nhau.",
            ],
          },
          {
            title: "Bốn trụ cột xã hội",
            summary:
              "Giáo dục, văn hóa, y tế và an sinh xã hội là bốn lĩnh vực mà trang 6 dùng để minh họa cách tạo điều kiện cho con người phát triển.",
            points: [
              "Giáo dục mở rộng tri thức và cơ hội học tập.",
              "Y tế và an sinh hỗ trợ sức khỏe, an toàn và khả năng chống chịu rủi ro.",
              "Văn hóa nuôi dưỡng đời sống tinh thần, giá trị chung và năng lực sáng tạo.",
            ],
          },
        ],
        quiz: [
          makeQuestion("m3-q1", "Con người được xác định giữ vai trò nào trong phát triển?", ["Chỉ là đối tượng thụ hưởng", "Chỉ là nguồn lao động", "Vừa là mục tiêu, vừa là động lực", "Không liên quan đến phát triển"], 2, "Trang 6 xác định con người đồng thời là mục tiêu và động lực của phát triển."),
          makeQuestion("m3-q2", "Nền văn hóa được định hướng xây dựng có đặc điểm gì?", ["Tách khỏi bản sắc dân tộc", "Tiên tiến, đậm đà bản sắc dân tộc", "Chỉ tiếp nhận giá trị bên ngoài", "Chỉ phục vụ kinh tế"], 1, "Tài liệu kết nối tính tiên tiến với việc giữ gìn và phát huy bản sắc dân tộc."),
          makeQuestion("m3-q3", "Nhóm nào gồm đúng bốn lĩnh vực minh họa trên trang 6?", ["Giáo dục, văn hóa, y tế, an sinh xã hội", "Quốc phòng, thuế, giao thông, xuất khẩu", "Ngân hàng, thương mại, đầu tư, du lịch", "Tư pháp, lập pháp, hành pháp, ngoại giao"], 0, "Bốn lĩnh vực được minh họa là giáo dục, văn hóa, y tế và an sinh xã hội."),
        ],
      },
    ],
  },
  {
    id: "chapter-2",
    number: "02",
    slug: "nhan-dan-quyen-luc-va-dan-chu",
    shortTitle: "Nhân dân và dân chủ",
    kicker: "QUYỀN LỰC VÀ THIẾT CHẾ",
    title: "Nhân dân, quyền lực và dân chủ xã hội chủ nghĩa",
    eyebrow: "Từ nguyên tắc quyền lực đến cơ chế bảo đảm bằng pháp luật",
    guidingQuestion:
      "Quyền làm chủ của Nhân dân được tài liệu kết nối với Nhà nước và các hình thức dân chủ như thế nào?",
    description:
      "Tuyến thứ hai làm rõ bản chất chính trị, phạm vi của dân chủ xã hội chủ nghĩa và quan hệ hai chiều giữa dân chủ với Nhà nước.",
    sourcePages: "4, 9–10",
    estimatedMinutes: 41,
    totalModules: 3,
    accent: "mustard",
    illustration: {
      src: "/images/state/quyen-luc-nhan-dan.svg",
      alt: "Sơ đồ Nhân dân ở trung tâm, kết nối với các hình thức tham gia và giám sát quyền lực.",
      caption:
        "Sơ đồ do Group 2 dựng lại từ các quan hệ được trình bày ở trang 4 và 9, không sử dụng biểu tượng quốc gia làm họa tiết.",
      focalPoint: "50% 50%",
      credit: "Đồ họa: Group 2 · diễn giải từ tài liệu trang 4 và 9",
      sourceUrl: "/documents/nha-nuoc-xa-hoi-chu-nghia-viet-nam.pdf#page=4",
    },
    keyConcepts: ["Quyền lực thuộc về Nhân dân", "Dân chủ trực tiếp", "Dân chủ đại diện", "Nhà nước pháp quyền xã hội chủ nghĩa"],
    modules: [
      {
        id: "chapter-2-module-1",
        number: "2.1",
        title: "Bản chất chính trị: Nhà nước của Nhân dân",
        subtitle: "Quyền lực thuộc về Nhân dân và hai cách thực hiện quyền lực",
        summary:
          "Tài liệu nhấn mạnh bản chất giai cấp công nhân gắn với lợi ích của nhân dân lao động, toàn dân tộc và nguyên tắc tất cả quyền lực nhà nước thuộc về Nhân dân.",
        sourcePages: "4",
        estimatedMinutes: 14,
        primaryFormat: "read",
        visualType: "people-power",
        learningOutcomes: [
          "Nêu được nguyên tắc quyền lực trung tâm của trang 4.",
          "Phân biệt dân chủ trực tiếp và dân chủ đại diện theo cách minh họa của tài liệu.",
          "Nhận diện vai trò của Quốc hội và Hội đồng nhân dân trong cơ chế đại diện.",
        ],
        keyConcepts: ["Bản chất giai cấp công nhân", "Quyền lực nhà nước", "Dân chủ trực tiếp", "Dân chủ đại diện"],
        thesis:
          "Nguyên tắc “quyền lực thuộc về Nhân dân” chỉ có ý nghĩa cụ thể khi được nối với các hình thức tham gia và cơ chế đại diện.",
        thesisDetail:
          "Trang 4 đặt Nhân dân ở trung tâm, rồi triển khai hai hướng thực hiện quyền lực: trực tiếp tham gia và ủy quyền cho các cơ quan đại diện được bầu ra.",
        sectionEyebrow: "Bản chất chính trị",
        sectionTitle: "Từ chủ thể quyền lực đến cách thực hiện quyền lực",
        contextParagraphs: [
          "Tài liệu trình bày Nhà nước mang bản chất giai cấp công nhân nhưng đồng thời gắn với lợi ích của nhân dân lao động và toàn dân tộc. Hai lớp này được đặt trong quan hệ thống nhất chứ không tách rời.",
          "Nguyên tắc tất cả quyền lực nhà nước thuộc về Nhân dân được cụ thể hóa qua các hình thức tham gia trực tiếp và cơ chế đại diện thông qua Quốc hội, Hội đồng nhân dân các cấp.",
        ],
        blocks: [
          { title: "Chủ thể quyền lực", text: "Nhân dân được xác định là chủ thể của quyền lực nhà nước." },
          { title: "Tham gia trực tiếp", text: "Nhân dân trực tiếp biểu đạt ý chí và tham gia các công việc chung theo cơ chế pháp luật." },
          { title: "Ủy quyền đại diện", text: "Nhân dân bầu và ủy quyền cho Quốc hội, Hội đồng nhân dân thực hiện quyền lực đại diện." },
        ],
        relationTitle: "Nhân dân – tham gia – đại diện",
        relationIntro:
          "Dân chủ trực tiếp giúp Nhân dân tự mình tham gia; dân chủ đại diện tổ chức quyền lực thông qua các cơ quan được bầu. Hai hình thức có thể bổ sung cho nhau.",
        lenses: [
          { code: "ND", label: "Chủ thể", title: "Tất cả quyền lực thuộc về Nhân dân" },
          { code: "TT", label: "Trực tiếp", title: "Tham gia và biểu đạt ý chí" },
          { code: "ĐD", label: "Đại diện", title: "Quốc hội và Hội đồng nhân dân" },
        ],
        caution:
          "Trang 4 xếp bầu cử, ứng cử và trưng cầu ý dân trong phần dân chủ trực tiếp. Website ghi đây là cách minh họa của catalogue, không khẳng định đó là hệ phân loại duy nhất.",
        coreSections: [
          {
            title: "Bản chất chính trị được tài liệu nêu",
            summary:
              "Bản chất giai cấp công nhân được đặt trong quan hệ với lợi ích của nhân dân lao động và lợi ích của toàn dân tộc.",
            points: [
              "Không nên tách bản chất giai cấp khỏi cơ sở xã hội rộng lớn mà tài liệu nhấn mạnh.",
              "Nhà nước được định hướng như công cụ tổ chức quyền lực của đại đa số.",
              "Đây là luận điểm lý luận cần được nhận diện đúng chủ thể phát ngôn.",
            ],
          },
          {
            title: "Dân chủ trực tiếp",
            summary:
              "Theo cách minh họa của catalogue, Nhân dân trực tiếp tham gia thông qua bầu cử, ứng cử, trưng cầu ý dân và tham gia công việc ở cơ sở.",
            points: [
              "Trọng tâm là khả năng tự mình biểu đạt ý chí.",
              "Hình thức cụ thể phải được thực hiện trong khuôn khổ pháp luật.",
              "Không nên đồng nhất mọi hoạt động tham gia với cùng một thủ tục pháp lý.",
            ],
          },
          {
            title: "Dân chủ đại diện",
            summary:
              "Nhân dân bầu ra và ủy quyền cho các cơ quan đại diện để thay mặt mình thực hiện quyền lực nhà nước.",
            points: [
              "Quốc hội là cơ quan đại diện ở cấp quốc gia được trang 4 nhấn mạnh.",
              "Hội đồng nhân dân thực hiện vai trò đại diện ở địa phương.",
              "Ủy quyền cần đi cùng trách nhiệm giải trình và giám sát quyền lực.",
            ],
          },
        ],
        quiz: [
          makeQuestion("m4-q1", "Nguyên tắc tối cao được nêu đối với quyền lực nhà nước là gì?", ["Thuộc về một nhóm chuyên gia", "Thuộc về Nhân dân", "Thuộc về doanh nghiệp", "Thuộc về tổ chức quốc tế"], 1, "Trang 4 nhấn mạnh nguyên tắc tất cả quyền lực nhà nước thuộc về Nhân dân."),
          makeQuestion("m4-q2", "Khi Nhân dân ủy quyền cho cơ quan quyền lực do mình bầu ra, tài liệu gọi đó là hình thức nào?", ["Dân chủ đại diện", "Quản lý kinh tế", "Hội nhập quốc tế", "Điều hành vĩ mô"], 0, "Ủy quyền cho cơ quan được bầu là đặc trưng của dân chủ đại diện."),
          makeQuestion("m4-q3", "Hai hệ thống cơ quan đại diện được nhấn mạnh là gì?", ["Chính phủ và tòa án", "Quốc hội và Hội đồng nhân dân các cấp", "Bộ và sở", "Doanh nghiệp và hiệp hội"], 1, "Trang 4 nêu Quốc hội và Hội đồng nhân dân các cấp trong cơ chế đại diện."),
        ],
      },
      {
        id: "chapter-2-module-2",
        number: "2.2",
        title: "Dân chủ xã hội chủ nghĩa: mục tiêu và động lực",
        subtitle: "Quyền làm chủ trên bốn lĩnh vực và bốn cách tham gia",
        summary:
          "Theo tài liệu, dân chủ xã hội chủ nghĩa vừa là mục tiêu, vừa là động lực; quyền làm chủ được đặt trên các lĩnh vực chính trị, kinh tế, văn hóa và xã hội.",
        sourcePages: "9",
        estimatedMinutes: 13,
        primaryFormat: "listen",
        visualType: "democracy-map",
        learningOutcomes: [
          "Nêu được hai vai trò của dân chủ xã hội chủ nghĩa.",
          "Nhận diện bốn lĩnh vực của quyền làm chủ trong sơ đồ.",
          "Phân biệt quản lý, góp ý và giám sát như các cách tham gia khác nhau.",
        ],
        keyConcepts: ["Dân chủ xã hội chủ nghĩa", "Quyền làm chủ", "Góp ý chính sách", "Giám sát quyền lực"],
        thesis:
          "Dân chủ vừa là giá trị cần hướng tới, vừa là nguồn lực huy động sự tham gia và sáng kiến của Nhân dân.",
        thesisDetail:
          "Trang 9 mở rộng quyền làm chủ ra bốn lĩnh vực và mô tả các kênh tham gia vào quản lý nhà nước, quản lý xã hội, góp ý chính sách và giám sát quyền lực.",
        sectionEyebrow: "Dân chủ xã hội chủ nghĩa",
        sectionTitle: "Hai vai trò, bốn lĩnh vực, bốn cách tham gia",
        contextParagraphs: [
          "Gọi dân chủ là mục tiêu nghĩa là quyền làm chủ và sự tham gia có giá trị tự thân trong xã hội mà tài liệu hướng tới. Gọi dân chủ là động lực nhấn mạnh khả năng huy động trí tuệ, trách nhiệm và sáng kiến của Nhân dân.",
          "Quyền làm chủ không chỉ được đặt trong chính trị mà còn trải rộng sang kinh tế, văn hóa và xã hội, tạo nên cách nhìn đa chiều về sự tham gia.",
        ],
        blocks: [
          { title: "Phạm vi quyền làm chủ", text: "Chính trị, kinh tế, văn hóa và xã hội tạo thành bốn lĩnh vực được tài liệu nêu." },
          { title: "Dân chủ là mục tiêu", text: "Mở rộng quyền làm chủ là một giá trị mà quá trình phát triển hướng tới." },
          { title: "Dân chủ là động lực", text: "Sự tham gia của Nhân dân tạo thêm trí tuệ, giám sát và nguồn lực cho phát triển." },
        ],
        relationTitle: "Quyền làm chủ – tham gia – phát triển",
        relationIntro:
          "Khi người dân có kênh tham gia, góp ý và giám sát, dân chủ không chỉ là mục tiêu định hướng mà còn có thể trở thành năng lực thúc đẩy quản trị và phát triển.",
        lenses: [
          { code: "QL", label: "Tham gia", title: "Quản lý nhà nước và quản lý xã hội" },
          { code: "GY", label: "Đóng góp", title: "Góp ý vào quá trình hình thành chính sách" },
          { code: "GS", label: "Kiểm soát", title: "Giám sát việc thực thi quyền lực" },
        ],
        caution:
          "Các cụm “quyền làm chủ thực sự” hoặc so sánh với mô hình dân chủ khác là quan điểm lý luận trong tài liệu. Website trình bày như nguyên tắc và mục tiêu, không như kết quả đã được đo lường.",
        coreSections: [
          {
            title: "Bốn lĩnh vực của quyền làm chủ",
            summary:
              "Trang 9 tổ chức quyền làm chủ trên chính trị, kinh tế, văn hóa và xã hội, tránh thu hẹp dân chủ vào một hoạt động đơn lẻ.",
            points: [
              "Chính trị: tham gia vào công việc chung và quyền lực công.",
              "Kinh tế: liên hệ với lợi ích, nguồn lực và điều kiện phát triển.",
              "Văn hóa – xã hội: gắn với đời sống tinh thần, dịch vụ và quan hệ cộng đồng.",
            ],
          },
          {
            title: "Mục tiêu và động lực",
            summary:
              "Hai vai trò bổ sung nhau: dân chủ là đích cần đạt, đồng thời là cách phát huy năng lực của Nhân dân trong quá trình phát triển.",
            points: [
              "Là mục tiêu: coi quyền làm chủ là giá trị của xã hội.",
              "Là động lực: huy động trí tuệ, trách nhiệm và sáng kiến.",
              "Không nên biến một trong hai vai trò thành toàn bộ nội hàm của dân chủ.",
            ],
          },
          {
            title: "Bốn cách tham gia",
            summary:
              "Sơ đồ của tài liệu nêu quản lý nhà nước, quản lý xã hội, góp ý chính sách và giám sát quyền lực.",
            points: [
              "Quản lý liên hệ với việc cùng tổ chức các công việc chung.",
              "Góp ý chính sách đưa tri thức và nhu cầu xã hội vào quá trình quyết định.",
              "Giám sát quyền lực giúp phát hiện vấn đề và yêu cầu trách nhiệm giải trình.",
            ],
          },
        ],
        quiz: [
          makeQuestion("m5-q1", "Dân chủ xã hội chủ nghĩa được tài liệu xác định vừa là gì?", ["Phương tiện và chi phí", "Mục tiêu và động lực", "Quyền lợi và nghĩa vụ kinh tế", "Kế hoạch và ngân sách"], 1, "Trang 9 xác định dân chủ đồng thời là mục tiêu và động lực phát triển."),
          makeQuestion("m5-q2", "Quyền làm chủ được đặt trên những lĩnh vực nào?", ["Chỉ chính trị", "Chỉ kinh tế", "Chính trị, kinh tế, văn hóa và xã hội", "Chỉ văn hóa và giáo dục"], 2, "Sơ đồ trang 9 nêu đủ bốn lĩnh vực chính trị, kinh tế, văn hóa và xã hội."),
          makeQuestion("m5-q3", "Hoạt động nào không xuất hiện trong sơ đồ về sự tham gia của Nhân dân?", ["Góp ý chính sách", "Giám sát quyền lực", "Quản lý xã hội", "Tối đa hóa lợi nhuận độc quyền"], 3, "Tối đa hóa lợi nhuận độc quyền không nằm trong bốn cách tham gia được trang 9 liệt kê."),
        ],
      },
      {
        id: "chapter-2-module-3",
        number: "2.3",
        title: "Quan hệ giữa dân chủ và Nhà nước xã hội chủ nghĩa",
        subtitle: "Dân chủ tạo nền tảng, Nhà nước tạo cơ chế bảo đảm",
        summary:
          "Tài liệu trình bày dân chủ và Nhà nước trong quan hệ hữu cơ: dân chủ là cơ sở để Nhân dân tham gia, còn Nhà nước thể chế hóa và bảo đảm quyền dân chủ bằng pháp luật.",
        sourcePages: "10",
        estimatedMinutes: 14,
        primaryFormat: "read",
        visualType: "reciprocal-system",
        learningOutcomes: [
          "Giải thích được quan hệ hai chiều giữa dân chủ và Nhà nước.",
          "Nêu vai trò của pháp luật trong việc bảo đảm quyền dân chủ.",
          "Liên kết lập pháp, hành pháp và tư pháp với việc hiện thực hóa quyền làm chủ.",
        ],
        keyConcepts: ["Dân chủ xã hội chủ nghĩa", "Nhà nước xã hội chủ nghĩa", "Thể chế hóa", "Nhà nước pháp quyền"],
        thesis:
          "Dân chủ cần thiết chế để trở thành quyền có thể thực hiện; Nhà nước cần sự tham gia và giám sát để quyền lực hướng về Nhân dân.",
        thesisDetail:
          "Mối quan hệ được trình bày theo hai chiều: dân chủ cung cấp nền tảng xã hội và chính trị; Nhà nước sử dụng pháp luật cùng hoạt động lập pháp, hành pháp, tư pháp để bảo đảm thực hiện.",
        sectionEyebrow: "Quan hệ hữu cơ",
        sectionTitle: "Không thể tách mục tiêu dân chủ khỏi công cụ thể chế",
        contextParagraphs: [
          "Nếu chỉ nhìn dân chủ như một tuyên bố giá trị, ta bỏ qua câu hỏi quyền được xác định, tổ chức và bảo vệ bằng cách nào. Nếu chỉ nhìn Nhà nước như bộ máy, ta bỏ qua câu hỏi quyền lực bắt nguồn từ đâu và chịu sự giám sát của ai.",
          "Tài liệu vì vậy đặt dân chủ và Nhà nước trong quan hệ điều kiện lẫn nhau, với pháp luật là cầu nối chuyển các nguyên tắc thành khuôn khổ thực hiện.",
        ],
        blocks: [
          { title: "Dân chủ làm nền tảng", text: "Sự tham gia, trí tuệ và giám sát của Nhân dân góp phần xây dựng, hoàn thiện Nhà nước." },
          { title: "Nhà nước thể chế hóa", text: "Quyền và cơ chế thực hiện được xác lập trong pháp luật và thiết chế công." },
          { title: "Quyền làm chủ được thực hiện", text: "Lập pháp, hành pháp và tư pháp cùng tham gia bảo đảm khuôn khổ dân chủ." },
        ],
        relationTitle: "Một vòng quan hệ hai chiều",
        relationIntro:
          "Dân chủ không chỉ đi vào Nhà nước; Nhà nước cũng phải trở lại tạo điều kiện để Nhân dân thực hiện quyền, tham gia và giám sát.",
        lenses: [
          { code: "DC", label: "Nền tảng", title: "Nhân dân tham gia xây dựng và giám sát" },
          { code: "PL", label: "Cầu nối", title: "Pháp luật xác lập quyền và cơ chế" },
          { code: "NN", label: "Thiết chế", title: "Lập pháp, hành pháp và tư pháp" },
        ],
        caution:
          "Trang 10 dùng một số lập luận nhân quả mạnh. Website diễn đạt thận trọng: Nhà nước và pháp luật “góp phần bảo đảm” hoặc “hướng tới”, thay vì khẳng định tự động tạo ra mọi kết quả xã hội.",
        coreSections: [
          {
            title: "Dân chủ là cơ sở xây dựng Nhà nước",
            summary:
              "Tài liệu nhấn mạnh vai trò của sự tham gia, trí tuệ và giám sát của Nhân dân đối với việc xây dựng và hoàn thiện Nhà nước.",
            points: [
              "Sự tham gia giúp đưa nhu cầu xã hội vào quá trình quản trị.",
              "Góp ý và phản biện bổ sung thông tin cho quyết định công.",
              "Giám sát đặt ra yêu cầu công khai và trách nhiệm giải trình.",
            ],
          },
          {
            title: "Nhà nước là thiết chế bảo đảm",
            summary:
              "Nhà nước chuyển các nguyên tắc dân chủ thành quy định, thủ tục, quyền và trách nhiệm có thể thực hiện trong đời sống.",
            points: [
              "Pháp luật xác định nội dung và giới hạn của quyền.",
              "Thiết chế tổ chức kênh tham gia, bảo vệ quyền và xử lý vi phạm.",
              "Quản trị hiệu lực là điều kiện để quyền không dừng ở tuyên bố.",
            ],
          },
          {
            title: "Ba nhóm hoạt động quyền lực",
            summary:
              "Trang 10 liên hệ lập pháp, hành pháp và tư pháp với việc hiện thực hóa quyền làm chủ trong khuôn khổ Nhà nước.",
            points: [
              "Lập pháp tạo khuôn khổ pháp luật.",
              "Hành pháp tổ chức thi hành và cung ứng quản lý công.",
              "Tư pháp bảo vệ pháp luật, quyền và trật tự công bằng theo thẩm quyền.",
            ],
          },
        ],
        quiz: [
          makeQuestion("m6-q1", "Theo tài liệu, yếu tố nào là cơ sở, nền tảng để xây dựng Nhà nước?", ["Dân chủ xã hội chủ nghĩa", "Lợi nhuận doanh nghiệp", "Thương mại quốc tế", "Công nghệ số"], 0, "Trang 10 xem dân chủ xã hội chủ nghĩa là cơ sở để Nhân dân tham gia xây dựng và giám sát Nhà nước."),
          makeQuestion("m6-q2", "Nhà nước xã hội chủ nghĩa được xác định giữ vai trò gì đối với dân chủ?", ["Công cụ, thiết chế bảo đảm dân chủ", "Chủ thể thay thế hoàn toàn Nhân dân", "Cơ quan chỉ quản lý kinh tế", "Tổ chức không liên quan đến pháp luật"], 0, "Tài liệu xem Nhà nước là công cụ và thiết chế thể chế hóa, bảo đảm quyền dân chủ bằng pháp luật."),
          makeQuestion("m6-q3", "Những hoạt động nào được nêu để hiện thực hóa quyền làm chủ?", ["Lập pháp, hành pháp và tư pháp", "Sản xuất, quảng cáo và bán hàng", "Xuất khẩu, nhập khẩu và vận tải", "Nghiên cứu, đầu tư và tiêu dùng"], 0, "Trang 10 nêu ba nhóm hoạt động lập pháp, hành pháp và tư pháp."),
        ],
      },
    ],
  },
  {
    id: "chapter-3",
    number: "03",
    slug: "chuc-nang-va-muc-tieu",
    shortTitle: "Chức năng và mục tiêu",
    kicker: "VẬN HÀNH VÀ ĐÍCH ĐẾN",
    title: "Chức năng của Nhà nước và mục tiêu phát triển đất nước",
    eyebrow: "Quản lý trong nước, hội nhập quốc tế và định hướng phục vụ Nhân dân",
    guidingQuestion:
      "Hoạt động đối nội, đối ngoại và mục tiêu phát triển được tài liệu nối thành một hệ thống như thế nào?",
    description:
      "Tuyến cuối cùng phân biệt chức năng đối nội với đối ngoại, sau đó quy tụ các hoạt động về mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
    sourcePages: "7–8, 12",
    estimatedMinutes: 39,
    totalModules: 3,
    accent: "cyan",
    illustration: {
      src: "/images/state/chuc-nang-nha-nuoc.svg",
      alt: "Sơ đồ chức năng đối nội và đối ngoại cùng hướng tới phục vụ Nhân dân và phát triển đất nước.",
      caption:
        "Hai nhóm chức năng có phạm vi khác nhau nhưng cùng được quy chiếu về lợi ích quốc gia – dân tộc và đời sống Nhân dân.",
      focalPoint: "50% 50%",
      credit: "Đồ họa: Group 2 · diễn giải từ tài liệu trang 7, 8 và 12",
      sourceUrl: "/documents/nha-nuoc-xa-hoi-chu-nghia-viet-nam.pdf#page=7",
    },
    keyConcepts: ["Chức năng đối nội", "Chức năng đối ngoại", "Chủ quyền quốc gia", "Phát triển bền vững"],
    modules: [
      {
        id: "chapter-3-module-1",
        number: "3.1",
        title: "Chức năng đối nội: xây dựng và phát triển đất nước",
        subtitle: "Quản lý đời sống xã hội bằng pháp luật và công cụ vĩ mô",
        summary:
          "Đối nội bao gồm hoạt động quản lý, điều hành đời sống xã hội trong lãnh thổ quốc gia, tập trung vào sáu lĩnh vực và hướng tới trật tự, kỷ cương cùng đời sống ấm no, tự do, hạnh phúc.",
        sourcePages: "7",
        estimatedMinutes: 14,
        primaryFormat: "read",
        visualType: "domestic-functions",
        learningOutcomes: [
          "Nêu được phạm vi của chức năng đối nội.",
          "Nhận diện pháp luật và công cụ vĩ mô như hai nhóm phương thức quản lý.",
          "Hệ thống hóa sáu lĩnh vực trọng tâm trên trang 7.",
        ],
        keyConcepts: ["Chức năng đối nội", "Quản lý vĩ mô", "Trật tự và kỷ cương", "Môi trường"],
        thesis:
          "Chức năng đối nội kết nối quản lý nhà nước với việc kiến tạo điều kiện cho các lĩnh vực của đời sống cùng phát triển.",
        thesisDetail:
          "Trang 7 không chỉ nói đến duy trì trật tự. Tài liệu đồng thời liệt kê kinh tế, giáo dục, khoa học – công nghệ, y tế, văn hóa và môi trường như các lĩnh vực trọng tâm của quản lý và phát triển.",
        sectionEyebrow: "Chức năng đối nội",
        sectionTitle: "Phạm vi – công cụ – lĩnh vực – mục tiêu",
        contextParagraphs: [
          "Đối nội là hoạt động quản lý và điều hành đời sống xã hội trong phạm vi lãnh thổ quốc gia. Phạm vi này phân biệt nó với các quan hệ và hoạt động hướng ra bên ngoài.",
          "Pháp luật tạo khuôn khổ chung, còn công cụ quản lý vĩ mô giúp Nhà nước định hướng và điều phối các lĩnh vực ở quy mô toàn xã hội.",
        ],
        blocks: [
          { title: "Khuôn khổ quản lý", text: "Hệ thống pháp luật xác lập quy tắc, quyền, trách nhiệm và trật tự chung." },
          { title: "Điều hành vĩ mô", text: "Chính sách và công cụ quản lý hỗ trợ điều phối nguồn lực, xử lý vấn đề xã hội." },
          { title: "Phát triển đời sống", text: "Sáu lĩnh vực trọng tâm cùng hướng tới điều kiện sống thuận lợi cho Nhân dân." },
        ],
        relationTitle: "Luật pháp – quản lý – phát triển",
        relationIntro:
          "Khuôn khổ pháp luật giúp hoạt động quản lý có căn cứ; công cụ vĩ mô biến định hướng thành hành động; kết quả mong muốn là trật tự, kỷ cương và điều kiện phát triển.",
        lenses: [
          { code: "PL", label: "Khuôn khổ", title: "Quản lý xã hội bằng hệ thống pháp luật" },
          { code: "VM", label: "Điều hành", title: "Sử dụng các công cụ quản lý vĩ mô" },
          { code: "06", label: "Lĩnh vực", title: "Kinh tế đến môi trường" },
        ],
        caution:
          "Cụm “môi trường thuận lợi nhất” trong PDF được website diễn đạt là “môi trường thuận lợi” để tránh một khẳng định tuyệt đối không có số liệu so sánh.",
        coreSections: [
          {
            title: "Phạm vi và phương thức",
            summary:
              "Chức năng đối nội bao quát việc quản lý đời sống xã hội bên trong lãnh thổ bằng pháp luật và công cụ quản lý vĩ mô.",
            points: [
              "Pháp luật tạo chuẩn mực và cơ sở cho tổ chức thực hiện.",
              "Công cụ vĩ mô điều tiết các quan hệ và nguồn lực ở quy mô lớn.",
              "Mục tiêu quản lý gắn với ổn định nhưng không tách khỏi phát triển.",
            ],
          },
          {
            title: "Sáu lĩnh vực trọng tâm",
            summary:
              "Trang 7 liệt kê sáu lĩnh vực: kinh tế, giáo dục, khoa học – công nghệ, y tế, văn hóa và môi trường.",
            points: [
              "Kinh tế cung cấp cơ sở vật chất và nguồn lực.",
              "Giáo dục, khoa học – công nghệ, y tế và văn hóa tác động trực tiếp tới năng lực, chất lượng sống.",
              "Môi trường đặt ra yêu cầu cân bằng phát triển với điều kiện sống lâu dài.",
            ],
          },
          {
            title: "Mục tiêu xã hội",
            summary:
              "Quản lý đối nội hướng tới thiết lập trật tự, kỷ cương và tạo điều kiện cho đời sống ấm no, tự do, hạnh phúc.",
            points: [
              "Trật tự và kỷ cương tạo tính dự đoán, ổn định cho đời sống chung.",
              "Phát triển các lĩnh vực mở rộng năng lực và cơ hội của người dân.",
              "Hiệu quả quản lý cần được quy chiếu về đời sống của Nhân dân.",
            ],
          },
        ],
        quiz: [
          makeQuestion("m7-q1", "Hoạt động quản lý đời sống xã hội trong lãnh thổ quốc gia thuộc chức năng nào?", ["Đối ngoại", "Đối nội", "Ngoại thương", "Ngoại giao nhân dân"], 1, "Trang 7 xác định hoạt động quản lý, điều hành bên trong lãnh thổ thuộc chức năng đối nội."),
          makeQuestion("m7-q2", "Hai nhóm công cụ được nêu cho hoạt động đối nội là gì?", ["Pháp luật và công cụ quản lý vĩ mô", "Quảng cáo và truyền thông", "Vốn nước ngoài và xuất khẩu", "Du lịch và dịch vụ"], 0, "Tài liệu nêu hệ thống pháp luật và các công cụ quản lý vĩ mô."),
          makeQuestion("m7-q3", "Nhóm nào gồm đúng các lĩnh vực trọng tâm trên sơ đồ?", ["Kinh tế, giáo dục, khoa học – công nghệ, y tế, văn hóa, môi trường", "Thuế, hải quan, ngân hàng, bảo hiểm", "Thể thao, du lịch, giải trí, quảng cáo", "Quốc phòng, biên giới, hàng hải, hàng không"], 0, "Sáu lĩnh vực trên trang 7 là kinh tế, giáo dục, khoa học – công nghệ, y tế, văn hóa và môi trường."),
        ],
      },
      {
        id: "chapter-3-module-2",
        number: "3.2",
        title: "Chức năng đối ngoại: hội nhập và bảo vệ Tổ quốc",
        subtitle: "Tối ưu lợi ích quốc gia – dân tộc trên cơ sở luật pháp quốc tế",
        summary:
          "Tài liệu đặt hoạt động đối ngoại trong bối cảnh toàn cầu hóa, kết nối hợp tác và hội nhập với bảo vệ chủ quyền, hòa bình, ổn định và lợi ích quốc gia – dân tộc.",
        sourcePages: "8",
        estimatedMinutes: 13,
        primaryFormat: "listen",
        visualType: "foreign-relations",
        learningOutcomes: [
          "Nêu được nguyên tắc mà tài liệu đặt cho hoạt động đối ngoại.",
          "Phân loại bốn hành động cốt lõi trên trang 8.",
          "Đọc thận trọng thông điệp đối ngoại không ghi nguồn trích dẫn trong PDF.",
        ],
        keyConcepts: ["Chức năng đối ngoại", "Lợi ích quốc gia – dân tộc", "Luật pháp quốc tế", "Chủ quyền lãnh thổ"],
        thesis:
          "Đối ngoại vừa mở không gian hợp tác, vừa bảo vệ điều kiện hòa bình, chủ quyền và lợi ích quốc gia – dân tộc.",
        thesisDetail:
          "Trang 8 tổ chức chức năng đối ngoại thành bốn hướng hành động: hợp tác quốc tế, hội nhập kinh tế toàn cầu, bảo vệ chủ quyền lãnh thổ và giữ gìn hòa bình, ổn định.",
        sectionEyebrow: "Chức năng đối ngoại",
        sectionTitle: "Mở cửa hợp tác nhưng không tách khỏi chủ quyền",
        contextParagraphs: [
          "Trong bối cảnh toàn cầu hóa, nhiều vấn đề và nguồn lực vượt qua biên giới quốc gia. Hoạt động đối ngoại vì thế vừa tạo quan hệ hợp tác, vừa xử lý những vấn đề liên quan tới lợi ích và an ninh quốc gia.",
          "Tài liệu đặt nguyên tắc tối ưu hóa lợi ích quốc gia – dân tộc trên cơ sở luật pháp quốc tế, nhờ đó lợi ích và chuẩn mực chung được đọc trong cùng một khung.",
        ],
        blocks: [
          { title: "Hợp tác và hội nhập", text: "Mở rộng quan hệ, trao đổi nguồn lực và tham gia sâu hơn vào nền kinh tế toàn cầu." },
          { title: "Chủ quyền và lợi ích", text: "Bảo vệ chủ quyền lãnh thổ và lợi ích quốc gia – dân tộc trong quan hệ quốc tế." },
          { title: "Hòa bình và ổn định", text: "Góp phần duy trì môi trường quốc tế thuận lợi cho bảo vệ và phát triển đất nước." },
        ],
        relationTitle: "Hợp tác – chủ quyền – môi trường hòa bình",
        relationIntro:
          "Hội nhập không đồng nghĩa từ bỏ lợi ích quốc gia; bảo vệ chủ quyền cũng không đồng nghĩa tự tách khỏi hợp tác. Tài liệu đặt ba yêu cầu trong quan hệ cân bằng.",
        lenses: [
          { code: "HT", label: "Hợp tác", title: "Mở rộng quan hệ quốc tế" },
          { code: "HN", label: "Hội nhập", title: "Tham gia kinh tế toàn cầu" },
          { code: "BV", label: "Bảo vệ", title: "Chủ quyền, hòa bình và ổn định" },
        ],
        caution:
          "Thông điệp “Việt Nam là bạn, đối tác tin cậy...” ở cuối trang 8 không ghi tác giả hoặc nguồn. Website chỉ ghi đây là thông điệp trong tài liệu, không trình bày như một trích dẫn có thẩm quyền.",
        coreSections: [
          {
            title: "Bối cảnh và nguyên tắc",
            summary:
              "Hoạt động đối ngoại được đặt trong toàn cầu hóa, hướng tới lợi ích quốc gia – dân tộc và tôn trọng luật pháp quốc tế.",
            points: [
              "Toàn cầu hóa làm tăng tính liên hệ và phụ thuộc giữa các quốc gia.",
              "Lợi ích quốc gia – dân tộc là điểm quy chiếu của hoạt động đối ngoại.",
              "Luật pháp quốc tế cung cấp khuôn khổ chuẩn mực cho quan hệ giữa các chủ thể.",
            ],
          },
          {
            title: "Bốn hành động cốt lõi",
            summary:
              "Trang 8 nêu hợp tác quốc tế, hội nhập kinh tế toàn cầu, bảo vệ chủ quyền lãnh thổ và giữ gìn hòa bình, ổn định.",
            points: [
              "Hợp tác tạo kênh đối thoại và cùng giải quyết vấn đề chung.",
              "Hội nhập mở rộng không gian kinh tế và trao đổi nguồn lực.",
              "Bảo vệ chủ quyền, hòa bình và ổn định giữ điều kiện nền tảng cho phát triển.",
            ],
          },
          {
            title: "Vai trò trong phát triển đất nước",
            summary:
              "Đối ngoại vừa tạo cơ hội phát triển, vừa góp phần bảo vệ môi trường an ninh và vị thế của đất nước trong cộng đồng quốc tế.",
            points: [
              "Quan hệ quốc tế có thể hỗ trợ thương mại, tri thức và hợp tác phát triển.",
              "Môi trường hòa bình giúp duy trì nguồn lực cho các mục tiêu trong nước.",
              "Trách nhiệm quốc tế cần đi cùng lợi ích quốc gia – dân tộc.",
            ],
          },
        ],
        quiz: [
          makeQuestion("m8-q1", "Hoạt động đối ngoại được triển khai trên cơ sở nào?", ["Lợi ích của một nhóm riêng lẻ", "Luật pháp quốc tế", "Không cần nguyên tắc chung", "Chỉ dựa vào lợi nhuận"], 1, "Trang 8 đặt hoạt động đối ngoại trên cơ sở luật pháp quốc tế."),
          makeQuestion("m8-q2", "Nội dung nào không thuộc bốn hành động cốt lõi được nêu?", ["Hợp tác quốc tế", "Hội nhập kinh tế toàn cầu", "Bảo vệ chủ quyền lãnh thổ", "Tách khỏi cộng đồng quốc tế"], 3, "Tài liệu nhấn mạnh hợp tác và hội nhập, không nêu tách khỏi cộng đồng quốc tế."),
          makeQuestion("m8-q3", "Thông điệp trong catalogue mô tả vị thế Việt Nam trong cộng đồng quốc tế như thế nào?", ["Chỉ là bên quan sát", "Là bạn, đối tác tin cậy và thành viên tích cực, có trách nhiệm", "Không tham gia hợp tác", "Chỉ quan tâm đến thương mại"], 1, "Đây là thông điệp ở cuối trang 8; PDF không ghi rõ tác giả nên không được dùng như trích dẫn độc lập."),
        ],
      },
      {
        id: "chapter-3-module-3",
        number: "3.3",
        title: "Mục tiêu hướng tới: dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
        subtitle: "Quy tụ bản chất, dân chủ và chức năng về một đích phát triển",
        summary:
          "Trang kết quy tụ định hướng phục vụ Nhân dân, phát huy quyền làm chủ và phát triển bền vững vào mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
        sourcePages: "12",
        estimatedMinutes: 12,
        primaryFormat: "read",
        visualType: "goal-system",
        learningOutcomes: [
          "Nhớ đúng năm thành tố của mục tiêu phát triển.",
          "Nêu được ba định hướng tổng kết ở trang 12.",
          "Kết nối mục tiêu với các bài về bản chất, dân chủ, đối nội và đối ngoại.",
        ],
        keyConcepts: ["Dân giàu", "Nước mạnh", "Dân chủ", "Công bằng", "Văn minh"],
        thesis:
          "Năm mục tiêu chỉ sáng rõ khi được đọc như một hệ thống, không phải năm khẩu hiệu đứng riêng lẻ.",
        thesisDetail:
          "Phục vụ Nhân dân, phát huy quyền làm chủ và phát triển bền vững là ba hướng kết nối toàn bộ tài liệu với đích dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
        sectionEyebrow: "Trang kết",
        sectionTitle: "Một mục tiêu chung, nhiều điều kiện cùng tác động",
        contextParagraphs: [
          "“Dân giàu” liên hệ với đời sống và cơ hội kinh tế; “nước mạnh” với năng lực phát triển và bảo vệ đất nước; “dân chủ” với quyền làm chủ; “công bằng” với phân phối cơ hội và lợi ích; “văn minh” với chất lượng tổ chức xã hội.",
          "Trang 12 trình bày đây là mục tiêu hướng tới. Vì vậy, website không biến cụm từ thành một nhận định rằng mọi thành tố đã hoàn thành, mà dùng nó như khung tổng kết và câu hỏi đánh giá.",
        ],
        blocks: [
          { title: "Phục vụ Nhân dân", text: "Lợi ích, đời sống và sự phát triển của Nhân dân là điểm quy chiếu của hoạt động nhà nước." },
          { title: "Phát huy quyền làm chủ", text: "Nhân dân tham gia, góp ý, giám sát và thực hiện quyền trong khuôn khổ pháp luật." },
          { title: "Phát triển bền vững", text: "Kinh tế, xã hội, văn hóa và môi trường cần được cân nhắc trong tầm nhìn dài hạn." },
        ],
        relationTitle: "Nhân dân – quyền làm chủ – phát triển bền vững",
        relationIntro:
          "Ba hướng tổng kết tạo chiếc cầu từ hoạt động của Nhà nước đến năm thành tố của mục tiêu phát triển, giúp người học nhìn toàn bộ tài liệu như một hệ thống.",
        lenses: [
          { code: "DG", label: "Đời sống", title: "Dân giàu gắn với cơ hội và chất lượng sống" },
          { code: "NM", label: "Năng lực", title: "Nước mạnh gắn với phát triển và bảo vệ" },
          { code: "DC", label: "Giá trị", title: "Dân chủ, công bằng và văn minh" },
        ],
        caution:
          "Cụm mục tiêu ở trang 12 là định hướng hướng tới. Không nên dùng nó như bằng chứng rằng các kết quả đã được hoàn thành hoặc như chỉ số đo lường thay cho dữ liệu thực tế.",
        coreSections: [
          {
            title: "Năm thành tố gắn bó",
            summary:
              "Dân giàu, nước mạnh, dân chủ, công bằng và văn minh phản ánh các mặt kinh tế, chính trị, xã hội và văn hóa của cùng một đích phát triển.",
            points: [
              "Giàu mạnh không tách khỏi đời sống và năng lực của Nhân dân.",
              "Dân chủ và công bằng đặt ra yêu cầu về quyền, cơ hội và lợi ích.",
              "Văn minh liên hệ với chất lượng thể chế, văn hóa và quan hệ xã hội.",
            ],
          },
          {
            title: "Ba định hướng tổng kết",
            summary:
              "Trang 12 nêu phục vụ Nhân dân, phát huy quyền làm chủ và xây dựng đất nước phát triển bền vững.",
            points: [
              "Phục vụ xác định đối tượng và mục tiêu của hoạt động công.",
              "Quyền làm chủ xác định vai trò tham gia của Nhân dân.",
              "Bền vững yêu cầu xem xét hệ quả dài hạn trên nhiều lĩnh vực.",
            ],
          },
          {
            title: "Kết nối toàn bộ tài liệu",
            summary:
              "Bản chất tạo định hướng, dân chủ xác lập chủ thể quyền lực, chức năng chuyển định hướng thành hoạt động, còn mục tiêu cung cấp điểm quy chiếu để đánh giá.",
            points: [
              "Bản chất kinh tế và văn hóa – xã hội hướng tới lợi ích, năng lực của con người.",
              "Quan hệ dân chủ – Nhà nước tổ chức quyền làm chủ bằng pháp luật và thiết chế.",
              "Đối nội và đối ngoại tạo điều kiện trong nước, quốc tế cho phát triển và bảo vệ đất nước.",
            ],
          },
        ],
        quiz: [
          makeQuestion("m9-q1", "Cụm mục tiêu nào đúng với trang kết?", ["Dân giàu, nước mạnh, dân chủ, công bằng, văn minh", "Lợi nhuận cao, thị trường lớn, cạnh tranh mạnh", "Công nghiệp, thương mại, dịch vụ, xuất khẩu", "Kỷ luật, tốc độ, sản lượng, doanh thu"], 0, "Trang 12 nêu năm thành tố: dân giàu, nước mạnh, dân chủ, công bằng, văn minh."),
          makeQuestion("m9-q2", "Ba định hướng tổng kết gồm những gì?", ["Phục vụ Nhân dân, phát huy quyền làm chủ, phát triển bền vững", "Thu hẹp dân chủ, giảm an sinh, hạn chế hội nhập", "Chỉ tăng trưởng kinh tế", "Chỉ mở rộng đối ngoại"], 0, "Trang 12 quy tụ ba hướng: phục vụ Nhân dân, phát huy quyền làm chủ và phát triển bền vững."),
          makeQuestion("m9-q3", "Theo trang kết, đất nước được định hướng phát triển theo cách nào?", ["Phụ thuộc hoàn toàn vào bên ngoài", "Phát triển bền vững", "Chỉ tăng trưởng ngắn hạn", "Không gắn với quyền làm chủ của Nhân dân"], 1, "Phát triển bền vững là một trong ba định hướng tổng kết của trang 12."),
        ],
      },
    ],
  },
];

export const allModules = learningTracks.flatMap((track) =>
  track.modules.map((module) => ({ ...module, chapterId: track.id })),
);

export const sourceDocument = {
  title: SOURCE_TITLE,
  path: "/documents/nha-nuoc-xa-hoi-chu-nghia-viet-nam.pdf",
  totalPages: 12,
  blankPages: [2, 11],
  note: "Tài liệu do người dùng cung cấp; PDF không kèm danh mục tài liệu tham khảo hoặc chú thích nguồn ảnh.",
};

export default learningTracks;
