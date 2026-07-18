# Group 2 — Không gian triết học Việt Nam

Website học tập tương tác được biên soạn từ tài liệu **“Nhà nước xã hội chủ nghĩa Việt Nam”**. Giao diện được xây bằng React và Vite, sẵn cấu hình triển khai dưới dạng Static Site trên Render.

Ngôn ngữ thị giác hiện tại là **Chính luận kiến tạo**: nền giấy ngà, dải đỏ - vàng, typography mạnh và infographic quan hệ. Mỗi bài học đi theo nhịp tư duy: Luận đề → Cơ sở → Quan hệ → Hệ quả → Phản tư.

Website hoạt động như một thư viện kiến thức công khai: không có đăng nhập, đăng ký, hồ sơ cá nhân, điểm thưởng hoặc lưu lịch sử người xem.

Nội dung được chia thành ba tuyến và chín chuyên đề: nhận diện – bản chất; Nhân dân – quyền lực – dân chủ; chức năng – mục tiêu. Các thẻ **Nguồn đối chiếu** mở trực tiếp bản PDF được lưu cùng website và tự chuyển tới đúng trang trích dẫn. Bản PDF chỉ được tải khi người xem chủ động mở nguồn.

Mỗi học phần có một địa chỉ riêng dạng `#/lesson/<mã-học-phần>` và một bộ luận đề, sơ đồ, thuật ngữ, audio tóm tắt, nguồn trang cùng micro-quiz riêng. Việc quay lại hoặc chuyển tiếp bằng trình duyệt vẫn giữ đúng học phần đang xem.

Hệ thống audio gồm 9 kịch bản đầy đủ, mỗi bài khoảng 7–9 phút. Mỗi bài được chia thành các đoạn đọc ngắn để giọng hệ thống không bị ngắt khi phát nội dung dài; trình phát hỗ trợ tạm dừng, nghe tiếp, phát lại và theo dõi tiến độ.

Ảnh tư liệu có đường dẫn nguồn và thông tin giấy phép rõ ràng. Các sơ đồ do Group 2 dựng lại chỉ diễn giải quan hệ trong PDF, không dùng Quốc kỳ, Quốc huy hoặc biểu tượng Đảng làm họa tiết trò chơi.

## Chạy trên máy

```bash
npm install
npm run dev
```

## Tạo bản phát hành

```bash
npm run build
npm run preview
```

## Triển khai lên Render

Đưa mã nguồn lên GitHub hoặc GitLab, sau đó tạo Blueprint mới trên Render từ repository. Render sẽ tự đọc `render.yaml`, chạy bản build và xuất bản thư mục `dist`.
