---
title: "Python kết nối MySQL - Thực hành toàn bộ cycle"
date: "2025-12-10"
category: "Python"
---

## Tại sao kết nối Python với MySQL?

Trong thực tế, dữ liệu được lưu trữ trong MySQL Database. Để trích xuất, phân tích dữ liệu, chúng ta cần kết nối Python với MySQL. Với Python, bạn có thể:
- Lấy dữ liệu từ database
- Thực hiện phân tích
- Lưu kết quả trở lại database
- Tự động hóa công việc

## Cài đặt MySQL connector

```bash
pip install mysql-connector-python
```

## Kết nối cơ bản

```python
import mysql.connector

# Kết nối database
connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your_password",
    database="blog_db"
)

# Tạo cursor để thực thi lệnh
cursor = connection.cursor()

# Thực thi query
cursor.execute("SELECT * FROM users")

# Lấy kết quả
result = cursor.fetchall()
for row in result:
    print(row)

# Đóng connection
cursor.close()
connection.close()
```

## SELECT dữ liệu

```python
import mysql.connector

connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your_password",
    database="blog_db"
)

cursor = connection.cursor()

# Lấy tất cả
cursor.execute("SELECT * FROM users")
all_users = cursor.fetchall()

# Lấy 5 bản ghi đầu
cursor.execute("SELECT * FROM users LIMIT 5")
limited_users = cursor.fetchall()

# Lấy 1 bản ghi
cursor.execute("SELECT * FROM users WHERE id = 1")
user = cursor.fetchone()

# Lấy số cột
print(cursor.column_names)  # Tên cột

cursor.close()
connection.close()
```

## INSERT dữ liệu

```python
connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your_password",
    database="blog_db"
)

cursor = connection.cursor()

# Insert một bản ghi
sql = "INSERT INTO users (name, email, age) VALUES (%s, %s, %s)"
val = ("Nguyễn Văn Trung", "trung@example.com", 25)

cursor.execute(sql, val)
connection.commit()  # Lưu lại

print(cursor.rowcount, "bản ghi được thêm")

cursor.close()
connection.close()
```

## INSERT nhiều bản ghi

```python
connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your_password",
    database="blog_db"
)

cursor = connection.cursor()

sql = "INSERT INTO users (name, email, age) VALUES (%s, %s, %s)"
val = [
    ("Lê Thị Linh", "linh@example.com", 23),
    ("Phạm Minh Huy", "huy@example.com", 24),
    ("Trần Quốc Anh", "anh@example.com", 26)
]

cursor.executemany(sql, val)
connection.commit()

print(cursor.rowcount, "bản ghi được thêm")

cursor.close()
connection.close()
```

## UPDATE dữ liệu

```python
connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your_password",
    database="blog_db"
)

cursor = connection.cursor()

sql = "UPDATE users SET age = %s WHERE name = %s"
val = (26, "Nguyễn Văn Trung")

cursor.execute(sql, val)
connection.commit()

print(cursor.rowcount, "bản ghi được cập nhật")

cursor.close()
connection.close()
```

## DELETE dữ liệu

```python
connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your_password",
    database="blog_db"
)

cursor = connection.cursor()

sql = "DELETE FROM users WHERE id = %s"
val = (1,)

cursor.execute(sql, val)
connection.commit()

print(cursor.rowcount, "bản ghi được xóa")

cursor.close()
connection.close()
```

## Pandas + MySQL

Kết hợp Pandas với MySQL để xử lý dữ liệu hiệu quả.

```python
import pandas as pd
import mysql.connector
from sqlalchemy import create_engine

# Tạo engine kết nối
engine = create_engine('mysql+mysqlconnector://root:password@localhost:3306/blog_db')

# Đọc từ database vào DataFrame
df = pd.read_sql("SELECT * FROM users", con=engine)
print(df)

# Lọc dữ liệu
high_age = df[df['age'] > 24]
print(high_age)

# Ghi DataFrame vào database
df.to_sql('users_backup', con=engine, if_exists='replace')
```

## Error Handling

```python
import mysql.connector
from mysql.connector import Error

try:
    connection = mysql.connector.connect(
        host="localhost",
        user="root",
        password="your_password",
        database="blog_db"
    )

    cursor = connection.cursor()
    cursor.execute("SELECT * FROM users")
    result = cursor.fetchall()
    
    for row in result:
        print(row)

except Error as err:
    if err.errno == 2003:
        print("Không thể kết nối đến server MySQL")
    elif err.errno == 1045:
        print("Username hoặc password sai")
    else:
        print(err)

finally:
    if connection.is_connected():
        cursor.close()
        connection.close()
```

## Best Practices

1. **Sử dụng parameterized queries** để tránh SQL Injection
2. **Luôn đóng connection** sau khi dùng xong
3. **Sử dụng try-except** để xử lý errors
4. **Validate data** trước khi insert
5. **Sử dụng connection pool** cho ứng dụng production
6. **Không lưu password** trong code, sử dụng environment variables

## Kết luận

Kết nối Python với MySQL cho phép bạn tự động hóa công việc, từ lấy dữ liệu, phân tích, đến lưu kết quả. Đây là kỹ năng thiết yếu cho bất kỳ Data Analyst hoặc Developer nào.
