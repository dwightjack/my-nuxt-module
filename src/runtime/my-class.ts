interface MessageObj {
  message: string
}
export class MyClass {

  obj?: MessageObj

  constructor(obj?: MessageObj) {
    this.obj = obj
  }

  getMessage(): string | undefined {
    return this.obj?.message
  }
}
