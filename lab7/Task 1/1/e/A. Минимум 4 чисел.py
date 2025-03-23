def min_value(a: int, b: int, c: int, d: int) -> int:
    return min(a, b, c, d)

a, b, c, d = map(int, input().split())
print(min_value(a, b, c, d))
