export type TOperation = {
  id: string;
  amount: number;
  category: string;
  name: string;
  desc: string;
  createdAt: string;
};

export type SignUpBody = {
  email: string;
  password: string;
  commandId: string;
};
