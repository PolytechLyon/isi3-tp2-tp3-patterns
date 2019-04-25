# Design Pattern Composite

> Structural Design Patterns


## Rappel: le pattern Composite

*Il s'agit d'un pattern qui compose des objets en structures arborescentes pour représenter des hiérarchies entières. Dans ce modèle, chaque nœud de la structure arborescente peut être un objet individuel (leaf) ou une collection d'objets (composite)*.


## Exercice 1

Modifier `kebab.js` pour savoir simplement si un kebab est végétarien ou non.

> "Pistes": il faut ajouter une méthode isVegetarian() (qui retournera `true` ou `false`) à `Component`, `Leaf` et `Composite`

## Exercice 2

Faire une version TypeScript

> :wave: :warning: la méthode `find()` sur `Array` n'existe pas en TypeScript, utilisez `filter`

## Exercice 3

**À faire chez vous**: Ecrire une version **Java** dans **un seul fichier** `Main.java`
- qui pourra être compilé simplement: `javac Kebab.java`
- qui pourra être exécuté de la façon suivante: `java Kebab`