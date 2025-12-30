---
title: "Pandas - Thao tác dữ liệu như một chuyên gia"
date: "2025-12-02"
category: "Python"
---

## Pandas là gì?

Pandas là thư viện Python mạnh mẽ để xử lý và phân tích dữ liệu. Nó cung cấp hai cấu trúc dữ liệu chính: Series (1D) và DataFrame (2D), giúp bạn dễ dàng làm việc với dữ liệu dạng bảng.

## Cài đặt Pandas

```bash
pip install pandas
```

## Khái niệm cơ bản

### Series
```python
import pandas as pd

# Tạo Series
s = pd.Series([10, 20, 30, 40])
print(s)
```

### DataFrame
```python
# Tạo DataFrame từ dictionary
data = {
    'Name': ['Trung', 'Linh', 'Huy'],
    'Age': [25, 23, 24],
    'Score': [8.5, 9.0, 8.8]
}
df = pd.DataFrame(data)
print(df)
```

## Đọc và ghi dữ liệu

```python
# Đọc từ CSV
df = pd.read_csv('data.csv')

# Ghi ra CSV
df.to_csv('output.csv', index=False)

# Đọc từ Excel
df = pd.read_excel('data.xlsx')

# Ghi ra Excel
df.to_excel('output.xlsx', index=False)
```

## Thao tác dữ liệu

### Chọn cột
```python
# Chọn một cột
ages = df['Age']

# Chọn nhiều cột
subset = df[['Name', 'Age']]
```

### Lọc dữ liệu
```python
# Lọc những sinh viên có điểm > 8.5
high_scores = df[df['Score'] > 8.5]
```

### Sắp xếp
```python
# Sắp xếp theo Score giảm dần
sorted_df = df.sort_values('Score', ascending=False)
```

### Thống kê
```python
# Thông tin chung về DataFrame
df.info()

# Thống kê cơ bản
df.describe()

# Tính toán
print(df['Age'].mean())  # Trung bình tuổi
print(df['Score'].max())  # Điểm cao nhất
```

## Xử lý dữ liệu thiếu

```python
# Kiểm tra giá trị NaN
print(df.isnull())

# Xóa hàng có NaN
df = df.dropna()

# Điền giá trị NaN
df['Age'].fillna(df['Age'].mean(), inplace=True)
```

## Group By

```python
# Nhóm theo category
grouped = df.groupby('Category')['Price'].sum()
```

## Merge và Join

```python
# Merge hai DataFrame
merged = pd.merge(df1, df2, on='ID')

# Concat theo hàng
combined = pd.concat([df1, df2])
```

## Conclusion

Pandas là công cụ không thể thiếu cho bất kỳ Data Analyst nào. Với Pandas, bạn có thể xử lý dữ liệu nhanh chóng, hiệu quả và tập trung vào phân tích thay vì đấu tranh với dữ liệu.
