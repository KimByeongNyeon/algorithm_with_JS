function solution(n, arr1, arr2) {
    var answer = [];
    var toBin1 = arr1.map((value) => value.toString(2).padStart(n, '0').split('').map((value) => parseInt(value)))
    
    var toBin2 = arr2.map((value) => value.toString(2).padStart(n, '0').split('').map((value) => parseInt(value)))
    
    var answer = toBin1.reduce((acc, row, idx) => {
        const newRow = row.reduce((inner, val, col) => {
            inner.push(val + toBin2[idx][col]);
            return inner;
        }, [])
        acc.push(newRow);
        return acc;
    }, [])

    return answer.map(row =>row.map(num => (num === 0 ? ' ' : '#')).join('')
);
}