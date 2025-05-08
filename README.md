1.What are some differences between interfaces and types in TypeScript?

 interfaces: Define the structure of an object.
 types: Define the structure of an object.

#Interfaces
1. Primarily used for object shapes.
2.Can extend classes and other interfaces.

#Types
1.Can define primitives, unions, tuples, and more.
2.Use intersection (&) and union (|) operators.


Interface: Uses extends

interface Person { name: string; }
interface Male extends Animal { Roman: string; }


Type: Uses & (intersection)
type Person = { name: string; };
type Male = Person & { Roman: string; };

7.Provide an example of using union and intersection types in TypeScript.


**Union Type**
function studentId(studId: string | number) {
  console.log("Your id is:", studId);
}

studentId("8407482");
console.log(studentId(407482));



Intersection Type   
type User = {
  name: string;
};

type Editor = {
  role: string;
};

type EditorUser = User & Editor;

const admin: EditorUser = {
  name: "Roman",
  role: "Editor",
};