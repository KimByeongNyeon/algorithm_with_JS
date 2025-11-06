
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int N;
    static int M;
    static int[] arr;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        arr = new int[N];

        int start = 0;
        int end = 0;
        int mx = Integer.MIN_VALUE;

        // 배열 입력과 초기화
        st = new StringTokenizer(br.readLine()); // 한 줄에 여러 숫자가 입력되는 경우 처리
        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
            end += arr[i];
            mx = Math.max(mx, arr[i]);
        }

        // 이진 탐색 시작
        binarySearch(mx, end);
    }

    static void binarySearch(int start, int end) {
        int result = 0;

        while (start <= end) {
            int mid = (start + end) / 2;
            int cnt = count(mid);

            if (cnt > M) {
                // 블루레이 개수가 많으면 크기를 늘려야 한다
                start = mid + 1;
            } else {
                // 조건을 만족하면 더 작은 크기로도 가능한지 확인
                result = mid;
                end = mid - 1;
            }
        }

        System.out.println(result);
    }

    static int count(int mid) {
        int cnt = 1; // 블루레이 개수
        int sum = 0;

        for (int i = 0; i < N; i++) {
            if (sum + arr[i] > mid) {
                cnt++;
                sum = arr[i]; // 새로운 블루레이에 현재 강의를 넣음
            } else {
                sum += arr[i];
            }
        }

        return cnt;
    }
}
