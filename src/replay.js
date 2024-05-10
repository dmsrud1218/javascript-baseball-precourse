export function replay() {
    answer = randomNumbers().split(""); // 정답 생성 및 배열로 변환
    document.getElementById("input").value = ""; // 입력 필드 초기화
    document.getElementById("result").innerText = ""; // 결과 초기화
    document.getElementById("answer").innerText = ""; // 정답 초기화
    document.getElementById("replayButton").style.display = "none"; // 재시작 버튼 숨기기
  }
