module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [
      2,
      "always",
      [
        "sentence-case",
        "start-case",
        "pascal-case",
        "upper-case",
        "lower-case",
      ],
    ],
    "type-enum": [
      2,
      "always",
      [
        "feat", // 새로운 기능의 추가
        "fix", // 버그 수정사항
        "refactor", // 버그 수정과 새로운 기능의 추가가 아닌 코드 변경 사항
        "test", // 테스트 코드 작성 / 수정 사항
        "style", // 코딩스타일 변경 사항 (포매터 적용, 들여쓰기/세미콜론/단순 변수명 변경 등)
        "perf", // 성능 개선 사항
        "revert", // 이전 커밋을 Revert 하는 경우
        "docs", // 단순 주석 추가 또는 문서 수정
        "ci", // CI 설정을 변경
        "db", // DB 스키마 변경 등의 작업
        "infra", // IaC로 구현한 경우, 인프라 수정사항
        "build", // build script (bundler configs, dockerfile) 수정사항
        "chore", // 위의 모든 내용에 해당하지 않는 경우
      ],
    ],
    "type-case": [2, "always", ["lower-case"]],
  },
};
