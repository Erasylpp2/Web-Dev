def integer_division(a: int, b: int) -> int:
    return a // b

def float_division(a: int, b: int) -> float:
    return a / b

a = int(input())
b = int(input())

print(integer_division(a, b))
print(float_division(a, b))
