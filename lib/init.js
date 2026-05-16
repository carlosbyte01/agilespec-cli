import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

// Current file path resolved from the module URL.
const __filename = fileURLToPath(import.meta.url);

// Current directory path resolved from the module URL.
const _dirname = path.dirname(__filename);

/**
 * Initialize the AgileSpec project structure in the current working directory.
 *
 * This creates the required AgileSpec folders, syncs bundled skills, and
 * ensures `AGENTS.md` contains the AgileSpec framework references.
 */
export async function initProject() {
    // Target directory for initialization.
    const installDir = process.cwd();

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
        const fullPath = path.join(installDir, dir);
        await fs.ensureDir(fullPath);
        console.log(`  Created ${dir}`);
    }

    // Base directory where shared skills are copied into the project.
    const skillsBaseDir = path.join(installDir, ".agents/skills");
    await fs.ensureDir(skillsBaseDir);
    console.log("  Created .agents/skills");

    // Source directory for packaged skills.
    const packageSkillsDir = path.resolve(_dirname, "../agents/skills");

    // Source template used to seed or update `AGENTS.md`.
    const agentsMdTemplate = path.resolve(_dirname, "../templates/AGENTS-FORMAT.md");

    // Inject agent skills
    if (await fs.pathExists(packageSkillsDir)) {
        await fs.copy(packageSkillsDir, skillsBaseDir);
        console.log("  Synchronized framework skills to .agents/skills/");
    } else {
        console.error("  Error: Could not find framework skills in the package.");
    }

    // Path to the project's `AGENTS.md` file.
    const agentsMdPath = path.join(installDir, "AGENTS.md");

    // Load the template content from the package.
    const templateContent = await fs.readFile(agentsMdTemplate, "utf8");

    if (await fs.pathExists(agentsMdPath)) {
        // Update an existing AGENTS.md if it does not references AgileSpec.
        let content = await fs.readFile(agentsMdPath, "utf8");
        if (!content.includes("agilespec/SKILL.md")) {
            content += `\n\n${templateContent}`;
            await fs.writeFile(agentsMdPath, content);
            console.log("  Updated AGENTS.md with AgileSpec definitions");
        }
    } else {
        // Create AGENTS.md from the packaged template.
        await fs.writeFile(agentsMdPath, templateContent);
        console.log("  Created AGENTS.md from AgileSpec template");
    }

    console.log("\nAgileSpec initialization complete!");
}
