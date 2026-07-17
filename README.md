# Group 2 — Dialectic Learning Lab

Website học tập tương tác số hóa ba chương đầu của Giáo trình Chủ nghĩa xã hội khoa học. Giao diện được xây bằng React và Vite, sẵn cấu hình triển khai dưới dạng Static Site trên Render.

Ngôn ngữ thị giác hiện tại là **Chính luận kiến tạo**: nền giấy ngà, dải đỏ - vàng, typography mạnh và infographic quan hệ. Mỗi bài học đi theo nhịp tư duy: Luận đề → Cơ sở → Quan hệ → Hệ quả → Phản tư.

Website hoạt động như một thư viện kiến thức công khai: không có đăng nhập, đăng ký, hồ sơ cá nhân, điểm thưởng hoặc lưu lịch sử người xem.

Các thẻ **Nguồn đối chiếu** mở trực tiếp bản PDF giáo trình được lưu cùng website và tự chuyển tới trang đầu của phạm vi trích dẫn. Bản PDF chỉ được tải khi người xem chủ động mở nguồn.

Mỗi học phần có một địa chỉ riêng dạng `#/lesson/<mã-học-phần>` và một bộ luận đề, sơ đồ, thuật ngữ, audio tóm tắt, nguồn trang cùng micro-quiz riêng. Việc quay lại hoặc chuyển tiếp bằng trình duyệt vẫn giữ đúng học phần đang xem.

Hệ thống audio gồm 9 kịch bản đầy đủ, tổng thời lượng ước tính khoảng 76 phút. Mỗi bài được chia thành các đoạn đọc ngắn để giọng hệ thống không bị ngắt khi phát nội dung dài; trình phát hỗ trợ tạm dừng, nghe tiếp, phát lại và theo dõi tiến độ.

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
