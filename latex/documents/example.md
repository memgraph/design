---
title: "Title"
header-title: "Header Title"
date: 20YY-MM-DD
copyright: "©20YY Memgraph Ltd. All rights reserved."
titlepage: true
titlepage-color: FFFFFF
titlepage-text-color: 101010
titlepage-rule-color: 101010
titlepage-rule-height: 1
...

# Heading 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa leo,
tempus non tincidunt ut, tempor id tortor. Mauris pretium maximus dui vitae
porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi
tincidunt nisl metus, in molestie erat rutrum vitae. Mauris hendrerit tortor eu
molestie luctus. Suspendisse et tortor ac magna laoreet sollicitudin. Maecenas
non nunc sodales, tincidunt metus id, maximus enim. Maecenas suscipit dignissim
libero, tincidunt finibus diam eleifend eget. Ut fringilla ut nisi elementum
facilisis. Donec vehicula libero ac enim rhoncus porttitor. Nulla aliquet purus
non dui fringilla, sit amet semper diam tincidunt. Aenean sem ante, varius
mollis porta ac, maximus a arcu.

In consequat consectetur magna at efficitur. Praesent semper fringilla
imperdiet. Integer non est id nulla efficitur mollis. Suspendisse quis diam in
est maximus consequat. Aenean et ullamcorper diam. Aliquam nunc lacus, lacinia
id purus et, blandit dictum nulla. Integer tempor ipsum magna, sed rutrum erat
dignissim vitae. Donec a erat tellus. Duis in lacus et leo sagittis posuere.
Donec accumsan, purus eget condimentum placerat, sem est porta lectus, quis
vestibulum orci libero vitae est. Lorem ipsum dolor sit amet, consectetur
adipiscing elit.

## Heading 2

TODO

### Heading 3

TODO

# Tables

TODO

# Code

openCypher is default. `listings` package doesn't support custom languages.
The only reasonable workaround is to set openCypher as a default language
in listings.

```
MATCH (n:Person) WHERE n.name = "John" AND n.age > 25
RETURN collect(n.name, n.age) AS map_name_to_age
```

```
RETURN 'WHERE string 1234 false'
```

    // comment...
    RETURN "(,),-,<-,->,<,>,=,[,]"

```
RETURN True, false, NULL, null
```

```
RETURN "bfs"
```

```
MATCH (v1)-[e1:EdgeType]->(v2)
RETURN v1, e1, v2
```

```
MATCH (v1)<-[e1:EdgeType]-(v2)
RETURN v1, e1, v2
```

```
// comment ... 1234 False "test"
MATCH (n) RETURN n // comment ...
MATCH (n) WHERE n.x = '// not a comment ...' RETURN n
/* comment 1234 False "test"
...*/
RETURN n
```

openCypher Extension

```
MATCH (a {id: 723})-[*bfs..10 (e, n | e.x > 12 AND n.y < 3)]-() RETURN *
```

```
MATCH (a {id: 1})-[le *wShortest 10 (e, n | e.w) total_weight]-(b {id: 2})
RETURN *
```
