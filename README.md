# MCP Example Server

This project demonstrates a simple MCP (Model Context Protocol) server built with Node.js.
It provides two tools:
- `add`: Adds two numbers.
- `factorial`: Calculates the factorial of a number.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Setup

1.  **Clone the repository (if applicable) or ensure you have the project files.**
2.  **Navigate to the project directory:**
    ```bash
    cd path/to/mcp-example
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

## Running the Server

To start the MCP server, run the following command from the project's root directory:

```bash
npm start
```

Alternatively, you can directly execute the server script:

```bash
node mcpserver.js
```

Upon successful startup, you should see the message:
`MCP Server started and connected to stdio transport.`

## Project Structure

-   `mcpserver.js`: The main file that sets up and runs the MCP server.
-   `tools.js`: Contains the `add` and `factorial` functions used by the server.
-   `package.json`: Defines project metadata, dependencies, and scripts.
-   `package-lock.json`: Records the exact versions of dependencies.
-   `node_modules/`: Directory where npm installs project dependencies. 