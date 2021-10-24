export class Paginate{
  current_page?: number;
  data?: any[];
  first_page_url?: string;
  from?: number;
  last_page?: number;
  last_page_url?: string;
  links?: Link[];
  next_page_url?: any;
  path?: string;
  per_page?: number;
  prev_page_url?: any;
  to?: number;
  total?: number;
}

interface Link {
  url?: string;
  label?: string;
  active?: boolean;
}

