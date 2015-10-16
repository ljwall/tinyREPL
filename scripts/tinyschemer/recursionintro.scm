; A first recursive function!
;
; A length function for lists would be super-useful.
; This function introduces a new form `if`, and uses
; recursion.

(define length
  (lambda (lst)
    (if (== lst '())
      0
      (+ 1 (length (tail lst))))))

; After (load)-ing, check if this works with something
; like (length '(5 6 7))

; How does this work? First of all, here's what `if` does -
; It returns one of two values depending on whther the
; the first argument is true or false:
;    (if [either-#t-or-#f] [value-if-#t] [value-if-#f])

; Evaluating (length '(5 6 7)), this is the sequence
; of calulations:

; (length '(5 6 7))
; -> (+ 1 (length (tail '(5 6 7))))
;        since lst is set to (5 6 7) and is not equal to ()
; -> (+ 1 (length '(6 7))))
;        since the tail of (5 6 7) is (6 7)

; What is (length '(6 7)) ?
; -> (+ 1 (length (tail '(6 7))))
;        since lst is set to (6 7) and is not equal to ()
; -> (+ 1 (length '(7)))
;        since the tail of (6 7) is (7)

; What is (length '(7)) ?
; -> (+ 1 (length (tail '(7))))
;        since lst is set to (7) and is not equal to ()
; -> (+ 1 (length '()))
;        since the tail of (7) is ()

; What is (length '()) ?
; -> 0
;        since lst is set to () and is equal to ()

; Going back up throught the chain we get:
; (length '(7)) = (+ 1 0)
; (length '(6 7)) = (+ 1 (+ 1 0))
; (length '(5 6 7)) = (+ 1 (+ 1 (+ 1 0))) = 3

; PHEW!! It's a bit of ordeal to work through manually.
;
; An easier way to think about this is along these lines:
; The length of list is just one plus the length of its
; tail. That works for every list expect '() which has no
; tail, so we test for '() and say that its length is 0.

