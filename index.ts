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
function getAvarageArithmeticGeometrick(realA: number, realB: number) {
  let avarageArithmetic = (realA + realB) / arguments.length;
  let avarageGeometrick = Math.round(Math.sqrt(realA * realB));

  return {
    avarageArithmetic,
    avarageGeometrick,
  };
}
getAvarageArithmeticGeometrick(21, 6);

// 5. Даны два действительных числа. Найти среднее
// арифметическое этих чисел и среднее геометрическое их
// модулей.
function getAvarageArithmeticGeometrickTheirModule(
  realA: number,
  realB: number
) {
  let avarageGeometrick;
  if (realA < 0 || realB < 0) {
    avarageGeometrick = Math.abs(Math.round(Math.sqrt(realA * realB)));
  }

  let avarageArithmetic = (realA + realB) / arguments.length;
  avarageGeometrick = Math.round(Math.sqrt(realA * realB));

  return {
    avarageArithmetic,
    avarageGeometrick,
  };
}
getAvarageArithmeticGeometrickTheirModule(21, 2);

// 6. Даны катеты прямоугольного треугольника. Найти
// его гипотенузу и площадь.
// гипотенуза c = Math.sqrt(a² + b²)
// S-площадь S = Math.sqrt(p*(p-a)*(p-b)*p-c)
// p-полупериметр p = a + b + c / 2
function findTriangleHypotenuseAndSquare(a: number, b: number) {
  let hypotenuse = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  let p = (a + b + hypotenuse) / 2;
  let S = Math.sqrt(p * (p - a) * (p - b) * (p - hypotenuse));

  return {
    hypotenuse,
    square: Math.round(S),
  };
}
findTriangleHypotenuseAndSquare(6, 8);

// 7. Смешано v₁ литров воды температуры t₁ с v₂ литрами воды температуры t₂. Найти объем
// и температуру образовавшейся смеси
// volume-объем => V = V1 + V2; temprature-температура => T = (t1 * v1 + t2 * v2) / v
function getWaterVolumeAndTemprature(
  v1: number,
  v2: number,
  t1: number,
  t2: number
) {
  let volume = v1 + v2;
  let temprature = (t1 * v1 + t2 * v2) / 2;

  return {
    volume,
    temprature
  }
}
getWaterVolumeAndTemprature(3, 4, 16, 20);


// 8. Определить периметр правильного n-угольника, 
// описанного около окружности радиуса r.
// Р = а * n
// S = n * Math.sqrt(n * a²) / 2
// R = S / P / 2
function getPerimeterRightSquare(n: number, a: number): number {
let perimeter = a * n;
let square = (n * Math.sqrt(n * Math.pow(a, 2))) / 2;
let radius = square / perimeter / 2;

return radius
}
getPerimeterRightSquare(6, 4);


// 9. Три сопротивления R¹, R², R³ соединены параллельно. Найти сопротивление соединения.
// 1 / R = (1 / R¹) + (1 / R²)...+(1 / Rn)
function getThreeResistance(r1, r2, r3): number {
  let resistance = (1 / r1) + (1 / r2) + (1 / r3);
  
  return +resistance.toFixed(4)
}
getThreeResistance(200, 470, 220);

// 10. Определить время падения камня на поверхность
// земли с высоты h.
// g = 9.81  
// t = Math.sqrt(2*h/g)
function getFallingStone(height: number): number {
  let g = 9.81;
  let t = Math.sqrt(2 * height / g);
  return +t.toFixed(5);
}
getFallingStone(4.905);

// 11. Даны х, y, z. Вычислить а, b, если .....
function getCalculateAB(x, y, z) {
let a = Math.sqrt(Math.abs(x - 1)) - 
}
