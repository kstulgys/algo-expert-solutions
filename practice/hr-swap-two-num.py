def getNumOfSwapsToSort(array):
    sorted = array.copy()
    sorted.sort()

    swaps = 0

    def swap():
        currentSwaps = 0
        for i, el in enumerate(array):
            if ((len(array) - 1) == i) and currentSwaps != 0:
                swap()

            elif el != sorted[i]:
                idx = sorted.index(el)
                temp = array[idx]
                array[idx] = el
                array[i] = temp
                # UnboundLocalError: local variable 'swaps' referenced before assignment
                # if I use global swaps, then NameError: name 'swaps' is not defined
                nonlocal swaps
                swaps += 1
                currentSwaps += 1

    swap()

    return swaps


testArray2 = [3, 7, 6, 9, 1, 8, 10, 4, 2, 5]
testArray = [7, 1, 3, 5, 2, 4, 6]

print(getNumOfSwapsToSort(testArray))
# print('yo')
