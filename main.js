const bunyan = require('bunyan'),
  formatOut = require('bunyan-format')({outputMode: 'short', color: false}),
  log = bunyan.createLogger({name: 'main', stream: formatOut, level: 'info'})

const PalindromeApp = require('./app/PalindromeApp')

let names = ['Gimli', 'Fili', 'Ilif', 'Ilmig', 'Mark']
let {count, combinations} = PalindromeApp.countPalindromes(names)

log.info(
  `Given the names: ${names.join(', ')}, we found ${count} possible palindrome combinations in total:  
${JSON.stringify(combinations, 2, 2)}
`)