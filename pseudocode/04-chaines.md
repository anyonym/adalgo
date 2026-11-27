# Pseudocode chapitre 04-chaines

## Exo 1

```text
Algorithme pour inverser une chaîne de caractères

Variables
chaine : STR
resultat : STR
i : NUMBER

INIT
    LIRE chaine
START
    DEBUT FUNCTION inverserChaine (chaine)
        resultat <- ""
        POUR i de 0 à chaine.length -1 par pas de 1 FAIRE
            SI chaine.length = 0 
                RETURN null
            SINON
                resultat = resultat + chaine[i]
            FIN SI
        FIN POUR
        RETURN resultat
    FIN FUNCTION
FIN
```

## Exo 2

```text
Algorithme pour vérifier si la chaîne de caractère est un palindrome

Variables
chaine : STR
resultat : BOOLEEN
i : NUMBER

INIT
    LIRE chaine
START
    DEBUT FUNCTION estPalindrome (chaine)
        POUR i de 0 à chaine.length -1 par pas de 1 FAIRE
            SI chaine !== chaine 
                RETURN false
            SINON SI chaine.length < 2
                RETURN null
            SINON
                RETURN true
        FIN POUR 
        RETURN resultat
    FIN FUNCTION
FIN
```

## Exo 3

```text
Algorithme pour compter les voyelles dans une chaîne de caractères

Variables
chaine : STR
compteur : NUMBER
i : NUMBER

INIT
    LIRE chaine
START
    DEBUT FUNCTION compterVoyelles (chaine)
        compteur <- 0
        POUR i de 0 à chaine.length - 1
            SI chaine[i] EST UNE VOYELLE (a, e, i, o, u, y)
                compteur ← compteur + 1
            FIN SI
        FIN POUR
        RETURN compteur
    FIN FUNCTION
FIN
```

## Exo 4

```text
Algorithme pour transformer une chaîne de caractère avec la première lettre en majuscule et le reste en minuscule

Variables
chaine : STR
resultat : STR
i : NUMBER

INIT
    LIRE chaine
START
    DEBUT FUNCTION capitaliser (chaine)
        resultat <- chaine[0] EN MAJUSCULE
        POUR i de 1 à chaine.length par pas de 1 FAIRE
            resultat = AJOUTER chaine[i] EN MINUSCULE
        FIN POUR
        RETURN resultat
    FIN FUNCTION
FIN
```

## Exo 5

```text
Algorithme pour tronquer une chaîne de caractère plus longue que la longueur définie

Variables
chaine : STR
longueur : NUMBER

INIT
    LIRE chaine
    LIRE longueur
START
    DEBUT FUNCTION tronquer (chaine, longueur)
        SI chaine.length > longueur ALORS
            RETOURNER longueur depuis chaine[0] + "..."
        SINON
            RETOURNER chaine
        FIN SI
    FIN FUNCTION
FIN
```

## Exo 6

```text
Algorithme pour convertir une chaîne de caractère de snake_case en camelCase

Variables
str : STR
resultat : STR
i : NUMBER
maj : BOOLEEN

INIT
    LIRE str
START
    DEBUT FUNCTION toCamelCase (str)
        resultat <- ""
        maj <- faux
        POUR i de 0 à str.length par pas de 1 FAIRE
            SI str[i] = "_" ALORS
                maj = vrai
            SINON 
                SI maj = vrai ALORS
                    Ajouter str[i]en majuscule
                    maj = faux
                SINON 
                    Ajouter str[i]
                FIN SI
            FIN SI
        FIN POUR
        RETURN resultat
    FIN FUNCTION
FIN
```

## Exo 7

```text
Algorithme pour convertir une chaîne de caractère de camelCase en snake_case

Variables
str : STR
resultat : STR
i : NUMBER

INIT
    LIRE str
START
    DEBUT FUNCTION toSnakeCase (str)
        resultat <- ""
        maj <- faux
        POUR i de 0 à str.length par pas de 1 FAIRE
            SI str[i] est une majuscule ALORS
                resultat ← resultat + "_" + minuscule(str[i])
            SINON
                resultat ← resultat + str[i]
            FIN SI
        FIN POUR
        RETURN resultat
    FIN FUNCTION
FIN
```

## Exo 8

```text
Algorithme pour vérifier la conformité d'un mot de passe

Variables
mdp : STR
minuscule : BOOLEEN
majuscule : BOOLEEN
chiffre : BOOLEEN
special : BOOLEEN
i : NUMBER
caractere : STR

INIT
    LIRE mdp
START
    DEBUT FUNCTION validerMotDePasse (mdp)
        SI mdp.length < 6 OU mdp.length > 12 ALORS
            RETURN faux
        FIN SI

        minuscule <- faux
        majuscule <- faux
        chiffre <- faux
        special <- faux

        POUR i DE 0 à mdp.length - 1 par pas de 1 FAIRE
            caractere <- mdp[i]
            SI caractere = minuscule ALORS
                minuscule <- VRAI
            SINON SI caractere = majuscule ALORS
                majuscule <- VRAI
            SINON SI caractere = chiffre ALORS
                chiffre <- VRAI
            SINON SI caractere = "$" OU "#" OU "@" ALORS
                special <- VRAI
            FIN SI
        FIN POUR
        RETURN minuscule ET majuscule ET chiffre ET special
    FIN FUNCTION
FIN
```

## Exo 9

```text
Algorithme pour 

Variables


INIT
    LIRE
START
    DEBUT FUNCTION ... (...)
        
      
    FIN FUNCTION
FIN
```