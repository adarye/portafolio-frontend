export class  Contact {
  id: number;
  name: string;
  subject: string;
  email: string;
  message: string;
  created_at: Date;
  updated_at:Date;

  constructor(name: string, subject: string, email: string, message: string) {
    this.name = name;
    this.subject = subject;
    this.email = email;
    this.message = message;

  }
}

