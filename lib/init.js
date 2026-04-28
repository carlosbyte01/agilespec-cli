import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

// Current file path resolved from the module URL.
const __filename = fileURLToPath(import.meta.url);

// Current directory path resolved from the module URL.
const __dirname = path.dirname(__filename);

/**
 * Initialize the AgileSpec project structure in the current working directory.
 *
 * This creates the required AgileSpec folders, syncs bundled skills, and
 * ensures `AGENTS.md` contains the AgileSpec framework references.
 */
export async function initProject() {
    // Target directory for initialization.
    const targetDir = process.cwd();

    // AgileSpec project directories to create.
    const agileDirs = [
        "docs/agile/features",
        "docs/agile/backlog",
        "docs/agile/stories",
        "docs/agile/done",
        "docs/agile/in-review",
        "docs/requirements",
    ];

    console.log("Initializing AgileSpec project structure...");

    for (const dir of agileDirs) {
        const fullPath = path.join(targetDir, dir);
        await fs.ensureDir(fullPath);
        console.log(`  Created ${dir}`);
    }

    // Base directory where shared skills are copied into the project.
    const skillsBaseDir = path.join(targetDir, ".agents/skills");
    await fs.ensureDir(skillsBaseDir);
    console.log("  Created .agents/skills");

    // Source directory for packaged skills.
    const packageSkillsDir = path.resolve(__dirname, "../agents/skills");

    // Source template used to seed or update `AGENTS.md`.
    const packageAgentsTemplate = path.resolve(__dirname, "../templates/AGENTS-FORMAT.md");

    if (await fs.pathExists(packageSkillsDir)) {
        await fs.copy(packageSkillsDir, skillsBaseDir);
        console.log("  Synchronized framework skills to .agents/skills/");
    } else {
        console.error("  Error: Could not find framework skills in the package.");
    }

    // Path to the project's `AGENTS.md` file.
    const agentsPath = path.join(targetDir, "AGENTS.md");

    // Fallback content used when the template file is unavailable.
    const agileSpecLink = `## AgileSpec Framework
This project uses the AgileSpec framework to manage the development process, leveraging Scrum, SDD, BDD and TDD, proven methodologies that work on human teams, now working for AI Coding Agents too.

- Framework: [@agilespec/cli](https://www.npmjs.com/package/@agilespec/cli)
- Entrypoint Skill: [.agents/skills/agilespec/SKILL.md](.agents/skills/agilespec/SKILL.md)
`;

    // Use the packaged AGENTS.md template when it is available.
    if (await fs.pathExists(packageAgentsTemplate)) {
        // Load the template content from the package.
        const templateContent = await fs.readFile(packageAgentsTemplate, "utf8");

        // Update an existing AGENTS.md if it does not already reference AgileSpec.
        if (await fs.pathExists(agentsPath)) {
            let content = await fs.readFile(agentsPath, "utf8");
            if (!content.includes("agilespec/SKILL.md")) {
                content += `\n\n${templateContent}`;
                await fs.writeFile(agentsPath, content);
                console.log("  Updated AGENTS.md with AgileSpec definitions");
            }
        } else {
            // Create AGENTS.md from the packaged template when it does not exist.
            await fs.writeFile(agentsPath, templateContent);
            console.log("  Created AGENTS.md from AgileSpec template");
        }
    } else {
        // Fall back to embedded AgileSpec reference content when the template is missing.
        if (await fs.pathExists(agentsPath)) {
            let content = await fs.readFile(agentsPath, "utf8");
            if (!content.includes("agilespec/SKILL.md")) {
                content += `\n${agileSpecLink}`;
                await fs.writeFile(agentsPath, content);
                console.log("  Updated AGENTS.md with AgileSpec reference");
            }
        } else {
            // Create a new AGENTS.md with the embedded AgileSpec reference.
            const initialContent = `# Project Agents\n\n${agileSpecLink}`;
            await fs.writeFile(agentsPath, initialContent);
            console.log("  Created AGENTS.md with AgileSpec reference");
        }
    }

    console.log("\nAgileSpec initialization complete!");
}
