/**
 * TPS File importer
 * 
 * Implement TPS file importer that parses CSV files into Javascript objects
 * 
 * Write a function that:
 * 1. Reads all files in the src/tps folder
 * 2. For each TPS file, parses its contents
 * 
 */
const Papa = require('papaparse')
const PAPA_CONFIG = {
  header: true,
  trimHeaders: true,
  skipEmptyLines: true,
}
const FILE_SRC_PATH = './src'

/**
 * Parses CSV file contents into array of objects by header
 * @param {String} contents 
 * @returns {Promise<Array>}
 */
function parseCSVFile (contents) {
  return new Promise((resolve, reject) => {
    Papa.parse(contents, {
      ...PAPA_CONFIG,
      complete: (results) => {
        const { data, errors } = results
        if (errors.length > 0) {
          return reject(`CSV Parse error: ${JSON.stringify(errors)}`)
        }
        resolve(data)
      }
    })
  })
}