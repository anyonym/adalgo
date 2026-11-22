import { inverserChaine, estPalindrome, compterVoyelles, capitaliser, tronquer, toCamelCase, toSnakeCase, validerMotDePasse, analyserTexte } from "./04-chaines.js"

// Tu maîtrises maintenant .toBe(), .toEqual() et le cas null.
// À partir d'ici, on ne te montre plus les tests — tu les écris.
// Les cas à couvrir sont indiqués dans chaque describe.

// Cas à couvrir : chaîne normale, chaîne vide.
describe("inverserChaine", () => {
  it("retourne 'esrevni' en 'inverse'", () => {
    expect(inverserChaine("esrevni")).toEqual("inverse");
  })
  it("retourne null d'une chaîne vide", () => {
    expect(inverserChaine("")).toEqual(null);
  })
})

// Cas à couvrir : palindrome, non-palindrome, un seul caractère.
describe("estPalindrome", () => {
  it("retourne true si palindrome", () => {
    expect(estPalindrome("level")).toEqual(true)
  })
  it("retourne false si non-palindrome", () => {
    expect(estPalindrome("reveur")).toEqual(false)
  })
  it("retourne null si un seul caractère", () => {
    expect(estPalindrome("v")).toEqual(null)
  })
})

// Cas à couvrir : chaîne avec voyelles, chaîne sans voyelle.
describe("compterVoyelles", () => {
  it("retourne 3 pour 'azerty'", () => {
    expect(compterVoyelles("azerty")).toEqual(3)
  })
  it("retourne 0 pour 'grrr'", () => {
    expect(compterVoyelles("grrr")).toEqual(0)
  })
})

// [FACULTATIF] Cas à couvrir : chaîne mixte (boNJOUR → Bonjour), chaîne déjà correcte.
describe("capitaliser", () => {
  it("retourne 'Nantes' de 'nanTES'", () => {
    expect(capitaliser("nanTES")).toEqual("Nantes")
  })
   it("retourne 'Hubertine' de 'Hubertine'", () => {
    expect(capitaliser("Hubertine")).toEqual("Hubertine")
  })
})

// [FACULTATIF] Cas à couvrir : chaîne trop longue, chaîne assez courte.
describe("tronquer", () => {
  it("retourne 'Salut...' pour 'Salut la compagnie', 5", () => {
    expect(tronquer("Salut la compagnie", 5)).toEqual("Salut...")
  })
  it("retourne 'Hello World' pour 'Hello World', 11", () => {
    expect(tronquer("Hello World", 11)).toEqual("Hello World")
  })
})

// [FACULTATIF] Cas à couvrir : plusieurs mots, deux mots.
describe("toCamelCase", () => {
  it.todo("à compléter")
})

// [FACULTATIF] Même pattern inverse.
describe("toSnakeCase", () => {
  it.todo("à compléter")
})

// [FACULTATIF] Cas à couvrir : valide, trop court, pas de chiffre, pas de majuscule.
describe("validerMotDePasse", () => {
  it.todo("à compléter")
})

// [FACULTATIF] Cas à couvrir : texte simple, texte vide.
// Rappel : le résultat est un objet { lettres, mots, phrases } — utilise .toEqual().
describe("analyserTexte", () => {
  it.todo("à compléter")
})
