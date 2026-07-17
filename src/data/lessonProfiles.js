/**
 * Hồ sơ nội dung riêng cho từng học phần.
 *
 * Các diễn giải được viết ở mức nhập môn, bám vào tóm tắt, mục tiêu học tập
 * và hệ khái niệm đã khai báo trong learningContent.js. Nội dung không thay thế
 * việc đọc và đối chiếu giáo trình gốc.
 */

export const lessonProfiles = {
  "chapter-1-module-1": {
    thesis:
      "Sự ra đời của Chủ nghĩa xã hội khoa học cần được lý giải từ một tổ hợp điều kiện lịch sử, không phải từ một nguyên nhân đơn lẻ.",
    thesisDetail:
      "Đại công nghiệp làm biến đổi đời sống kinh tế – xã hội, phong trào công nhân từng bước trưởng thành, còn các tiền đề khoa học và tư tưởng mở thêm khả năng lý giải. Đọc chúng trong quan hệ giúp nhận ra vì sao một nhu cầu lý luận mới xuất hiện trong bối cảnh cụ thể.",
    sectionEyebrow: "Bối cảnh hình thành",
    sectionTitle: "Bốn nhóm yếu tố, một trường quan hệ",
    contextParagraphs: [
      "Bài học bắt đầu từ những biến đổi do đại công nghiệp tạo ra, bởi lý luận không xuất hiện bên ngoài đời sống lịch sử. Những thay đổi trong sản xuất và xã hội tạo nên các vấn đề mới cần được nhận diện và giải thích.",
      "Phong trào công nhân cùng các tiền đề khoa học tự nhiên và tư tưởng lý luận không phải những yếu tố đồng nhất. Việc phân loại chúng giúp người học thấy rõ vai trò riêng và sự liên hệ của từng nhóm trong quá trình hình thành lý luận.",
    ],
    blocks: [
      {
        title: "Biến đổi kinh tế – xã hội",
        text: "Đại công nghiệp tạo ra những chuyển biến trong phương thức sản xuất và cấu trúc đời sống xã hội, qua đó đặt ra các câu hỏi mới cần được lý giải.",
      },
      {
        title: "Sự trưởng thành của phong trào công nhân",
        text: "Hoạt động của công nhân cho thấy một lực lượng xã hội đang từng bước hình thành và làm cho các vấn đề của thời đại bộc lộ rõ hơn trong thực tiễn.",
      },
      {
        title: "Tiền đề khoa học và tư tưởng",
        text: "Các thành tựu khoa học tự nhiên và di sản tư tưởng lý luận cung cấp những nguồn lực nhận thức khác nhau để xây dựng cách giải thích có hệ thống.",
      },
    ],
    relationTitle: "Từ điều kiện hiện thực đến nhu cầu lý luận",
    relationIntro:
      "Ba lớp yếu tố không nối nhau như một chuỗi máy móc; chúng cùng tạo nên bối cảnh trong đó nhu cầu và khả năng xây dựng một hệ thống lý luận mới trở nên rõ nét.",
    lenses: [
      { code: "KT–XH", label: "Điều kiện", title: "Đại công nghiệp và biến đổi xã hội" },
      { code: "TT", label: "Thực tiễn", title: "Phong trào công nhân từng bước trưởng thành" },
      { code: "KH–LT", label: "Tiền đề", title: "Khoa học tự nhiên và tư tưởng lý luận" },
    ],
    caution:
      "Không nên biến sự ra đời của một học thuyết thành kết quả tự động của riêng công nghiệp, phong trào xã hội hoặc một thành tựu tư tưởng.",
    quiz: [
      {
        id: "c1m1-q1",
        prompt: "Yếu tố nào thuộc nhóm điều kiện kinh tế – xã hội của bài học?",
        options: [
          { id: "a", label: "Sự phát triển của đại công nghiệp" },
          { id: "b", label: "Phương pháp lịch sử và lôgic" },
          { id: "c", label: "Ý nghĩa phương pháp luận" },
        ],
        correctOptionId: "a",
        explanation:
          "Đại công nghiệp được đặt trong lớp biến đổi kinh tế – xã hội; hai phương án còn lại thuộc mạch phương pháp và ý nghĩa nghiên cứu.",
      },
      {
        id: "c1m1-q2",
        prompt: "Cách đọc nào phù hợp nhất với quan hệ giữa các tiền đề?",
        options: [
          { id: "a", label: "Tìm một yếu tố duy nhất quyết định mọi yếu tố khác" },
          { id: "b", label: "Phân biệt vai trò rồi xem xét sự liên hệ giữa các nhóm" },
          { id: "c", label: "Xem mọi yếu tố là những cách gọi của cùng một sự việc" },
        ],
        correctOptionId: "b",
        explanation:
          "Mục tiêu của bài là vừa phân loại đúng, vừa nhận ra tổ hợp quan hệ tạo nên bối cảnh hình thành lý luận.",
      },
      {
        id: "c1m1-q3",
        prompt: "Nhận định nào cần tránh khi giải thích sự ra đời của lý luận?",
        options: [
          { id: "a", label: "Lý luận có một bối cảnh lịch sử cụ thể" },
          { id: "b", label: "Các nhóm tiền đề có chức năng khác nhau" },
          { id: "c", label: "Chỉ một nguyên nhân riêng lẻ đã đủ giải thích toàn bộ" },
        ],
        correctOptionId: "c",
        explanation:
          "Bài học nhấn mạnh việc tránh lối giải thích đơn nhân và tuyến tính hóa một quá trình có nhiều điều kiện.",
      },
    ],
  },

  "chapter-1-module-2": {
    thesis:
      "Vai trò của C. Mác và Ph. Ăngghen được làm rõ khi ba phát kiến được đọc như những lời giải khác nhau trong cùng một chỉnh thể lý luận.",
    thesisDetail:
      "Chủ nghĩa duy vật lịch sử mở lớp giải thích về sự vận động xã hội; học thuyết giá trị thặng dư hướng vào cơ chế của sản xuất tư bản chủ nghĩa; học thuyết về sứ mệnh lịch sử xác định vấn đề chủ thể cải biến xã hội. Mỗi phát kiến giữ chức năng riêng nhưng bổ sung cho nhau.",
    sectionEyebrow: "Ba phát kiến lý luận",
    sectionTitle: "Ba câu hỏi làm nên bước chuyển về chất",
    contextParagraphs: [
      "Bài học không dừng ở việc ghi nhớ tên ba phát kiến. Điểm quan trọng là nhận ra mỗi phát kiến góp phần trả lời một lớp câu hỏi khác nhau về lịch sử, kinh tế và chủ thể xã hội.",
      "Khi đặt cạnh nhau, các phát kiến cho thấy một cách lý giải có cấu trúc: xã hội vận động trong những quan hệ hiện thực, sản xuất tư bản chủ nghĩa có cơ chế cần được phân tích, và quá trình cải biến gắn với một chủ thể lịch sử được luận giải.",
    ],
    blocks: [
      {
        title: "Giải thích sự vận động của lịch sử",
        text: "Chủ nghĩa duy vật lịch sử cung cấp một hướng tiếp cận để xem xét đời sống xã hội từ các điều kiện vật chất và những quan hệ hiện thực.",
      },
      {
        title: "Phân tích cơ chế kinh tế",
        text: "Học thuyết giá trị thặng dư góp phần làm rõ cơ chế tạo ra và chiếm hữu giá trị mới trong quan hệ sản xuất tư bản chủ nghĩa.",
      },
      {
        title: "Nhận diện chủ thể lịch sử",
        text: "Học thuyết về sứ mệnh lịch sử của giai cấp công nhân đặt câu hỏi về lực lượng xã hội và vai trò của lực lượng ấy trong quá trình cải biến.",
      },
    ],
    relationTitle: "Một chỉnh thể, ba chức năng",
    relationIntro:
      "Lớp lịch sử, lớp kinh tế và lớp chủ thể liên kết để tạo thành một mạch lập luận; không phát kiến nào chỉ là tên gọi khác của phát kiến còn lại.",
    lenses: [
      { code: "LS", label: "Lịch sử", title: "Xã hội vận động như thế nào?" },
      { code: "KT", label: "Kinh tế", title: "Cơ chế sản xuất tư bản được lý giải ra sao?" },
      { code: "CT", label: "Chủ thể", title: "Lực lượng nào gắn với khả năng cải biến?" },
    ],
    caution:
      "Không nên cô lập ba phát kiến thành ba định nghĩa rời rạc, cũng không nên xóa đi chức năng phân tích riêng của từng phát kiến.",
    quiz: [
      {
        id: "c1m2-q1",
        prompt: "Phát kiến nào trực tiếp mở lớp phân tích cơ chế kinh tế của sản xuất tư bản chủ nghĩa?",
        options: [
          { id: "a", label: "Chủ nghĩa duy vật lịch sử" },
          { id: "b", label: "Học thuyết giá trị thặng dư" },
          { id: "c", label: "Phương pháp lịch sử và lôgic" },
        ],
        correctOptionId: "b",
        explanation:
          "Học thuyết giá trị thặng dư được đặt ở lớp câu hỏi về cơ chế tạo ra và chiếm hữu giá trị mới trong sản xuất tư bản chủ nghĩa.",
      },
      {
        id: "c1m2-q2",
        prompt: "Học thuyết về sứ mệnh lịch sử của giai cấp công nhân góp phần trả lời câu hỏi nào?",
        options: [
          { id: "a", label: "Câu hỏi về chủ thể xã hội của quá trình cải biến" },
          { id: "b", label: "Câu hỏi về mọi phương pháp nghiên cứu khoa học" },
          { id: "c", label: "Câu hỏi về một nghề nghiệp công nghiệp cụ thể" },
        ],
        correctOptionId: "a",
        explanation:
          "Phát kiến này được trình bày trong mạch nhận diện và luận giải vai trò của một chủ thể lịch sử.",
      },
      {
        id: "c1m2-q3",
        prompt: "Vì sao cần đọc ba phát kiến trong một chỉnh thể?",
        options: [
          { id: "a", label: "Vì ba phát kiến hoàn toàn giống nhau" },
          { id: "b", label: "Vì chúng trả lời các lớp câu hỏi khác nhau nhưng có quan hệ" },
          { id: "c", label: "Vì chỉ cần nhớ tên mà không cần hiểu chức năng" },
        ],
        correctOptionId: "b",
        explanation:
          "Tính chỉnh thể nằm ở sự bổ sung giữa các lớp lịch sử, kinh tế và chủ thể, chứ không phải ở việc đồng nhất chúng.",
      },
    ],
  },

  "chapter-1-module-3": {
    thesis:
      "Học Chủ nghĩa xã hội khoa học đòi hỏi phân biệt rõ đối tượng nghiên cứu, phương pháp tiếp cận và ý nghĩa của việc nghiên cứu.",
    thesisDetail:
      "Đối tượng xác định phạm vi câu hỏi của môn học; phương pháp luận và phương pháp lịch sử – lôgic định hướng cách phân tích; ý nghĩa nghiên cứu thể hiện ở năng lực nhận diện và lập luận có căn cứ. Ba lớp này liên hệ nhưng không thể thay thế cho nhau.",
    sectionEyebrow: "Bản đồ môn học",
    sectionTitle: "Học điều gì, bằng cách nào, để làm gì?",
    contextParagraphs: [
      "Một môn học chỉ trở nên rõ ràng khi người học biết nó tập trung nghiên cứu loại vấn đề nào. Việc xác định đối tượng giúp tránh mở rộng phạm vi tùy ý hoặc đồng nhất môn học với toàn bộ hệ thống lý luận có liên quan.",
      "Phương pháp không phải là nội dung nghiên cứu, còn ý nghĩa nghiên cứu không chỉ là một khẩu hiệu. Cả hai cần được gắn với thao tác phân tích, đối chiếu và trình bày nhận định có căn cứ.",
    ],
    blocks: [
      {
        title: "Đối tượng nghiên cứu",
        text: "Xác định phạm vi những quy luật, điều kiện và vấn đề mà môn học hướng tới ở mức nhập môn.",
      },
      {
        title: "Phương pháp tiếp cận",
        text: "Phương pháp luận cùng cách kết hợp lịch sử và lôgic giúp tổ chức việc xem xét sự vật trong quá trình và trong quan hệ.",
      },
      {
        title: "Ý nghĩa nghiên cứu",
        text: "Việc học hướng đến khả năng phân tích vấn đề lý luận và thực tiễn có căn cứ, thay vì chỉ ghi nhớ các mệnh đề tách rời.",
      },
    ],
    relationTitle: "Ba câu hỏi định hướng việc học",
    relationIntro:
      "Đối tượng trả lời “nghiên cứu điều gì”, phương pháp trả lời “tiếp cận như thế nào”, còn ý nghĩa trả lời “năng lực nào được hình thành qua việc nghiên cứu”.",
    lenses: [
      { code: "ĐT", label: "Phạm vi", title: "Điều gì được đặt thành đối tượng nghiên cứu?" },
      { code: "PP", label: "Cách tiếp cận", title: "Lịch sử và lôgic được vận dụng ra sao?" },
      { code: "YN", label: "Giá trị", title: "Việc học hỗ trợ năng lực phân tích nào?" },
    ],
    caution:
      "Không đồng nhất đối tượng với phương pháp, và không xem ý nghĩa môn học như một kết luận có thể tách khỏi hoạt động phân tích có căn cứ.",
    quiz: [
      {
        id: "c1m3-q1",
        prompt: "Câu hỏi “môn học nghiên cứu điều gì?” thuộc lớp nào?",
        options: [
          { id: "a", label: "Đối tượng nghiên cứu" },
          { id: "b", label: "Phương pháp nghiên cứu" },
          { id: "c", label: "Thời lượng học tập" },
        ],
        correctOptionId: "a",
        explanation:
          "Đối tượng nghiên cứu dùng để xác định phạm vi vấn đề mà môn học tập trung xem xét.",
      },
      {
        id: "c1m3-q2",
        prompt: "Phương pháp lịch sử và lôgic có vai trò phù hợp nhất là gì?",
        options: [
          { id: "a", label: "Thay thế hoàn toàn đối tượng nghiên cứu" },
          { id: "b", label: "Định hướng cách tổ chức và phân tích nội dung" },
          { id: "c", label: "Biến mọi kết luận thành ý kiến cá nhân" },
        ],
        correctOptionId: "b",
        explanation:
          "Phương pháp chỉ cách tiếp cận đối tượng; nó không phải chính đối tượng và cũng không loại bỏ yêu cầu về căn cứ.",
      },
      {
        id: "c1m3-q3",
        prompt: "Biểu hiện nào phù hợp với ý nghĩa phương pháp luận của việc học?",
        options: [
          { id: "a", label: "Phân tích và trình bày nhận định có căn cứ" },
          { id: "b", label: "Chỉ ghi nhớ thuật ngữ mà không xét quan hệ" },
          { id: "c", label: "Mở rộng mọi khái niệm ra ngoài phạm vi môn học" },
        ],
        correctOptionId: "a",
        explanation:
          "Ý nghĩa nghiên cứu được gắn với năng lực phân tích có căn cứ, không chỉ với việc ghi nhớ rời rạc.",
      },
    ],
  },

  "chapter-2-module-1": {
    thesis:
      "Giai cấp công nhân cần được nhận diện từ phương thức lao động và vị trí trong quan hệ sản xuất, không phải từ tên của một nghề nghiệp đơn lẻ.",
    thesisDetail:
      "Lao động công nghiệp, tính tổ chức và mức độ xã hội hóa của sản xuất tạo nên những phương diện quan trọng để xem xét. Các biểu hiện nghề nghiệp có thể biến đổi, vì vậy tiêu chí phân tích phải được giữ rõ khi đọc bối cảnh hiện đại.",
    sectionEyebrow: "Hai lăng kính nhận diện",
    sectionTitle: "Từ công việc cụ thể đến địa vị kinh tế – xã hội",
    contextParagraphs: [
      "Khái niệm giai cấp công nhân không được xác định chỉ bằng hình ảnh của một nghề hoặc một nhà máy cụ thể. Bài học yêu cầu xem xét cách lao động được tổ chức và vị trí của người lao động trong các quan hệ sản xuất.",
      "Khi công nghệ, nghề nghiệp và môi trường làm việc thay đổi, biểu hiện của lao động công nghiệp cũng trở nên đa dạng. Điều đó đòi hỏi phân biệt đặc điểm cốt lõi với hình thức lịch sử cụ thể.",
    ],
    blocks: [
      {
        title: "Phương thức lao động",
        text: "Lao động gắn với nền sản xuất công nghiệp và kỹ thuật hiện đại là một phương diện quan trọng để nhận diện.",
      },
      {
        title: "Vị trí trong quan hệ sản xuất",
        text: "Khái niệm còn được xem xét qua vị trí kinh tế – xã hội, không chỉ qua thao tác nghề nghiệp quan sát được bên ngoài.",
      },
      {
        title: "Tổ chức và xã hội hóa",
        text: "Tính tổ chức cùng sự liên kết rộng của quá trình sản xuất giúp lý giải những đặc điểm xã hội của lực lượng lao động này.",
      },
    ],
    relationTitle: "Tiêu chí cốt lõi và biểu hiện biến đổi",
    relationIntro:
      "Phương thức lao động và quan hệ sản xuất tạo thành hai lăng kính bổ sung; tính tổ chức và xã hội hóa giúp nối hai lăng kính với bối cảnh sản xuất hiện đại.",
    lenses: [
      { code: "LĐ", label: "Lao động", title: "Lao động được thực hiện trong phương thức nào?" },
      { code: "QHSX", label: "Địa vị", title: "Người lao động đứng ở đâu trong quan hệ sản xuất?" },
      { code: "BĐ", label: "Biến đổi", title: "Biểu hiện hiện đại thay đổi nhưng tiêu chí nào còn cần giữ?" },
    ],
    caution:
      "Không nên đồng nhất giai cấp công nhân với lao động chân tay, một ngành nghề riêng lẻ hoặc một hình ảnh lịch sử cố định.",
    quiz: [
      {
        id: "c2m1-q1",
        prompt: "Cách nhận diện nào phù hợp nhất với bài học?",
        options: [
          { id: "a", label: "Chỉ dựa vào tên nghề" },
          { id: "b", label: "Kết hợp phương thức lao động và vị trí trong quan hệ sản xuất" },
          { id: "c", label: "Chỉ dựa vào trang phục làm việc" },
        ],
        correctOptionId: "b",
        explanation:
          "Hai phương diện này giúp đi từ biểu hiện công việc cụ thể đến cách phân tích địa vị kinh tế – xã hội.",
      },
      {
        id: "c2m1-q2",
        prompt: "Vì sao cần phân biệt đặc điểm cốt lõi với biểu hiện lịch sử?",
        options: [
          { id: "a", label: "Vì nghề nghiệp và công nghệ có thể biến đổi" },
          { id: "b", label: "Vì mọi tiêu chí đều không còn giá trị" },
          { id: "c", label: "Vì quan hệ sản xuất không liên quan đến khái niệm" },
        ],
        correctOptionId: "a",
        explanation:
          "Bối cảnh hiện đại làm đa dạng hình thức lao động, nhưng sự biến đổi ấy không cho phép bỏ qua các tiêu chí phân tích cốt lõi.",
      },
      {
        id: "c2m1-q3",
        prompt: "Khái niệm nào giúp thấy sự liên kết rộng của quá trình sản xuất?",
        options: [
          { id: "a", label: "Tính xã hội hóa của sản xuất" },
          { id: "b", label: "Một nghề nghiệp đơn lẻ" },
          { id: "c", label: "Một thao tác cá nhân tách biệt" },
        ],
        correctOptionId: "a",
        explanation:
          "Tính xã hội hóa nhấn mạnh sự phụ thuộc và liên kết ngày càng rộng giữa các hoạt động trong quá trình sản xuất.",
      },
    ],
  },

  "chapter-2-module-2": {
    thesis:
      "Sứ mệnh lịch sử được trình bày trên ba phương diện liên hệ với nhau và chỉ có thể xem xét cùng điều kiện khách quan lẫn nhân tố chủ quan.",
    thesisDetail:
      "Nội dung kinh tế, chính trị – xã hội và văn hóa – tư tưởng tạo thành ba lớp phân tích, không phải ba nhiệm vụ biệt lập. Điều kiện khách quan mở ra khả năng, còn nhân tố chủ quan gắn với việc tổ chức và hiện thực hóa khả năng ấy trong thực tiễn.",
    sectionEyebrow: "Ma trận sứ mệnh",
    sectionTitle: "Ba phương diện, hai nhóm điều kiện",
    contextParagraphs: [
      "Phân loại nội dung theo ba phương diện giúp người học không gom mọi luận điểm vào một khối chung. Mỗi phương diện có trọng tâm riêng, song đều nằm trong cùng mạch về sự cải biến kinh tế và đời sống xã hội.",
      "Việc phân biệt điều kiện khách quan với nhân tố chủ quan nhằm làm rõ quan hệ giữa khả năng lịch sử và hoạt động thực tiễn. Sự phân biệt này không đồng nghĩa tách rời hoặc tuyệt đối hóa một phía.",
    ],
    blocks: [
      {
        title: "Phương diện kinh tế",
        text: "Tập trung vào nội dung liên quan đến sản xuất, quan hệ kinh tế và cơ sở vật chất của quá trình cải biến xã hội.",
      },
      {
        title: "Phương diện chính trị – xã hội",
        text: "Hướng vào tổ chức lực lượng, quan hệ quyền lực và những biến đổi trong đời sống chính trị – xã hội.",
      },
      {
        title: "Phương diện văn hóa – tư tưởng",
        text: "Đặt ra yêu cầu về nhận thức, giá trị và đời sống tinh thần trong mối liên hệ với những biến đổi khác của xã hội.",
      },
    ],
    relationTitle: "Khả năng không tự chuyển thành hiện thực",
    relationIntro:
      "Các điều kiện khách quan là căn cứ để luận giải khả năng, nhưng việc thực hiện còn gắn với nhân tố chủ quan, trong đó bài học đặt vấn đề về tổ chức và vai trò của Đảng Cộng sản.",
    lenses: [
      { code: "KT", label: "Kinh tế", title: "Cơ sở sản xuất và quan hệ kinh tế" },
      { code: "CT–XH", label: "Chính trị", title: "Tổ chức lực lượng và đời sống xã hội" },
      { code: "VH–TT", label: "Văn hóa", title: "Nhận thức, giá trị và đời sống tinh thần" },
    ],
    caution:
      "Không nên xem sứ mệnh lịch sử là kết quả tự phát, cũng không nên tách ba phương diện hoặc hai nhóm điều kiện khỏi quan hệ tác động qua lại.",
    quiz: [
      {
        id: "c2m2-q1",
        prompt: "Luận điểm về nhận thức và đời sống tinh thần thuộc phương diện nào?",
        options: [
          { id: "a", label: "Kinh tế" },
          { id: "b", label: "Chính trị – xã hội" },
          { id: "c", label: "Văn hóa – tư tưởng" },
        ],
        correctOptionId: "c",
        explanation:
          "Nhận thức, giá trị và đời sống tinh thần là trọng tâm của phương diện văn hóa – tư tưởng.",
      },
      {
        id: "c2m2-q2",
        prompt: "Quan hệ nào mô tả đúng nhất điều kiện khách quan và nhân tố chủ quan?",
        options: [
          { id: "a", label: "Khách quan tạo khả năng, chủ quan gắn với tổ chức thực hiện" },
          { id: "b", label: "Chỉ điều kiện khách quan là đủ bảo đảm kết quả" },
          { id: "c", label: "Hai nhóm hoàn toàn không liên quan" },
        ],
        correctOptionId: "a",
        explanation:
          "Bài học yêu cầu phân biệt để thấy chức năng, đồng thời nối hai nhóm trong quá trình từ khả năng đến hoạt động thực tiễn.",
      },
      {
        id: "c2m2-q3",
        prompt: "Vì sao cần dùng căn cứ khi phân loại một luận điểm?",
        options: [
          { id: "a", label: "Để bảo vệ cách phân loại bằng nội dung bài học" },
          { id: "b", label: "Để mọi luận điểm đều thuộc cả ba nhóm như nhau" },
          { id: "c", label: "Để thay thế việc hiểu khái niệm bằng ghi nhớ màu sắc" },
        ],
        correctOptionId: "a",
        explanation:
          "Phân loại có giá trị khi người học chỉ ra được dấu hiệu nội dung làm căn cứ cho lựa chọn của mình.",
      },
    ],
  },

  "chapter-2-module-3": {
    thesis:
      "Những biến đổi của giai cấp công nhân hiện nay cần được nhận diện mà không rời các tiêu chí về địa vị kinh tế – xã hội.",
    thesisDetail:
      "Cơ cấu, trình độ tri thức và nghề nghiệp trở nên đa dạng cùng quá trình công nghiệp hóa, hiện đại hóa. Khi liên hệ Việt Nam, cần vừa thấy biểu hiện mới, vừa giữ đúng phạm vi và hệ khái niệm mà giáo trình sử dụng.",
    sectionEyebrow: "Liên tục và biến đổi",
    sectionTitle: "Đọc giai cấp công nhân trong bối cảnh mới",
    contextParagraphs: [
      "Lao động công nghiệp hiện đại không chỉ hiện diện trong những hình thức nghề nghiệp quen thuộc. Sự thay đổi của công nghệ và tổ chức sản xuất làm cơ cấu lao động, yêu cầu tri thức và hình thức công việc trở nên đa dạng hơn.",
      "Bài học không dùng sự đa dạng ấy để xóa bỏ câu hỏi về địa vị kinh tế – xã hội. Với trường hợp Việt Nam, nội dung được đặt trong mạch công nghiệp hóa, hiện đại hóa và các yêu cầu được giáo trình nêu ra đối với giai cấp công nhân.",
    ],
    blocks: [
      {
        title: "Cơ cấu và nghề nghiệp đa dạng",
        text: "Sự phát triển của sản xuất hiện đại làm xuất hiện nhiều vị trí, lĩnh vực và hình thức lao động khác nhau trong đội ngũ công nhân.",
      },
      {
        title: "Xu hướng trí thức hóa",
        text: "Yêu cầu về tri thức và kỹ năng tăng lên cho thấy biến đổi về chất lượng lao động, nhưng không tự nó thay thế việc phân tích quan hệ sản xuất.",
      },
      {
        title: "Liên hệ Việt Nam",
        text: "Việc xem xét giai cấp công nhân Việt Nam được gắn với bối cảnh công nghiệp hóa, hiện đại hóa và những nội dung trong phạm vi giáo trình.",
      },
    ],
    relationTitle: "Đổi biểu hiện, giữ tiêu chí phân tích",
    relationIntro:
      "Cơ cấu nghề nghiệp và trình độ có thể thay đổi, nhưng kết luận về vị trí xã hội chỉ có căn cứ khi tiếp tục xem xét phương thức lao động và quan hệ sản xuất.",
    lenses: [
      { code: "BĐ", label: "Biến đổi", title: "Cơ cấu và nghề nghiệp thay đổi ra sao?" },
      { code: "TC", label: "Tiêu chí", title: "Địa vị kinh tế – xã hội được xem xét thế nào?" },
      { code: "VN", label: "Liên hệ", title: "Bối cảnh Việt Nam đặt ra nội dung gì trong bài học?" },
    ],
    caution:
      "Không suy từ một biểu hiện nghề nghiệp mới đến kết luận về toàn bộ giai cấp, và không mở rộng phần liên hệ Việt Nam vượt quá phạm vi nội dung đã được giáo trình đặt ra.",
    quiz: [
      {
        id: "c2m3-q1",
        prompt: "Biến đổi nào được bài học lưu ý trong bối cảnh hiện nay?",
        options: [
          { id: "a", label: "Cơ cấu, tri thức và nghề nghiệp trở nên đa dạng" },
          { id: "b", label: "Mọi tiêu chí kinh tế – xã hội đều mất ý nghĩa" },
          { id: "c", label: "Chỉ còn một loại công việc công nghiệp" },
        ],
        correctOptionId: "a",
        explanation:
          "Bài học tập trung vào các biến đổi về cơ cấu, trình độ tri thức và nghề nghiệp trong sản xuất hiện đại.",
      },
      {
        id: "c2m3-q2",
        prompt: "Xu hướng trí thức hóa nên được hiểu thận trọng như thế nào?",
        options: [
          { id: "a", label: "Cho thấy yêu cầu tri thức và kỹ năng tăng lên" },
          { id: "b", label: "Tự động xóa bỏ mọi quan hệ sản xuất" },
          { id: "c", label: "Đồng nghĩa chỉ còn lao động nghiên cứu" },
        ],
        correctOptionId: "a",
        explanation:
          "Trí thức hóa mô tả sự thay đổi yêu cầu lao động; nó không thay cho việc phân tích địa vị kinh tế – xã hội.",
      },
      {
        id: "c2m3-q3",
        prompt: "Khi liên hệ Việt Nam, nguyên tắc nào phù hợp nhất?",
        options: [
          { id: "a", label: "Bám phạm vi giáo trình và bối cảnh công nghiệp hóa, hiện đại hóa" },
          { id: "b", label: "Khái quát từ một nghề sang toàn bộ lực lượng lao động" },
          { id: "c", label: "Bỏ qua các tiêu chí về địa vị kinh tế – xã hội" },
        ],
        correctOptionId: "a",
        explanation:
          "Phần liên hệ cần có giới hạn rõ và đặt các biến đổi trong đúng mạch khái niệm của bài học.",
      },
    ],
  },

  "chapter-3-module-1": {
    thesis:
      "Các đặc trưng bản chất của chủ nghĩa xã hội chỉ sáng rõ khi được đọc như một hệ thống nhiều phương diện có quan hệ với nhau.",
    thesisDetail:
      "Bài học đặt chủ nghĩa xã hội trong quan niệm về hình thái kinh tế – xã hội cộng sản chủ nghĩa và xem đây là giai đoạn đầu của hình thái ấy. Các đặc trưng kinh tế, chính trị, xã hội, văn hóa và phát triển con người cần được nhóm lại nhưng không được tách rời.",
    sectionEyebrow: "Hệ đặc trưng bản chất",
    sectionTitle: "Một mô hình xã hội qua nhiều lớp cấu thành",
    contextParagraphs: [
      "Việc xác định vị trí của chủ nghĩa xã hội trong mạch hình thái kinh tế – xã hội giúp người học hiểu phạm vi khái niệm trước khi đi vào từng đặc trưng. Đây là bước đặt nền cho toàn bộ phần hệ thống hóa.",
      "Các đặc trưng có thể được nhóm theo phương diện để dễ quan sát, song việc phân nhóm chỉ là công cụ học tập. Ý nghĩa của chúng nằm ở quan hệ tổng thể và ở định hướng phát triển con người trong cấu trúc xã hội được trình bày.",
    ],
    blocks: [
      {
        title: "Vị trí trong hình thái kinh tế – xã hội",
        text: "Chủ nghĩa xã hội được tiếp cận như giai đoạn đầu của hình thái kinh tế – xã hội cộng sản chủ nghĩa trong mạch lý luận của chương.",
      },
      {
        title: "Hệ đặc trưng nhiều phương diện",
        text: "Các đặc trưng được quan sát trên các lớp kinh tế, chính trị, xã hội và văn hóa để thấy cấu trúc đa chiều của mô hình.",
      },
      {
        title: "Phát triển con người",
        text: "Phương diện con người giúp liên kết mục tiêu xã hội với những điều kiện và quan hệ cấu thành toàn bộ hệ đặc trưng.",
      },
    ],
    relationTitle: "Không có đặc trưng đứng một mình",
    relationIntro:
      "Một thay đổi ở phương diện kinh tế có quan hệ với tổ chức chính trị, đời sống xã hội, văn hóa và điều kiện phát triển con người; vì vậy hệ đặc trưng phải được đọc trong tính chỉnh thể.",
    lenses: [
      { code: "HT", label: "Vị trí", title: "Chủ nghĩa xã hội nằm ở đâu trong hình thái?" },
      { code: "HỆ", label: "Cấu trúc", title: "Các đặc trưng được nhóm theo những phương diện nào?" },
      { code: "CN", label: "Con người", title: "Phát triển con người liên hệ với toàn hệ ra sao?" },
    ],
    caution:
      "Không biến hệ đặc trưng thành một danh sách rời rạc hoặc xem một phương diện riêng lẻ là đủ đại diện cho toàn bộ mô hình xã hội.",
    quiz: [
      {
        id: "c3m1-q1",
        prompt: "Chủ nghĩa xã hội được đặt ở vị trí nào trong mạch lý luận của bài?",
        options: [
          { id: "a", label: "Giai đoạn đầu của hình thái kinh tế – xã hội cộng sản chủ nghĩa" },
          { id: "b", label: "Một thuật ngữ tách khỏi mọi hình thái kinh tế – xã hội" },
          { id: "c", label: "Một phương pháp nghiên cứu lịch sử" },
        ],
        correctOptionId: "a",
        explanation:
          "Bài học trước hết xác định vị trí khái niệm này trong quan niệm về hình thái kinh tế – xã hội cộng sản chủ nghĩa.",
      },
      {
        id: "c3m1-q2",
        prompt: "Cách học hệ đặc trưng nào phù hợp nhất?",
        options: [
          { id: "a", label: "Nhóm theo phương diện rồi đọc trong quan hệ tổng thể" },
          { id: "b", label: "Chỉ chọn một đặc trưng và bỏ qua các đặc trưng khác" },
          { id: "c", label: "Ghi nhớ thứ tự mà không cần hiểu quan hệ" },
        ],
        correctOptionId: "a",
        explanation:
          "Phân nhóm giúp quan sát, còn đọc quan hệ tổng thể giúp giữ đúng tính hệ thống của các đặc trưng.",
      },
      {
        id: "c3m1-q3",
        prompt: "Phát triển con người nên được đặt ở đâu trong bài học?",
        options: [
          { id: "a", label: "Trong quan hệ với các phương diện cấu thành mô hình xã hội" },
          { id: "b", label: "Ngoài mọi điều kiện kinh tế và xã hội" },
          { id: "c", label: "Chỉ như một khẩu hiệu không cần phân tích" },
        ],
        correctOptionId: "a",
        explanation:
          "Phương diện con người có ý nghĩa khi được kết nối với toàn bộ hệ đặc trưng và các điều kiện xã hội tương ứng.",
      },
    ],
  },

  "chapter-3-module-2": {
    thesis:
      "Thời kỳ quá độ được lý giải như một quá trình chuyển tiếp tất yếu, lâu dài và phức tạp, trong đó cái cũ và cái mới còn đan xen.",
    thesisDetail:
      "Chuyển đổi xã hội không diễn ra tức thời vì các quan hệ kinh tế, chính trị, xã hội và văn hóa không đồng loạt thay đổi theo cùng một nhịp. Tính đan xen vì thế là đặc điểm cần phân tích, không phải một ngoại lệ ngoài tiến trình.",
    sectionEyebrow: "Cấu trúc chuyển tiếp",
    sectionTitle: "Vì sao quá độ không phải một đường thẳng?",
    contextParagraphs: [
      "Bài học trước hết đặt câu hỏi về sự cần thiết của một thời kỳ chuyển tiếp. Cách đặt vấn đề này hướng người học từ hình dung về một khoảnh khắc thay thế sang nhận thức về quá trình cải biến nhiều mặt.",
      "Trong quá trình ấy, yếu tố cũ và mới có thể cùng tồn tại và tác động qua lại trên nhiều lĩnh vực. Sự không đồng đều giữa các phương diện góp phần làm nên tính lâu dài và phức tạp của thời kỳ quá độ.",
    ],
    blocks: [
      {
        title: "Tính tất yếu của chuyển tiếp",
        text: "Một xã hội mới không thể hình thành đầy đủ trong một thời điểm, bởi các điều kiện và quan hệ cấu thành cần được cải biến qua quá trình.",
      },
      {
        title: "Sự đan xen cũ – mới",
        text: "Những yếu tố đang hình thành cùng tồn tại với những yếu tố còn lưu lại, tạo nên các quan hệ đa chiều và có thể không đồng bộ.",
      },
      {
        title: "Tính lâu dài, phức tạp",
        text: "Nhiều lĩnh vực vận động theo nhịp độ khác nhau, vì vậy chuyển tiếp không nên được giản lược thành một tiến trình nhanh và tuyến tính.",
      },
    ],
    relationTitle: "Quá trình nhiều lớp và không đồng nhịp",
    relationIntro:
      "Kinh tế, chính trị, xã hội và văn hóa cùng tham gia vào chuyển tiếp nhưng không nhất thiết biến đổi đồng thời; quan hệ giữa các lớp quyết định tính phức tạp của toàn quá trình.",
    lenses: [
      { code: "TY", label: "Tất yếu", title: "Vì sao cần một giai đoạn chuyển tiếp?" },
      { code: "ĐX", label: "Đan xen", title: "Cái cũ và cái mới cùng tồn tại ra sao?" },
      { code: "QT", label: "Quá trình", title: "Vì sao chuyển tiếp lâu dài và phức tạp?" },
    ],
    caution:
      "Không mô tả thời kỳ quá độ như một sự thay đổi tức thời, một đường tiến đơn tuyến hoặc một trạng thái trong đó cái cũ biến mất hoàn toàn ngay lập tức.",
    quiz: [
      {
        id: "c3m2-q1",
        prompt: "Vì sao bài học xem quá độ là một quá trình?",
        options: [
          { id: "a", label: "Vì các quan hệ xã hội cần được cải biến trên nhiều phương diện" },
          { id: "b", label: "Vì mọi lĩnh vực luôn thay đổi cùng một lúc" },
          { id: "c", label: "Vì chỉ cần đổi tên một thiết chế" },
        ],
        correctOptionId: "a",
        explanation:
          "Sự chuyển tiếp liên quan đến nhiều lớp quan hệ và điều kiện, nên không thể được hiểu như một khoảnh khắc đơn nhất.",
      },
      {
        id: "c3m2-q2",
        prompt: "“Cái cũ và cái mới đan xen” diễn tả điều gì?",
        options: [
          { id: "a", label: "Các yếu tố khác nhau cùng tồn tại và tác động qua lại" },
          { id: "b", label: "Cái mới lập tức thay thế toàn bộ cái cũ" },
          { id: "c", label: "Mọi lĩnh vực ngừng vận động" },
        ],
        correctOptionId: "a",
        explanation:
          "Tính đan xen nhấn mạnh sự cùng tồn tại và quan hệ giữa các yếu tố trong một quá trình chưa hoàn tất.",
      },
      {
        id: "c3m2-q3",
        prompt: "Nhận định nào cần tránh?",
        options: [
          { id: "a", label: "Các lĩnh vực có thể chuyển biến không đồng nhịp" },
          { id: "b", label: "Thời kỳ quá độ có tính lâu dài và phức tạp" },
          { id: "c", label: "Chuyển tiếp luôn tức thời và tuyến tính" },
        ],
        correctOptionId: "c",
        explanation:
          "Mô tả tức thời và tuyến tính làm mất đặc điểm nhiều lớp, đan xen mà bài học yêu cầu nhận diện.",
      },
    ],
  },

  "chapter-3-module-3": {
    thesis:
      "Quá độ bỏ qua chế độ tư bản chủ nghĩa ở Việt Nam không đồng nghĩa với phủ nhận mọi thành tựu phát triển mà nhân loại đã tạo ra.",
    thesisDetail:
      "Khái niệm “bỏ qua” phải được đọc đúng nội hàm và trong điều kiện lịch sử cụ thể của con đường quá độ ở Việt Nam. Các nhiệm vụ phát triển lực lượng sản xuất, công nghiệp hóa, hiện đại hóa và việc hệ thống hóa các phương hướng xây dựng vẫn giữ vị trí quan trọng trong mạch bài.",
    sectionEyebrow: "Liên hệ Việt Nam",
    sectionTitle: "Hiểu đúng “bỏ qua”, nhìn rõ nhiệm vụ phát triển",
    contextParagraphs: [
      "Cụm từ “bỏ qua” dễ bị giản lược thành phủ nhận mọi yếu tố gắn với quá trình phát triển trước đó. Bài học yêu cầu phân biệt việc bỏ qua một chế độ xã hội với việc tiếp thu những thành tựu phát triển chung.",
      "Con đường quá độ ở Việt Nam được đặt trong một hệ nhiệm vụ và phương hướng, gồm phát triển lực lượng sản xuất, công nghiệp hóa, hiện đại hóa và tổ chức nền kinh tế theo định hướng được nêu trong giáo trình. Vì vậy, khái niệm cần được đọc cùng toàn bộ mạch xây dựng và phát triển.",
    ],
    blocks: [
      {
        title: "Giới hạn của khái niệm “bỏ qua”",
        text: "“Bỏ qua” được dùng để nói về chế độ xã hội trong con đường quá độ, không phải để phủ nhận mọi thành tựu phát triển của văn minh nhân loại.",
      },
      {
        title: "Yêu cầu phát triển",
        text: "Phát triển lực lượng sản xuất cùng công nghiệp hóa, hiện đại hóa vẫn là những nội dung phải được xem xét trong quá trình xây dựng.",
      },
      {
        title: "Hệ phương hướng xây dựng",
        text: "Các phương hướng lớn, trong đó có nội dung về kinh tế thị trường định hướng xã hội chủ nghĩa, cần được hệ thống hóa theo nhóm và trong quan hệ.",
      },
    ],
    relationTitle: "Bỏ qua chế độ, không bỏ qua phát triển",
    relationIntro:
      "Ranh giới khái niệm chỉ rõ điều không đồng nhất; các nhiệm vụ phát triển và hệ phương hướng cho thấy con đường quá độ vẫn là một quá trình xây dựng chủ động, nhiều mặt.",
    lenses: [
      { code: "KN", label: "Khái niệm", title: "“Bỏ qua” có giới hạn nội hàm nào?" },
      { code: "PT", label: "Phát triển", title: "Công nghiệp hóa và hiện đại hóa giữ vai trò gì?" },
      { code: "PH", label: "Phương hướng", title: "Các nội dung xây dựng được hệ thống hóa ra sao?" },
    ],
    caution:
      "Không diễn giải “bỏ qua” như bỏ qua mọi giai đoạn phát triển, mọi thành tựu chung hoặc mọi nhiệm vụ hiện đại hóa; các kết luận cụ thể cần được đặt trong đúng phạm vi giáo trình.",
    quiz: [
      {
        id: "c3m3-q1",
        prompt: "Cách hiểu nào phù hợp nhất với khái niệm “bỏ qua” trong bài học?",
        options: [
          { id: "a", label: "Bỏ qua một chế độ xã hội, không phủ nhận mọi thành tựu phát triển" },
          { id: "b", label: "Bỏ qua mọi nhiệm vụ phát triển lực lượng sản xuất" },
          { id: "c", label: "Từ chối toàn bộ thành tựu của văn minh nhân loại" },
        ],
        correctOptionId: "a",
        explanation:
          "Mục tiêu học tập cốt lõi là phân biệt việc bỏ qua một chế độ với sự phủ nhận mọi thành tựu phát triển.",
      },
      {
        id: "c3m3-q2",
        prompt: "Nội dung nào vẫn cần được đặt trong con đường quá độ ở Việt Nam?",
        options: [
          { id: "a", label: "Công nghiệp hóa, hiện đại hóa" },
          { id: "b", label: "Bỏ qua phát triển lực lượng sản xuất" },
          { id: "c", label: "Ghi nhớ phương hướng như các mảnh rời rạc" },
        ],
        correctOptionId: "a",
        explanation:
          "Công nghiệp hóa, hiện đại hóa thuộc hệ khái niệm của học phần và gắn với yêu cầu phát triển trong quá trình quá độ.",
      },
      {
        id: "c3m3-q3",
        prompt: "Cách học các phương hướng xây dựng nào phù hợp nhất?",
        options: [
          { id: "a", label: "Hệ thống hóa theo nhóm và nhận diện quan hệ" },
          { id: "b", label: "Ghi nhớ từng ý mà không xét mối liên hệ" },
          { id: "c", label: "Chỉ chọn một phương hướng để thay cho toàn bộ" },
        ],
        correctOptionId: "a",
        explanation:
          "Hệ thống hóa giúp giữ cấu trúc của nội dung và tránh biến phần liên hệ thành một danh sách rời rạc.",
      },
    ],
  },
};

export default lessonProfiles;
