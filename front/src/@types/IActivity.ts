export interface IActivity {
  name: string;
  dateBegin: Date;
  dateEnd: Date;
}

export interface IRegisterActivity {
  idClient: string;
  idActivity: string;
  dateRegister: Date;
}