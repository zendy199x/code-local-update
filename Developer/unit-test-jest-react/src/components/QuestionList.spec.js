describe (`The question list`, () => {
    beforeEach(() => {
        console.log('Before each !')
    })

    beforeAll(() => {
        console.log('Before all !')
    })

    afterEach(() => {
        console.log('After each !')
    })

    afterAll(() => {
        console.log('After all !')
    })

    it (`should display a list of items 1`, () => {
        expect(2  + 2).toEqual(4);
    })

    it.only(`should display a list of items`, () => {
        expect(1 + 1).toEqual(2);
    })

    it.skip(`should be the meaning of life`, () => {
        expect(1 + 1).toEqual(3);
    })
})