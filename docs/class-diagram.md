```mermaid
  classDiagram
    direction LR
    
    %% classes definition
    class Dictionary

    class Word

    %% relationships definition
    Dictionary "1..1" <--> "1..N" Word : Contains
```