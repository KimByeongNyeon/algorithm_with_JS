function solution(sizes) {
    var width = []
    var height = []
    for (var i = 0; i < sizes.length; i++) {
        const mx = Math.max(sizes[i][0], sizes[i][1]);
        const mn = Math.min(sizes[i][0], sizes[i][1])
        
        width.push(mx)
        height.push(mn)
    }
    return (Math.max(...width)) * (Math.max(...height));
}