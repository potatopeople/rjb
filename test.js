var obj = [{ name: 100, count: '123' }]
data = obj.map(item => {
    return {
        name: item.name
    }
})
console.log(data)