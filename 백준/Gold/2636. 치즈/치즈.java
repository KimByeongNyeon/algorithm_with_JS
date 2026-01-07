import java.io.*;
import java.util.*;

public class Main {
    static int N, M;
    static int[][] arr;
    static boolean[][] visited;
    static int[] dx = {-1, 1, 0, 0};
    static int[] dy = {0, 0, -1, 1};

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        // N: 행, M: 열
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        // 배열 입력
        arr = new int[N][M];
        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < M; j++) {
                arr[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        int time = 0;
        int lastCheese = 0;

        // 치즈가 남아있는 동안 반복
        while (true) {
            int cheeseCount = countCheese(); // 현재 남아있는 치즈의 개수
            if (cheeseCount == 0) break;    // 치즈가 없으면 종료

            lastCheese = cheeseCount;       // 모두 녹기 한 시간 전의 치즈 개수 저장
            meltCheese();                   // 치즈 녹이기
            time++;                         // 시간 증가
        }

        System.out.println(time);           // 치즈가 모두 녹는 데 걸린 시간
        System.out.println(lastCheese);     // 모두 녹기 한 시간 전에 남아있는 치즈 개수
    }

    // 현재 치즈의 개수를 센다.
    static int countCheese() {
        int count = 0;
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (arr[i][j] == 1) count++;
            }
        }
        return count;
    }

    // 치즈 녹이기
    static void meltCheese() {
        visited = new boolean[N][M];
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{0, 0});
        visited[0][0] = true;

        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int x = current[0];
            int y = current[1];

            // 상하좌우 탐색
            for (int i = 0; i < 4; i++) {
                int nx = x + dx[i];
                int ny = y + dy[i];

                if (nx >= 0 && ny >= 0 && nx < N && ny < M && !visited[nx][ny]) {
                    visited[nx][ny] = true;

                    if (arr[nx][ny] == 0) {
                        queue.offer(new int[]{nx, ny});  // 공기라면 계속 탐색
                    } else if (arr[nx][ny] == 1) {
                        arr[nx][ny] = 0;  // 치즈를 녹임
                    }
                }
            }
        }
    }
}
