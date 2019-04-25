# Design Pattern Strategy

> Behavioral Design Pattern

## Rappel: le pattern Strategy

*Le pattern Strategy a pour objectif d'adapter le comportement et les algorithmes d'un objet en fonction d'un besoin sans changer les interactions de cet objet avec les clients*.

- la **stratégie**, c'est l'interface qui va définir la(les) méthode(s) des stratégies(options) que l'on va implémenter
- les **stratégies**, *(les opérations de la calculette par exemple)* vont implémenter l'interface **stratégie**
- le **contexte**, c'est la classe qui va utiliser les stratégies pour faire toujours la même action mais avec un résultat différent à chaque fois

> - cf. `01-strategy/01-commute/commute.js` 
> - cf. `01-strategy/02-commute-ts/commute.ts` 

> **:wave: Remarque:** vous pouvez utiliser [https://repl.it](https://repl.it) pour exécuter vos codes

## Exercice 1

### Happy Hour

**Enoncé/contexte**: modélisez le concept d'happy hour dans un pub. Le serveur sert des bières sur lesquelles il peut appliquer des réductions.

- le serveur est le contexte
- les réductions sont les stratégies

Les réductions à appliquer sont:
- 10% (`prix x 0.9`)
- 25% (`prix x 0.75`)
- 100% (`prix x 1`)


#### JavaScript

**À faire**: dans le fichier `01-strategy/03-happy-hour/happy-hour.js`
- ajoutez le code nécessaire pour qu'à l'exécution (`node happy-hour.js`) vous obteniez des **OK** dans tous les cas

#### TypeScript

**À faire**: dans le fichier `01-strategy/04-happy-hour-ts/happy-hour.ts`
- re-écrire/compléter la même chose en TypeScript (avec une interface pour la strategie)


> Remarque: sur repl.it changer la valeur de `strict` à `false` (`"strict": false,`)

```json
{
  "compilerOptions": {
    "target": "es6",
    "lib": ["esnext", "dom"],
    "module": "commonjs",
    "moduleResolution": "node",
    "strict": false,
    "jsx": "react",
    "allowJs": true,
    "sourceMap": true,
    "inlineSources": true,
    "types": ["node"],
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true
  }
}
```


#### Java

**À faire**: Ecrire/compléter une version **Java** dans **un seul fichier** `01-strategy/05-happy-hour-java/Main.java`
- qui pourra être compilée simplement: `javac Main.java`
- qui pourra être exécutée de la façon suivante: `java Main`




