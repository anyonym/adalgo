# Pseudocode chapitre 02-boucles

## Exo 1

```text
Algorithme pour afficher tous les nombres d'une suite d'itérations

Variables
n : NUMBER
i : NUMBER
nombres : STR

INIT
    LIRE n
START
    DEBUT FUNCTION compterJusqua (n) :
        nombres <- ""
        POUR i de 1 à n par pas de 1 FAIRE
            nombre = str(i) + ", "
            SI i = n ALORS
                nombres += str(i)
            SINON
                nombres += nombre
            FIN SI
        FIN POUR
        AFFICHER nombres
    FIN FUNCTION
FIN
```

## Exo 2

```text
Algorithme pour afficher uniquement les nombres pairs d'une suite d'itérations

Variables
n : NUMBER
i : NUMBER
nombres : STR

INIT
    LIRE n
START
    DEBUT FUNCTION afficherPairs (n) :
        nombres <- ""
        POUR i de 0 à n par pas de 2 FAIRE
            nombre = str(i) + ", "
            SI i = n ALORS
                nombres += str(i)
            SINON
                nombres += nombre
            FIN SI
        FIN POUR
        AFFICHER nombres
    FIN FUNCTION
FIN
```

## Exo 3

```text
Algorithme pour calculer la somme des nombres d'une suite d'itérations

Variables
n : NUMBER
i : NUMBER
totalSomme : NUMBER

INIT
    LIRE n
START
    DEBUT FUNCTION somme (n)
        totalSomme <- 0
        POUR i de 0 à n par pas de 1 FAIRE
            totalSomme += i
        FIN POUR
        RETURN totalSomme
    FIN FUNCTION
FIN
```

## Exo 4

```text
Algorithme pour calculer le produit de l'ensemble des nombres d'une suite d'itérations

Variables
n : NUMBER
i : NUMBER
totalFacto : NUMBER

INIT
    LIRE n
START
    DEBUT FUNCTION produit (n)
        totalFacto <- 1
        POUR i de 1 à n par pas de 1 FAIRE
            totalFacto = totalFacto * i
        FIN POUR
        RETURN totalFacto
    FIN FUNCTION
FIN
```

## Exo 5

```text
Algorithme pour compter le nombre d'entiers pairs

Variables
n : NUMBER
i : NUMBER
totalPairs : NUMBER

INIT
    LIRE
START
    DEBUT FUNCTION compterPairs (n)
        totalPairs <- 0
        POUR i de 1 à n par pas de 2 FAIRE
            SI i % 2 = 0 ALORS
                totalPairs++
            FIN SI
        FIN POUR
        RETURN totalPairs
    FIN FUNCTION
FIN
```

## Exo 6

```text
Algorithme pour détecter les n premiers multiples de n

Variables
n : NUMBER
i : NUMBER
resultat : NUMBER[]

INIT
    LIRE n
START
    DEBUT FUNCTION table (n)
    resultat <- tableau vide
    POUR i de 1 à n par pas de 1 FAIRE
        AJOUTER n * i à resultat
    FIN POUR
    RETURN resultat
    FIN FUNCTION
FIN
```

## Exo 7

```text
Algorithme pour

Variable

INIT
    LIRE
START
    DEBUT FUNCTION ... (ARG)

    FIN FUNCTION
FIN
```

## Exo 8

```text
Algorithme pour

Variable

INIT
    LIRE
START
    DEBUT FUNCTION ... (ARG)

    FIN FUNCTION
FIN
```

## Exo 9

```text
Algorithme pour

Variable

INIT
    LIRE
START
    DEBUT FUNCTION ... (ARG)

    FIN FUNCTION
FIN
```
