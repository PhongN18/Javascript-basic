
# ECMAScript 6
- Các trình duyệt có thể chưa hỗ trợ ES6 đầy đủ

## Let, const (1. 1 - 65)
### Var / let / const diff
- var / let, const: (1. 3 - 40)
+ Scope (1. 3 - 29)
+ Hoisting (1. 32 - 40)
- const / var, let: Assignment (1. 43 - 65)

### Usage
- Khi code thuần JS không sử dụng thư viện gì: var
- Sử dụng Babel: let, const

- Khi định nghĩa biến và không gán lại: const
- Khi cần gán giá trị lại cho biến: let


## Template literals  
- Nội suy: `${}`
- Multi-lines: `Line1
Line2
Line3`

--> không cần sử dụng \n


## Arrow functions (1. 68 - 99)
- Không sử dụng được this - không có context
- Không thể làm function constructor

## Class (1. 102 - 128)
- class constructor - works the same as function constructor 
- more organized

## Default parameter value (2. 1 -24)
- Sử dụng cho những tham số không bắt buộc
- Nếu không truyền vào giá trị thì sẽ sử dụng giá trị default

## Enhanced object literals (2. 27 - 63)
- Định nghĩa key: value cho object
- Định nghĩa method cho object
- Định nghĩa key cho object dưới dạng biến

## Destructuring (obj/arr) (2. 66 - 129)
- Array (2. 68 - 83)
+ var [param, param, ...] = array

- Object (2. 85 - 129) 
+ var {key, key, ...} = object
+ must be the exact key name of the object

## Rest parameter (2. 131 - 145)
- Represents the remaining values in an array or object
- 3 dots + param name
+ ex: ...rest, ...courses, ...

## Spread (3. 1 - 28)
- Có thể dùng để sao chép, ghép array, object
- Khác với rest: 
+ rest thường đại diện cho các tham số truyền vào function khi khởi tạo
+ spread đại diện cho đối số truyền vào function khi được gọi

## Tagged template literals (3. 31 - 59)
- Best to look at the example in ES6_3.js

## Modules (3. 62 - 71)
- Phải thêm type = "module"
- Import / Export

## Optional chaining (?.)
