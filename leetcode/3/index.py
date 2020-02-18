def lengthOfLongestSubstring(s):
    longest = 1 if len(s) == 1 else 0

    for idx, el in enumerate(s):
        newStr = s[idx:]
        tempLongest = 0
        tempHash = {}

        for idx, el in enumerate(newStr):
            if el in tempHash:
                longest = max(tempLongest, longest)
                break

            tempHash[el] = True
            tempLongest += 1

            if len(newStr) - 1 == idx:
                longest = max(tempLongest, longest)
                break

    return longest


test = 'abcabcbb'
print(lengthOfLongestSubstring(test))
