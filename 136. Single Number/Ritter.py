class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        occ = {}
        for i in nums:
            if i not in occ.keys():
                occ[i] = 1
            else:
                occ[i] += 1
        for j, k in occ.items():
            if k == 1:
                return j
