## Exo 1

```text
Algorithme pour détecter la plus grande valeur d'un tableau de nombres sans Math.max()

Variables
i : NUMBER
tab[] : NUMBER
maximum : NUMBER

INIT
    LIRE tab[]
START
    DEBUT FUNCTION maximum (tab[])
        maximum = tab[0]
        POUR i de 0 à tab[].length par pas de 1 FAIRE
            SI tab[i] > maximum ALORS
                maximum = tab[i]
            FIN SI
        FIN POUR
        RETURN maximum
    FIN FUNCTION
FIN
```

## Exo 2

```text
Algorithme pour détecter la plus petite valeur d'un tableau de nombres sans Math.min()

Variables
i : NUMBER
tab[] : NUMBER
minimum : NUMBER

INIT
    LIRE tab[]
START
    DEBUT FUNCTION minimum (tab[])
        minimum = tab[0]
        POUR i de 0 à tab[].length par pas de 1 FAIRE
            SI tab[i] < minimum ALORS
                minimum = tab[i]
            FIN SI
        FIN POUR
        RETURN minimum
    FIN FUNCTION
FIN
```

## Exo 3

```text
Algorithme pour calculer la moyenne des valeurs d'un tableau

Variables
i : NUMBER
tab[] : NUMBER
moyenne : NUMBER

INIT
    LIRE tab[]
START
    DEBUT FUNCTION moyenne (tab[])
        somme = 0
        POUR i de 0 à tab[].length par pas de 1 FAIRE
            somme = tab[i]++ 
        FIN POUR
        SI tab[].length = 0
            RETURN null
        FIN SI
        moyenne = somme / tableau.length
        RETURN moyenne
    FIN FUNCTION
FIN
```

## Exo 4

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

## Exo 5

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

## Exo 6

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
