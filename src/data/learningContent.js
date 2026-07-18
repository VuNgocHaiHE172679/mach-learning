/**
 * Dữ liệu nội dung mẫu cho prototype Group 2.
 *
 * Các diễn giải dưới đây được viết theo hướng nhập môn, thận trọng và luôn gắn
 * với phạm vi trang của bản in. Khi sản phẩm đi vào vận hành, nội dung cần được
 * đối chiếu lại với bản OCR đã hiệu đính và được giảng viên chuyên môn phê duyệt.
 */

export const chapters = [
  {
    id: "chapter-1",
    number: "01",
    slug: "nhap-mon-chu-nghia-xa-hoi-khoa-hoc",
    shortTitle: "Nguồn gốc khoa học",
    title: "Nhập môn Chủ nghĩa xã hội khoa học",
    eyebrow: "Từ điều kiện lịch sử đến một hệ thống lý luận",
    guidingQuestion:
      "Những điều kiện nào góp phần làm cho chủ nghĩa xã hội phát triển từ các dự báo không tưởng thành một lý luận có cơ sở khoa học?",
    description:
      "Khám phá bối cảnh kinh tế – xã hội thế kỷ XIX, các tiền đề tư tưởng và khoa học, vai trò của C. Mác và Ph. Ăngghen, cùng đối tượng nghiên cứu của Chủ nghĩa xã hội khoa học.",
    sourcePages: "11–49",
    estimatedMinutes: 42,
    totalModules: 3,
    accent: "brick",
    illustration: {
      src: "/images/chapters/chapter-01.webp",
      alt: "Collage về thành phố công nghiệp thế kỷ XIX, máy dệt, công nhân và tư liệu lý luận được nối bằng các đường quan hệ.",
      caption:
        "Đại công nghiệp, phong trào công nhân và nhu cầu hình thành một lý luận khoa học.",
      focalPoint: "50% 48%",
    },
    keyConcepts: [
      "Chủ nghĩa xã hội khoa học",
      "Chủ nghĩa duy vật lịch sử",
      "Giá trị thặng dư",
      "Sứ mệnh lịch sử của giai cấp công nhân",
    ],
    modules: [
      {
        id: "chapter-1-module-1",
        number: "1.1",
        title: "Hoàn cảnh lịch sử và các tiền đề",
        subtitle: "Đọc sự ra đời của lý luận trong bối cảnh cụ thể",
        summary:
          "Nhận diện những biến đổi kinh tế – xã hội do đại công nghiệp tạo ra, sự trưởng thành từng bước của phong trào công nhân và các tiền đề khoa học, tư tưởng có liên quan.",
        sourcePages: "11–20",
        estimatedMinutes: 14,
        learningOutcomes: [
          "Phân biệt điều kiện kinh tế – xã hội với tiền đề khoa học và tư tưởng.",
          "Sắp xếp các yếu tố theo quan hệ bối cảnh, tác động và nhu cầu lý luận.",
          "Tránh giải thích sự ra đời của một học thuyết bằng một nguyên nhân duy nhất.",
        ],
        keyConcepts: [
          "Đại công nghiệp",
          "Phong trào công nhân",
          "Tiền đề khoa học tự nhiên",
          "Tiền đề tư tưởng lý luận",
        ],
        primaryFormat: "read",
        visualType: "causal-chain",
      },
      {
        id: "chapter-1-module-2",
        number: "1.2",
        title: "Vai trò của C. Mác và Ph. Ăngghen",
        subtitle: "Những phát kiến đặt cơ sở cho bước chuyển về chất",
        summary:
          "Tìm hiểu cách các phát kiến lý luận được trình bày như những cơ sở giúp lý giải lịch sử, cơ chế của sản xuất tư bản chủ nghĩa và vai trò lịch sử của giai cấp công nhân.",
        sourcePages: "21–35",
        estimatedMinutes: 16,
        learningOutcomes: [
          "Gọi tên và mô tả ngắn gọn ba phát kiến được giáo trình nhấn mạnh.",
          "Kết nối mỗi phát kiến với câu hỏi lý luận mà nó góp phần giải đáp.",
          "Giải thích vì sao các phát kiến cần được xem trong một chỉnh thể.",
        ],
        keyConcepts: [
          "Chủ nghĩa duy vật lịch sử",
          "Học thuyết giá trị thặng dư",
          "Học thuyết về sứ mệnh lịch sử của giai cấp công nhân",
        ],
        primaryFormat: "listen",
        visualType: "discovery-map",
      },
      {
        id: "chapter-1-module-3",
        number: "1.3",
        title: "Đối tượng, phương pháp và ý nghĩa nghiên cứu",
        subtitle: "Học môn này để nhận diện và phân tích điều gì?",
        summary:
          "Khái quát đối tượng nghiên cứu, các phương pháp thường được vận dụng và ý nghĩa của việc học tập Chủ nghĩa xã hội khoa học trong chương trình lý luận chính trị.",
        sourcePages: "36–49",
        estimatedMinutes: 12,
        learningOutcomes: [
          "Nêu được phạm vi nghiên cứu ở mức nhập môn.",
          "Phân biệt đối tượng nghiên cứu với phương pháp tiếp cận.",
          "Liên hệ yêu cầu học lý luận với năng lực phân tích có căn cứ.",
        ],
        keyConcepts: [
          "Đối tượng nghiên cứu",
          "Phương pháp luận",
          "Phương pháp lịch sử và lôgic",
          "Ý nghĩa phương pháp luận",
        ],
        primaryFormat: "read",
        visualType: "scope-map",
      },
    ],
  },
  {
    id: "chapter-2",
    number: "02",
    slug: "su-menh-lich-su-cua-giai-cap-cong-nhan",
    shortTitle: "Chủ thể lịch sử",
    title: "Sứ mệnh lịch sử của giai cấp công nhân",
    eyebrow: "Từ địa vị kinh tế – xã hội đến nội dung sứ mệnh",
    guidingQuestion:
      "Đặc điểm và những điều kiện nào được giáo trình dùng để luận giải sứ mệnh lịch sử của giai cấp công nhân?",
    description:
      "Làm rõ khái niệm giai cấp công nhân, nội dung sứ mệnh trên các phương diện kinh tế, chính trị, văn hóa – tư tưởng và những biểu hiện trong bối cảnh hiện nay.",
    sourcePages: "51–84",
    estimatedMinutes: 38,
    totalModules: 3,
    accent: "mustard",
    illustration: {
      src: "/images/chapters/chapter-02.webp",
      alt: "Collage về người lao động trong sản xuất cơ khí, tự động hóa, logistics và môi trường kỹ thuật số hiện đại.",
      caption:
        "Giai cấp công nhân biến đổi cùng nền sản xuất nhưng vẫn cần được xem xét trong các quan hệ kinh tế và xã hội.",
      focalPoint: "50% 48%",
    },
    keyConcepts: [
      "Giai cấp công nhân",
      "Sứ mệnh lịch sử",
      "Điều kiện khách quan",
      "Nhân tố chủ quan",
    ],
    modules: [
      {
        id: "chapter-2-module-1",
        number: "2.1",
        title: "Khái niệm và đặc điểm của giai cấp công nhân",
        subtitle: "Nhận diện từ phương thức lao động và vị trí trong quan hệ sản xuất",
        summary:
          "Tiếp cận khái niệm giai cấp công nhân qua những phương diện mà giáo trình phân tích, đồng thời lưu ý sự biến đổi đa dạng của lao động công nghiệp hiện đại.",
        sourcePages: "51–60",
        estimatedMinutes: 12,
        learningOutcomes: [
          "Nhận diện các phương diện dùng để mô tả giai cấp công nhân.",
          "Phân biệt đặc điểm cốt lõi với biểu hiện lịch sử cụ thể.",
          "Tránh đồng nhất máy móc giai cấp công nhân với một nghề nghiệp đơn lẻ.",
        ],
        keyConcepts: [
          "Lao động công nghiệp",
          "Quan hệ sản xuất",
          "Tính tổ chức",
          "Tính xã hội hóa của sản xuất",
        ],
        primaryFormat: "read",
        visualType: "dual-lens",
      },
      {
        id: "chapter-2-module-2",
        number: "2.2",
        title: "Nội dung và điều kiện của sứ mệnh lịch sử",
        subtitle: "Ba phương diện và hai nhóm điều kiện",
        summary:
          "Hệ thống hóa nội dung kinh tế, chính trị, văn hóa – tư tưởng; sau đó phân biệt các điều kiện khách quan với những nhân tố chủ quan trong quá trình thực hiện sứ mệnh.",
        sourcePages: "61–72",
        estimatedMinutes: 15,
        learningOutcomes: [
          "Phân loại một luận điểm theo ba phương diện của sứ mệnh.",
          "Giải thích mối liên hệ giữa điều kiện khách quan và nhân tố chủ quan.",
          "Dùng dẫn chứng từ bài học để bảo vệ một cách phân loại.",
        ],
        keyConcepts: [
          "Nội dung kinh tế",
          "Nội dung chính trị – xã hội",
          "Nội dung văn hóa – tư tưởng",
          "Đảng Cộng sản",
        ],
        primaryFormat: "listen",
        visualType: "three-lens-matrix",
      },
      {
        id: "chapter-2-module-3",
        number: "2.3",
        title: "Giai cấp công nhân hiện nay và ở Việt Nam",
        subtitle: "Nhận diện biến đổi mà không rời các tiêu chí phân tích",
        summary:
          "Xem xét các biến đổi về cơ cấu, tri thức, nghề nghiệp và những nội dung được giáo trình đặt ra đối với giai cấp công nhân Việt Nam trong bối cảnh mới.",
        sourcePages: "73–84",
        estimatedMinutes: 11,
        learningOutcomes: [
          "Nêu một số biến đổi nổi bật trong bối cảnh đương đại.",
          "Phân biệt biến đổi về biểu hiện với câu hỏi về địa vị kinh tế – xã hội.",
          "Tóm tắt nội dung liên hệ Việt Nam theo đúng phạm vi giáo trình.",
        ],
        keyConcepts: [
          "Công nhân hiện đại",
          "Trí thức hóa",
          "Giai cấp công nhân Việt Nam",
          "Công nghiệp hóa, hiện đại hóa",
        ],
        primaryFormat: "read",
        visualType: "continuity-change",
      },
    ],
  },
  {
    id: "chapter-3",
    number: "03",
    slug: "chu-nghia-xa-hoi-va-thoi-ky-qua-do",
    shortTitle: "Kiến trúc chuyển tiếp",
    title: "Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội",
    eyebrow: "Đặc trưng, tính tất yếu và những quan hệ chuyển tiếp",
    guidingQuestion:
      "Giáo trình trình bày chủ nghĩa xã hội qua những đặc trưng nào, và lý giải tính tất yếu của thời kỳ quá độ ra sao?",
    description:
      "Khám phá quan niệm về chủ nghĩa xã hội, các đặc trưng bản chất, tính tất yếu và đặc điểm của thời kỳ quá độ, cùng nội dung liên hệ con đường đi lên chủ nghĩa xã hội ở Việt Nam.",
    sourcePages: "86–124",
    estimatedMinutes: 44,
    totalModules: 3,
    accent: "cyan",
    illustration: {
      src: "/images/chapters/chapter-03.webp",
      alt: "Collage nhiều lớp về hạ tầng cũ và mới, giao thông, giáo dục, y tế và không gian công cộng cùng tồn tại trong quá trình chuyển tiếp.",
      caption:
        "Thời kỳ quá độ là quá trình nhiều lớp, nơi cái cũ và cái mới đan xen, tác động qua lại.",
      focalPoint: "50% 50%",
    },
    keyConcepts: [
      "Hình thái kinh tế – xã hội cộng sản chủ nghĩa",
      "Chủ nghĩa xã hội",
      "Thời kỳ quá độ",
      "Quá độ bỏ qua chế độ tư bản chủ nghĩa",
    ],
    modules: [
      {
        id: "chapter-3-module-1",
        number: "3.1",
        title: "Chủ nghĩa xã hội và các đặc trưng bản chất",
        subtitle: "Quan sát một mô hình xã hội qua nhiều phương diện",
        summary:
          "Tiếp cận chủ nghĩa xã hội trong quan niệm về hình thái kinh tế – xã hội cộng sản chủ nghĩa và hệ thống hóa các đặc trưng mà giáo trình trình bày.",
        sourcePages: "86–100",
        estimatedMinutes: 15,
        learningOutcomes: [
          "Xác định vị trí của chủ nghĩa xã hội trong mạch lý luận của chương.",
          "Nhóm các đặc trưng theo phương diện kinh tế, chính trị, xã hội và văn hóa.",
          "Giải thích vì sao các đặc trưng cần được đọc trong quan hệ tổng thể.",
        ],
        keyConcepts: [
          "Hình thái kinh tế – xã hội",
          "Giai đoạn đầu",
          "Đặc trưng bản chất",
          "Phát triển con người",
        ],
        primaryFormat: "read",
        visualType: "layer-system",
      },
      {
        id: "chapter-3-module-2",
        number: "3.2",
        title: "Tính tất yếu và đặc điểm của thời kỳ quá độ",
        subtitle: "Vì sao chuyển đổi xã hội được nhìn nhận như một quá trình?",
        summary:
          "Phân tích lập luận về sự cần thiết của một thời kỳ chuyển tiếp và nhận diện tính đan xen, phức tạp của các yếu tố cũ – mới trên nhiều lĩnh vực.",
        sourcePages: "101–111",
        estimatedMinutes: 16,
        learningOutcomes: [
          "Trình bày lập luận về tính tất yếu ở mức nhập môn.",
          "Nhận diện các biểu hiện đan xen trên nhiều phương diện.",
          "Tránh mô tả thời kỳ quá độ như một thay đổi tức thời hoặc tuyến tính đơn giản.",
        ],
        keyConcepts: [
          "Thời kỳ quá độ",
          "Tính tất yếu khách quan",
          "Cái cũ và cái mới",
          "Tính lâu dài, phức tạp",
        ],
        primaryFormat: "listen",
        visualType: "transition-layers",
      },
      {
        id: "chapter-3-module-3",
        number: "3.3",
        title: "Thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam",
        subtitle: "Khái niệm “bỏ qua” và những phương hướng xây dựng",
        summary:
          "Làm rõ cách giáo trình diễn giải quá độ bỏ qua chế độ tư bản chủ nghĩa, những đặc trưng của thời kỳ quá độ và các phương hướng lớn trong liên hệ Việt Nam.",
        sourcePages: "112–124",
        estimatedMinutes: 13,
        learningOutcomes: [
          "Diễn giải thận trọng nội hàm của khái niệm “bỏ qua”.",
          "Phân biệt việc bỏ qua một chế độ xã hội với phủ nhận mọi thành tựu phát triển.",
          "Hệ thống hóa các phương hướng theo nhóm thay vì ghi nhớ rời rạc.",
        ],
        keyConcepts: [
          "Bỏ qua chế độ tư bản chủ nghĩa",
          "Kinh tế thị trường định hướng xã hội chủ nghĩa",
          "Công nghiệp hóa, hiện đại hóa",
          "Phương hướng xây dựng",
        ],
        primaryFormat: "read",
        visualType: "roadmap",
      },
    ],
  },
];

export const featuredLesson = {
  id: "chapter-1-module-2",
  chapterId: "chapter-1",
  moduleNumber: "1.2",
  eyebrow: "Bài học đang tiếp tục",
  title: "Ba phát kiến và bước chuyển từ không tưởng đến khoa học",
  subtitle:
    "Quan sát ba mảnh ghép lý luận như một hệ thống câu hỏi – lời giải, thay vì ba định nghĩa cần học thuộc.",
  estimatedMinutes: 16,
  sourcePages: "21–35",
  objective:
    "Sau bài học, bạn có thể mô tả đóng góp khái quát của từng phát kiến và giải thích vì sao chúng được đặt trong cùng một mạch lập luận.",
  keyQuestion:
    "Muốn luận giải khả năng cải biến xã hội trên cơ sở khoa học, cần trả lời đồng thời những câu hỏi nào?",
  lead:
    "Giáo trình trình bày vai trò của C. Mác và Ph. Ăngghen gắn với một bước chuyển về thế giới quan, phương pháp luận và các phát kiến lý luận. Bài học này dùng sơ đồ để làm rõ chức năng của từng mảnh ghép; phần diễn giải không thay thế nguyên văn giáo trình.",
  sections: [
    {
      id: "historical-problem",
      label: "01",
      title: "Bài toán lịch sử đặt ra",
      readingMinutes: 3,
      body:
        "Sự phát triển của đại công nghiệp cùng những xung đột xã hội mới làm xuất hiện nhu cầu giải thích có hệ thống về động lực vận động của xã hội, cơ chế tạo ra và chiếm hữu của cải, cũng như lực lượng xã hội có khả năng tham gia vào quá trình cải biến.",
      sourcePages: "21–25",
    },
    {
      id: "three-discoveries",
      label: "02",
      title: "Ba phát kiến, ba câu hỏi trung tâm",
      readingMinutes: 7,
      body:
        "Ở mức nhập môn, có thể xem mỗi phát kiến như một lăng kính: chủ nghĩa duy vật lịch sử hướng tới quy luật vận động của đời sống xã hội; học thuyết giá trị thặng dư góp phần lý giải cơ chế kinh tế của sản xuất tư bản chủ nghĩa; học thuyết về sứ mệnh lịch sử của giai cấp công nhân xác định chủ thể xã hội trong tiến trình cải biến được luận giải.",
      sourcePages: "25–32",
    },
    {
      id: "systemic-connection",
      label: "03",
      title: "Đọc các phát kiến như một chỉnh thể",
      readingMinutes: 4,
      body:
        "Mỗi phát kiến trả lời một lớp câu hỏi khác nhau. Khi được kết nối, chúng tạo nên cơ sở để chuyển từ mong muốn về một xã hội tốt đẹp sang việc phân tích điều kiện, quan hệ và chủ thể lịch sử. Đây là sơ đồ hỗ trợ đọc hiểu, không phải công thức thay thế các lập luận đầy đủ trong giáo trình.",
      sourcePages: "32–35",
    },
  ],
  visualBlocks: [
    {
      id: "context-to-theory",
      type: "causal-chain",
      overline: "Bản đồ bối cảnh",
      title: "Từ biến đổi hiện thực đến nhu cầu lý luận",
      description:
        "Các mũi tên thể hiện một lối tổ chức thông tin để học; không hàm ý mọi quan hệ lịch sử đều tuyến tính.",
      nodes: [
        {
          id: "industry",
          label: "Đại công nghiệp phát triển",
          detail: "Lực lượng sản xuất và cách tổ chức lao động có những biến đổi sâu sắc.",
          tone: "navy",
        },
        {
          id: "relations",
          label: "Mâu thuẫn xã hội bộc lộ",
          detail: "Những quan hệ lợi ích và vị trí xã hội cần được lý giải có hệ thống.",
          tone: "brick",
        },
        {
          id: "movement",
          label: "Phong trào công nhân phát triển",
          detail: "Thực tiễn đấu tranh đặt ra yêu cầu về tổ chức và lý luận.",
          tone: "mustard",
        },
        {
          id: "theory",
          label: "Nhu cầu về một cơ sở khoa học",
          detail: "Lý luận cần giải thích điều kiện, cơ chế và chủ thể của sự biến đổi.",
          tone: "cyan",
        },
      ],
      connections: [
        { from: "industry", to: "relations", label: "làm biến đổi và bộc lộ" },
        { from: "relations", to: "movement", label: "tác động tới" },
        { from: "movement", to: "theory", label: "đặt ra yêu cầu" },
      ],
      sourcePages: "21–25",
    },
    {
      id: "discovery-map",
      type: "three-column",
      overline: "Khối trực quan trọng tâm",
      title: "Ba lăng kính lý luận",
      description:
        "Chọn từng thẻ để xem phát kiến đó góp phần trả lời câu hỏi nào trong toàn bộ mạch lập luận.",
      items: [
        {
          id: "historical-materialism",
          index: "I",
          title: "Chủ nghĩa duy vật lịch sử",
          question: "Đời sống xã hội vận động trên những cơ sở và quan hệ nào?",
          contribution:
            "Cung cấp một cách tiếp cận duy vật đối với lịch sử, nhấn mạnh việc phân tích những điều kiện hiện thực của đời sống xã hội.",
          misconception:
            "Không nên rút gọn thành ý niệm rằng mọi hiện tượng xã hội chỉ có một nguyên nhân kinh tế trực tiếp.",
          relatedTerm: "Hình thái kinh tế – xã hội",
          tone: "navy",
        },
        {
          id: "surplus-value",
          index: "II",
          title: "Học thuyết giá trị thặng dư",
          question: "Cơ chế kinh tế đặc trưng của sản xuất tư bản chủ nghĩa được lý giải ra sao?",
          contribution:
            "Góp phần làm rõ quan hệ giữa lao động làm thuê, giá trị mới được tạo ra và quá trình chiếm hữu trong quan hệ sản xuất tư bản chủ nghĩa.",
          misconception:
            "Không đồng nhất giá trị thặng dư với mọi dạng lợi nhuận quan sát được trong đời sống hằng ngày.",
          relatedTerm: "Giá trị thặng dư",
          tone: "brick",
        },
        {
          id: "historical-mission",
          index: "III",
          title: "Học thuyết về sứ mệnh lịch sử của giai cấp công nhân",
          question: "Chủ thể xã hội nào được đặt vào tiến trình cải biến và dựa trên điều kiện nào?",
          contribution:
            "Luận giải vai trò lịch sử của giai cấp công nhân từ địa vị kinh tế – xã hội và những điều kiện khách quan, chủ quan liên quan.",
          misconception:
            "Không nên hiểu sứ mệnh lịch sử như kết quả tự động, tách khỏi điều kiện, tổ chức và hoạt động thực tiễn.",
          relatedTerm: "Sứ mệnh lịch sử",
          tone: "mustard",
        },
      ],
      sourcePages: "25–32",
    },
    {
      id: "claim-evidence",
      type: "claim-evidence",
      overline: "Dừng lại để kiểm chứng",
      title: "Từ dự báo đạo đức đến phân tích có cơ sở",
      claim:
        "Bước chuyển sang tính khoa học được giáo trình gắn với việc phát hiện và luận giải những điều kiện, quy luật, quan hệ và chủ thể của tiến trình lịch sử.",
      evidencePrompt:
        "Mở bản quét và đánh dấu một đoạn cho thấy vai trò của từng phát kiến trong bước chuyển này.",
      actionLabel: "Xem nguyên văn, trang 25–35",
      sourcePages: "25–35",
    },
  ],
  takeaways: [
    "Mỗi phát kiến giải quyết một lớp câu hỏi riêng nhưng có quan hệ với hai lớp còn lại.",
    "Sơ đồ giúp nhận diện cấu trúc lập luận; việc hiểu đầy đủ vẫn cần đọc đoạn nguồn.",
    "Một giải thích thận trọng cần phân biệt điều kiện lịch sử, phát kiến lý luận và ý nghĩa của chúng.",
  ],
  nextLesson: {
    id: "chapter-1-module-3",
    title: "Đối tượng, phương pháp và ý nghĩa nghiên cứu",
    estimatedMinutes: 12,
  },
};

export const glossary = [
  {
    id: "scientific-socialism",
    term: "Chủ nghĩa xã hội khoa học",
    shortDefinition:
      "Một trong ba bộ phận cấu thành của chủ nghĩa Mác – Lênin; nghiên cứu theo phạm vi mà giáo trình xác định về những quy luật và điều kiện của quá trình chuyển biến lên hình thái kinh tế – xã hội cộng sản chủ nghĩa.",
    inContext:
      "Trong Chương 1, thuật ngữ vừa chỉ một hệ thống lý luận, vừa là tên môn học có đối tượng và phương pháp nghiên cứu cụ thể.",
    commonMistake:
      "Không nên đồng nhất toàn bộ chủ nghĩa Mác – Lênin với riêng bộ phận Chủ nghĩa xã hội khoa học.",
    relatedConcepts: ["Triết học Mác – Lênin", "Kinh tế chính trị Mác – Lênin", "Sứ mệnh lịch sử"],
    chapterId: "chapter-1",
    sourcePages: "11–49",
  },
  {
    id: "historical-materialism",
    term: "Chủ nghĩa duy vật lịch sử",
    shortDefinition:
      "Cách tiếp cận duy vật đối với đời sống xã hội, nhấn mạnh vai trò của những điều kiện sinh hoạt vật chất và các quan hệ hiện thực trong sự vận động của lịch sử.",
    inContext:
      "Chương 1 trình bày phát kiến này như một cơ sở lý luận giúp chuyển việc nghiên cứu lịch sử và xã hội sang một cách giải thích có căn cứ khoa học.",
    commonMistake:
      "Không nên hiểu đây là cách giải thích mọi biến đổi xã hội bằng một nguyên nhân kinh tế đơn lẻ.",
    relatedConcepts: ["Hình thái kinh tế – xã hội", "Lực lượng sản xuất", "Quan hệ sản xuất"],
    chapterId: "chapter-1",
    sourcePages: "21–35",
  },
  {
    id: "surplus-value",
    term: "Giá trị thặng dư",
    shortDefinition:
      "Phần giá trị mới do lao động làm thuê tạo ra vượt quá giá trị sức lao động và bị nhà tư bản chiếm hữu trong quan hệ sản xuất tư bản chủ nghĩa.",
    inContext:
      "Chương 1 nhắc tới học thuyết giá trị thặng dư như một cơ sở lý luận quan trọng trong quá trình hình thành Chủ nghĩa xã hội khoa học.",
    commonMistake:
      "Không dùng thuật ngữ như một từ thay thế giản đơn cho doanh thu hoặc mọi khoản lợi nhuận.",
    relatedConcepts: ["Sức lao động", "Quan hệ sản xuất", "Phương thức sản xuất tư bản chủ nghĩa"],
    chapterId: "chapter-1",
    sourcePages: "21–35",
  },
  {
    id: "socio-economic-formation",
    term: "Hình thái kinh tế – xã hội",
    shortDefinition:
      "Phạm trù dùng để xem xét xã hội ở một giai đoạn lịch sử nhất định trong sự thống nhất giữa lực lượng sản xuất, quan hệ sản xuất và kiến trúc thượng tầng tương ứng.",
    inContext:
      "Khái niệm giúp kết nối mạch giải thích lịch sử ở Chương 1 với cách trình bày về hình thái kinh tế – xã hội cộng sản chủ nghĩa ở Chương 3.",
    commonMistake:
      "Không nên hiểu đây là một nhãn thời kỳ đơn giản, tách rời các quan hệ cấu thành.",
    relatedConcepts: ["Lực lượng sản xuất", "Quan hệ sản xuất", "Kiến trúc thượng tầng"],
    chapterId: "chapter-3",
    sourcePages: "86–100",
  },
  {
    id: "historical-mission",
    term: "Sứ mệnh lịch sử của giai cấp công nhân",
    shortDefinition:
      "Nội dung và vai trò lịch sử mà lý luận Mác – Lênin luận giải từ địa vị kinh tế – xã hội của giai cấp công nhân, được triển khai trên các phương diện kinh tế, chính trị – xã hội và văn hóa – tư tưởng.",
    inContext:
      "Chương 2 phân tích cả nội dung sứ mệnh lẫn những điều kiện khách quan và nhân tố chủ quan liên quan đến quá trình thực hiện.",
    commonMistake:
      "Không xem sứ mệnh lịch sử là một kết quả tự phát hoặc chắc chắn diễn ra mà không cần các điều kiện thực tiễn.",
    relatedConcepts: ["Giai cấp công nhân", "Điều kiện khách quan", "Nhân tố chủ quan"],
    chapterId: "chapter-2",
    sourcePages: "51–72",
  },
  {
    id: "dictatorship-of-proletariat",
    term: "Chuyên chính vô sản",
    shortDefinition:
      "Khái niệm trong lý luận Mác – Lênin về quyền lực chính trị của giai cấp công nhân và nhân dân lao động trong quá trình cải biến xã hội và xây dựng xã hội mới.",
    inContext:
      "Khi gặp thuật ngữ trong mạch về nội dung chính trị – xã hội, cần đọc cùng bối cảnh lý luận và cách diễn giải cụ thể của giáo trình.",
    commonMistake:
      "Không suy diễn nghĩa học thuật chỉ từ nghĩa thông thường của từng từ; cũng không tách thuật ngữ khỏi bối cảnh lịch sử và hệ khái niệm liên quan.",
    relatedConcepts: ["Nhà nước", "Quyền lực chính trị", "Thời kỳ quá độ"],
    chapterId: "chapter-2",
    sourcePages: "61–72",
  },
  {
    id: "transition-period",
    term: "Thời kỳ quá độ lên chủ nghĩa xã hội",
    shortDefinition:
      "Thời kỳ cải biến có tính chuyển tiếp từ xã hội cũ sang xã hội mới, trong đó những yếu tố cũ và mới còn tồn tại, tác động qua lại trên nhiều lĩnh vực.",
    inContext:
      "Chương 3 tập trung lý giải tính tất yếu và đặc điểm lâu dài, phức tạp của quá trình này.",
    commonMistake:
      "Không mô tả thời kỳ quá độ như một khoảnh khắc chuyển đổi tức thời hoặc một tiến trình chỉ có một chiều.",
    relatedConcepts: ["Tính tất yếu khách quan", "Cái cũ và cái mới", "Chủ nghĩa xã hội"],
    chapterId: "chapter-3",
    sourcePages: "101–111",
  },
  {
    id: "skip-capitalist-regime",
    term: "Quá độ bỏ qua chế độ tư bản chủ nghĩa",
    shortDefinition:
      "Cách diễn đạt về con đường quá độ ở Việt Nam; “bỏ qua” được hiểu theo nội dung mà giáo trình xác định, không phải phủ nhận mọi thành tựu do nhân loại đạt được trong chủ nghĩa tư bản.",
    inContext:
      "Thuật ngữ cần được đọc cùng các điều kiện lịch sử, mục tiêu phát triển lực lượng sản xuất và các phương hướng xây dựng xã hội mới ở Việt Nam.",
    commonMistake:
      "Không đồng nhất “bỏ qua chế độ” với bỏ qua yêu cầu phát triển, hiện đại hóa hoặc tiếp thu thành tựu chung của văn minh nhân loại.",
    relatedConcepts: ["Phát triển lực lượng sản xuất", "Công nghiệp hóa, hiện đại hóa", "Thời kỳ quá độ"],
    chapterId: "chapter-3",
    sourcePages: "112–124",
  },
];

export const microQuiz = [
  {
    id: "featured-quiz-1",
    order: 1,
    type: "single-choice",
    difficulty: "remember",
    prompt:
      "Phát kiến nào trực tiếp góp phần lý giải cơ chế tạo ra và chiếm hữu giá trị mới trong quan hệ sản xuất tư bản chủ nghĩa?",
    options: [
      { id: "a", label: "Chủ nghĩa duy vật lịch sử" },
      { id: "b", label: "Học thuyết giá trị thặng dư" },
      { id: "c", label: "Học thuyết về sứ mệnh lịch sử của giai cấp công nhân" },
      { id: "d", label: "Phương pháp lịch sử và lôgic" },
    ],
    correctOptionId: "b",
    explanation:
      "Học thuyết giá trị thặng dư góp phần làm rõ cơ chế kinh tế của sản xuất tư bản chủ nghĩa. Hai phát kiến còn lại trả lời các lớp câu hỏi khác trong cùng mạch lý luận.",
    conceptId: "surplus-value",
    sourcePages: "25–32",
  },
  {
    id: "featured-quiz-2",
    order: 2,
    type: "single-choice",
    difficulty: "connect",
    prompt: "Cách mô tả nào phù hợp nhất với quan hệ giữa ba phát kiến trong bài học?",
    options: [
      { id: "a", label: "Ba cách gọi khác nhau của cùng một khái niệm" },
      { id: "b", label: "Ba kết luận độc lập, không cần đặt trong cùng hệ thống" },
      {
        id: "c",
        label: "Ba lăng kính giải đáp những lớp câu hỏi khác nhau nhưng có quan hệ với nhau",
      },
      { id: "d", label: "Ba sự kiện lịch sử diễn ra cùng một thời điểm" },
    ],
    correctOptionId: "c",
    explanation:
      "Bài học tổ chức ba phát kiến như những lăng kính về sự vận động của xã hội, cơ chế kinh tế và chủ thể lịch sử. Cách tổ chức này giúp thấy tính hệ thống mà không xóa đi chức năng riêng của từng phát kiến.",
    conceptId: "scientific-socialism",
    sourcePages: "21–35",
  },
  {
    id: "featured-quiz-3",
    order: 3,
    type: "single-choice",
    difficulty: "apply",
    prompt:
      "Một bạn nói: “Chỉ cần mong muốn xã hội công bằng là đã đủ tạo nên một học thuyết khoa học.” Phản hồi nào bám sát nhất mạch bài?",
    options: [
      { id: "a", label: "Đồng ý, vì mong muốn đạo đức tự nó đã giải thích được lịch sử" },
      {
        id: "b",
        label: "Chưa đủ; còn cần phân tích điều kiện hiện thực, quan hệ vận động và chủ thể xã hội",
      },
      { id: "c", label: "Không thể thảo luận vì khoa học không liên quan tới đời sống xã hội" },
      { id: "d", label: "Chỉ cần ghi nhớ tên ba phát kiến là đủ" },
    ],
    correctOptionId: "b",
    explanation:
      "Mạch bài nhấn mạnh bước chuyển từ dự báo và khát vọng sang phân tích có cơ sở về điều kiện, cơ chế và chủ thể. Đáp án không phủ nhận giá trị của khát vọng, mà chỉ ra rằng nó chưa đủ để cấu thành một lý luận khoa học.",
    conceptId: "scientific-socialism",
    sourcePages: "21–35",
  },
];

export const podcasts = [
  {
    id: "podcast-01",
    episode: "TẬP 01",
    chapterId: "chapter-1",
    title: "Vì sao một học thuyết luôn có bối cảnh?",
    description:
      "Một cuộc đối thoại ngắn về cách đọc các điều kiện kinh tế – xã hội, khoa học và tư tưởng mà không biến lịch sử thành chuỗi nguyên nhân đơn tuyến.",
    duration: "06:24",
    format: "Đối thoại",
    level: "Nhập môn",
    sourcePages: "11–20",
    transcriptPreview:
      "Thay vì hỏi “một nguyên nhân duy nhất là gì?”, hãy thử hỏi những điều kiện nào đã cùng tạo nên khả năng xuất hiện của một hệ thống lý luận mới.",
    status: "ready",
    coverTone: "brick",
  },
  {
    id: "podcast-02",
    episode: "TẬP 02",
    chapterId: "chapter-1",
    title: "Ba phát kiến trong bảy phút",
    description:
      "Tóm tắt chức năng của chủ nghĩa duy vật lịch sử, học thuyết giá trị thặng dư và học thuyết về sứ mệnh lịch sử của giai cấp công nhân.",
    duration: "07:08",
    format: "Giải thích nhanh",
    level: "Cốt lõi",
    sourcePages: "21–35",
    transcriptPreview:
      "Ba phát kiến không phải ba khẩu hiệu đứng cạnh nhau; mỗi phát kiến mở một lớp phân tích cần thiết cho toàn bộ lập luận.",
    status: "ready",
    coverTone: "navy",
  },
  {
    id: "podcast-03",
    episode: "TẬP 03",
    chapterId: "chapter-2",
    title: "Sứ mệnh lịch sử: điều kiện hay định mệnh?",
    description:
      "Phân biệt địa vị kinh tế – xã hội, điều kiện khách quan và nhân tố chủ quan để tránh cách hiểu giản đơn về sứ mệnh lịch sử.",
    duration: "08:42",
    format: "Gỡ nhầm lẫn",
    level: "Trung bình",
    sourcePages: "51–72",
    transcriptPreview:
      "Khi một vai trò lịch sử được luận giải từ điều kiện, điều đó không có nghĩa kết quả sẽ tự động xuất hiện mà không qua hoạt động thực tiễn.",
    status: "ready",
    coverTone: "mustard",
  },
  {
    id: "podcast-04",
    episode: "TẬP 04",
    chapterId: "chapter-3",
    title: "Thời kỳ quá độ không phải một đường thẳng",
    description:
      "Hình dung sự đan xen của cái cũ và cái mới trên các phương diện kinh tế, chính trị, xã hội và văn hóa.",
    duration: "09:16",
    format: "Bài nghe sơ đồ",
    level: "Trung bình",
    sourcePages: "101–111",
    transcriptPreview:
      "Một quá trình chuyển tiếp thường đồng thời chứa những yếu tố đang hình thành, những yếu tố còn tồn tại và cả các quan hệ có thể mâu thuẫn với nhau.",
    status: "coming-next",
    coverTone: "cyan",
  },
];

export const games = [
  {
    id: "history-workshop",
    chapterId: "chapter-1",
    title: "Xưởng Lịch Sử",
    subtitle: "Lắp ráp điều kiện – tiền đề – phát kiến",
    description:
      "Kéo các thẻ dữ kiện vào mạng quan hệ, đặt tên cho từng mũi tên và sửa những chuỗi nhân quả bị đơn giản hóa quá mức.",
    mission:
      "Hoàn thiện bản đồ gồm 12 nút để giải thích vì sao Chủ nghĩa xã hội khoa học xuất hiện trong một bối cảnh lịch sử xác định.",
    mechanics: ["Kéo thả nút", "Nối quan hệ", "Phát hiện ngộ nhận"],
    skills: ["Tư duy nhân quả", "Đọc bối cảnh", "Kết nối luận điểm"],
    duration: "8–10 phút",
    difficulty: "Dễ làm quen",
    sourcePages: "11–35",
    accent: "brick",
    icon: "nodes",
  },
  {
    id: "mission-matrix",
    chapterId: "chapter-2",
    title: "Ma Trận Sứ Mệnh",
    subtitle: "Phân loại đúng, giải thích có căn cứ",
    description:
      "Phân loại các thẻ luận điểm vào phương diện kinh tế, chính trị – xã hội hoặc văn hóa – tư tưởng, sau đó chọn căn cứ cho quyết định.",
    mission:
      "Xử lý 9 thẻ luận điểm và bảo vệ ít nhất 3 lựa chọn bằng đoạn nguồn phù hợp.",
    mechanics: ["Phân loại thẻ", "Ghép chứng cứ", "Phản hồi theo sai lầm"],
    skills: ["Phân loại khái niệm", "Lập luận", "Kiểm chứng nguồn"],
    duration: "7–9 phút",
    difficulty: "Trung bình",
    sourcePages: "61–72",
    accent: "mustard",
    icon: "matrix",
  },
  {
    id: "transition-architecture",
    chapterId: "chapter-3",
    title: "Kiến Trúc Quá Độ",
    subtitle: "Xây một hệ chuyển tiếp nhiều tầng",
    description:
      "Sắp xếp các yếu tố kinh tế, chính trị, xã hội và văn hóa vào một mô hình chuyển tiếp; quan sát cách thay đổi ở một tầng tạo ra hệ quả ở các tầng khác.",
    mission:
      "Tạo một mô hình giữ được cân bằng giữa phát triển, ổn định và giải quyết các quan hệ đan xen của cái cũ – cái mới.",
    mechanics: ["Mô phỏng hệ thống", "Lựa chọn đánh đổi", "Phản tư sau lượt chơi"],
    skills: ["Tư duy hệ thống", "Nhận diện quan hệ", "Đánh giá hệ quả"],
    duration: "10–12 phút",
    difficulty: "Thử thách",
    sourcePages: "101–124",
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
};

export default learningContent;
