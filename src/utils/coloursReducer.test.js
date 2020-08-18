import coloursReducer from './coloursReducer';

describe('coloursReducer', () => {
    it('extracts unique color properties from the given array', () => {
        const arr = [{colour: 'red'}, {colour: 'red'}, {colour: 'blue'}];
        expect(coloursReducer(arr)).toEqual(["red", "blue"])
    })
})