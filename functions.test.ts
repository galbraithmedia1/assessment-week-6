const {shuffleArray} = require('./utils')






test("items should be shuffled", ()=>{
    const shuf= [1,2,3,4,5]
    expect(shuffleArray([1,2,3,4,5])).not.toEqual((shuf))

})

test("test the length", ()=>{
    const random = shuffleArray([55,234,4,1345,3,42,54,3]);
    expect(random).toHaveLength(8);
})

test("items are the same in the array", ()=>{
    const items = [1,2,3,4,5,6,7]
    expect(shuffleArray([7,6,5,4,3,2,1])).toEqual(expect.arrayContaining(items))

})