; An exercise. Write a count-in function. It should
; take two paramters and check how many times the
; first paramter occurs in the second (which should
; be a list)

; We want:
;    (count-in 5 '(1 5 3 5 4 5))
;      => 3

; Here's a partial implementation - you need to replace
; the ------

(define count-in
  (lambda (val lst)
    (if (== lst '())
      0
      ------)))

; (Hint, you'll need another `if`, and will need both
; the head and tail function. The next section has an
; answer.)
