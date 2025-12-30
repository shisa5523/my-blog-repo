---
title: "MySQL cơ bản - Quản lý cơ sở dữ liệu như chuyên gia"
date: "2025-12-06"
category: "MySQL"
---

## MySQL là gì?

MySQL là một hệ quản trị cơ sở dữ liệu mã nguồn mở (RDBMS) phổ biến nhất thế giới. Nó nhanh, đáng tin cậy, và dễ sử dụng, được sử dụng trong hầu hết các ứng dụng web.

## Cài đặt MySQL

### Windows
1. Tải MySQL Community Server từ https://dev.mysql.com/downloads/mysql/
2. Chạy installer và làm theo hướng dẫn
3. Chọn MySQL Server, MySQL Workbench
4. Verify: `mysql --version` trong Command Prompt

### Mac
```bash
brew install mysql
mysql --version
```

### Linux
```bash
sudo apt-get install mysql-server
mysql --version
```

## Khái niệm cơ bản

### Database, Table, và Record
- **Database**: Tập hợp các bảng liên quan
- **Table**: Bảng chứa dữ liệu với hàng (rows) và cột (columns)
- **Record**: Một hàng dữ liệu trong bảng

### Kiểu dữ liệu phổ biến
- INT: Số nguyên
- VARCHAR(n): Chuỗi ký tự có độ dài tối đa n
- TEXT: Chuỗi ký tự dài
- DATE: Ngày tháng
- DECIMAL(10,2): Số thập phân
- BOOLEAN: True/False

## Câu lệnh cơ bản

### Tạo Database
```sql
CREATE DATABASE blog_db;
USE blog_db;
```

### Tạo Table
```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### INSERT - Thêm dữ liệu
```sql
INSERT INTO users (name, email, age)
VALUES ('Nguyễn Văn Trung', 'trung@example.com', 25);

-- Thêm nhiều bản ghi
INSERT INTO users (name, email, age)
VALUES 
('Lê Thị Linh', 'linh@example.com', 23),
('Phạm Minh Huy', 'huy@example.com', 24);
```

### SELECT - Lấy dữ liệu
```sql
-- Lấy tất cả
SELECT * FROM users;

-- Lấy cột cụ thể
SELECT name, email FROM users;

-- Lấy 5 bản ghi đầu
SELECT * FROM users LIMIT 5;

-- Sắp xếp
SELECT * FROM users ORDER BY age DESC;
```

### WHERE - Lọc dữ liệu
```sql
-- Lọc theo điều kiện
SELECT * FROM users WHERE age > 23;

-- Nhiều điều kiện
SELECT * FROM users WHERE age > 23 AND email LIKE '%example%';

-- IN operator
SELECT * FROM users WHERE age IN (23, 24, 25);
```

### UPDATE - Cập nhật dữ liệu
```sql
UPDATE users
SET age = 26
WHERE name = 'Nguyễn Văn Trung';
```

### DELETE - Xóa dữ liệu
```sql
DELETE FROM users WHERE id = 1;
```

### ALTER TABLE - Sửa cấu trúc bảng
```sql
-- Thêm cột
ALTER TABLE users ADD COLUMN phone VARCHAR(20);

-- Xóa cột
ALTER TABLE users DROP COLUMN phone;

-- Sửa kiểu dữ liệu
ALTER TABLE users MODIFY COLUMN age INT NOT NULL;
```

## Các hàm tập hợp

```sql
-- COUNT: Đếm số lượng
SELECT COUNT(*) FROM users;

-- SUM: Tính tổng
SELECT SUM(age) FROM users;

-- AVG: Tính trung bình
SELECT AVG(age) FROM users;

-- MAX, MIN
SELECT MAX(age), MIN(age) FROM users;

-- GROUP BY
SELECT age, COUNT(*) as count
FROM users
GROUP BY age;
```

## JOIN - Kết hợp các bảng

```sql
-- Tạo bảng posts
CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(200),
    content TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- INNER JOIN
SELECT users.name, posts.title
FROM users
INNER JOIN posts ON users.id = posts.user_id;

-- LEFT JOIN
SELECT users.name, posts.title
FROM users
LEFT JOIN posts ON users.id = posts.user_id;
```

## Indexes - Tối ưu hóa

```sql
-- Tạo index
CREATE INDEX idx_email ON users(email);

-- Xóa index
DROP INDEX idx_email ON users;
```

## Kết luận

MySQL là nền tảng của hầu hết các ứng dụng web và dự án Data Analysis. Hiểu rõ SQL giúp bạn quản lý dữ liệu hiệu quả, trích xuất thông tin cần thiết, và thực hiện phân tích sâu. Hãy luyện tập các câu lệnh SQL hàng ngày!
