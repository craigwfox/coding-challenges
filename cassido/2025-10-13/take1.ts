/*
 * Given a CSV string where each row contains a name, age, and city
 * (and values may be quoted, have embedded commas or escaped quotes),
 * write a function that parses the CSV
 * and outputs a formatted list of strings in the form: "Name, age Age, from City".
 * Handle quoted fields containing commas and escaped quotes.
 * const csv = 'name,age,city\n"Ryu, Mi-yeong",30,"Seoul"\nZoey,24,"Burbank"'
 *
 * csvToList(csv)
 *
 * > `
 * - Ryu, Mi-yeong, age 30, from Seoul
 * - Zoey, age 24, from Burbank
 * `
 */

interface Person {
  name: string
  age: number
  city: string
}

const csv =
  'name,age,city\n"Ryu, Mi-yeong",30,"Seoul"\nZoey,24,"Burbank"'

function csvToList(csv: string) {
  const arry = csv.split("\n")
  const persons: Person[] = []

  // first is headers
  const headers = arry[0].split(",")
  arry.splice(0, 1)

  // create array of objects for person
  arry.forEach(x => {
    let row = x
    let i = 0
    const person: Person = {
      name: "",
      age: 0,
      city: "",
    }

    while (i < 3) {
      // console.log(row)
      let item = ""
      if (row[0] === '"') {
        item = `${row.match(/^"(.*?)"/g)?.[0]},`
      } else if (row.includes(",")) {
        item = row.match(/^(.*?),/)?.[0] ?? ""
      } else {
        item = row.match(/^(.)+/)?.toString() ?? ""
      }

      let newRow = Array.from(row)
      newRow.splice(0, item.length)
      row = newRow.join("")
      item = item.replaceAll('"', "")

      if (item.slice(-1) === ",")
        item = item.substring(0, item.length - 1)

      if (i === 0) person.name = item
      if (i === 1) person.age = parseInt(item)
      if (i === 2) person.city = item

      i++
    }

    persons.push(person)
  })

  let output = ``

  persons.forEach(
    x =>
      (output += `${x.name}, age ${x.age}, from ${x.city}\n`)
  )

  return output
}

console.log(csvToList(csv))
