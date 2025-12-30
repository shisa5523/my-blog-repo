---
title: "NumPy - Tính toán khoa học hiệu quả"
date: "2025-12-03"
category: "Python"
---

## NumPy là gì?

NumPy (Numerical Python) là thư viện cơ sở cho tính toán khoa học trong Python. Nó cung cấp công cụ làm việc với mảng đa chiều (arrays) và các hàm toán học cao cấp.

## Cài đặt NumPy

```bash
pip install numpy
```

## Tạo Arrays

### Array 1 chiều
```python
import numpy as np

# Từ danh sách
arr = np.array([1, 2, 3, 4, 5])
print(arr)

# Tạo array với giá trị 0
zeros = np.zeros(5)

# Tạo array với giá trị 1
ones = np.ones(5)

# Tạo dãy số từ 0 đến 9
range_arr = np.arange(0, 10)
```

### Array 2 chiều
```python
# Matrix 2D
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix.shape)  # (2, 3)
```

## Các phép toán

```python
arr = np.array([1, 2, 3, 4, 5])

# Cộng
print(arr + 2)  # [3 4 5 6 7]

# Nhân
print(arr * 2)  # [2 4 6 8 10]

# Bình phương
print(arr ** 2)  # [1 4 9 16 25]

# Căn bậc 2
print(np.sqrt(arr))
```

## Thống kê

```python
arr = np.array([1, 2, 3, 4, 5])

print(np.mean(arr))      # Trung bình
print(np.median(arr))    # Trung vị
print(np.std(arr))       # Độ lệch chuẩn
print(np.sum(arr))       # Tổng
print(np.max(arr))       # Giá trị lớn nhất
print(np.min(arr))       # Giá trị nhỏ nhất
```

## Reshaping Arrays

```python
arr = np.arange(12)

# Reshape thành 3x4
reshaped = arr.reshape(3, 4)

# Flatten
flattened = reshaped.flatten()
```

## Indexing và Slicing

```python
arr = np.arange(10)

# Lấy phần tử tại index 0
print(arr[0])  # 0

# Slicing
print(arr[2:5])  # [2 3 4]

# Step
print(arr[::2])  # [0 2 4 6 8]
```

## Boolean Indexing

```python
arr = np.array([1, 2, 3, 4, 5])

# Lấy những phần tử > 3
print(arr[arr > 3])  # [4 5]
```

## Kết luận

NumPy là nền tảng của khoa học dữ liệu trong Python. Nó giúp bạn thực hiện các tính toán phức tạp nhanh chóng và hiệu quả, là yêu cầu thiết yếu trước khi học Pandas hay các thư viện advanced khác.
