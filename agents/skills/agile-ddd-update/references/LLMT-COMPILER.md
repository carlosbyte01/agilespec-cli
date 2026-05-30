---
name: llmt-compiler
description: Renders and compiles `.llmt` (LLM Template) files by resolving variables, conditionals, loops, and custom comments using a structured data context. Use this skill when asked to evaluate, render, or compile template structures containing double-curly braces {{ }}, statement blocks {% %}, and comment blocks {# #}.
license: MIT
metadata:
  version: "0.0.1"
  author: Agilespec.org
---

# LLMT Compiler Engine

This skill equips the agent with a local, strict, runtime-compilation block to compile `.llmt` files safely and predictably.

## When to Use
Use this skill automatically when a task requires merging a raw template containing `{{ }}`, `{% %}`, or `{# #}` syntax with structured variable data, or when explicitly asked to run the `/llmt-compiler` command.

## Expected Input Format
The agent expects the input to be clearly wrapped in two XML-style tag blocks:
1. `<DataContext>`: A structured JSON object containing all the variable mappings.
2. `<Template>`: The raw `.llmt` template to be parsed.

## Execution Instructions

When compiling, follow these logic rules strictly:

### 1. Tag Parsing Rules
* **Variable Interpolation (`{{ variable_name }}`)**: Substitute the bracketed tag with the matching key value from the `<DataContext>`. Supports dot-notation (e.g., `item.property`) inside loops.
* **Conditionals (`{% if condition %}` ... `{% else %}` ... `{% endif %}`)**: Evaluate the condition. If the key exists, is non-empty, and is not `false`, render the block inside `if`. Otherwise, render the block inside `else` (if provided).
* **Loops (`{% for item in list %}` ... `{% endfor %}`)**: Iterate through the specified array. Temporarily bind each item to the `item` keyword within that loop's scope.
* **Comments (`{# comment #}`)**: Filter out, strip, and entirely ignore anything wrapped inside `{# ... #}` tags. These must be completely eliminated during the compilation phase and must never appear in the final rendered output [2].

### 2. Guardrails & Output Integrity
* **Strict Tag Stripping**: The final output must contain only the compiled result. Under no circumstances should any `.llmt` compiler tags (`{% %}`, `{{ }}`, or `{# #}`) remain in the final response [2].
* **Whitespace Preservation**: Maintain the structural spacing, indentation, and newlines defined outside the control tags. Do not inject extra blank lines where control tags or comments were stripped.
* **Strict Binary Metadata**: When evaluating conditions for mutually exclusive lines (e.g., displaying `domain` or `context`), ensure only the matching branch is generated. Never output both.

## Output Format
Output only the raw, rendered text resulting from the compilation. Do not include any meta-commentary, codeblock wrappers (unless specified by the template itself), or helper text.

## Example

### Input:
```xml
<DataContext>
{
  "systemName": "Trash Collection System",
  "terms": [
    {
      "name": "Route (Optimization)",
      "meaning": "A mathematically ordered sequence of dumpster locations.",
      "domainName": "Optimized Routing"
    }
  ]
}
</DataContext>

<Template>
{# This is a compile-time comment explaining the template purpose #}
# DDD - Domain Driven Design: {{ systemName }}
{% if terms %}
## Ubiquitous Language:
{% for term in terms %}
### **{{ term.name }}**: 
- **meaning**: {{ term.meaning }}
{# Decide whether to show the domain taxonomy or the local bounded context #}
{% if term.domainName %}
- **domain**: {{ term.domainName }}
{% else %}
- **context**: {{ term.boundedContextName }}
{% endif %}
{% endfor %}
{% endif %}
</Template>
```

### Output
```md
# DDD - Domain Driven Design: Trash Collection System
## Ubiquitous Language:
### **Route (Optimization)**: 
- **meaning**: A mathematically ordered sequence of dumpster locations.
- **domain**: Optimized Routing
```
