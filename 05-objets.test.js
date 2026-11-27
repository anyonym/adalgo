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
    it("retourne uniquement les personnes ayant l'âge minimum requis", () => {
        const personnes = [
            { nom: "Ada", age: 28 },
            { nom: "Alan", age: 17 }
        ]
        expect(filtrerParAge(personnes, 18)).toEqual([
            { nom: "Ada", age: 28 }
        ])
    })

     it("conserve les personnes ayant exactement l'âge minimum", () => {
        const personnes = [
            { nom: "Ada", age: 18 },
            { nom: "Alan", age: 17 }
        ]
        expect(filtrerParAge(personnes, 18)).toEqual([
            { nom: "Ada", age: 18 }
        ])
    })

    it("retourne un tableau vide si personne ne respecte la condition", () => {
        const personnes = [
            { nom: "Ada", age: 15 },
            { nom: "Alan", age: 17 }
        ]
        expect(filtrerParAge(personnes, 18)).toEqual([])
    })

    it("retourne toutes les personnes si elles respectent la condition", () => {
        const personnes = [
            { nom: "Ada", age: 28 },
            { nom: "Alan", age: 25 }
        ]
        expect(filtrerParAge(personnes, 18)).toEqual(personnes)
    })

    it("retourne un tableau vide si le tableau est vide", () => {
        expect(filtrerParAge([], 18)).toEqual([])
    })
})

describe("trierParNom", () => {
    it("trie les personnes par ordre alphabétique", () => {
        const personnes = [
            { nom: "Turing" },
            { nom: "Lovelace" },
            { nom: "Hopper" }
        ]
        expect(trierParNom(personnes)).toEqual([
            { nom: "Hopper" },
            { nom: "Lovelace" },
            { nom: "Turing" }
        ])
    })

    it("retourne un tableau vide si le tableau est vide", () => {
        expect(trierParNom([])).toEqual([])
    })
    // préserver la donnée d'origine
    it("ne modifie pas le tableau original", () => {
        const personnes = [
            { nom: "Turing" },
            { nom: "Hopper" }
        ]
        const copieOriginale = [...personnes];

        trierParNom(personnes);
        expect(personnes).toEqual(copieOriginale);
    })
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
