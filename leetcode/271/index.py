def encode(array):
    acc = ''

    for item in array:
        code = str(len(item)) + "/" + item
        acc += code

    return acc


def decode(strArg):
    array = []
    converted = strArg.split('/')

    for item in converted:
        con = item[len(item)-1]
        try:
            int(con)
            new = item[0:-1]
            if new:
                array.append(new)
        except ValueError:
            array.append(item)

    return array


test = ['karolis', 'is', 'great']
print(encode(test))

test2 = '7/karolis2/is5/great'
print(decode(test2))
