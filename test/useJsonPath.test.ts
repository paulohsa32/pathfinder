import { renderHook } from '@testing-library/react-hooks';
import useJsonPath from '../src/useJsonPath';

describe('useJsonPath', () => {
  it('should return the correct value for a simple path', () => {
    const jsonData = { name: 'John Doe', age: 30 };
    const path = 'name';
    const { result } = renderHook(() => useJsonPath(jsonData, path));
    expect(result.current).toBe('John Doe');
  });

  it('should return the correct value for a nested path', () => {
    const jsonData = { person: { name: 'Jane Doe', age: 25 } };
    const path = 'person.name';
    const { result } = renderHook(() => useJsonPath(jsonData, path));
    expect(result.current).toBe('Jane Doe');
  });

  it('should return the correct value for an array path', () => {
    const jsonData = { items: ['apple', 'banana', 'cherry'] };
    const path = 'items[1]';
    const { result } = renderHook(() => useJsonPath(jsonData, path));
    expect(result.current).toBe('banana');
  });

  it('should return undefined for a non-existent path', () => {
    const jsonData = { name: 'John Doe', age: 30 };
    const path = 'address';
    const { result } = renderHook(() => useJsonPath(jsonData, path));
    expect(result.current).toBeUndefined();
  });

  it('should return undefined when jsonData is null', () => {
    const jsonData = null;
    const path = 'name';
    const { result } = renderHook(() => useJsonPath(jsonData, path));
    expect(result.current).toBeUndefined();
  });

  it('should return undefined when jsonData is undefined', () => {
    const jsonData = undefined;
    const path = 'name';
    const { result } = renderHook(() => useJsonPath(jsonData, path));
    expect(result.current).toBeUndefined();
  });

  it('should return undefined when jsonData is an empty string', () => {
    const jsonData = '';
    const path = 'name';
    const { result } = renderHook(() => useJsonPath(jsonData, path));
    expect(result.current).toBeUndefined();
  });

  it('should return the correct value for a path with special characters', () => {
    const jsonData = { 'first-name': 'John', 'last@name': 'Doe' };
    const path = '["first-name"]';
    const { result } = renderHook(() => useJsonPath(jsonData, path));
    expect(result.current).toBe('John');

    const path2 = '["last@name"]';
    const { result: result2 } = renderHook(() => useJsonPath(jsonData, path2));
    expect(result2.current).toBe('Doe');
  });
});
