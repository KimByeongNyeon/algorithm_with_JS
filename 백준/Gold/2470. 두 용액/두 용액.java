import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    static int N;
    static int[] arr;
    static int[] result;
    static int start;
    static int end;
    static int min = Integer.MAX_VALUE; // 최소값을 구하기 위한 초기화

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        arr = new int[N];
        result = new int[2];
        StringTokenizer st = new StringTokenizer(br.readLine());

        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        start = 0;
        end = N - 1;
        Arrays.sort(arr);  // 배열을 정렬

        twoPointer(start, end);
        System.out.println(result[0] + " " + result[1]);  // 결과 출력
    }

    static void twoPointer(int start, int end) {
        while (start < end) {
            int sum = arr[start] + arr[end];
            if (min > Math.abs(sum)) {
                min = Math.abs(sum);
                result[0] = arr[start];
                result[1] = arr[end];
            }

            if (sum < 0) {
                start++;  // 합이 0보다 작으면 시작 포인터를 오른쪽으로 이동
            } else {
                end--;  // 합이 0보다 크면 끝 포인터를 왼쪽으로 이동
            }
        }
    }
}