def has22(nums):
    return any(nums[i] == 2 and nums[i+1] == 2 for i in range(len(nums)-1))
