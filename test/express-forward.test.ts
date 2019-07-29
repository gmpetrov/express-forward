import request from 'supertest';
import express from 'express';

import { expressForward } from '../src';

jest.setTimeout(10000);

const app = express();
expressForward('forward', app);

describe('forward', () => {
  it('GET', done => {
    request(app)
      .get('/forward/https://jsonplaceholder.typicode.com/todos/1')
      .then((response: request.Response) => {
        expect(response.body.id).toBe(1);
        done();
      });
  });

  it('POST', done => {
    request(app)
      .post('/forward/https://jsonplaceholder.typicode.com/todos')
      .send({ prop: 42 })
      .then((response: request.Response) => {
        expect(response.body.prop).toBe(42);
        done();
      });
  });
});
