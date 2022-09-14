import { ErrorTypes } from '../errors/catalog';
import { CarZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

class CarService implements IService<ICar> {
  private _frame: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._frame = model;
  }

  public async create(obj: unknown): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._frame.create(parsed.data);
  }

  public async readOne(_id: string): Promise<ICar> {
    const frame = await this._frame.readOne(_id);
    if (!frame) throw new Error(ErrorTypes.EntityNotFound);
    return frame;
  }

  public async read(): Promise<ICar[]> {
    return this._frame.read();
  }

  public async delete(_id: string): Promise<ICar> {
    const deleted = await this._frame.delete(_id);
    if (!deleted) throw new Error(ErrorTypes.EntityNotFound);
    return deleted;
  }

  public async update(_id: string, obj: unknown): Promise<ICar> {
    const updated = await this._frame.update(_id, obj);
    if (!updated) throw new Error(ErrorTypes.EntityNotFound);
    return updated;
  }
}

export default CarService;
