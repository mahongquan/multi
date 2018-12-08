var cheerio = require('cheerio');

$ = cheerio.load('<root><link>foo</link></root><LINK>bar</LINK><CIK>123</CIK>', {
  xmlMode: true,
  lowerCaseTags: true
});

console.log('HTML dump:', $.html());
console.log('XML dump :', $.xml());

console.log('lowercase link value:', $('link').text());
console.log('UPPERCASE LINK value:', $('LINK').text());
console.log('UPPERCASE CIK value:', $('CIK').text());