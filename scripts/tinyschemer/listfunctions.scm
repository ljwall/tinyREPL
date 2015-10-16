; There are three functions which are the fundamental
; building blocks for working with lists.

; head - gets the first element of a list:
;    (head '(1 2 3 4))
;      => 1

; tail - gets the tail of a list:
;    (tail '(1 2 3 4))
;      => (2 3 4)

; cons - constructs a new list from an item and a list:
;    (cons 1 '(2 3 4))
;      => (1 2 3 4)
;
; This one is so important it gets a second example!
;    (cons "Hello" '())
;      => ("Hello")
