# Lab 5 - Starter

Thanh-Long Nguyen Trong, William Widjaja

Link to `expose.html`: [https://thanhlongnt.github.io/Lab5_Starter/expose.html](https://thanhlongnt.github.io/Lab5_Starter/expose.html)

Link to `explore.html`: [https://thanhlongnt.github.io/Lab5_Starter/explore.html](https://thanhlongnt.github.io/Lab5_Starter/explore.html)

## Explore Part 3

Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

- No, we would not unit test the "message" feature of a messaging application. This is better left to end-to-end or integration testing to ensure that all the parts within this abstract "message" feature perform the way that we expect it to. There are too many moving parts to turn this into a proper unit test.

Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

- Yes, we would use a unit test to test the "“max message length”" feature of a messaging application because we have a clear and defined boundary of 80 characters and we can test this singular piece of logic without needing to worry about the other parts of the system (aka the message being sent). We also want to test edge-cases to ensure our logic works correctly.
