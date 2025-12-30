---
title: "Matplotlib - Vẽ biểu đồ chuyên nghiệp"
date: "2025-12-04"
category: "Python"
---

## Matplotlib là gì?

Matplotlib là thư viện vẽ biểu đồ (visualization) phổ biến nhất trong Python. Nó cho phép bạn tạo các biểu đồ đẹp, chuyên nghiệp từ dữ liệu.

## Cài đặt

```bash
pip install matplotlib
```

## Vẽ biểu đồ cơ bản

### Line Plot
```python
import matplotlib.pyplot as plt
import numpy as np

# Dữ liệu
x = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 6, 8, 10])

# Vẽ line chart
plt.plot(x, y, marker='o', linestyle='-', linewidth=2)
plt.xlabel('X Axis')
plt.ylabel('Y Axis')
plt.title('Line Chart')
plt.show()
```

### Bar Chart
```python
categories = ['Python', 'Java', 'JavaScript', 'C++', 'Ruby']
values = [85, 72, 68, 60, 45]

plt.bar(categories, values, color=['blue', 'orange', 'green', 'red', 'purple'])
plt.xlabel('Languages')
plt.ylabel('Popularity')
plt.title('Programming Languages Popularity')
plt.xticks(rotation=45)
plt.show()
```

### Histogram
```python
data = np.random.normal(100, 15, 1000)

plt.hist(data, bins=30, color='skyblue', edgecolor='black')
plt.xlabel('Values')
plt.ylabel('Frequency')
plt.title('Distribution')
plt.show()
```

### Pie Chart
```python
labels = ['Python', 'MySQL', 'Data Tools', 'Others']
sizes = [40, 30, 20, 10]
colors = ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99']

plt.pie(sizes, labels=labels, colors=colors, autopct='%1.1f%%')
plt.title('Data Analysis Tools Distribution')
plt.show()
```

### Scatter Plot
```python
x = np.random.rand(100)
y = np.random.rand(100)

plt.scatter(x, y, alpha=0.6, s=100, c=y, cmap='viridis')
plt.colorbar(label='Y Values')
plt.xlabel('X Values')
plt.ylabel('Y Values')
plt.title('Scatter Plot')
plt.show()
```

## Subplots

```python
fig, axes = plt.subplots(2, 2, figsize=(10, 8))

# Plot 1
axes[0, 0].plot([1, 2, 3], [1, 4, 9])
axes[0, 0].set_title('Plot 1')

# Plot 2
axes[0, 1].bar(['A', 'B', 'C'], [3, 7, 5])
axes[0, 1].set_title('Plot 2')

# Plot 3
axes[1, 0].scatter([1, 2, 3], [1, 2, 3])
axes[1, 0].set_title('Plot 3')

# Plot 4
axes[1, 1].hist([1, 1, 2, 2, 2, 3, 3, 3, 3])
axes[1, 1].set_title('Plot 4')

plt.tight_layout()
plt.show()
```

## Tùy chỉnh

```python
# Thay đổi kích thước
plt.figure(figsize=(12, 6))

# Thay đổi font
plt.rcParams['font.size'] = 12

# Lưu hình
plt.savefig('chart.png', dpi=300, bbox_inches='tight')

# Grid
plt.grid(True, alpha=0.3)
```

## Kết luận

Matplotlib là công cụ mạnh mẽ để trực quan hóa dữ liệu. Với Matplotlib, bạn có thể tạo bất kỳ loại biểu đồ nào, từ đơn giản đến phức tạp, giúp bạn hiểu và trình bày dữ liệu một cách hiệu quả.
