; Ok, we're nearly getting to the good stuff!

; Like any good language, we can define variables, like so:
(define foo 42)

; You can type this out over at the REPL, or, instead,
; call the load function like this: (load), which will
; load the contents of this editor window.

; Then try these at the REPL:
;    foo
;    (+ foo 1)

; Functions are created with the form:
;    (lambda (arg1 arg2 .. argM) expr)
;
; This creates a function whcih takes M arguments,
; arg1 .. argM. When it's called expr is evaluated, and
; its value is the return value.
;
; To store a function to call later, use define. Here's an
; example.

(define plus (lambda (a b c) (+ a (+ b c))))

; The + function only takes two arguments. This function adds
; three argments. After running (load) at the REPL try:
;    (plus 1 2 3)

