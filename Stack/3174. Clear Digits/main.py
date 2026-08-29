def clearDigits(s):
    result = []
    result.append(s[0])
    
    for c in range(1, len(s)):
        if s[c].isdigit() and not s[len(result) - 1].isdigit():
            result.pop()
        else:
            result.append(s[c])
    return ''.join(result)


print(clearDigits('abc'))