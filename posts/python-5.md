---
title: "Seaborn - Vẽ biểu đồ thống kê nâng cao"
date: "2025-12-05"
category: "Python"
---

## Seaborn là gì?

Seaborn là thư viện xây dựng trên Matplotlib, giúp tạo các biểu đồ thống kê đẹp mắt và chuyên nghiệp hơn, đặc biệt phù hợp cho phân tích dữ liệu.

## Cài đặt

```bash
pip install seaborn
```

## Biểu đồ cơ bản

### Line Plot
```python
import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt

# Dữ liệu mẫu
tips = sns.load_dataset('tips')

sns.lineplot(data=tips, x='size', y='total_bill', hue='sex')
plt.show()
```

### Bar Plot
```python
sns.barplot(data=tips, x='day', y='total_bill', hue='sex')
plt.show()
```

### Count Plot
```python
sns.countplot(data=tips, x='day', hue='sex')
plt.show()
```

### Box Plot
```python
sns.boxplot(data=tips, x='day', y='total_bill', hue='sex')
plt.show()
```

### Violin Plot
```python
sns.violinplot(data=tips, x='day', y='total_bill', hue='sex')
plt.show()
```

### Scatter Plot
```python
sns.scatterplot(data=tips, x='total_bill', y='tip', hue='sex', size='size')
plt.show()
```

### Heatmap
```python
# Tính correlation
corr = tips.corr(numeric_only=True)

# Vẽ heatmap
sns.heatmap(corr, annot=True, cmap='coolwarm', center=0)
plt.show()
```

### Distribution Plot
```python
sns.histplot(data=tips, x='total_bill', hue='sex', kde=True)
plt.show()
```

### Pair Plot
```python
sns.pairplot(tips, hue='sex')
plt.show()
```

### Regression Plot
```python
sns.regplot(data=tips, x='total_bill', y='tip')
plt.show()
```

## Tùy chỉnh style

```python
# Set style
sns.set_style('whitegrid')  # darkgrid, whitegrid, dark, white, ticks

# Set palette
sns.set_palette('husl')  # pastel, dark, bright, colorblind

# Set context
sns.set_context('talk')  # paper, notebook, talk, poster

# Figure size
plt.figure(figsize=(10, 6))
```

## Subplots với FacetGrid

```python
g = sns.FacetGrid(tips, col='sex', hue='day', height=4)
g.map(sns.scatterplot, 'total_bill', 'tip')
plt.show()
```

## Kết luận

Seaborn giúp bạn tạo biểu đồ thống kê nhanh chóng và đẹp mắt mà không cần viết quá nhiều code. Đây là công cụ lý tưởng cho Data Analyst muốn trình bày dữ liệu một cách chuyên nghiệp.
