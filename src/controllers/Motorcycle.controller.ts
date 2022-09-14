import { Request, Response } from 'express';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';

export default class MotorcycleController {
  constructor(private _service: IService<IMotorcycle>) {}

  public async create(req: Request, res: Response<IMotorcycle>) {
    const results = await this._service.create(req.body);
    return res.status(201).json(results);
  }

  public async readOne(req: Request, res: Response<IMotorcycle>) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }

  public async read(req: Request, res: Response<IMotorcycle[]>) {
    const allMotorcycles = await this._service.read();
    return res.status(200).json(allMotorcycles);
  }

  public async delete(req: Request, res: Response<IMotorcycle>) {
    const { id } = req.params;
    const deleted = await this._service.delete(id);
    res.status(200).json(deleted);
  }

  public async update(req: Request, res: Response<IMotorcycle>) {
    const { id } = req.params;
    const updated = await this._service.update(id, req.body);
    return res.status(200).json(updated);
  }
}
