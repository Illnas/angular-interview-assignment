
# Project: Photo Viewer Assignment 

This project is selection process assignment.




## Tasks

- To be made with React, Angular(TypeScript is must!) or just with SCSS
  
- BEM methodology must be used
- Usage of UI frameworks (Bootstrap, Material etc) is not permitted
- Need to create and use components as efficient as possible
- SCSS for every component needs to follow design, and for project as whole
- Less SCSS, more reusability of code
- Needs to write code in English
- Mobile Design and Responsive Design






## Requirements Satisfied

- Task was finished in Angular with usage of SCSS
- BEM methodoloy was implemented, not sure if I used it correctly
- Did not use any UI framework
- I did use components efficiently
- Used mixin for text, since most text had different font sizes, line heights etc 
- Code is in English (except content which was in Croatian Language)
- Mobile and Responsive designs were implemented



### Feedback from Task Assigner

- Task was not reviewed and therefore there is no feedback notes yet!




### Run Locally

Clone the project

```bash
  git clone https://github.com/Illnas/angular-interview-assignment
```

Go to the project directory

```bash
  cd angular-interview-assignment
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  ng serve --open
```


### Notes

Project was not that hard. Design was simple, as such I finished it relatively fast.
Problem was BEM methodology. I do consider BEM a really good in some aspects, but it 
tends to feel similar to Bootstrap and Tailwind, that you have to wonder why I am not 
using those two instead of SCSS with BEM. Still, I did implement it, will have to 
see if I implemented it correctly. Assignment also mentions a logical usage of code
and since this project has no logic (either from fetching something and rendering data,
nor it has any button events, or anything of any sorts) I will have to wait to see what that 
part was referring to.

- If data would be coming as an object then it is safe to assume that Keywords section
  of left side and Special Remarks of right side of the component would be a single component
  which would receive mapped prop which would then render as it renders now. In React this would be 
  simple map that would for each element create component and pass its data to it to render.
  How would this be implemented in Angular is what I will try to do. After all, nowhere did it say to use this
  therefore implementing it might be detrimental in grading this assignment.


