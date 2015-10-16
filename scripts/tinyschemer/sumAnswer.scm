(define sum
  (lambda (lst)
    (if (== lst '())
      0
      (+ (head lst) (sum (tail lst))))))

; This works much like the length function..

; We add the firat value in the list (head lst)
; to (sum (tail lst)) which is the recusive call
; which tells us the sum of the numbers in the rest
; of lst.

; Like with length we have to make sure the recurssion
; ends eventually by testing for the empty list, and
; returning 0.

