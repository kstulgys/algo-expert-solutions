def isAnagram(s, t):
    if len(s) != len(t):
        return False

    for l in s:
        t = t.replace(l, "", 1)

    return len(t) == 0


test1 = 'anagramas'
test2 = 'snagarama'
print(isAnagram(test1, test2))
