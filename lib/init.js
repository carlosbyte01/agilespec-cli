import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function initProject() {
	const targetDir = process.cwd();

	// 1. Create data directories
	const agileDirs = [
		'docs/agile/features',
		'docs/agile/backlog',
		'docs/agile/stories',
		'docs/agile/done',
		'docs/agile/in-review',
		'docs/requirements'
	];

	console.log('Initializing AgileSpec project structure...');

	for (const dir of agileDirs) {
		const fullPath = path.join(targetDir, dir);
		await fs.ensureDir(fullPath);
		console.log(`  Created ${dir}`);
	}

	// 2. Create agent skills base directory
	const skillsBaseDir = path.join(targetDir, '.agents/skills');
	await fs.ensureDir(skillsBaseDir);
	console.log('  Created .agents/skills');

	// 3. Synchronize skills and core documentation
	// The agents/skills directory is in the root of the package
	const packageSkillsDir = path.resolve(__dirname, '../agents/skills');
	const packageAgentsTemplate = path.resolve(__dirname, '../rules/AGENTS.md');

	if (await fs.pathExists(packageSkillsDir)) {
		await fs.copy(packageSkillsDir, skillsBaseDir);
		console.log('  Synchronized framework skills to .agents/skills/');
	} else {
		console.error('  Error: Could not find framework skills in the package.');
	}

	// 4. Update AGENTS.md
	const agentsPath = path.join(targetDir, 'AGENTS.md');
	const agileSpecLink = `## AgileSpec Framework
This project uses the AgileSpec framework to manage the development process, leveraging Scrum, SDD, BDD and TDD, proven methodologies that work on human teams, now working for AI Coding Agents too.

- Framework: [@agilespec/cli](https://www.npmjs.com/package/@agilespec/cli)
- Entrypoint Skill: [.agents/skills/agilespec/SKILL.md](.agents/skills/agilespec/SKILL.md)
`;

	if (await fs.pathExists(packageAgentsTemplate)) {
		// If the template exists, we use it to initialize or update AGENTS.md
		const templateContent = await fs.readFile(packageAgentsTemplate, 'utf8');
		if (await fs.pathExists(agentsPath)) {
			let content = await fs.readFile(agentsPath, 'utf8');
			if (!content.includes('agilespec/SKILL.md')) {
				content += `\n\n${templateContent}`;
				await fs.writeFile(agentsPath, content);
				console.log('  Updated AGENTS.md with AgileSpec definitions');
			}
		} else {
			await fs.writeFile(agentsPath, templateContent);
			console.log('  Created AGENTS.md from AgileSpec template');
		}
	} else {
		// Fallback logic if template is missing
		if (await fs.pathExists(agentsPath)) {
			let content = await fs.readFile(agentsPath, 'utf8');
			if (!content.includes('agilespec/SKILL.md')) {
				content += `\n${agileSpecLink}`;
				await fs.writeFile(agentsPath, content);
				console.log('  Updated AGENTS.md with AgileSpec reference');
			}
		} else {
			const initialContent = `# Project Agents\n\n${agileSpecLink}`;
			await fs.writeFile(agentsPath, initialContent);
			console.log('  Created AGENTS.md with AgileSpec reference');
		}
	}

	console.log('\nAgileSpec initialization complete!');
}
