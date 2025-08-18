function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var queue = Array(bridge_length).fill(0); // 다리 길이만큼 큐 (트럭 없으면 0)
    var currentWeight = 0; // 현재 다리 위 총 무게

    while (queue.length > 0) {
        answer++;

        currentWeight -= queue.shift();
        

        if (truck_weights.length > 0) {
            if (currentWeight + truck_weights[0] <= weight) {
                let truck = truck_weights.shift();
                queue.push(truck);
                currentWeight += truck;
            } else {
                queue.push(0);
            }
        }
    }

    return answer;
}
