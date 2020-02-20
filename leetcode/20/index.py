def isValid(s):
    stack = []

    hashMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for val in s:
        if val in hashMap:
            stack.append(val)
        elif len(stack) == 0 or val != hashMap[stack.pop()]:
            return False

    return len(stack) == 0


test = '{(){}[]}'
print(isValid(test))
