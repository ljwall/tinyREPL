; List, as well as being used for data, are used
; for calling functions. The general form is:
;      (FuntionName arg1 arg2 .. argN)

; All functions are called in this way. Including
; the basic arithmatic functions. For example, try
; these at the REPL:
;    (+ 41 1)
;    (/ 10 5)

; There are the numerical comparisons:
;    (>= 3 4)
; and <=, <, >

; The == function compares any two values. Try:
;    (== 1 2)
;    (== '("Hello" 1) '("Hello" 1))

; This calling syntax is why the single-quote is used
; for lists that hold data - it indicates that the
; expression that follows should be taken as data and
; not evaluted as a function.

; If you like try entering this (without the ') at the
; REPL:
;    (1 2 3)
;
; It'll complain that 1 is not a function.
