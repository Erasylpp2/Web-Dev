A = list(map(int, input().split()))
count = sum(1 for i in range(1, len(A) - 1) if A[i] > A[i - 1] and A[i] > A[i + 1])
print(count)
