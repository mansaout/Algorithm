//  프로그래머스 / 문자 반복 출력하기 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120825

function solution(my_string, n) {
  return my_string
    .split('')
    .map(v => v.repeat(n))
    .join('');
}
