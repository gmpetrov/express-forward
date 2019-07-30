import express from 'express';
import request from 'request';

export const expressForward = (endpoint: string, app: express.Application) => {
  const endpointUrl = endpoint.replace(/^\//, '');

  app.all(
    `/${endpointUrl}/*`,
    async (req: express.Request, res: express.Response) => {
      try {
        const regex = new RegExp(`^\/${endpointUrl}\/`);

        const url = req.path.replace(regex, '');

        return req.pipe(request({ qs: req.query, uri: url })).pipe(res);
      } catch (err) {
        return res.json(err);
      }
    }
  );
};
