def two_number_sum(array, sum):
    hash = {}
    for element in array:
        potentialMatch = sum - element
        if potentialMatch in hash:
            return [potentialMatch, element]
        else:
            hash[element] = True

    return []


array = [3, 5, -4, 8, 11, 1, -1, 6]
sum = 10
print(two_number_sum(array, sum))
