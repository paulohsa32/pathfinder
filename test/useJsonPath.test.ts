import { describe, it, expect } from 'vitest';
import { useJsonPath } from '../src/composables/useJsonPath';

describe('useJsonPath', () => {
  it('should generate a JSONPath for a simple flat object', () => {
    const sample = {
      name: 'John Doe',
      age: 30,
      isStudent: false,
    };
    const expectedPath = "$[?($.name=='John Doe' && $.age==30 && $.isStudent==false)]";
    expect(useJsonPath(sample)).toBe(expectedPath);
  });

  it('should generate a JSONPath for a nested object', () => {
    const sample = {
      user: {
        name: 'Jane Doe',
        details: {
          age: 25,
          city: 'New York',
        },
      },
    };
    const expectedPath = "$[?($.user.name=='Jane Doe' && $.user.details.age==25 && $.user.details.city=='New York')]";
    expect(useJsonPath(sample)).toBe(expectedPath);
  });

  it('should generate a JSONPath for an object with an array of primitives', () => {
    const sample = {
      id: 123,
      tags: ['tag1', 'tag2'],
    };
    const expectedPath = "$[?($.id==123 && $.tags[0]=='tag1' && $.tags[1]=='tag2')]";
    const actualPath = useJsonPath(sample);
    console.log('Actual path for array of primitives:', actualPath);
    expect(actualPath).toBe(expectedPath);
  });

  it('should generate a JSONPath for an object with an array of objects', () => {
    const sample = {
      items: [
        { id: 1, name: 'item1' },
        { id: 2, name: 'item2' },
      ],
    };
     const expectedPath = "$[?($.items[0].id==1 && $.items[0].name=='item1' && $.items[1].id==2 && $.items[1].name=='item2')]";
     expect(useJsonPath(sample)).toBe(expectedPath);
  });

  it('should handle an empty object', () => {
    const sample = {};
    const expectedPath = '$[?()]';
    expect(useJsonPath(sample)).toBe(expectedPath);
  });

  it('should handle a top-level array', () => {
    const sample = [
        { type: 'book', author: 'Tolkien' },
        { type: 'movie', director: 'Cameron' }
    ];
    const expectedPath = "$[?($[0].type=='book' && $[0].author=='Tolkien' && $[1].type=='movie' && $[1].director=='Cameron')]";
    expect(useJsonPath(sample)).toBe(expectedPath);
  });
});
