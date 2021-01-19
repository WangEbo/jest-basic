import { callbackFun, getData } from './index'


/*****************************************    使用mock     *****************************/

test('测试 callbackFun，使用mockReturnValueOnce设置返回值', ()=>{
    let fun = jest.fn();
    fun.mockReturnValueOnce('123');//设置调用 函数 1次的返回值
    fun.mockReturnValueOnce('456');//设置调用函数 2次的返回值
    fun.mockReturnValue('666');//

    expect(callbackFun(fun)).toBe('123');
    expect(callbackFun(fun)).toBe('456');
    expect(callbackFun(fun)).toBe('666');
    expect(callbackFun(fun)).toBe('666');

    console.log(fun.mock);
})

test('测试callbackFun,使用mockImplementation设置返回值', ()=>{
    let fun = jest.fn();
    // 设置调用 函数 1次的返回值
    fun.mockImplementationOnce(()=>{
        return '123'
    })
    //设置每次调用函数的值都为666
    fun.mockImplementation(()=>{
        return '666'
    })

    expect(callbackFun(fun)).toBe('123');
    expect(callbackFun(fun)).toBe('666');
    expect(callbackFun(fun)).toBe('666');
})

test('测试 callbackFun ，使用mock属性测试',()=>{
    let fun = jest.fn();
    fun.mockReturnValueOnce('123');
    fun.mockReturnValue('666');

    let obj = {};
    callbackFun(fun.bind(obj));
    callbackFun(fun);

    expect(fun).toBeCalled(); //测试函数fun 是否被调用
    expect(fun.mock.calls.length).toBe(2)//测试函数是否被调用两次
    expect(fun.mock.instances[0]).toEqual(obj);//测试第一次调用this是否是obj
    expect(fun.mock.calls[0][0]).toBeUndefined();//测试第一次调用函数的 参数是否为空
    console.log(fun.mock);

})
