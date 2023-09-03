import { strict as assert } from 'node:assert';

import capitalize from '../scr/capitalize.js';

assert.deepEqual(capitalize(''), '');
assert.deepEqual(capitalize('hello'), 'Hello');