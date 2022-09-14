import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

export default class CarController {
  constructor(private _service: IService<ICar>) {}

  public async create(req: Request, res: Response<ICar>) {
    const results = await this._service.create(req.body);
    return res.status(201).json(results);
  }

  public async readOne(req: Request, res: Response<ICar>) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }

  public async read(req: Request, res: Response<ICar[]>) {
    const allFrames = await this._service.read();
    return res.status(200).json(allFrames);
  }

  public async delete(req: Request, res: Response<ICar>) {
    const { id } = req.params;
    const deleted = await this._service.delete(id);
    res.status(200).json(deleted);
  }

  public async update(req: Request, res: Response<ICar>) {
    const { id } = req.params;
    const updated = await this._service.update(id, req.body);
    return res.status(200).json(updated);
  }
}