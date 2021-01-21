import { callbackFun, getData } from './index'
import axios from 'axios'

/****************************************   异步测试   **************************************/


const getDataByAxios = () => {
    return axios.get('http://127.0.0.1:8087/example.json')
}

const getErrorData = () => {
    return axios.get('http://127.0.0.1:8087/example2.json')
}


// 错误 示例    此种方式 无论怎样都会通过  测试用例并不会等到你的请求结束后再去执行测试
//    异步
test('测试 featchData1', () => {
    getDataByAxios((data) => {
        //测试data中是否包含code: 200
        expect(data).toMatchObject({
            code: 200
        })
    })
})

//方式1  使用done方法



it('使用done方法 进行 异步测试', (done) => {
    getDataByAxios().then(res => {
        expect(res.data).toMatchObject({
            code: 200
        })
        done()
    })
})

// //方式2 使用 Promise 对象 直接 return

it('使用 Promise 对象测试异步代码', () => {
    return getDataByAxios().then(res => {
        expect(res.data).toEqual(
            {
                "code": 200,
                "data": [
                    {
                        "name": "sss"
                    }
                ],
                "msg": {

                }
            }
        )
    })
})


test('请求错误测试', () => {
    // 注意 这里如果请求成功的话就不会走catch了，测试会直接通过
    // 因此需要加上下面一句，指定必须只能执行一次expect
    expect.assertions(1)

    return getErrorData().catch(e => {
        expect(e.toString()).toEqual('Error: Request failed with status code 404')
    })

    //反面教材
    // return getDataByAxios().catch(e => {
    //     expect(e.toString()).toEqual('Error: Request failed with status code 404')
    // })
})


// //方式3  直接 使用 return  + resolves / rejects 写法
// //.resolves 和 .rejects 可以将promise 的值返回，方便直接链式调用匹配器


test('测试直接 用 .resolves 测试异步代码', () => {
    return expect(getDataByAxios()).resolves.toMatchObject({
        data: {
            code: 200
        }
    })
})

// test('测试 .rejects 测试异步代码', () => {
//     return expect(getErrorData()).rejects.toThrow();
// })


// //方式4  使用 async awiat

test('测试getData, 使用__mocks__', async () => {
    const data = await getDataByAxios();
    expect(data).toMatchObject({
        data: {
            code: 200
        }
    })
})