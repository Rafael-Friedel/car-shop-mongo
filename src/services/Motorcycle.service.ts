import { ErrorTypes } from '../errors/catalog';
import { IModel } from '../interfaces/IModel';
import { IMotorcycle, MotorCycleZodSchema } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';

export default class MotorcycleService implements IService<IMotorcycle> {
  private _motorcycle: IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) {
    this._motorcycle = model;
  }

  public async create(obj: IMotorcycle): Promise<IMotorcycle> {
    const parsed = MotorCycleZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._motorcycle.create(obj);
  }

  public async readOne(_id: string): Promise<IMotorcycle> {
    const car = await this._motorcycle.readOne(_id);
    if (!car) throw new Error(ErrorTypes.EntityNotFound);
    return car;
  }

  public async read(): Promise<IMotorcycle[]> {
    return this._motorcycle.read();
  }

  public async delete(_id: string): Promise<IMotorcycle> {
    const deleted = await this._motorcycle.delete(_id);
    if (!deleted) throw new Error(ErrorTypes.EntityNotFound);
    return deleted;
  }

  public async update(_id: string, obj: IMotorcycle): Promise<IMotorcycle> {
    const updated = await this._motorcycle.update(_id, obj);
    if (!updated) throw new Error(ErrorTypes.EntityNotFound);
    return updated;
  }
}
