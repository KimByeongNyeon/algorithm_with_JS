import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Main {
    static ArrayList<Integer>[] graph;
    static boolean[] visited;
    static boolean found;

    public static void main(String[] args) {
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            StringTokenizer st = new StringTokenizer(br.readLine());

            int N = Integer.parseInt(st.nextToken());
            int M = Integer.parseInt(st.nextToken());

            graph = new ArrayList[N];
            visited = new boolean[N];

            for (int i = 0; i < N; i++) {
                graph[i] = new ArrayList<>();
            }

            for (int i = 0; i < M; i++) {
                st = new StringTokenizer(br.readLine());
                int u = Integer.parseInt(st.nextToken());
                int v = Integer.parseInt(st.nextToken());

                graph[u].add(v);
                graph[v].add(u);  // 양방향 그래프로 가정
            }

            found = false;
            for (int i = 0; i < N; i++) {
                if (!found) {
                    visited[i] = true;
                    DFS(i, 1);
                    visited[i] = false;
                }
            }

            System.out.println(found ? 1 : 0);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void DFS(int node, int depth) {
        if (depth == 5) {
            found = true;
            return;
        }

        for (int nextNode : graph[node]) {
            if (!visited[nextNode]) {
                visited[nextNode] = true;
                DFS(nextNode, depth + 1);
                visited[nextNode] = false;
            }
        }
    }
}