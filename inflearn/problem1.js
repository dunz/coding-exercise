/**
 * [문제](https://www.notion.so/a5a0fafe306e4cb78ec4476a272d156d?v=e116f6cdc6e34075bf8e4c0e56429a26&p=0243c9d83a234e70b6e9d357a57bda21)
 */

const source = [
    '   + -- + - + -   ',
    '   + --- + - +   ',
    '   + -- + - + -   ',
    '   + - + - + - +   '
];

let result = '';
for (let s of source) {
    const item = s.replaceAll(' ', '').replaceAll('+', 1).replaceAll('-', '0');
    const integer = parseInt(item, 2);
    result += String.fromCharCode(integer);
}

console.log(result);