import { execSync } from 'child_process';
import { readFileSync, writeFileSync, unlinkSync, existsSync } from 'fs';
import { join } from 'path';

describe('CLI Tests', () => {
  const testJsonFile = join(__dirname, 'test.json');
  const outputTextFile = join(__dirname, 'output.txt');

  beforeEach(() => {
    // Create a dummy JSON file for testing
    writeFileSync(testJsonFile, JSON.stringify({ name: 'John Doe', age: 30 }));
  });

  afterEach(() => {
    // Clean up dummy files
    if (existsSync(testJsonFile)) {
      unlinkSync(testJsonFile);
    }
    if (existsSync(outputTextFile)) {
      unlinkSync(outputTextFile);
    }
  });

  it('should read from a file and print to stdout', () => {
    const command = `npx ts-node src/cli.ts --file ${testJsonFile} --path "name"`;
    const output = execSync(command).toString().trim();
    expect(output).toBe('John Doe');
  });

  it('should read from a file and write to an output file', () => {
    const command = `npx ts-node src/cli.ts --file ${testJsonFile} --path "age" --out ${outputTextFile}`;
    execSync(command);
    const output = readFileSync(outputTextFile).toString().trim();
    expect(output).toBe('30');
  });

  it('should print an error message when the input file does not exist', () => {
    const nonExistentFile = join(__dirname, 'nonexistent.json');
    const command = `npx ts-node src/cli.ts --file ${nonExistentFile} --path "name"`;
    try {
      execSync(command);
    } catch (error) {
      expect(error.stderr.toString()).toContain('Error: Input file not found');
    }
  });

  it('should print an error message when the input file is not valid JSON', () => {
    writeFileSync(testJsonFile, 'this is not json');
    const command = `npx ts-node src/cli.ts --file ${testJsonFile} --path "name"`;
    try {
      execSync(command);
    } catch (error) {
      expect(error.stderr.toString()).toContain('Error: Invalid JSON file');
    }
  });
});
