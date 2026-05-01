from heapq import heappop, heappush
def solution(n, edge):
    answer = 0
    graph = [[] for _ in range(n + 1)]
    for a, b in edge:
        graph[a].append(b)
        graph[b].append(a)
    inf = float("inf")
    dist = [inf for _ in range(n + 1)]
    def dijkstra(start):
        dist[start] = 0
        q = [[0, start]]
        while q:
            cost, cur = heappop(q)
            if cost > dist[cur]:
                continue
            
            for next in graph[cur]:
                new_cost = cost + 1
                if dist[next] > new_cost:
                    dist[next] = new_cost
                    heappush(q, [new_cost, next])
    dijkstra(1)
    mx = max(dist[1:])
    answer = dist.count(mx)
        
    return answer