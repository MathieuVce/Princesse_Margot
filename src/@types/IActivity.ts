export interface IActivity {
  name: string;
  dateEnd: Date;
  dateBegin: Date;
};

export interface IRegisterActivity {
  idClient: string;
  idActivity: string;
  dateRegister: Date;
};