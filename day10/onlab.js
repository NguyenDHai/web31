/**
 * Tìm số lớn nhất trong 2 số
 *
 * @param {number} a Số thứ 1
 * @param {number} b Số thứ 2
 *
 * @return {number} Số lớn nhất
 */
function maxOfTwo(a, b) {
    if (a >= b) return a;
    else return b;
}

console.log(maxOfTwo(1, 2));

/**
 * Kiểm tra một số là số chẵn hay không
 *
 * @param {number} number Số bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isEven(number) {
    if (number % 2 === 0)
    {console.log("Day la so chan");}
    else
    {console.log("Day la so le")}
}
isEven(4)

console.log(isEven(4));

/**
 * Kiểm tra một số nguyên có chia hết cho 3 và 5 hay không
 *
 * @param {number} number Số bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isDivisibleByThreeAndFive(number) {
    if (number % 15 === 0) {
        console.log(number * "chia het ca 3 va 5");
    } else {
        console.log(number * "khong chia het ca 3 va 5");
    }
}
isDivisibleByThreeAndFive(10)
/**
 * Tính tiền hoa hồng mà đại lý nhận được
 *
 * - Nếu totalSales <= 100 triệu thì hoa hồng nhận là 5% doanh số
 * - Nếu totalSales <= 300 triệu thì hoa hồng nhận là 10% doanh số
 * - Nếu totalSales > 300 triệu thì hoa hồng nhận là 20% doanh số
 *
 *
 * @param {number} totalSalse Doanh số bán hàng
 *
 * @return {number} Hoa hồng trả cho đại lý
 */
function calcCommissions(totalSalse) {
    if (totalSalse > 300) return totalSalse * 0.2;
    else if (totalSalse > 100) return totalSalse * 0.1;
    else totalSalse * 0.05;
}

totalSalse(500)

/**
 * Kiểm tra 1 ký tự có phải thuộc bảng chữ cái hay không (a-zA-Z)
 *
 * @param {string} character Ký tự bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isAlphabe(character) {
    if (
        ("a" <= character && character <= "z") || 
        ("A" <= character && character <= "Z")
    )
    {
        console.log(character + "thuoc bang chu cai");
    } else {
        console.log(character + "khong thuoc bang chu cai");
    }
}
isAlphabe("h");
/**
 * Kiểm tra 1 chữ cái bất kỳ có phải là nguyên âm hay không?
 *
 * @param {string} character Chữ cái bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isVowel(character) {
    if (
        character === "u" ||
        character === "e" ||
        character === "o" ||
        character === "a" ||
        character === "i" ||
        character === "U" ||
        character === "E" ||
        character === "O" ||
        character === "A" ||
        character === "I"
    )
        {
        console.log (isVowel + 'la nguyen am');
    } else {
        console.log(isVowel + "khong la nguyen am");
    }
}
isVowel("j")
/**
 * Kiểm tra một chữ cái bất kỳ là viết hoa hay viết thường
 *
 * @param {string} character Chữ cái bất kỳ
 *
 * @return {boolean}
 */
function isUppercase(character) {
    if ("A" <= character && character <= "Z") {
        console.log (character + "la viet hoa");
    } else {
        console.log(character + "la viet thuong");
    }
}
character("J")
/**
 * Kiểm tra độ dài 3 cạnh bất kỳ có tạo thành một tam giác hợp lệ hay không?
 *
 * Tam giác hợp lệ là tam giác có tổng 2 cạnh bất kỳ lớn hơn cạnh còn lại
 *
 * @param {number} a Chiều dài cạnh a
 * @param {number} b Chiều dài cạnh b
 * @param {number} c Chiều dài cạnh c
 *
 * @return {boolean} Kết quả
 */
function isValidTriangle(a, b, c) {
    if ((a + b > c)||
        (a + c > b)||
        (b + c > a)
    ) {
        console.log("La tam giac hop le");
    } else {
        console.log("La tam giac khong hop le");
    }
}
isValidTriangle(2, 3, 4)

/**
 * Viết chương trình máy tính đơn giản
 *
 * @param {number} operand1 Toán hạng 1
 * @param {'+' | '-' | '*' | '/'} operator Toán tử
 * @param {number} operand2 Toán hạng 3
 *
 * @return {number} Kết quả phép tính
 */
function simpleCalculator(operand1, operator, operand2) {}





/**
 * In dãy số lẻ trong khoảng từ 1 đến 100
 */
function printOddNumbers() {
    for (let i = 1; i <= 100; i += 2){
        console.log(i);
    }
}
 printOddNumbers()
/**
 * In dãy số chẵn trong khoảng từ 1 đến 100
 */
function printEvenNumbers() {
    for (let i = 0; i <= 100; i += 2) {
        console.log(i);
    }
}

printEvenNumbers()

/**
 * Tính tổng các số tự nhiên trong khoảng từ 1 đến `n`
 * @param {number} n Số nguyên dương bất kỳ
 */
function sumOfNumbers(n) {
    let total = 0;  /* tong = 0, tich = 1, kiem tra = true */

    for (let i = 1; i <= n; i++){
        total += i;
    }

    console.log(total);
}

sumOfNumbers(5);

/**
 * Tính tổng các số lẻ trong khoảng từ `start` đến `end`
 *
 * @returns {number} Tổng các số lẻ
 */
function sumOfOddNumbers(start, end) {
    let total = 0;
    for (i = start; i <= end; i ++){
        if (total % 2 == 1) {
            total += i;
        }
        console.log(0, 4)
    }
}

/**
 * Tìm các ước số của một số bất kỳ
 *
 * @param {number} number Số nguyên dương bất kỳ
 *
 * @returns {number[]} Mảng chứa các ước số *[v1, v2, ...]*
 */
function divisor(number) {function divisor(number) {
    const result = [];
    var index = 0;
    for (let i = 1; i <= number; i++){
        if (number%i == 0) {
            result[index] = i;
            ++index;
        }
    }
    return result;
}
// let dvs = divisor(10).toString();
console.log(`Divisor: ${divisor(10)}`);
}

/**
 * Tính số lần gấp 1 tờ giấy có độ mỏng 0.1mm để đạt được độ dày mong muốn
 *
 * @param {number} thickness Độ dày mong muốn tính theo đơn vị m
 *
 * @return {number} Số lần gấp giấy để đạt được độ dày yêu cầu
 */
function countFolding(thickness) {
    var count = 0;
    var tmp = 1;
    thickness = thickness * 10000;
    while (true) {
        ++count;
        tmp = tmp * 2;
        if (tmp >= thickness)
            break;
    }
    return count;
    // let count = countFolding(2);
console.log(`Folding count: ${countFolding(2)}`);
}

// Bai chua
function countFolding(thickness) {
    // doi don vi
    thickness *= 1000;
    // begin
    let currentthickness = 0.1;
    let count = 0;

    // condition
    while (currentthickness < thickness) {
        // step
        currentthickness *= 2;
        count++;
    }
}

/**
 * Tính xem sau bao nhiêu năm nữa thì tuổi cha gấp 2 lần tuổi con
 *
 * Tuổi cha lớn hơn tuổi con ít nhất 18 tuổi
 *
 * @param {number} dad Tuổi của cha
 * @param {number} son Tuổi của con
 *
 * @returns {number} Số năm để tuổi cha gấp 2 lần tuổi con
 */
function countYears(dad, son) {
  var years = 0;
  while (true) {
    ++years;
    ++dad;
    ++son;
    if (son * 2 == dad) {
      break;
    }
  }
  return years;
}

console.log(`Count years: ${countYears(50, 19)}`);

// function countLegs()

// Bai chua

let count = 0;

for (; dad / son != 2;) {
    count ++;
    dad ++;
    son ++;
}

// while (dad / son !== 2) {
//     count ++;
//     dad ++;
//     son ++;
// }

console.log (countYears(30,2));

// Tính số chân gà và chó
// Vừa gà vừa chó
// Bó lại cho tròn
// 36 con 
// 100 chân chẵn

function countLegs() {
    // so chan ga = x
    // so chan cho = (100 - 2 * x) / 4

    const chicklegs = 2;
    const doglegs = 4;
    const total = 36;
    const totallegs = 100;

    let dog = 1;
    let chicken = total - dog;

    while (dog * doglegs + chicken * chicklegs != totallegs) {
        dog ++;
        chicken ++;
    }
}
 console.log (`So cho la ${dog} va so ga la ${chicken}`);