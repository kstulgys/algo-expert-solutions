def longestPalindrome(s):
    longest = ''

    for idx in range(len(s)):
        around = expandAroundCenter(s, idx - 1, idx + 1)
        between = expandAroundCenter(s, idx, idx + 1)
        longest = max(around, between, longest, key=len)

    return longest


def expandAroundCenter(s, left, right):
    while left >= 0 and right < len(s) and s[left] == s[right]:
        left -= 1
        right += 1

    str = s[left + 1:right]
    return str


test = 'abadd'


print(longestPalindrome(test))
