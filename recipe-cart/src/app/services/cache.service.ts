import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService
{
    /**
     * Data that is stored temporarily inside the app.
     */
    private _data: any = null;

    constructor() { }

    /**
     * Blanks out the information.
     */
    public clear()
    {
        this._data = null;
    }

    /**
     * Retrieves the information stored in this service.
     */
    public get()
    {
        return this._data;
    }

    /**
     * Sets the information in this service.
     * @param value The desired value.
     */
    public set(value: any)
    {
        this._data = value;
    }
}
