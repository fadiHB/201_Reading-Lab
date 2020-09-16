# Error Handling & debugging

## EXECUT.ION CONTEXTS

The JavaScript interpreter uses the concept of execution contexts.
There is one global execution context; plus, each function creates a new
new execution context. They correspond to variable scope.

## The Stack

The JavaScript interpreter processes one line of the code at a time.
When a statement needs data form another function,it stacks (or piles) the new function on top of the current task

## ERROR OBJECTS

Error objects can help you find where your mistakes are and browsers have tools to help you read them.

![f2](/r10/r101.PNG)

## HOW TO DEAL WITH ERRORS

there are two things you can do with the errors.

![f2](/r10/r102.PNG)

## BROWSER DEV TOOLS & JAVASCRIPT CONSOLE

* console.log()
is your best friend

also you can use

* console.table()
* console.groupEnd();
* console .group()
* console.assert()


## HANDLING EXCEPTIONS
If you know your code might fail, use try, catch, and finally.
Each one is given its own code block

![f2](/r10/r103.PNG)
![f2](/r10/r104.PNG)

## Summary

![f2](/imgC2/summ.jpg)

* If you understand execution contexts (which have two stages) and stacks, you are more likely to find the error in your code.

* Debugging is the process of finding errors. It involves a process of deduction.

* The console helps narrow down the area in which the error is located, so you can try to find the exact error.

* JavaScript has 7 different types of errors. Each creates its own error object, which can tell you its line number and gives a description of the error.

* If you know that you may get an error, you can handle it gracefully using the try, catch, finally statements.
Use them to give your users helpful feedback.