/**
 * IF ELSE
 * 
 * if (condition) {
 *     code block
 * } else if (condition) {
 * 
 * } else {
 * 
 * }
 */

// SWITCH
var date = new Date()
var day = date.getDay()

// Tính từ case đúng, tất cả các case sẽ được thực thi --> dùng break 
// case 1 ~~ if (day === 1)
// default ~~ else, nếu case trước đúng và k có break --> default vẫn được chạy
/* switch(day) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default: 
        console.log('Invalid');
}
*/

// TERNARY OPERATOR - toán tử ba ngôi
var course = {
    name: 'JS',
    coin: 120,
}

var result = course.coin > 0 ? `${course.coin} coins` : `Miễn phí`
console.log(result)

// condition ? giá trị khi đúng : giá trị khi sai