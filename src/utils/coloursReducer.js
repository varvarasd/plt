const coloursReducer = (arr) => {
    const uniqueColours = arr.reduce((acc, curr) => {
        return acc.includes(curr.colour) ? acc : [...acc, curr.colour];
    }, []);
    return uniqueColours;
}

export default coloursReducer;