type params = {
  params: {
    id: string;
  };
};

type TicketCardProps = {
  _id: string;
  title: string;
  description: string;
  progress: number;
  priority: number;
  category: string;
  createdAt: string;
  status: string;
};

type DeleteButton = {
  id: string;
};

type FormProps = {
  editMode: boolean;
  _id?: string;
  title?: string;
  description?: string;
  category?: string;
  priority?: number;
  progress?: number;
  status?: string;
};

type InfoCardProps = {
  _id: string;
  title: string;
  description: string;
  progress: number;
  priority: number;
  category: string;
  createdAt: string;
  updatedAt: string;
};

type PriorityProps = {
  priority: number;
};

type ProgressProps = {
  progress: number;
};

type ticket = {
  _id: string;
  title: string;
  description: string;
  progress: number;
  priority: number;
  category: string;
  createdAt: string;
  status: string;
};
