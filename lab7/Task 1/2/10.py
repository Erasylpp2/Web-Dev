n = int(input())
records = {data[0]: list(map(float, data[1:])) for data in [input().split() for _ in range(n)]}
query_name = input()
print(f"{sum(records[query_name]) / len(records[query_name]):.2f}")
