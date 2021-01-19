import { callbackFun, getData } from './index'
import axios from 'axios'
jest.mock('axios')

test('测试 getData ,使用mock', async()=>{
    axios.get.mockResolvedValueOnce({
        data:'123'
    })

    axios.get.mockResolvedValue({
        data:'456'
    })

    const data1 = await getData();
    console.log(data1);
    const data2 = await getData();

    expect(data1.data).toBe('123');
    expect(data2.data).toBe('456');
})

/********************************************************   使用 __mocks__   ********************************************************/

// jest.mock('./index');

// import { getData } from './index' //会去__mocks__文件夹找

// // 设置callbackFun 方法从源文件index中查找
// const { callbackFun } = jest.requireActual('./index');



// test('测试callbackFun,使用mockReturnValueOnce设置返回值',()=>{
//     let fun = jest.fn();
//     fun.mockReturnValueOnce('123');

//     expect(callbackFun(fun)).toBe('123')
// })

/********************************************************  mock 使用  end ***********************************************************/

/********************************************************   定时器及虚拟时间 使用  **************************************************/

// import { timer1 , timer2 } from './index'

//使用done 对定时器 进行测试
// it 是test 的 别名
// it('使用done,测试定时器', (done)=>{
//     var date =  new Date().getTime();
//     timer1(()=>{
//         console.log('timer 执行', new Date().getTime() - date );
//         expect(1).toBe(1);
//         done();
//     })
// })

//使用beforeEach 钩子
// beforeEach(() => {
//     jest.useFakeTimers()//      设置 使用虚假时间
// })

// it('使用useFakeTimers + runAllTimers 方法，测试定时器timer1', () => {
//     const fn = jest.fn();
//     let  date = new Date().getTime();
//     fn.mockImplementationOnce(()=>{
//         console.log('fn调用',new Date().getTime() - date);
//     })
//     timer1(fn);
//     jest.runAllTimers();//运行所有timer
//     expect(fn).toHaveBeenCalledTimes(1) // 测试函数调用次数
//   })

// it('使用useFakeTimers + advanceTimersByTime 方法,测试定时器tier2',()=>{
//     const fn = jest.fn();
//     timer2(fn);
//     jest.advanceTimersByTime(3000);
//     expect(fn).toHaveBeenCalledTimes(1);
//     jest.advanceTimersByTime(3000);
//     expect(fn).toHaveBeenCalledTimes(2);
// })

/********************************************************   定时器及虚拟时间 使用 end  **************************************************/

/*******************************************************    使用 snapshot 功能  ***********************************************/

import { data1, data2 } from "./index";

//测试快照 会在根目录 生成 __snapshots__ 文件夹
// it('测试快照 data1',()=>{
//     expect(data1()).toMatchSnapshot({
//         name: 'Jsoning',
//         age: 26,
//         time: '2020.1.1'
//     })
// })

// it('测试快照 data3',()=>{
//     expect(data2()).toMatchSnapshot({
//         name: 'Jsoning',
//         age: 26,
//         time: expect.any(Date)
//     })
// })

// 安装prettier模块，生成行内快照需要依赖这个模块
it("测试快照 data1", () => {
  expect(data1()).toMatchInlineSnapshot(
    {
      name: "Jsoning",
      age: 26,
      time: "2020.1.1",
    },
    `
    Object {
      "age": 26,
      "name": "Jsoning",
      "time": "2020.1.1",
    }
  `
  );
});

it("测试快照 data3", () => {
  expect(data2()).toMatchInlineSnapshot(
    {
      name: "Jsoning",
      age: 26,
      time: expect.any(Date),
    },
    `
    Object {
      "age": 26,
      "name": "Jsoning",
      "time": Any<Date>,
    }
  `
  );
});
