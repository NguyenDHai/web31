/**
 * Tính số tiền điện theo công thức tính giá điện bậc thang như sau:
 * - Từ kWh thứ 0 đến 50: 1678đ/kWh
 * - Từ kWh thứ 51 - 100: 1734đ/kWh
 * - Từ kWh thứ 101 - 200: 2014đ/kWh
 * - Từ kWh thứ 201 - 300: 2536đ/kWh
 * - Từ kWh thứ 301 - 400: 2834đ/kWh
 * - Từ kWh thứ 401 trở đi: 2927đ/kWh
 *
 * @param {number} kwh - Số điện đã dùng trong tháng
 *
 * @return {number} Tiền điện phải trả
 *
 * @example
 * bill(100); // 170600
 */
function bill(kwh) {
    // Khai báo các biến:
    let eleclv1 = 50 * 1678;
    let eleclv2 = 50 * 1734;
    let eleclv3 = 100 * 2014;
    let eleclv4= 100 * 2536;
    let eleclv5 = 100 * 2834;

    // Tính tiền điện theo các mức:
    if (kwh > 400) {
        return eleclv1 + eleclv2 + eleclv3 + eleclv4 + eleclv5 + (kwh - 400) * 2927;
    }
    else if (kwh > 300) {
        return eleclv1 + eleclv2 + eleclv3 + eleclv4 + (kwh - 300) * 2834;
    }
    else if (kwh > 200) {
        return eleclv1 + eleclv2 + eleclv3 + (kwh - 200) * 2536;
    }
    else if (kwh > 100) {
        return eleclv1 + eleclv2 + (kwh - 100) * 2014;
    }
    else if (kwh > 50) {
        return eleclv1 + (kwh - 50) * 1734;
    }
    else {
        return kwh * 1678;
    }
}
console.log (bill(230));

/**
 * Cho một chuỗi time biểu thị thời gian dạng giờ:phút:giây (VD:
'20:15:45'), và một số n bất kỳ, tính và trả về kết quả là một chuỗi
biểu thị thời gian tương ứng sau n giây
*
 * @param {string} time - Chuỗi biểu thị thời gian
 * @param {number} n - Số giây cần thêm (bớt)
 *
 * @return {string} Kết quả
 *
 * @example
 * calcTime('20:15:45', 15); // '20:16:00'
 * calcTime('20:15:45', -46); // '20:14:59'
 */
function calcTime(time, n) {}