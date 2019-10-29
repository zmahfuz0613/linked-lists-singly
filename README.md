## Linked lists 

### Objectives: 

1. Define what a singly linked list is 
2. Compare and contrast Linked Lists with Arrays 
3. Implement insertion, removal and traversal methods on Singly Linked List

### Definition: 

A **linked list** is a data structure, in which the elements are **not** stored at contiguous(right next to each other) memory locations. The elements in a linked list are linked using **pointers** as shown in the image below:

![](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist.png)

Source: [Geeks for Geeks](https://www.geeksforgeeks.org/data-structures/linked-list/)


We could also say that linked list consists of **nodes**, and each **node** has a **value** and a **pointer** to another node or null.
Each item stores the address of the next item in the list. A bunch of random memory addresses are linked together. 

```
const list = {
    head: {
        value: 12
        next: {
            value: 99
            next: {
                value: 37
                next: null
            }
        }
    }
};
```

* The first and last node of a linked list usually are called the **head** and **tail** of the list, respectively. Thus, we can traverse the list starting at the head and ending at the tail. 
* The tail node is a special node, where the next pointer is always pointing or linking to a **null** reference, indicating the end of the list.

Arrays are great if you want to read random elements instantly, because you can look up any element of your array instantly.Arrays allow **random** access. With a linked list, the elements aren't next to each other, so you can't calculate the position of the fifth element. You have to go to the first element, to get the address to the second and so forth. This is so-called **sequential access** which means we could only read the elements one by one, starting at the first item.

![](comparison.png)


|               | Array          | Linked list  |
| ------------- |:-------------:| ---------:|
| Reading(access)       | O(1)          |   O(N)    |
| Insertion     | O(N)          |   O(1)    |
| Removal     | O(N)          |   O(1) or O(N)   |              
| Search     | O(1)          |   O(N)   |     



Exceptions: 

1. Insertion at the end of the array takes O(N). 
2. Removing from end of a linked list takes O(N), because we need to find the item right before the tail and that inlolves going through the whole list.


