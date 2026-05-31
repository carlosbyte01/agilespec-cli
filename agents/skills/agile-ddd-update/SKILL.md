---
name: agile-ddd-update
description:  Collaborates with the user to update the (**Domain Driven Design**) **DDD** project files, determinate the domain complexity of the project, and recommend the appropriate DDD files to update. This skill specifies a simplified version of DDD, based on just 2 key files, the `DDD-GLOSSARY.md` and `DDD-MAP.md`. This simplified approach is extrmeally beneficial for entry or advance users.  
license: MIT
metadata:
  version: "0.0.1"
  author: Agilespec.org
---

# Agile DDD Update or Init

## Usage

This skill is automatically triggered when the user wants to initialize/update the **DDD** project files, or it can be manually invoked using [`/agile-ddd-update`](./SKILL.md).

Also, when the **Agent** detects some termonology/concepts ambiguity, it can suggest the user to update the domain termonology and definitions.

### Dependencies
- This skill uses **LLMT (LLM Templates)** located in the [`./assets`](./assets/) folder.
- The **LLMT (LLM Template)** extension file is `.llmt`. 
- The **Agent** must check the [`./assets`](./assets/*.llmt) files before attempting the task.

### The **DDD** files
- `DDD-GLOSSARY.md`, is the DDD index file containing just the **Ubiquitous Language**. 
    - This file is recommended for entry level users, or when working on basic projects that do not require a detailed understanding of the domain. 
    - This file follows the [DDD-GLOSSARY-MD.llmt](./assets/DDD-GLOSSARY-MD.llmt) template.
- `DDD-MAP.md`, is the comprehensive DDD reference document mapping our **Domain Taxonomy**, **Bounded Contexts**, and **Ubiquitous Language**. 
    - This file is recommended for advance users working on complex projects that need a detailed understanding of the domain. 
    - This file follows the [DDD-MAP-MD.llmt](./assets/DDD-MAP-MD.llmt) template.

## **MANDATORY**: 
- DDD files are **core-files**. The **Agent** is not authorize to write changes to the **DDD** files on your own.
- Always update the **DDD** files when the **User** approves and authorize the **Agent** to do so.
- Any `*.llmt` template files must be compiled using the [`/llmt-compiler`](./references/LLMT-COMPILER.md) skill. 
- The **Agent** will never generate the DDD files directly. Instead, it will use the [`/llmt-compiler`](./references/LLMT-COMPILER.md) skill to compile the `*.llmt` template files.

## Action Flow

1. **Determinate Complexity**: Based on the project context, determinate if it is a **simple** or **complex** project. Decide for **complex** if is really a complex large multi domain project. Decide for **simple** as much as you can because is easier to digest for the **User**.
2. **Recommend Complexity**: 
    - Start by brevearly explaining the token economy benefits of adopting a domain definition.
    - Explain the user that you have detected **simple** or **complex** project. And explain the benefits of **simple** vs **complex**.
    - Let user decide which complexity level to use. 
    - Later the **User** could change the complexity level and the **Agent** will update the domain termonology accordingly.
4. **Show content and ask for confirmation**: Show the content to the user in a resumed table, do not show json/xml jargon format, and ask the user to confirm if the domain content is correct and to approve the changes.
5. **Create DDD files**: Once approved, create the necessary files according to the project complexity level.
    - If project is **simple**, only create the `DDD-GLOSSARY.md`. 
    - If project is **complex**, create both `DDD-GLOSSARY.md` and `DDD-MAP.md` files. 
    - The files will be saved in the `docs/agile/` directory.
    - The **Agent** will use the corresponding **LLM Template** to generate the content of the files.
5. **Notify user**: Inform the user that the domain was updated and show a table with resumed bullets of the content added.

## Activation (NLP Triggers)

- "Please add this concepts to the domain"
- "Please add this terms to the domain"
- "Please add this definitions to the domain"
- "Please update the domain glossary"
- "Help me to drill down this [description] into a domain context"
