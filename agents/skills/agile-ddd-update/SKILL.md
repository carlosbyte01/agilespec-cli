---
name: agile-ddd-update
description:  Collaborates with the user to update the DDD project files, determinate the domain complexity of the project, and recommend the appropriate DDD file to update.
---

# Agile DDD Update or Init

## Usage

This skill is automatically triggered when the user wants to initialize/update the **DDD** project files, or it can be manually invoked using [`/agile-ddd-update`](./SKILL.md).

The two **DDD** files are:
- `DDD-GLOSSARY.md`, is the DDD index file containing just the **Ubiquitous Language**. This is recommended for entry level users, or when working on basic projects that do not require a detailed understanding of the domain. Sample of a **DDD-GLOSSARY.md** file: [DDD-GLOSSARY.md](./references/DDD-GLOSSARY.md)
- `DDD-MAP.md`, is the comprehensive DDD reference document mapping our **Domain Taxonomy**, **Bounded Contexts**, and **Ubiquitous Language**. This is recommended for advance users working on complex projects that need a detailed understanding of the domain. Sample of a **DDD-MAP.md** file: [DDD-MAP.md](./references/DDD-MAP.md)

Also, when the **Agent** detects some termonology/concepts ambiguity, it can suggest the user to update the domain termonology and definitions.

**MANDATORY**: 
- DDD files are **core-files**. The **Agent** is not authorize to write changes to the **DDD** files on your own.
- Always update the **DDD** files when the **User** approves and authorize the **Agent** to do so.

## Action Flow

1. **Determinate Complexity**: Based on the project context, determinate if it is a **simple** or **complex** project. Decide for **complex** if is really a complex large multi domain project. Decide for **simple** as much as you can because is easier to digest for the **User**.
2. **Recommend Complexity**: 
    - Explain the user that you have detected **simple** or **complex** project. And explain the benefits of one over the other. 
    - Let user decide which complexity level to use. 
    - Later the **User** could change the complexity level and the **Agent** will update the domain termonology accordingly.
4. **Show content and ask for confirmation**: Show the content, and ask the user to confirm if the domain update is correct and to approve the changes.
5. **Create files**: Once approved, create the necessary files according to the project complexity level.
    - If project is **simple**, only create the `docs/agile/DDD-GLOSSARY.md`. Follow the [DDD-GLOSSARY.md](./assets/DDD-GLOSSARY-FORMAT.md) template.
    - If project is **complex**, create both `docs/agile/DDD-GLOSSARY.md` and `docs/agile/DDD-MAP.md` files. The `DDD-MAP.md` file should follow the [DDD-MAP.md](./assets/DDD-MAP-FORMAT.md) template.
5. **Notify user**: Inform the user that the domain was updated and show a table with resumed bullets of the content added.

## Activation (NLP Triggers)

- "Please add this concepts to the domain"
- "Please add this terms to the domain"
- "Please add this definitions to the domain"
- "Please update the domain glossary"
- "Help me to drill down this [description] into a domain context"
