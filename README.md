# Wordle-Hack
A bookmarklet that prints out the right answer

## Usage
click on the bookmark and you will get something like:
```json
{"boardState":["ulcer","","","","",""],"evaluations":[["correct","correct","correct","correct","correct"],null,null,null,null,null],"rowIndex":1,"solution":"ulcer","gameStatus":"WIN","lastPlayedTs":1644622544740,"lastCompletedTs":1644622544739,"restoringFromLocalStorage":null,"hardMode":false}
```
search for the
```json
"solution":<WORD>
```
and that is the answer
