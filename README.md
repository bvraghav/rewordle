# ReWordle #

Inverse Wordle Game. A player selects a word, and the
machine has to guess it.

## Initial commit (142ff1c) ##

The machine can score a corpus based on character
frequencies within the corpus.

```javascript
// rewordle> node start.mjs
[
  [ 'boozy', 4395 ], [ 'zippy', 4391 ], [ 'cuffy', 4382 ],
  [ 'juggs', 4379 ], [ 'buxus', 4367 ], [ 'jimmy', 4364 ],
  [ 'knuff', 4288 ], [ 'mamma', 4288 ], [ 'mimic', 4285 ],
  [ 'quook', 4278 ], [ 'chich', 4274 ], [ 'hoppo', 4272 ],
  [ 'chuck', 4247 ], [ 'buggy', 4236 ], [ 'bobby', 4225 ],
  [ 'booby', 4225 ], [ 'chuff', 4217 ], [ 'huffy', 4175 ],
  [ 'puffy', 4164 ], [ 'whiff', 4129 ], [ 'pygmy', 4112 ],
  [ 'buffy', 3952 ], [ 'fubby', 3952 ], [ 'fluff', 3942 ],
  [ 'fizzy', 3941 ], [ 'jiffy', 3892 ], [ 'jinni', 3866 ],
  [ 'muzzy', 3786 ], [ 'ajava', 3780 ], [ 'oxbow', 3707 ],
  [ 'civic', 3656 ], [ 'zocco', 3629 ], [ 'mummy', 3616 ],
  [ 'yummy', 3616 ], [ 'boffo', 3599 ], [ 'puppy', 3594 ],
  [ 'yuppy', 3594 ], [ 'jiqui', 3583 ], [ 'vivid', 3578 ],
  [ 'jugum', 3395 ], [ 'bubby', 3382 ], [ 'xylyl', 3345 ],
  [ 'fuzzy', 3314 ], [ 'immix', 3202 ], [ 'fuffy', 3144 ],
  [ 'unnun', 3118 ], [ 'xviii', 2573 ], [ 'xxvii', 2573 ],
  [ 'xxiii', 2160 ]
]
```
