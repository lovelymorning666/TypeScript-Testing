interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  picture?: string;
}

interface IAdult extends IUser {
  salutation?: string;
}

const emailRegExp: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const defaultPicture = "LovelyMorning.jpg";

export class User {
  protected readonly id: string;
  protected firstName: string;
  protected lastName: string;
  protected email: string;
  protected picture?: string;

  constructor(data: IUser) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.picture = data.picture;
    this.id = "_" + Math.random().toString(36).substring(2, 9);
  }

  public getId(): string {
    return this.id;
  }

  public getPicture(): string {
    return this.picture ? this.picture : defaultPicture;
  }

  public getFullName(): string {
    return this.firstName + " " + this.lastName;
  }

  public getEmail(): string {
    return this.email;
  }

  public save(): any {
    if (!emailRegExp.test(this.email)) {
      return {
        status: 400,
        error: "Invalid email address",
      };
    }
    // console.log("picture---------------", this.picture);
    if (!this.picture) {
      this.picture = defaultPicture;
    }
    // this.picture.replace(/\s/g, "");   //e.x. 'white tiger.jpg'
    if (!this.picture?.match(/(\.jpg)$/i)) {
      return {
        status: 400,
        error: "Invalid picture file",
      };
    }

    return {
      status: 200,
      data: this,
    };
  }
}

class Adult extends User {
  private salutation?: string;

  constructor(data: IAdult) {
    super(data);
    this.salutation = data.salutation;
  }

  public override getFullName(): string {
    return this.salutation
      ? this.salutation + " " + this.firstName + " " + this.lastName
      : this.firstName + " " + this.lastName;
  }
}

export class Student extends User {}
export class Teacher extends Adult {}
export class Parent extends Adult {}

export enum EMsgType {
  System = "System",
  Manual = "Manual",
}

interface IMessage {
  sender: Teacher | Parent | Student;
  receiver: Teacher | Parent | Student;
  content: string;
  type: EMsgType;
}

export class Message {
  sender: Teacher | Parent | Student;
  receiver: Teacher | Parent | Student;
  content: string;
  type: EMsgType;
  createdAt: Date;

  constructor(message: IMessage) {
    this.sender = message.sender;
    this.receiver = message.receiver;
    this.content = message.content;
    this.type = message.type;
    this.createdAt = new Date();
    const unixTime = this.createdAt.valueOf();
    this.createdAt = new Date(unixTime);
  }

  getFullName() {
    return {
      sender: this.sender.getFullName(),
      receiver: this.receiver.getFullName(),
    };
  }

  getContent() {
    return this.content;
  }

  getType() {
    return this.type;
  }

  save() {
    if (
      (this.sender instanceof Parent || this.sender instanceof Student) &&
      !(this.receiver instanceof Teacher)
    ) {
      return {
        status: 400,
        error: "Bad request",
        content: "Parent and Student can send message only to Teachers",
      };
    }
    if (this.type === EMsgType.System) {
      if (
        !(this.sender instanceof Teacher) ||
        (this.sender instanceof Teacher && !(this.receiver instanceof Student))
      ) {
        return {
          status: 400,
          error: "Bad request",
          content: "System message can only send Teacher and only to Students",
        };
      }
    }

    return {
      status: 200,
      data: this,
    };
  }
}

console.log("=== student ===");
const student = new Student({
  firstName: "Lovely",
  lastName: "Morning",
  email: "LovelyMorning@email.com",
  // picture: "Lovely.jpg",
});

console.log(student.getId());
console.log(student.getEmail());
console.log(student.getFullName());
console.log(student.getPicture());
console.log(student.save());

console.log("=== parent ===");
const parent = new Parent({
  firstName: "Lovely",
  lastName: "Morning",
  email: "LovelyMorning@email.com",
  picture: "  ",
  salutation: "Mr.",
});
console.log(parent.getId());
console.log(parent.getEmail());
console.log(parent.getFullName());
console.log(parent.getPicture());
console.log(parent.save());

console.log("=== teacher ===");
const teacher = new Teacher({
  salutation: "Mr",
  firstName: "Lovely",
  lastName: "Morning",
  email: "LovelyMorning@email.com",
  picture: "Lovely.jpg",
});
console.log(teacher.getId());
console.log(teacher.getEmail());
console.log(teacher.getFullName());
console.log(teacher.getPicture());
console.log(teacher.save());

console.log("=== message ===");
const msg = new Message({
  sender: student,
  receiver: teacher,
  content: "ad",
  type: EMsgType.System,
});

console.log(msg.save());
