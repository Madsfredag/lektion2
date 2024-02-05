import express, {Request, Response} from 'express';

const router = express.Router();

router.get('/orders', (req: Request, res: Response) => {
    res.send('GET /orders');
})

router.post('/orders', (req: Request, res: Response) => {
    res.send('POST /orders');
  });
  
  router.get('/orders/:uid', (req: Request, res: Response) => {
    const uid = req.params.uid;
    res.send(`GET /orders/${uid}`);
  });
  
  router.put('/orders/:uid', (req: Request, res: Response) => {
    const uid = req.params.uid;
    res.send(`PUT /orders/${uid}`);
  });
  
  router.patch('/orders/:uid', (req: Request, res: Response) => {
    const uid = req.params.uid;
    res.send(`PATCH /orders/${uid}`);
  });
  
  router.delete('/orders/:uid', (req: Request, res: Response) => {
    const uid = req.params.uid;
    res.send(`DELETE /orders/${uid}`);
  });
  
  export default router;