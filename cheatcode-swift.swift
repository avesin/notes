print(String(repeating: "*", count: stars))

// ✅ map: transforms each element, keeps optionals
let strings = ["1", "2", "abc", "4"]

let mapped = strings.map { Int($0) }
print(mapped) // [Optional(1), Optional(2), nil, Optional(4)]

// ✅ compactMap: transforms and filters out nils
let compacted = strings.compactMap { Int($0) }
print(compacted) // [1, 2, 4]

// convert seconds to time
let hours = Int(s) / 3600
let minutes = (Int(s) % 3600) / 60
let seconds = Int(s) % 60

func isValidTriangle(a: Int, b: Int, c: Int) -> Bool {
    return a + b > c && a + c > b && b + c > a
}

