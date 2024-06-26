function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
        throw new Error("Both arrays must have the same length");
    }

    let userProfiles = [];

    for (let i = 0; i < originalNames.length; i++) {
        userProfiles.push({
            id: i + 1,
            originalName: originalNames[i],
            modifiedName: modifiedNames[i]
        });
    }

    return userProfiles;
}

// Example usage:
const originalNames = ["Alice", "Bob", "Charlie"];
const modifiedNames = ["Alicia", "Bobby", "Charles"];

const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
/*
[
    { id: 1, originalName: 'Alice', modifiedName: 'Alicia' },
    { id: 2, originalName: 'Bob', modifiedName: 'Bobby' },
    { id: 3, originalName: 'Charlie', modifiedName: 'Charles' }
]
*/
