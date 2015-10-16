; An exercise. Write a sum function. It should
; take a list of numbers and return their sum

; We want:
;    (sum '(1 2 3 4 5))
;      => 15

; Here's a partial implementation - you need to replace
; the ------

(define sum
  (lambda (lst)
    (if (== lst '())
      0
      ------)))

; (Hint, you'll need both the head and tail function. The
; next section has an answer)
