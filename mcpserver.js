import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { add, factorial } from "./tools.js";

// Create an MCP server
const server = new McpServer({
  name: "DemoToolsServer",
  version: "1.0.0"
});

// Add an addition tool
server.tool("add",
  {
    description: "Adds two numbers.",
    input: z.object({ a: z.number(), b: z.number() }),
    output: z.object({ result: z.number() })
  },
  async ({ a, b }) => {
    const result = add(a, b);
    return { result };
  }
);

// Add a factorial tool
server.tool("factorial",
  {
    description: "Calculates the factorial of a number.",
    input: z.object({ n: z.number().int().min(0) }), // Ensure n is a non-negative integer
    output: z.object({ result: z.number() })
  },
  async ({ n }) => {
    const result = factorial(n);
    return { result };
  }
);

// Start receiving messages on stdin and sending messages on stdout
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log("MCP Server started and connected to stdio transport.");
}

main().catch(err => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
