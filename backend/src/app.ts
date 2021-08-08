import express ,{Application,Request, Response } from 'express';

const app: Application = express();

const add = (a:number, b: number): number => a+b;

app.get('/',(req: Request, res: Response)=>{
    console.log(`addition: ${add(2,3)}`)
    res.send('Hello boy!')
});

app.listen(5000, ()=>{
    console.log('Server running')
})