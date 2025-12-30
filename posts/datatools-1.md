---
title: "Power BI - Tạo Dashboard tương tác chuyên nghiệp"
date: "2025-12-08"
category: "Data Tools"
---

## Power BI là gì?

Power BI là công cụ trực quan hóa và phân tích dữ liệu của Microsoft. Nó giúp bạn kết nối dữ liệu từ nhiều nguồn, tạo các báo cáo đẹp, và chia sẻ insights với đội của bạn.

## Cài đặt Power BI

### Power BI Desktop
1. Tải từ https://powerbi.microsoft.com/downloads/
2. Cài đặt ứng dụng desktop
3. Đăng nhập bằng tài khoản Microsoft

### Power BI Online
- Truy cập app.powerbi.com
- Đăng nhập bằng tài khoản Microsoft

## Khái niệm cơ bản

### Power Query
- Công cụ ETL (Extract, Transform, Load) của Power BI
- Giúp kết nối, làm sạch, và biến đổi dữ liệu

### Data Model
- Mối quan hệ giữa các bảng
- Tạo mối liên kết (relationships) giữa các bảng

### DAX (Data Analysis Expressions)
- Ngôn ngữ công thức trong Power BI
- Tạo measures, columns được tính toán

### Visualizations
- Biểu đồ, biểu đồ cột, bảng, card, v.v.

## Các bước tạo Report

### Bước 1: Kết nối dữ liệu
- Mở Power BI Desktop
- Chọn "Get Data"
- Chọn nguồn (Excel, CSV, Database, Web, v.v.)
- Load dữ liệu

### Bước 2: Transform dữ liệu
- Mở Power Query Editor
- Xóa cột không cần thiết
- Đổi tên cột
- Thay đổi kiểu dữ liệu
- Xóa hàng trống

### Bước 3: Tạo Data Model
- Tạo mối quan hệ (Relationships)
- Tạo hierarchies
- Tạo measures và columns

### Bước 4: Tạo Visualizations
- Chọn visualization type
- Kéo các cột vào areas (Values, Axis, Legend)
- Tùy chỉnh màu sắc, format, title

### Bước 5: Tạo Dashboard
- Tổ chợp các visualizations
- Thêm slicers để filter dữ liệu
- Tạo drill-through pages

## Các loại Visualization phổ biến

### 1. Line Chart
- Hiển thị xu hướng theo thời gian

### 2. Bar/Column Chart
- So sánh giá trị giữa các category

### 3. Pie/Donut Chart
- Hiển thị tỷ lệ phần trăm

### 4. Table
- Hiển thị dữ liệu dạng bảng

### 5. Card
- Hiển thị một số lớn (KPI)

### 6. Gauge
- Hiển thị tiến độ so với mục tiêu

### 7. Map
- Hiển thị dữ liệu địa lý

### 8. Scatter Plot
- Hiển thị mối quan hệ giữa 2 biến

## DAX Functions cơ bản

```dax
-- COUNT: Đếm số lượng
CountOrder = COUNT(Sales[OrderID])

-- SUM: Tính tổng
TotalSales = SUM(Sales[Amount])

-- AVERAGE: Tính trung bình
AvgPrice = AVERAGE(Products[Price])

-- FILTER: Lọc dữ liệu
FilteredSales = CALCULATE(SUM(Sales[Amount]), Sales[Year] = 2024)

-- IF: Câu lệnh điều kiện
Status = IF([TotalSales] > 10000, "High", "Low")
```

## Publishing và Sharing

### Publish to Power BI Service
1. File > Publish
2. Chọn workspace
3. Chọn "Select" để upload

### Chia sẻ Report
1. Tại Power BI Service
2. Chọn "Share"
3. Nhập email của người nhận
4. Thêm message và gửi

## Best Practices

1. **Sử dụng meaningful names** cho columns, measures
2. **Tạo hierarchies** cho dữ liệu địa lý, thời gian
3. **Optimize performance** bằng cách sử dụng aggregations
4. **Sử dụng bookmarks** cho interactive reports
5. **Tạo consistent branding** với colors, fonts
6. **Test reports** trước khi publish
7. **Document calculations** với comments
8. **Refresh data regularly** để đảm bảo tính chính xác

## Kết luận

Power BI là công cụ mạnh mẽ để tạo các báo cáo tương tác, giúp bạn nhanh chóng chuyển dữ liệu thô thành insights có giá trị. Với Power BI, bạn có thể tạo các dashboard chuyên nghiệp mà không cần lập trình.
