| Array Size | Insert time | Append Time |
| :-----: | :-----:  | :-----: |
| extra large | 776.690333 ms | 2.89525 ms |
| large | 8.777583 ms | 552.583 μs |
| medium | 188.416 μs | 118.75 μs |
| small | 36.042 μs | 72.625 μs |
| tiny | 21.417 μs | 51.291 μs |

Despite the insert array having a stronger start, ultimately it runs more slowly than the append array as the input size becomes larger. On a graph, doublerInsert would curve upward much more rapidly than doublerAppend. This is primarily due to the methods used within each function. Although both functions have a linear runtime, doublerInsert uses the unshift method. For every new value received, unshift requires the computer to insert the value but also reassign the index values of already existing array elements. In contrast to unshift, push simply requires the computer to add a new value to an array, no reassignment needed. The push method alone is very capable of having a contstant runtime, whereas the unshift method is not. In summary, even though both functions are linear thanks to the use of a loop, the doublerAppend function scales better because its method has a lower complexity.