// 1. Даны два действительных числа а и Ь. Получить их
// сумму, разность и произведение.
function getSumDifferenceMultiplyNums(a: number, b: number): {} {
  let res = {
    summ: a + b,
    diff: a - b,
    mult: a * b,
  };
  return res;
}
getSumDifferenceMultiplyNums(5, 3);

// 2. Даны действительные числа х и у. Получить
// |x|-|y|/1+|x*y|
function getRealNumbersXY(x: number, y: number): number {
  return (Math.abs(x) - Math.abs(y)) / (1 + Math.abs(x) * Math.abs(y));
}
getRealNumbersXY(3, 4);

// 3. Дана длина ребра куба. Найти объем куба и площадь его боковой поверхности.
// volume-объем: V = a³ area-площадь: S = 4a²
function getCubeVolumeAndArea(finLength: number) {
  let volume = Math.pow(finLength, 3);
  let area = 4 * Math.pow(finLength, 2);
  return {
    volume,
    area,
  };
}
getCubeVolumeAndArea(6);

// 4. Даны два действительных положительных числа.
// Найти среднее арифметическое и среднее геометрическое
// этих чисел.
