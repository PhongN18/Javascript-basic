# Promise
Cần hiểu khái niệm
- Sync
- Async

## Format
- Create new promise
<!-- Promise is an Object constructor -->
var promise = new Promise (
    <!-- Executer / Function -->
    function (resolve, reject) {
    <!--    Logic           -->
    <!--    Success: resolve()
            Fail: reject()      -->
    }
)

promise
<!-- called when resolve() is called -->
    .then(function () {

    })
<!-- called when reject() is called -->
    .catch(function () {

    })
<!-- called when resolve() or reject() is called -->
    .finally(function () {

    })

## Theory
- Promise được sinh ra để xử lý các thao tác bất đồng bộ (async)
- Trước khi promise được sinh ra thì dùng callback
--> Có khả năng dẫn đến callback hell

- Khai báo: new Promise (Executer function (param) {Logic})
- Executer: nhận 2 tham số là 2 function: resolve, reject
--> resolve được gọi khi logic xử lí thành công, reject khi thất bại

- Sử dụng promise:
+ .then(callback function) - được thực thi khi promise resolve()
+ .catch(callback function) - được thực thi khi promise reject()