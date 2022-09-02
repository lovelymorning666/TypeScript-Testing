import { Student, Teacher, Message, Parent } from "../../index";
import { EMsgType } from "../../index";

describe("Student", () => {
  it("Creating right student object", () => {
    expect(student.save()).toEqual(
      expect.objectContaining({
        status: 200,
        data: expect.objectContaining({
          firstName: "Lovely",
          lastName: "Morning",
          email: "LovelyMorning@email.com",
          picture: "Lovely.jpg",
        }),
      })
    );
  });

  it("Creating student object with wrong email", () => {
    const student = new Student({
      firstName: "Lovely",
      lastName: "Morning",
      email: "Lovely_email.com",
      picture: "Lovely.jpg",
    });
    expect(student.save()).toEqual(
      expect.objectContaining({
        status: 400,
        error: "Invalid email address",
      })
    );
  });

  it("Creating student object with wrong picture", () => {
    const student = new Student({
      firstName: "Lovely",
      lastName: "Morning",
      email: "LovelyMorning@email.com",
      picture: "Lovelyjpg",
    });
    expect(student.save()).toEqual(
      expect.objectContaining({
        status: 400,
        error: "Invalid picture file",
      })
    );
  });

  const student = new Student({
    firstName: "Lovely",
    lastName: "Morning",
    email: "LovelyMorning@email.com",
    picture: "Lovely.jpg",
  });

  it("Getting id", () => {
    expect(student.getPicture()).toBeDefined();
  });

  it("Getting email", () => {
    expect(student.getEmail()).toEqual("LovelyMorning@email.com");
  });

  it("Getting full name", () => {
    expect(student.getFullName()).toEqual("Lovely Morning");
  });

  it("Getting piture", () => {
    expect(student.getPicture()).toEqual("Lovely.jpg");
  });
});

describe("Parent", () => {
  it("Creating right parent object", () => {
    const parent = new Parent({
      firstName: "Lovely",
      lastName: "Morning",
      email: "LovelyMorning@email.com",
      picture: "Lovely.jpg",
    });
    expect(parent.save()).toEqual(
      expect.objectContaining({
        status: 200,
        data: expect.objectContaining({
          firstName: "Lovely",
          lastName: "Morning",
          email: "LovelyMorning@email.com",
          picture: "Lovely.jpg",
        }),
      })
    );
  });

  it("Creating parent object with wrong email", () => {
    const student = new Parent({
      firstName: "Lovely",
      lastName: "Morning",
      email: "Lovely_email.com",
      picture: "Lovely.jpg",
    });
    expect(student.save()).toEqual(
      expect.objectContaining({
        status: 400,
        error: "Invalid email address",
      })
    );
  });

  it("Creating parent object with wrong picture", () => {
    const student = new Parent({
      firstName: "Lovely",
      lastName: "Morning",
      email: "LovelyMorning@email.com",
      picture: "Lovely.jpg_",
    });
    expect(student.save()).toEqual(
      expect.objectContaining({
        status: 400,
        error: "Invalid picture file",
      })
    );
  });

  const parent = new Parent({
    firstName: "Lovely",
    lastName: "Morning",
    email: "LovelyMorning@email.com",
    picture: "Lovely.jpg",
  });

  it("Getting id", () => {
    expect(parent.getPicture()).toBeDefined();
  });

  it("Getting email", () => {
    expect(parent.getEmail()).toEqual("LovelyMorning@email.com");
  });

  it("Getting full name", () => {
    expect(parent.getFullName()).toEqual("Lovely Morning");
  });

  it("Getting piture", () => {
    expect(parent.getPicture()).toEqual("Lovely.jpg");
  });
});

describe("Teacher", () => {
  it("Creating right teacher object", () => {
    const teacher = new Teacher({
      firstName: "Lovely",
      lastName: "Morning",
      email: "LovelyMorning@email.com",
      picture: "Lovely.jpg",
    });
    expect(teacher.save()).toEqual(
      expect.objectContaining({
        status: 200,
        data: expect.objectContaining({
          firstName: "Lovely",
          lastName: "Morning",
          email: "LovelyMorning@email.com",
          picture: "Lovely.jpg",
        }),
      })
    );
  });

  it("Creating teacher object with wrong email", () => {
    const student = new Teacher({
      firstName: "Lovely",
      lastName: "Morning",
      email: "Lovely_email.com",
      picture: "Lovely.jpg",
    });
    expect(student.save()).toEqual(
      expect.objectContaining({
        status: 400,
        error: "Invalid email address",
      })
    );
  });

  it("Creating teacher object with wrong picture", () => {
    const student = new Teacher({
      firstName: "Lovely",
      lastName: "Morning",
      email: "LovelyMorning@email.com",
      picture: "Lovelyjpg",
    });
    expect(student.save()).toEqual(
      expect.objectContaining({
        status: 400,
        error: "Invalid picture file",
      })
    );
  });

  const teacher = new Teacher({
    firstName: "Lovely",
    lastName: "Morning",
    email: "LovelyMorning@email.com",
    picture: "Lovely.jpg",
  });

  it("Getting id", () => {
    expect(teacher.getPicture()).toBeDefined();
  });

  it("Getting email", () => {
    expect(teacher.getEmail()).toEqual("LovelyMorning@email.com");
  });

  it("Getting full name", () => {
    expect(teacher.getFullName()).toEqual("Lovely Morning");
  });

  it("Getting piture", () => {
    expect(teacher.getPicture()).toEqual("Lovely.jpg");
  });
});

describe("Message", () => {
  const student = new Student({
    firstName: "Nice",
    lastName: "Student",
    email: "NiceStudent@email.com",
    picture: "NiceStudent.jpg",
  });

  const teacher = new Teacher({
    salutation: "Mr.",
    firstName: "Lovely",
    lastName: "Morning",
    email: "LovelyMorning@email.com",
    picture: "Lovely.jpg",
  });

  const parent = new Parent({
    salutation: "Mr.",
    firstName: "Lovely",
    lastName: "Morning",
    email: "LovelyMorning@email.com",
    picture: "Lovely.jpg",
  });

  it("Creating right message", () => {
    const msg = new Message({
      sender: teacher,
      receiver: student,
      content: "ad",
      type: EMsgType.System,
    });

    expect(msg.save()).toEqual(
      expect.objectContaining({
        status: 200,
        data: expect.objectContaining({
          sender: expect.objectContaining({
            salutation: "Mr.",
            firstName: "Lovely",
            lastName: "Morning",
            email: "LovelyMorning@email.com",
            picture: "Lovely.jpg",
            // id: "_cyzpfxl",
          }),
          receiver: expect.objectContaining({
            firstName: "Nice",
            lastName: "Student",
            email: "NiceStudent@email.com",
            picture: "NiceStudent.jpg",
            // id: "_pm0i3ot",
          }),
          content: "ad",
          type: "System",
          // createdAt: "2022-09-01T20:59:47.305Z",
        }),
      })
    );
  });

  it("Message create with wrong system type, System message can only send Teacher and only to Students.", () => {
    const msg = new Message({
      sender: teacher,
      receiver: teacher,
      content: "ad",
      type: EMsgType.System,
    });

    expect(msg.save()).toEqual(
      expect.objectContaining({
        status: 400,
        error: "Bad request",
        content: "System message can only send Teacher and only to Students",
      })
    );
  });

  it("Message create with wrong system type, System message can only send Teacher and only to Students.", () => {
    const msg = new Message({
      sender: teacher,
      receiver: parent,
      content: "ad",
      type: EMsgType.System,
    });

    expect(msg.save()).toEqual(
      expect.objectContaining({
        status: 400,
        error: "Bad request",
        content: "System message can only send Teacher and only to Students",
      })
    );
  });

  it("Message create with wrong system type, System message can only send Teacher and only to Students.", () => {
    const msg = new Message({
      sender: parent,
      receiver: teacher,
      content: "ad",
      type: EMsgType.System,
    });

    expect(msg.save()).toEqual(
      expect.objectContaining({
        status: 400,
        error: "Bad request",
        content: "System message can only send Teacher and only to Students",
      })
    );
  });

  // it("Message create with wrong system type, System message can only send Teacher and only to Students.", () => {
  //   const msg = new Message({
  //     sender: parent,
  //     receiver: parent,
  //     content: "ad",
  //     type: EMsgType.System,
  //   });

  //   expect(msg.save()).toEqual(
  //     expect.objectContaining({
  //       status: 400,
  //       error: "Bad request",
  //       content: "System message can only send Teacher and only to Students",
  //     })
  //   );
  // });

  // it("Message create with wrong system type, System message can only send Teacher and only to Students.", () => {
  //   const msg = new Message({
  //     sender: parent,
  //     receiver: student,
  //     content: "ad",
  //     type: EMsgType.System,
  //   });

  //   expect(msg.save()).toEqual(
  //     expect.objectContaining({
  //       status: 400,
  //       error: "Bad request",
  //       content: "System message can only send Teacher and only to Students",
  //     })
  //   );
  // });

  it("Message create with wrong system type, System message can only send Teacher and only to Students.", () => {
    const msg = new Message({
      sender: student,
      receiver: teacher,
      content: "ad",
      type: EMsgType.System,
    });

    expect(msg.save()).toEqual(
      expect.objectContaining({
        status: 400,
        error: "Bad request",
        content: "System message can only send Teacher and only to Students",
      })
    );
  });

  // it("Message create with wrong system type, System message can only send Teacher and only to Students.", () => {
  //   const msg = new Message({
  //     sender: student,
  //     receiver: parent,
  //     content: "ad",
  //     type: EMsgType.System,
  //   });

  //   expect(msg.save()).toEqual(
  //     expect.objectContaining({
  //       status: 400,
  //       error: "Bad request",
  //       content: "System message can only send Teacher and only to Students",
  //     })
  //   );
  // });

  // it("Message create with wrong system type, System message can only send Teacher and only to Students.", () => {
  //   const msg = new Message({
  //     sender: student,
  //     receiver: student,
  //     content: "ad",
  //     type: EMsgType.System,
  //   });

  //   expect(msg.save()).toEqual(
  //     expect.objectContaining({
  //       status: 400,
  //       error: "Bad request",
  //       content: "System message can only send Teacher and only to Students",
  //     })
  //   );
  // });

  it("Creating wrong message, Parent and Student can send message only to Teachers", () => {
    const msg = new Message({
      sender: parent,
      receiver: parent,
      content: "ad",
      type: EMsgType.System,
    });

    expect(msg.save()).toEqual(
      expect.objectContaining({
        status: 400,
        error: "Bad request",
        content: "Parent and Student can send message only to Teachers",
      })
    );
  });

  it("Creating wrong message, Parent and Student can send message only to Teachers", () => {
    const msg = new Message({
      sender: parent,
      receiver: student,
      content: "ad",
      type: EMsgType.System,
    });

    expect(msg.save()).toEqual(
      expect.objectContaining({
        status: 400,
        error: "Bad request",
        content: "Parent and Student can send message only to Teachers",
      })
    );
  });

  it("Creating wrong message, Parent and Student can send message only to Teachers", () => {
    const msg = new Message({
      sender: student,
      receiver: parent,
      content: "ad",
      type: EMsgType.System,
    });

    expect(msg.save()).toEqual(
      expect.objectContaining({
        status: 400,
        error: "Bad request",
        content: "Parent and Student can send message only to Teachers",
      })
    );
  });

  it("Creating wrong message, Parent and Student can send message only to Teachers", () => {
    const msg = new Message({
      sender: student,
      receiver: student,
      content: "ad",
      type: EMsgType.System,
    });

    expect(msg.save()).toEqual(
      expect.objectContaining({
        status: 400,
        error: "Bad request",
        content: "Parent and Student can send message only to Teachers",
      })
    );
  });
});
