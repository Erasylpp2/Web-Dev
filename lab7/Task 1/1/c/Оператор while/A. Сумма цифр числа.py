def SumOfDigits(n: int) -> int:
    return sum(int(digit) for digit in str(n))

N = int(input())
print(SumOfDigits(N))
