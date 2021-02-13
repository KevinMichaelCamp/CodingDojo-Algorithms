/* Given phone number, return all possible words created from letters on numbers,
[2:ABC; 3:DEF; 4:GHI; 5:JKL; 6:MNO; 7:PQRS; 8:TUV; 9:WXYZ] –
for completeness, map 1 to I and zero to O. */

function PhoneWords(nums) {
    let result = [];
    let mapping = ["O", "I", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
    rPhoneWords(nums, 0, "", result, mapping);
    return result;
}

function rPhoneWords(nums, pos, name, result, mapping) {
    if (pos == nums.length) {
        result.push(name);
        return;
    }

    const keys = mapping[nums[pos]];

    for (let i = 0; i < keys.length; i++) {
        rPhoneWords(nums, pos + 1, name + keys[i], result, mapping);
    }
}

// Test Cases
console.table(PhoneWords('972'));
console.table(PhoneWords('975'));
console.table(PhoneWords('2058'));
