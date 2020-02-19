def groupAnagrams(strs):
    hash = {}

    for word in strs:
        key = "".join(sorted(word))
        if key not in hash:
            hash[key] = [word]
        else:
            hash[key].append(word)

    return list(hash.values())


test = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
print(groupAnagrams(test))
