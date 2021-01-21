const sum = require('./sum'); 

test('adds 1 + 2 to equal 3', () => { 
	// expect  jest 提供的断言
	expect(sum(1, 2)).toBe(3); 
});

//错误结果展示
// test('adds 1 + 2 to equal 4', () => { 
// 	// expect  jest 提供的断言
// 	expect(sum(1, 2)).toBe(4); 
// });