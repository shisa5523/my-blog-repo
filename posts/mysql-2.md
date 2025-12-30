---
title: "MySQL nâng cao - Tối ưu hóa truy vấn"
date: "2025-12-07"
category: "MySQL"
---

## Tối ưu hóa truy vấn

### EXPLAIN - Phân tích truy vấn
```sql
EXPLAIN SELECT * FROM users WHERE id = 1;

EXPLAIN SELECT users.name, COUNT(posts.id) as post_count
FROM users
LEFT JOIN posts ON users.id = posts.user_id
GROUP BY users.id;
```

### Các vấn đề thường gặp
- Queries chậm: Sử dụng EXPLAIN để tìm병목
- N+1 Query Problem: Sử dụng JOIN thay vì lấy từng bản ghi
- Missing Indexes: Tạo index cho cột WHERE và JOIN

### Ví dụ tối ưu hóa

**Trước:**
```sql
SELECT * FROM users;
-- Sau đó loop qua từng user và SELECT posts

SELECT * FROM posts WHERE user_id = 1;
SELECT * FROM posts WHERE user_id = 2;
-- ... N queries thêm
```

**Sau:**
```sql
SELECT users.*, posts.*
FROM users
LEFT JOIN posts ON users.id = posts.user_id;
```

## Transactions (Giao dịch)

```sql
START TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Nếu lỗi
ROLLBACK;

-- Nếu thành công
COMMIT;
```

## Views (Bảng ảo)

```sql
-- Tạo VIEW
CREATE VIEW user_post_count AS
SELECT users.id, users.name, COUNT(posts.id) as post_count
FROM users
LEFT JOIN posts ON users.id = posts.user_id
GROUP BY users.id;

-- Sử dụng VIEW
SELECT * FROM user_post_count;

-- Xóa VIEW
DROP VIEW user_post_count;
```

## Stored Procedures

```sql
-- Tạo Stored Procedure
DELIMITER //
CREATE PROCEDURE GetUserPosts(IN userId INT)
BEGIN
    SELECT p.* FROM posts p
    WHERE p.user_id = userId;
END //
DELIMITER ;

-- Gọi Stored Procedure
CALL GetUserPosts(1);
```

## Triggers

```sql
-- Tạo trigger
CREATE TRIGGER update_user_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
SET NEW.updated_at = CURRENT_TIMESTAMP;
```

## Backup và Restore

```bash
# Backup Database
mysqldump -u root -p blog_db > backup.sql

# Restore Database
mysql -u root -p blog_db < backup.sql

# Backup all databases
mysqldump -u root -p --all-databases > all_backup.sql
```

## Quản lý Users và Permissions

```sql
-- Tạo user
CREATE USER 'analyst'@'localhost' IDENTIFIED BY 'password123';

-- Cấp quyền
GRANT SELECT, INSERT, UPDATE ON blog_db.* TO 'analyst'@'localhost';

-- Xem quyền
SHOW GRANTS FOR 'analyst'@'localhost';

-- Thu hồi quyền
REVOKE INSERT ON blog_db.* FROM 'analyst'@'localhost';
```

## Best Practices

1. **Luôn sử dụng PRIMARY KEY**
2. **Tạo INDEXES cho cột WHERE và JOIN**
3. **Sử dụng appropriate data types**
4. **Tránh SELECT \***
5. **Sử dụng LIMIT khi cần**
6. **Validate data trước khi INSERT**
7. **Sử dụng Prepared Statements để tránh SQL Injection**
8. **Backup thường xuyên**

## Kết luận

Hiểu rõ MySQL nâng cao giúp bạn viết code hiệu quả, an toàn, và nhanh chóng. Đây là kỹ năng thiết yếu cho bất kỳ Data Analyst hay Developer nào.
