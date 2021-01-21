/**匹配器介绍 */

/** .toEqual(value)：匹配值，只匹配内容不匹配引用，可以用于引用类型的匹配 */

const can1 = {
    flavor: 'grapefruit',
    ounces: 12,
  };
  
  const can2 = {
    flavor: 'grapefruit',
    ounces: 12,
  };
  
  test('have all the same properties', () => {
    expect(can1).toEqual(can2);
  });


/** .toMatchObject(object)：匹配对象/数组是否属于子集 */

test('test toMatchObject', () => {
    let obj = {
      name: 'Jsoning',
      age: 24,
      area: 'bj'
    }
  
    let arr = [
      {
        foo: 'bar',
        name: 'Jsoning'
      },
      {
        baz: 1,
        age: 24
      }
    ]
  
    expect(obj).toMatchObject({
      name: 'Jsoning'
    })
  
    expect(obj).toMatchObject({
      name: 'Jsoning',
      age: 24,
      area: 'bj'
    })
  
    expect(arr).toMatchObject([
      {
        foo: 'bar'
      },
      {
        baz: 1
      }
    ])
  })


/**  .toContain(item)：匹配数组/Set/字符串中是否包含item */

test('test toContain', () => {
    let name = 'Jsoning'
    let arr = ['Jsoning', 'age']
    let set = new Set(arr)
  
    expect(name).toContain('Json')
    expect(arr).toContain('Jsoning')
    expect(set).toContain('age')
})

