import { fullName, filtrerParAge, trierParNom, grouperParVille, statistiques, prixTotal, plusCher } from "./05-objets.js"

// Les fonctions retournent des objets et des tableaux d'objets.
// Utilise .toBe() pour une string, .toEqual() pour un objet ou un tableau.
// Plus d'indications sur les cas — choisis toi-même ce qui est pertinent à tester.

describe("fullName", () => {
    it("retourne le prénom et le nom séparés par un espace", () => {
        expect(fullName({ prenom: "Nikola", nom: "Sirkis" })).toBe("Nikola Sirkis")
    })

    it("fonctionne avec un nom composé", () => {
        expect(fullName({ prenom: "oLi", nom: "dE SaT" })).toBe("oLi dE SaT")
    })

    it("retourne une chaîne vide si prénom et nom sont vides", () => {
        expect(fullName({ prenom: "", nom: "" })).toBe(" ")
    })
})

describe("filtrerParAge", () => {
  it.todo("à compléter")
})

describe("trierParNom", () => {
  it.todo("à compléter")
})

// [FACULTATIF]
describe("grouperParVille", () => {
  it.todo("à compléter")
})

// [FACULTATIF]
describe("statistiques", () => {
  it.todo("à compléter")
})

// [FACULTATIF]
describe("prixTotal", () => {
  it.todo("à compléter")
})

// [FACULTATIF]
describe("plusCher", () => {
  it.todo("à compléter")
})
