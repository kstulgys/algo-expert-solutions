import re


def isPalindrome(s):

    s = re.sub(r'[\W_]', "", s).lower()

    left = 0
    right = len(s) - 1

    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1

    return True


test = 'A man, a plan, a canal: Panama'
print(isPalindrome(test))
