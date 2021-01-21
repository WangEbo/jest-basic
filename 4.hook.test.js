class compute {
    constructor() {
        this.number = 0
    }
    addOne() {
        this.number += 1
    }
    addTwo() {
        this.number += 2
    }
    minusOne() {
        this.number -= 1
    }
    minusTwo() {
        this.number -= 2
    }
}

/****************  执行顺序了解  ******************/
// const Compute = new compute()

// beforeAll(() => {
//     console.log('---beforeAll---')
// })

// afterAll(() => {
//     console.log('---afterAll---')
// })

// beforeEach(() => {
//     console.log('---beforeEach---')
// })

// afterEach(() => {
//     console.log('---afterEach---')
// })

// test('测试 addOne', () => {
//     Compute.addOne()
//     expect(Compute.number).toBe(1)
// })

// test('测试 minusOne', () => {
//     Compute.minusOne()
//     //这里用的同一个Computer实例，上面 +1 ，这里 -1，所以为0
//     expect(Compute.number).toBe(0)
// })

/**  执行顺序了解end  */




/************************** describe内部 钩子 --与执行顺序 ***********************/

// let Compute = null

// beforeAll(() => {
//     console.log('---beforeAll---')
// })

// afterAll(() => {
//     console.log('---afterAll---')
// })

// beforeEach(() => {
//     Compute = new compute()
//     console.log('---beforeEach---')
// })

// afterEach(() => {
//     console.log('---afterEach---')
// })

// describe('测试加法', () => {
//     beforeAll(() => {
//         console.log('---测试加法beforeAll---')
//     })

//     afterAll(() => {
//         console.log('---测试加法afterAll---')
//     })

//     beforeEach(() => {
//         Compute = new compute()
//         console.log('---测试加法beforeEach---')
//     })

//     afterEach(() => {
//         console.log('---测试加法afterEach---')
//     })

//     test('测试 addOne', () => {
//         Compute.addOne()
//         expect(Compute.number).toBe(1)
//     })

//     test('测试 addTwo', () => {
//         Compute.addTwo()
//         expect(Compute.number).toBe(2)
//     })
// })

// describe('测试减法', () => {
//     beforeAll(() => {
//         console.log('---测试减法beforeAll---')
//     })

//     afterAll(() => {
//         console.log('---测试减法afterAll---')
//     })

//     beforeEach(() => {
//         Compute = new compute()
//         console.log('---测试减法beforeEach---')
//     })

//     afterEach(() => {
//         console.log('---测试减法afterEach---')
//     })

//     test('测试 minusOne', () => {
//         Compute.minusOne()
//         expect(Compute.number).toBe(-1)
//     })
//     test('测试 minusTwo', () => {
//         Compute.minusTwo()
//         expect(Compute.number).toBe(-2)
//     })
// })

/****************************** 钩子之外的代码与钩子内的代码执行顺序 **********************************/

// 1，2，3先打印； 不在钩子含函数 和 测试用例中的代码会先被执行

let Compute = null
console.log(1)

beforeAll(() => {
    console.log('---beforeAll---')
})

afterAll(() => {
    console.log('---afterAll---')
})

beforeEach(() => {
    Compute = new compute()
    console.log('---beforeEach---')
})

afterEach(() => {
    console.log('---afterEach---')
})

describe('测试加法', () => {
    console.log(2)

    beforeAll(() => {
        console.log('---测试加法beforeAll---')
    })

    afterAll(() => {
        console.log('---测试加法afterAll---')
    })

    beforeEach(() => {
        Compute = new compute()
        console.log('---测试加法beforeEach---')
    })

    afterEach(() => {
        console.log('---测试加法afterEach---')
    })

    test('测试 addOne', () => {
        Compute.addOne()
        expect(Compute.number).toBe(1)
    })

    test('测试 addTwo', () => {
        Compute.addTwo()
        expect(Compute.number).toBe(2)
    })
})

describe('测试减法', () => {
    console.log(3)

    beforeAll(() => {
        console.log('---测试减法beforeAll---')
    })

    afterAll(() => {
        console.log('---测试减法afterAll---')
    })

    beforeEach(() => {
        Compute = new compute()
        console.log('---测试减法beforeEach---')
    })

    afterEach(() => {
        console.log('---测试减法afterEach---')
    })

    test('测试 minusOne', () => {
        Compute.minusOne()
        expect(Compute.number).toBe(-1)
    })
    test('测试 minusTwo', () => {
        Compute.minusTwo()
        expect(Compute.number).toBe(-2)
    })
})