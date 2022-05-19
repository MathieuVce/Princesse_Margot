import { IActivity } from "./IActivity";

export interface IAdminContext {
    getActivity: TGetActivityFC;
    editActivity: TEditActivityFC;
    createActivity: TCreateActivityFC;
    deleteActivity: TDeleteActivityFC;
}

export type TGetActivityFC = (idActivity: number) => Promise<any>;
export type TCreateActivityFC = (payload: IActivity) => Promise<any>;
export type TDeleteActivityFC = (idActivity: number) => Promise<any>;
export type TEditActivityFC = (payload: IActivity, idActivity: number) => Promise<any>;

export const defaultAdminValue: IAdminContext = {
    getActivity: () => Promise.reject(null),
    editActivity: () => Promise.reject(null),
    createActivity: () => Promise.reject(null),
    deleteActivity: () => Promise.reject(null),
}