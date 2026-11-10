# Pseudocode chapitre 01-conditions

## Exo 1

```text
Algorithme pour détecter si un nombre est positif ou négatif

Variable
n : NUMBER

INIT
    LIRE n
START
    DEBUT FUNCTION estPositif (n) :
        SI (n >= 0) ALORS
            RETURN true
        SINON
            RETURN false
        FIN SI
    FIN FUNCTION
FIN
```

## Exo 2

```text
Algorithme pour détecter si un nombre est pair ou impair

Variable
n : NUMBER

INIT
    LIRE n
START
    DEBUT FUNCTION estPair (n)
        SI (n % 2 = 0) ALORS
            RETURN true
        SINON
            RETURN false
        FIN SI
    FIN FUNCTION
FIN
```

## Exo 3
```text
Algorithme pour détecter le nombre le plus élevé

Variables
a : NUMBER
b : NUMBER

INIT
    LIRE a
    LIRE b
START
    DEBUT FUNCTION max (a, b)
        SI (a > b) ALORS
            RETURN a
        SINON SI (b > a)
            RETURN b
        SINON SI (a = b)
            RETURN a
        FIN SI
    FIN FUNCTION
FIN
```

## Exo 4

```text
Algorithme pour retourner une mention relative à la note sur 20

Variables
note : NUMBER

INIT
    LIRE note
START
    DEBUT FUNCTION mention (note)
        SI (note >= 16) ALORS
            RETURN "Très bien"
        SINON SI (note >= 14) ALORS
            RETURN "Bien"
        SINON SI (note >= 12) ALORS
            RETURN "Assez bien"
        SINON SI (note >= 10) ALORS
            RETURN "Passable"
        SINON SI (note < 10) ALORS
            RETURN "Insuffisant"
        FIN SI
    FIN FUNCTION
FIN
```

## Exo 5

```text
Variables
INIT
START
DEBUT FUNCTION ... (ARG)
FIN
```
